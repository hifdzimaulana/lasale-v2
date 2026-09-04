# PRODUCT.md — LaSALe FH UI Website

> Law Student Association for Legal Practice
> Fakultas Hukum Universitas Indonesia

---

## 1. Organization Identity

| Field | Value |
|-------|-------|
| Full Name | Law Student Association for Legal Practice |
| Indonesian Name | Himpunan Mahasiswa Hukum Praktik |
| Abbreviation | LaSALe FH UI |
| Parent Organization | BEM FH UI 2026 |
| Institution | Fakultas Hukum, Universitas Indonesia |
| Established | 1987 |
| Email | external.lasalefhui@gmail.com |
| Instagram | @lasale_fhui |

### Recruitment Model

LaSALe recruits members **periodically on occasions decided by the Faculty**. There is no public membership application form and no login/member portal. Recruitment windows are announced via the website and social media when they occur.

---

## 2. Website Purpose

This website serves as the **digital institutional presence** for LaSALe FH UI. It is not a web application — it is a content-driven marketing and publishing platform.

### Core Objectives

1. **Institutional credibility** — Present LaSALe as a serious, established legal student organization
2. **Program showcase** — Display mentorship, seminars, workshops, and practice institutes
3. **Legal publishing** — Host LaSALe's legal articles (previously PDF-only) as web content for SEO and Google discoverability
4. **Notable alumni** — Showcase alumni careers and achievements
5. **Executive leadership** — Feature the Executive Director's rotating welcome message
6. **Event promotion** — Announce upcoming events, seminars, and recruitment periods
7. **News & announcements** — Publish organizational updates

### Non-Goals

- No membership application system
- No user login/authentication
- No e-commerce or payments
- No dashboard or admin panel (content managed via code/CMS)

---

## 3. User Journeys

### 3.1 Prospective Member (FH UI Student)

```
Entry: Instagram link / peer referral / Google search
  → Land on Homepage
  → Read Executive Director's message
  → Browse Programs
  → View Notable Alumni
  → See upcoming Events
  → Follow Instagram for recruitment announcements
Exit: Return during open recruitment period
```

### 3.2 Legal Professional / Partner

```
Entry: Google search (articles) / referral / LinkedIn
  → Land on Homepage or Article page
  → Read legal analysis articles
  → Browse Programs
  → View Notable Alumni
  → Contact via Contact page
Exit: Email contact, LinkedIn connection
```

### 3.3 General Public / Law Enthusiast

```
Entry: Google search (legal topic)
  → Land on Article detail page
  → Read article
  → Explore related articles
  → Browse categories (News / Opinion / Analysis)
  → Return for more content
Exit: Share article, bookmark site
```

### 3.4 Current Member (FH UI Student)

```
Entry: Direct / Instagram story link
  → Land on Homepage
  → Check Events for upcoming activities
  → Read latest Articles/News
  → Access program information
Exit: Event registration (external link), article consumption
```

### 3.5 Notable Alumni (Passive)

```
No active journey — alumni are displayed on the Notable Alumni section.
Alumni profiles are curated and updated by the organization.
```

### 3.6 Executive Director (Admin)

```
Entry: Direct file edit (no login system)
  → Update ED welcome message in source file
  → Update name, photo, term dates
Exit: Commit changes, deploy
```

---

## 4. Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, ED preface, programs, stats, alumni, latest articles |
| About | `/about` | History, vision-mission, organizational structure, board |
| Programs | `/programs` | Program catalog with detail pages |
| Program Detail | `/programs/[slug]` | Individual program page |
| Events | `/events` | Upcoming and past events, seminars |
| Articles Hub | `/articles` | Legal articles — filterable by category |
| Articles by Category | `/articles/[category]` | Filtered: news, opinion, analysis |
| Article Detail | `/articles/[slug]` | Individual article with content + PDF download |
| News | `/news` | Organizational announcements |
| News Detail | `/news/[slug]` | Individual news post |
| Contact | `/contact` | Contact form, location, social links |

---

## 5. Homepage Architecture

### Section 1: Hero

| Property | Value |
|----------|-------|
| Height | 100vh (full viewport) |
| Background | Image with dark overlay (hero-overlay gradient) |
| Overlay | `linear-gradient(115deg, rgba(28,41,95,.96) 0%, rgba(28,59,135,.82) 45%, rgba(28,59,135,.45) 100%)` |
| Content | LaSALe logo, tagline, description, CTA buttons |
| Tagline | "Cultivating the Future of Legal Practice" |
| CTAs | "Explore Programs" (primary) + "Read Articles" (outline) |
| Decorative | Soft star glows, portal sparkles, scroll indicator |
| Layout | Grid — content left, stat strip right (desktop) |

### Section 2: Executive Director Preface

| Property | Value |
|----------|-------|
| Background | `--bg-offwhite` with grid-bg pattern |
| Layout | Asymmetric — photo left, text right |
| Content | ED photo, name, title, welcome/vision message |
| Styling | Drop cap on first letter, editorial typography |
| Rotation | Content sourced from configurable file (markdown/YAML) |
| Purpose | Personalize the site, establish leadership presence |

### Section 3: About Strip (3-Card Feature)

| Property | Value |
|----------|-------|
| Background | `--bg-offwhite` |
| Layout | 3-column grid with heavy blue border |
| Cards | Cream / Blue / Cream alternating |
| Content | Mentorship Circles, Practice Institutes, Community |
| Each card | Number (01/02/03), icon SVG, title, description, link |
| Styling | Gradient top-edge accent, card-top-edge class |

### Section 4: Programs Showcase

| Property | Value |
|----------|-------|
| Background | `--primary-blue` (dark section) |
| Layout | Asymmetric split — text left (5 cols), image right (7 cols) |
| Content | Program description, list of offerings, CTA |
| Image | Large photo with tint overlay, badge, floating caption block |
| Decorative | Soft stars, portal sparkles, wave transition to light |
| CTA | "Read the Prospectus" (burgundy) + "Faculty Roster" (link) |

### Section 5: Impact Stats

| Property | Value |
|----------|-------|
| Background | `--bg-offwhite` with grid-bg |
| Layout | Horizontal stat rows with vertical dividers |
| Stats | Active members, Programs, Events/year, Articles published |
| Styling | Large numbers (5.5rem), gradient dividers, bordered container |
| Purpose | Establish scale and credibility |

### Section 6: Notable Alumni

| Property | Value |
|----------|-------|
| Background | `--primary-blue` (dark section) |
| Layout | Scrolling showcase or staggered cards |
| Content | Alumni photo, name, position, batch/year |
| Styling | Dark background, white text, yellow accents |
| Decorative | Soft stars, portal sparkles |
| Purpose | Demonstrate career outcomes and network strength |

### Section 7: Latest Articles

| Property | Value |
|----------|-------|
| Background | `--bg-offwhite` with grid-bg |
| Layout | 3-column article cards |
| Each card | Cover image with tint, category badge, date, title, excerpt, read link |
| Categories | News (yellow badge), Opinion (blue badge), Analysis (burgundy badge) |
| Link | "View All Articles" outline button |
| Purpose | Surface legal content for SEO and engagement |

### Section 8: Events Preview

| Property | Value |
|----------|-------|
| Background | `--pale-cream` |
| Layout | Event cards with date blocks |
| Content | Event name, date, location, brief description |
| Styling | Date in large format, editorial layout |
| Link | "View All Events" |

### Section 9: Footer

| Property | Value |
|----------|-------|
| Background | `--ink` (dark) |
| Top accent | Gradient line (blue → burgundy → yellow) |
| Sections | Newsletter signup, Brand block, Navigation matrices (4 cols), Social links |
| Bottom bar | Copyright, Privacy/Terms links, edition number |
| Newsletter | Email input + subscribe button, "No commercial communications" note |

---

## 6. Articles Section — Detailed Architecture

### Problem Statement

LaSALe's legal articles currently exist as **PDF files**. These are not discoverable by Google, not readable on mobile, and not shareable via link. The goal is to migrate them to **web-native content** (HTML/markdown) while retaining PDFs as downloadable references.

### Content Model

```yaml
Article:
  title: string              # Article title
  slug: string               # URL-safe identifier (auto-generated from title)
  category: enum             # "news" | "opinion" | "analysis"
  author: string             # Author name
  authorRole: string         # "Staff", "Head of Division", "Executive Director"
  publishedAt: date          # Publication date
  updatedAt: date            # Last update (optional)
  excerpt: string            # 150-200 char summary for SEO/meta
  content: markdown          # Full article body (converted from PDF or native)
  pdfUrl: string             # Optional — original PDF download URL
  coverImage: string         # Hero image for the article
  tags: string[]             # Topic tags for filtering
  readTime: string           # Estimated read time ("5 min read")
```

### Category Definitions

| Category | Description | Tone |
|----------|-------------|------|
| **News** | Organizational announcements, event coverage, recruitment updates | Informative, factual |
| **Opinion** | Editorial pieces, student perspectives, commentary on legal developments | Subjective, analytical |
| **Analysis** | In-depth legal analysis, case studies, regulatory breakdowns | Academic, thorough |

### SEO Strategy

Each article page must include:

1. **Semantic HTML** — `<article>`, `<header>`, `<time>`, proper heading hierarchy
2. **JSON-LD Article schema** — Structured data for Google rich results
3. **Open Graph metadata** — `og:title`, `og:description`, `og:image`, `og:type`
4. **Twitter Card metadata** — `twitter:card`, `twitter:title`, `twitter:image`
5. **Canonical URL** — Self-referencing canonical
6. **Clean URL** — `/articles/[slug]` (no query params)
7. **Sitemap** — Auto-generated sitemap including all articles
8. **RSS Feed** — Optional, for syndication

### JSON-LD Template

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{title}}",
  "description": "{{excerpt}}",
  "author": {
    "@type": "Person",
    "name": "{{author}}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LaSALe FH UI",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lasale.org/logo.png"
    }
  },
  "datePublished": "{{publishedAt}}",
  "dateModified": "{{updatedAt}}",
  "image": "{{coverImage}}",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lasale.org/articles/{{slug}}"
  }
}
```

### Article Page Layout

```
┌─────────────────────────────────────────┐
│  Breadcrumb: Home > Articles > Category │
├─────────────────────────────────────────┤
│  Category Badge                         │
│  Article Title (large, Jost)            │
│  Author · Date · Read Time              │
├─────────────────────────────────────────┤
│  Cover Image (full-width, tint overlay) │
├─────────────────────────────────────────┤
│  Article Body (markdown rendered)       │
│  - Drop cap on first paragraph          │
│  - Editorial typography                 │
│  - Pull quotes in Pinyon Script         │
├─────────────────────────────────────────┤
│  [Download PDF] button (if available)   │
├─────────────────────────────────────────┤
│  Tags: #tag1 #tag2 #tag3                │
├─────────────────────────────────────────┤
│  Related Articles (3 cards)             │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

### Article Listing Page (`/articles`)

```
┌─────────────────────────────────────────┐
│  "Legal Articles" heading               │
│  Subtitle: "Dispatches from LaSALe"     │
├─────────────────────────────────────────┤
│  Category Filter: [All] [News] [Opinion] [Analysis] │
├─────────────────────────────────────────┤
│  ┌─────┐ ┌─────┐ ┌─────┐              │
│  │ Art │ │ Art │ │ Art │  ← 3-col grid │
│  └─────┘ └─────┘ └─────┘              │
│  ┌─────┐ ┌─────┐ ┌─────┐              │
│  │ Art │ │ Art │ │ Art │               │
│  └─────┘ └─────┘ └─────┘              │
├─────────────────────────────────────────┤
│  Pagination (if > 9 articles)           │
└─────────────────────────────────────────┘
```

---

## 7. Design System

### 7.1 Color Tokens

```css
:root {
  /* Primary (from Figma media-kit.svg) */
  --primary-blue: #172263;
  --primary-blue-light: #58679B;

  /* Accent */
  --gold: #BEA75B;
  --gold-bright: #F8DA61;
  --gold-soft: #FFEE8C;

  /* Burgundy / Rose */
  --burgundy: #550000;
  --rose: #A85050;

  /* Light */
  --pale-cream: #FFFFDC;
  --bg-dark: #2A2A2A;

  /* Functional */
  --text-on-dark: var(--pale-cream);
  --text-on-dark-muted: rgba(255, 255, 220, 0.7);
  --text-on-dark-faint: rgba(255, 255, 220, 0.5);
  --border-subtle: rgba(190, 167, 91, 0.2);
}
```

### 7.2 Typography

| Role | Font | Weight | Size Range | Usage |
|------|------|--------|------------|-------|
| Script/Display | Pinyon Script | 400 | 1.4em–3xl | Decorative script accents, "LaSALe" logo variant |
| Display Accent | Meddon | 400 | 1.4em–2xl | Drop caps ("s" specifically), editorial flourishes |
| Headings | Jost | 600 | 1.1rem–5.5rem | All headings, button labels, nav links |
| Body | Instrument Sans | 400–500 | 0.88rem–1.12rem | Paragraphs, descriptions, body text |
| Utility | Montserrat | 400–700 | 0.75rem–1rem | Labels, captions, small UI text |

**Text Gradient Accent:**
```css
.text-gradient-gold {
  background: linear-gradient(180deg, #FFFFDC 0%, #BEA75B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**Typography Rules:**
- Headings: `letter-spacing: -0.015em`, `line-height: 1.05`
- Body: `line-height: 1.5–1.75`, max 65–75 chars per line
- Uppercase tracking: `0.14em–0.28em` for labels, badges, nav links
- Drop cap: First letter in Pinyon Script, 1.4em, colored burgundy/yellow

### 7.3 Spacing Scale

Based on 4px/8px grid:

```
--space-1: 0.25rem   (4px)
--space-2: 0.5rem    (8px)
--space-3: 0.75rem   (12px)
--space-4: 1rem      (16px)
--space-5: 1.25rem   (20px)
--space-6: 1.5rem    (24px)
--space-8: 2rem      (32px)
--space-10: 2.5rem   (40px)
--space-12: 3rem     (48px)
--space-16: 4rem     (64px)
--space-20: 5rem     (80px)
--space-24: 6rem     (96px)
```

### 7.4 Border & Radius

**CRITICAL: No border radius anywhere.**

```css
*, *::before, *::after {
  border-radius: 0 !important;
}
```

**Border weights:**
- Standard: `1.5px solid`
- Heavy: `2px solid`
- Dividers: `1px solid`

**Gradient borders:**
```css
border-gradient::before {
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--burgundy) 100%);
}
border-gradient-gold::before {
  background: linear-gradient(180deg, var(--pale-cream) 0%, var(--gold) 100%);
}
```

**Gradient Pillars (from Figma):**
Vertical pillar elements with smooth gradient transitions.
```css
.pillar-blue {
  background: linear-gradient(180deg, #1E2A56 0%, #58679B 50%, #1E2A56 100%);
}
.pillar-burgundy {
  background: linear-gradient(180deg, #550000 0%, #A85050 50%, #550000 100%);
}
```

### 7.5 Button Variants

| Variant | Background | Text | Border | Hover Effect |
|---------|-----------|------|--------|--------------|
| Primary | `--primary-blue` | White | Gold gradient (on hover) | translateY(-2px), shadow |
| Burgundy | `--burgundy` | White | None | translateY(-2px), shadow |
| Outline | Transparent | `--primary-blue` | `--primary-blue` solid | Fill with blue, text white |

All buttons:
- Font: Jost SemiBold, 0.8rem, uppercase, tracking 0.14em
- Padding: 1rem 1.9rem
- Transition: transform 0.35s cubic-bezier(.2,.7,.2,1)

### 7.6 Decorative Elements

**Soft Stars:**
Blurry radial glows used as background accents.
```css
.soft-star {
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  pointer-events: none;
}
```
Colors: `#FFEE8C` (gold glow), `#FFFFDC` (cream glow), `#A85050` (rose glow). Sizes: 160px–420px.

**Portal Sparkles:**
4-point star SVGs placed as floating decorative elements.
```html
<svg width="22" height="22" viewBox="0 0 24 24">
  <path d="M12 0 L13 11 L24 12 L13 13 L12 24 L11 13 L0 12 L11 11 Z" fill="#FFFFDC"/>
</svg>
```
Subtle parallax on mouse movement.

**Wave Dividers:**
SVG wave transitions between sections. Use complex multi-line flowing curves (not simple bezier paths).
Gold wave: `#F3C419` with opacity variations. Navy wave: `#1E2A56`–`#58679B` gradient.
Reference SVGs in `references/wave-1.svg` and `references/wave-2.svg`.

**Image Treatments:**
- Duotone: `filter: grayscale(.2) contrast(1.05) brightness(.95)`
- Tint overlay: `linear-gradient(180deg, rgba(23,34,99,0) 35%, rgba(23,34,99,.55) 100%)`
- Badges: Top-left corner, solid color background, uppercase text

### 7.7 Section Backgrounds

| Pattern | Usage |
|---------|-------|
| `--bg-dark` (#2A2A2A) | Default dark sections |
| `--primary-blue` (#172263) | Deep navy feature sections |
| `--burgundy` (#550000) | Burgundy accent sections |
| `--pale-cream` (#FFFFDC) | Light sections (alternate) |

Grid-bg pattern:
```css
.grid-bg {
  background-image:
    linear-gradient(rgba(190,167,91,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(190,167,91,.04) 1px, transparent 1px);
  background-size: 80px 80px;
}
```

---

## 8. Responsive Breakpoints

| Name | Width | Layout Adjustments |
|------|-------|-------------------|
| Mobile | < 640px | Single column, stacked sections, hamburger nav |
| Tablet | 640px–1023px | 2-column grids, partial side-by-side |
| Desktop | 1024px–1439px | Full layout as designed, 12-col grid |
| Large | ≥ 1440px | Max-width container (1400px), centered |

**Mobile-first approach** — base styles target mobile, `@media (min-width:)` for larger screens.

---

## 9. Navigation Structure

### Desktop (≥ 1024px)

```
┌──────────────────────────────────────────────────────┐
│ [Logo] LaSALe    About  Programs  Articles  Events  News  Contact    [Contact Us →] │
└──────────────────────────────────────────────────────┘
```

- Fixed position, transparent on hero, solid on scroll
- Logo: LaSALe wordmark + "Legal Practice Association" subtitle
- Nav links: Jost SemiBold, 0.78rem, uppercase, tracking 0.12em
- Hover: burgundy color + underline (scaleX animation)
- CTA: "Contact Us" primary button

### Mobile (< 1024px)

```
┌─────────────────────┐
│ [Logo] LaSALe  [≡]  │
└─────────────────────┘
```

- Hamburger menu opens full-screen overlay
- Navigation links stacked vertically
- CTA button at bottom

---

## 10. Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Astro 7.x | Static-first, fast builds, content collections, islands for interactivity |
| Styling | Tailwind CSS | Utility-first, rapid prototyping, matches design system |
| Fonts | Google Fonts | Pinyon Script, Instrument Sans, Jost (free, reliable CDN) |
| Content | Astro Content Collections | Markdown/MDX for articles, built-in type safety |
| Images | Astro Image | Optimized, responsive, lazy loading |
| Deployment | Vercel / Netlify | Static hosting, automatic deploys from git |
| Analytics | Plausible / Umami | Privacy-friendly, lightweight (optional) |
| Search | Pagefind (static) | Client-side search for articles (optional) |

### Astro Config

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://lasale.org',
  build: { format: 'directory' },
  integrations: [tailwind()],
});
```

---

## 11. Content Structure (Astro Collections)

```
src/
├── content/
│   ├── articles/
│   │   ├── circuit-splits-administrative-deference.md
│   │   ├── drafting-enforceable-non-competes.md
│   │   └── 37th-annual-symposium-notes.md
│   ├── events/
│   │   ├── lasale-seminar-2026.md
│   │   └── open-recruitment-2026.md
│   ├── news/
│   │   ├── new-executive-director.md
│   │   └── partnership-announcement.md
│   └── config/
│       ├── ed-preface.md          # Executive Director message (rotating)
│       └── org-info.yaml          # Organization metadata
├── components/
│   ├── Hero.astro
│   ├── EDPreface.astro
│   ├── AboutStrip.astro
│   ├── ProgramsShowcase.astro
│   ├── ImpactStats.astro
│   ├── NotableAlumni.astro
│   ├── LatestArticles.astro
│   ├── EventsPreview.astro
│   ├── ArticleCard.astro
│   ├── Footer.astro
│   └── Nav.astro
├── layouts/
│   ├── BaseLayout.astro
│   └── ArticleLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── programs/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── articles/
│   │   ├── index.astro
│   │   ├── [category].astro
│   │   └── [slug].astro
│   ├── events/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── news/
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── contact.astro
└── styles/
    └── global.css                  # Tailwind directives + custom properties
```

---

## 12. Agent-Friendly Layer

### Semantic HTML Structure

Every page must use proper landmarks:

```html
<body>
  <header>        <!-- Site header with nav -->
    <nav>         <!-- Primary navigation -->
  <main>          <!-- Main content -->
    <section>     <!-- Each homepage section -->
    <article>     <!-- Article pages -->
  <aside>         <!-- Sidebar content (if any) -->
  <footer>        <!-- Site footer -->
</body>
```

### Accessibility Requirements

- All interactive elements have `aria-label` or visible text
- Heading hierarchy: single `<h1>`, sequential `<h2>`→`<h3>`→`<h4>`
- All images have descriptive `alt` text
- Color contrast: minimum 4.5:1 for body text, 3:1 for large text
- Keyboard navigation: visible focus rings, logical tab order
- `prefers-reduced-motion`: disable animations/transitions
- Form inputs: associated `<label>`, error messages near fields
- Skip-to-content link for keyboard users

### Structured Data

- Organization schema on homepage
- Article schema on all article pages
- BreadcrumbList schema on interior pages
- Event schema on event pages (when applicable)

---

## 13. Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.0s |
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 95 |
| Lighthouse SEO | > 95 |

**Strategies:**
- Static generation (no server-side rendering)
- Image optimization (WebP/AVIF, srcset, lazy loading)
- Font subsetting or `font-display: swap`
- Minimal JavaScript (only for nav toggle, scroll effects, parallax)
- No framework bloat (Astro ships zero JS by default)

---

## 14. Design References

| File | Purpose |
|------|---------|
| `references/lasale-zai.html` | Full HTML prototype — layout, components, interactions, styling |
| `references/original-63f6...webp` | Hereward College website — heavy editorial design language inspiration |
| `references/Screenshot 2026-09-04...png` | LaSALe official color palette, fonts, logo usage, design elements |

### Design Language Summary

- **Heavy editorial** — dark sections, bold typography, strong contrast
- **Sharp corners** — zero border-radius globally
- **Photo-first** — large images with tint/duotone overlays
- **Gradient accents** — blue→burgundy borders, gold highlights
- **Decorative** — soft star glows, portal sparkles, wave dividers
- **Typography-driven** — oversized headings, drop caps, uppercase labels
- **Grid-based** — 12-column layout, card grids, stat rows

---

## 15. Future Considerations

| Feature | Status | Notes |
|---------|--------|-------|
| Article CMS (headless) | Planned | When article volume grows, add Sanity/Strapi |
| Search (Pagefind) | Planned | Client-side search when > 20 articles |
| RSS feed | Planned | For article syndication |
| Multi-language (ID/EN) | Under consideration | Indonesian + English article versions |
| Open recruitment page | Planned | Dedicated page during recruitment periods only |
| Analytics | Optional | Plausible or Umami for privacy-friendly tracking |

---

*Last updated: 2026-09-04*
*Version: 1.0.0*
