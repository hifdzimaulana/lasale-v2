# DESIGN.md — LaSALe FH UI Design System Reference

> Design tokens extracted from Figma media kit and wave exports.
> Source files: `references/media-kit.svg`, `references/wave-1.svg`, `references/wave-2.svg`

---

## 1. Color Palette

### Primary

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Primary Blue | `#172263` | 23, 34, 99 | Primary brand, header/footer bg, dark sections |
| Primary Blue Light | `#58679B` | 88, 103, 155 | Gradient midpoint, subtle accents |

### Accent

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Gold/Olive | `#BEA75B` | 190, 167, 91 | Secondary accent, text gradient end, borders |
| Bright Yellow | `#F8DA61` | 248, 218, 97 | Star burst fill, highlight accents |
| Soft Star Gold | `#FFEE8C` | 255, 238, 140 | Star glow with blur filter |

### Burgundy / Rose

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Dark Burgundy | `#550000` | 85, 0, 0 | Deep burgundy sections, gradient start/end |
| Rose/Pink | `#A85050` | 168, 80, 80 | Warm accent, gradient midpoint |

### Light

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Pale Cream | `#FFFFDC` | 255, 255, 220 | Light bg sections, sparkle fill, text gradient start |

### Background

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Dark Charcoal | `#2A2A2A` | 42, 42, 42 | Default dark section background |

---

## 2. Gradients

### Text Gradient

Gold-to-cream vertical gradient for accent text (headings, highlights).

```css
.text-gradient-gold {
  background: linear-gradient(180deg, #FFFFDC 0%, #BEA75B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Gradient Pillars

Smooth vertical transitions used as decorative side elements.

```css
.pillar-blue {
  background: linear-gradient(180deg, #1E2A56 0%, #58679B 50%, #1E2A56 100%);
}

.pillar-burgundy {
  background: linear-gradient(180deg, #550000 0%, #A85050 50%, #550000 100%);
}
```

### Section Flow Gradients

Horizontal gradients for wave/section transitions.

| Gradient | CSS | Direction |
|----------|-----|-----------|
| Burgundy Flow | `#550000` → `#A85050` → `#550000` | 180deg |
| Blue Flow | `#1E2A56` → `#58679B` → `#1E2A56` | 180deg |

### Border Gradients

```css
.border-gradient-blue {
  background: linear-gradient(135deg, #172263 0%, #550000 100%);
}

.border-gradient-gold {
  background: linear-gradient(180deg, #FFFFDC 0%, #BEA75B 100%);
}
```

---

## 3. Typography

### Font Stack

| Role | Font | Weight | Sizes | Fallback |
|------|------|--------|-------|----------|
| Script/Display | Pinyon Script | 400 | 1.4em–3xl | cursive |
| Display Accent | Meddon | 400 | 1.4em–2xl | serif |
| Headings | Jost | 600 | 1.1rem–5.5rem | sans-serif |
| Body | Instrument Sans | 400–500 | 0.88rem–1.12rem | sans-serif |
| Utility | Montserrat | 400–700 | 0.75rem–1rem | sans-serif |

### Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Meddon&family=Jost:wght@600;700&family=Instrument+Sans:wght@400;500&family=Montserrat:wght@400;500;600;700&display=swap');
```

### Font Usage Rules

- **Jost SemiBold (600)**: All headings (H1–H6), button labels, nav links, uppercase labels
- **Instrument Sans (400)**: Body text, descriptions, paragraphs
- **Instrument Sans (500)**: Emphasized body text, card descriptions
- **Pinyon Script (400)**: Decorative script accents, "LaSALe" logo variant
- **Meddon (400)**: Drop caps (specifically the "s" character per user request), editorial flourishes
- **Montserrat (400–700)**: Utility labels, captions, small UI text, metadata

### Text Sizes

| Element | Font | Size | Weight | Tracking |
|---------|------|------|--------|----------|
| H1 | Jost | 5.5rem | 600 | -0.02em |
| H2 | Jost | 3.5rem | 600 | -0.01em |
| H3 | Jost | 2rem | 600 | 0 |
| H4 | Jost | 1.3rem | 600 | 0 |
| Body | Instrument Sans | 1rem | 400 | 0 |
| Small | Montserrat | 0.75rem | 400 | 0.05em |
| Button | Jost | 0.8rem | 600 | 0.14em uppercase |

---

## 4. Wave Elements

### Source Files

| File | Dimensions | Color | Description |
|------|-----------|-------|-------------|
| `references/wave-1.svg` | 5268 × 3268 | `#F3C419` (gold) | Multi-line flowing gold wave |
| `references/wave-2.svg` | 6006 × 3805 | Navy blue | Multi-line flowing navy wave |

### Wave Specifications

Both waves use **complex multi-line flowing curves** — not simple single bezier paths. Each wave consists of multiple parallel curved lines that create a flowing, fabric-like effect.

**Key characteristics:**
- Multiple overlapping stroke paths (not filled shapes)
- Stroke width varies (typically 1–4px)
- Opacity fades at endpoints (gradient masks)
- Curves use cubic bezier commands (`C`)
- Lines flow horizontally with vertical undulation

**Gold Wave (`wave-1.svg`):**
- Stroke color: `#F3C419`
- Multiple parallel flowing lines
- Lines converge and diverge creating depth
- Used for: section transitions, decorative overlays

**Navy Wave (`wave-2.svg`):**
- Stroke color: Navy (varies along path)
- Similar multi-line flowing pattern
- Used for: dark section transitions, background decoration

### Usage

```html
<!-- As section transition overlay -->
<div class="wave-transition">
  <img src="/images/wave-1.svg" alt="" aria-hidden="true" />
</div>
```

```css
.wave-transition {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave-transition img {
  width: 100%;
  height: auto;
}
```

---

## 5. Decorative Elements

### Soft Stars

Blurry radial glows used as background accents. Purely decorative, no semantic meaning.

```css
.soft-star {
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  pointer-events: none;
  position: absolute;
}
```

| Color | Hex | Typical Size |
|-------|-----|-------------|
| Gold glow | `#FFEE8C` | 160px–320px |
| Cream glow | `#FFFFDC` | 200px–420px |
| Rose glow | `#A85050` | 160px–280px |

### Portal Sparkles

4-point star SVGs placed as floating decorative elements with subtle parallax on mouse movement.

```html
<svg width="22" height="22" viewBox="0 0 24 24">
  <path d="M12 0 L13 11 L24 12 L13 13 L12 24 L11 13 L0 12 L11 11 Z" fill="#FFFFDC"/>
</svg>
```

| Property | Value |
|----------|-------|
| Fill | `#FFFFDC` (pale cream) |
| Size | 16px–32px (scales with section) |
| Animation | Subtle parallax on mouse move |
| Opacity | 0.6–1.0 |

### Gradient Star Burst

From media-kit.svg — a decorative 4-point star with radial glow.

```html
<!-- From media-kit.svg: soft-star element -->
<g transform="translate(3785.3, 866.8)">
  <path d="M3.2 0 L3.5 9.7 L13 10 L3.5 10.3 L3.2 20 L2.9 10.3 L-6.5 10 L2.9 9.7 Z"
        fill="#FFEE8C" fill-opacity="0.95044"/>
  <circle cx="3.3" cy="10" r="20" fill="url(#star-gradient)" fill-opacity="0.9653"/>
</g>

<!-- Radial gradient definition -->
<radialGradient id="star-gradient" cx="0.5" cy="0.5" r="0.5">
  <stop offset="0%" stop-color="#FFEE8C" stop-opacity="1"/>
  <stop offset="100%" stop-color="#FFEE8C" stop-opacity="0"/>
</radialGradient>
```

---

## 6. Border Treatments

### Zero Border Radius

Global setting — all elements use `border-radius: 0` unless explicitly noted.

```css
*, *::before, *::after {
  border-radius: 0 !important;
}
```

### Gradient Borders

Gradient border effect using `::before` pseudo-element.

```css
.border-gradient {
  position: relative;
}

.border-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--burgundy) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

### Gold Accent Borders

```css
.border-gradient-gold::before {
  background: linear-gradient(180deg, var(--pale-cream) 0%, var(--gold) 100%);
}
```

---

## 7. CSS Custom Properties (Full Token Set)

```css
:root {
  /* Primary */
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

  /* Background */
  --bg-dark: #2A2A2A;

  /* Functional — Dark theme */
  --text-on-dark: var(--pale-cream);
  --text-on-dark-muted: rgba(255, 255, 220, 0.7);
  --text-on-dark-faint: rgba(255, 255, 220, 0.5);
  --border-subtle: rgba(190, 167, 91, 0.2);
}
```

---

## 8. Asset Inventory

| File | Type | Dimensions | Description |
|------|------|-----------|-------------|
| `references/media-kit.svg` | SVG | 6415 × 3392 | Full media kit: COPAL palette, logos, fonts, decorative elements |
| `references/wave-1.svg` | SVG | 5268 × 3268 | Gold flowing wave element |
| `references/wave-2.svg` | SVG | 6006 × 3805 | Navy blue flowing wave element |
| `references/lasale-zai.html` | HTML | — | Original prototype with design system reference |
| `references/original-*.webp` | Image | — | Hereward College design language reference |

### Figma Frame IDs (for re-export)

| Frame | File ID | Node ID |
|-------|---------|---------|
| Media Kit | `Zth3eS6z2m4GF0SUxOOOmh` | `613:13341` |
| Wave 1 (Gold) | `x60YU83c7P1n2bpVJkNYMY` | `1835:14690` |
| Wave 2 (Navy) | `x60YU83c7P1n2bpVJkNYMY` | `1835:14695` |

---

## 9. Design Principles

1. **Dark-first**: Default backgrounds are dark (`#2A2A2A`, `#172263`), with pale cream sections as alternates
2. **Zero radius**: All corners are sharp, square, editorial
3. **Heavy typography**: Large Jost headings, editorial weight
4. **Gold accents**: Gold (`#BEA75B`) is the primary accent color, used sparingly for emphasis
5. **Decorative depth**: Soft stars, portal sparkles, and gradient pillars add visual richness
6. **Wave transitions**: Complex multi-line flowing SVGs replace simple bezier waves
7. **Editorial feel**: Inspired by newspaper/magazine layouts with structured grids and bold typography
