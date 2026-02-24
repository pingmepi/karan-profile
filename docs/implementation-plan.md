# karan-profile Website Rebuild

Redesign the personal site to match the revised PRD (6 clean routes) and the **Kinetic Geometry** Bauhaus design system — brutal cards, Syne/DM Sans typography, physics-based animations, 5-color palette.

Execution order follows `review-codex.md` with one amendment: `framer-motion` installs in Phase 1 so animations ship with each page on the first pass.

---

## Phase 1 — Foundation

Update design system, fonts, layout, navigation, and install motion library.

### [MODIFY] `tailwind.config.ts`
- Replace font families: `display: Syne`, `body: DM Sans`, `mono: JetBrains Mono`
- Add colors: `gallery #F2F0E9`, `ink #121212`, `klein #002FA7`, `signal #FF2400`, `bauhaus #FFD700`
- Add shadows: `brutal`, `brutal-hover`, `brutal-klein`
- Set `borderRadius.none: '0px'` for square buttons

### [MODIFY] `src/app/globals.css`
- Replace CSS custom properties with Kinetic Geometry palette
- Dark mode: invert canvas/ink, primaries stay vibrant
- Add brutal utilities: `.brutal-card`, `.brutal-btn`, `.grid-visible`
- Remove old gradient/glass utilities

### [MODIFY] `src/app/layout.tsx`
- Replace `Inter` with `Syne`, `DM_Sans`, `JetBrains_Mono` via `next/font/google`
- Update metadata
- Apply font CSS variables to body

### [MODIFY] `src/components/Navigation.tsx`
- Routes: Work, Products, Agentic, Life, About, Contact
- Deconstructed Bauhaus nav style

### Install `framer-motion`

---

## Phase 2 — Route Migration

Create all new inner pages with content and animations baked in.

### [NEW] `src/app/work/page.tsx` (KAR-81)
Shipped production systems on visible modular grid. Brutal cards, JetBrains Mono for operator details.

### [NEW] `src/app/products/page.tsx` (KAR-82)
MyThirdPlace hero-sized card in Klein Blue, remaining products as standard brutal cards.

### [NEW] `src/app/agentic/page.tsx` (KAR-83)
Three sections with geometric primitives, heavy monospace, minimal accents.

### [NEW] `src/app/life/page.tsx` (KAR-84)
Photography + riding. Masonry gallery with brutal-framed images.

### [NEW] `src/app/about/page.tsx` (KAR-85)
Professional arc (geometric timeline), three philosophy pillar cards, outside-work strip.

### [MODIFY] `src/app/contact/page.tsx` (KAR-86)
Restyle to geometric shape buttons, Kinetic Geometry palette.

---

## Phase 3 — Homepage Rewrite

Full rewrite of `src/app/page.tsx` (KAR-78, KAR-79, KAR-80):

1. **Hero** — 8rem Syne heading, two square-button CTAs (→ `/work`, → `/products`), geometric shapes with Framer Motion spring entrance
2. **"Where I've Worked on Systems"** — 4 brutal cards
3. **"Currently Building"** — compact product list with entry animations

---

## Phase 4 — Legacy Cleanup

- Remove or redirect old routes: `/projects`, `/case-studies`, `/not-work`, `/photography`, `/writings`
- Update `sitemap.ts`, `robots.ts`, and metadata to reflect new IA
- Clean up unused data files (`case-study-details.ts`, `photos-manifest.json`)

---

## Phase 5 — Verification

### Automated
- `next build` — zero errors

### Manual (Browser)
- All 7 routes render correctly
- Brutal cards: hard shadows + press-flat hover
- Dark mode: canvas/ink invert, Klein Blue stays vibrant
- Responsive: mobile nav, stacked layouts
