import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lasale.org',
  build: {
    format: 'directory',
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
