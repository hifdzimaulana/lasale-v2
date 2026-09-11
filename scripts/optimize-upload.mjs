#!/usr/bin/env node
/**
 * Optimize LaSALe Web Materials and upload to Supabase Storage.
 *
 * Usage: node --env-file=.env scripts/optimize-upload.mjs [--dry-run]
 *
 * Env vars required (set in .env):
 *   SUPABASE_URL
 *   SUPABASE_SECRET_KEY
 */

import { readdir, readFile, stat, mkdir, writeFile } from 'node:fs/promises';
import { join, relative, extname, basename } from 'node:path';
import sharp from 'sharp';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SECRET_KEY;
const BUCKET = 'lasale-assets';
const SRC_DIR = join(import.meta.dirname, '..', 'references', 'LaSALe_s Web Materials');
const DRY_RUN = process.argv.includes('--dry-run');

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing env vars. Set SUPABASE_URL and SUPABASE_SECRET_KEY in .env');
  process.exit(1);
}

const CATEGORY_CONFIG = {
  'landing-page': { maxWidth: 1920, quality: 82, format: 'webp', prefix: 'landing-page' },
  'pengurus-inti': { maxWidth: 800, quality: 80, format: 'jpeg', prefix: 'pengurus-inti' },
  'fungsionaris': { maxWidth: 1600, quality: 80, format: 'jpeg', prefix: 'fungsionaris' },
  'fungsionaris-individual': { maxWidth: 500, quality: 80, format: 'webp', prefix: 'members' },
};

function getCategory(relPath) {
  const lower = relPath.toLowerCase();
  if (lower.includes('landing page')) return 'landing-page';
  if (lower.includes('pengurus inti')) return 'pengurus-inti';
  if (lower.includes('fungsionaris individual')) return 'fungsionaris-individual';
  if (lower.includes('fungsionaris')) return 'fungsionaris';
  return 'misc';
}

function getOutputFilename(originalName, format) {
  const base = basename(originalName).replace(/\.[^.]+$/, '');
  const slug = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const ext = format === 'jpeg' ? 'jpg' : format;
  return `${slug}.${ext}`;
}

async function getAllImages(dir) {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await getAllImages(fullPath)));
    } else if (/\.(jpe?g|png|webp|gif)$/i.test(entry.name) && !entry.name.startsWith('.')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function optimizeAndUpload(filePath) {
  const relPath = relative(SRC_DIR, filePath);
  const category = getCategory(relPath);
  const config = CATEGORY_CONFIG[category] || CATEGORY_CONFIG['misc'] || CATEGORY_CONFIG['fungsionaris-individual'];

  const outName = getOutputFilename(filePath, config.format);
  const storagePath = `${config.prefix}/${outName}`;
  const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${storagePath}`;

  const metadata = await sharp(filePath).metadata();
  const originalSize = (await stat(filePath)).size;

  let pipeline = sharp(filePath);

  // Resize if wider than maxWidth
  if ((metadata.width || 0) > config.maxWidth) {
    pipeline = pipeline.resize({ width: config.maxWidth, withoutEnlargement: true });
  }

  // Convert + compress
  if (config.format === 'webp') {
    pipeline = pipeline.webp({ quality: config.quality, effort: 6 });
  } else {
    pipeline = pipeline.jpeg({ quality: config.quality, mozjpeg: true });
  }

  const buffer = await pipeline.toBuffer();
  const newSize = buffer.length;
  const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

  console.log(`  ${relPath}`);
  console.log(`    ${metadata.width}x${metadata.height} → ${config.maxWidth}px max | ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${savings}% off)`);
  console.log(`    → ${storagePath}`);

  if (!DRY_RUN) {
    // Upload to Supabase
    const url = `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${storagePath}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': config.format === 'webp' ? 'image/webp' : 'image/jpeg',
        'x-upsert': 'true',
      },
      body: buffer,
    });

    if (!res.ok) {
      const err = await res.text();
      console.error(`    ❌ Upload failed (${res.status}): ${err}`);
      return { success: false, path: storagePath, error: err };
    }
    console.log(`    ✅ Uploaded`);
  } else {
    console.log(`    ⏭️  Dry run — skipped upload`);
  }

  return {
    success: true,
    original: relPath,
    path: storagePath,
    url: publicUrl,
    width: metadata.width,
    height: metadata.height,
    originalSize,
    optimizedSize: newSize,
    format: config.format,
  };
}

async function main() {
  console.log('🔍 Scanning images...\n');
  const images = await getAllImages(SRC_DIR);
  console.log(`Found ${images.length} images\n`);

  if (DRY_RUN) console.log('⚠️  DRY RUN — no uploads will be made\n');

  const results = [];
  for (const img of images) {
    try {
      const result = await optimizeAndUpload(img);
      results.push(result);
    } catch (err) {
      console.error(`  ❌ Error processing ${img}: ${err.message}`);
      results.push({ success: false, original: img, error: err.message });
    }
    console.log();
  }

  // Write mapping file
  const mappingPath = join(import.meta.dirname, '..', 'public', 'asset-map.json');
  await mkdir(join(import.meta.dirname, '..', 'public'), { recursive: true });
  await writeFile(mappingPath, JSON.stringify(results.filter(r => r.success), null, 2));
  console.log(`\n📋 Asset map written to public/asset-map.json`);

  const successCount = results.filter(r => r.success).length;
  const failCount = results.filter(r => !r.success).length;
  const totalOriginal = results.reduce((sum, r) => sum + (r.originalSize || 0), 0);
  const totalOptimized = results.reduce((sum, r) => sum + (r.optimizedSize || 0), 0);

  console.log(`\n✅ ${successCount} uploaded, ❌ ${failCount} failed`);
  console.log(`📦 ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalOptimized / 1024 / 1024).toFixed(1)}MB (${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}% reduction)`);
}

main().catch(console.error);
