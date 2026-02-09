# Migration Tracker: CSR → SSR (Next.js)

> **Status:** 🟡 Planning Complete | Not Started
> **Last Updated:** 2026-02-08
> **Target Completion:** TBD

---

## ⚠️ Important Notes

- **Supabase is inaccessible** - Cannot pull images or data from Supabase
- **Photography images** - Create placeholder folders, upload manually later
- **Resend API Key** - Use environment variable, add to Vercel later

---

## Overall Progress

| Phase | Description | Status | Progress |
|-------|-------------|--------|----------|
| 1 | Analysis & Inventory | ✅ Complete | 100% |
| 2 | Pre-Migration Preparation | ⬜ Not Started | 0% |
| 3 | Next.js Project Setup | ⬜ Not Started | 0% |
| 4 | File-by-File Migration | ⬜ Not Started | 0% |
| 5 | Supabase Replacement | ⬜ Not Started | 0% |
| 6 | SEO & Metadata Migration | ⬜ Not Started | 0% |
| 7 | Cleanup & Deletion | ⬜ Not Started | 0% |
| 8 | Environment Variables | ⬜ Not Started | 0% |
| 9 | Testing | ⬜ Not Started | 0% |
| 10 | Deployment & Rollback | ⬜ Not Started | 0% |

---

## Phase 2: Pre-Migration Preparation

- [ ] Create backup branch `pre-nextjs-migration`
- [ ] Create `/public/assets/photography/` directory with `.gitkeep`
- [ ] Create placeholder `photos-manifest.json` (empty array)
- [ ] Create `.env.local` with `RESEND_API_KEY` placeholder
- [ ] Add `.env.local` to `.gitignore`
- [ ] Take screenshots of current site for reference

---

## Phase 3: Next.js Project Setup

- [ ] Initialize Next.js 14+ project with App Router
- [ ] Configure TypeScript
- [ ] Install Tailwind CSS
- [ ] Install shadcn-ui and configure
- [ ] Copy tailwind.config.ts
- [ ] Copy src/index.css → app/globals.css
- [ ] Set up path aliases (@/)

---

## Phase 4: Page Migration

### Pages

| Page | Source | Target | Status |
|------|--------|--------|--------|
| Home | `src/pages/Index.tsx` | `app/page.tsx` | ⬜ |
| Projects | `src/pages/Projects.tsx` | `app/projects/page.tsx` | ⬜ |
| Case Studies | `src/pages/CaseStudies.tsx` | `app/case-studies/page.tsx` | ⬜ |
| Case Study Detail | `src/pages/CaseStudyDetail.tsx` | `app/case-studies/[id]/page.tsx` | ⬜ |
| Not Work | `src/pages/NotWork.tsx` | `app/not-work/page.tsx` | ⬜ |
| Photography | `src/pages/Photography.tsx` | `app/photography/page.tsx` | ⬜ |
| Contact | `src/pages/Contact.tsx` | `app/contact/page.tsx` | ⬜ |
| 404 | `src/pages/NotFound.tsx` | `app/not-found.tsx` | ⬜ |

### Components

| Component | Status |
|-----------|--------|
| Navigation.tsx | ⬜ |
| Seo.tsx → Metadata | ⬜ |
| ui/* (shadcn) | ⬜ |

### Data Files

| File | Status |
|------|--------|
| case-studies.ts (extract data) | ⬜ |
| photos-manifest.json | ⬜ |

---

## Phase 5: Supabase Replacement

### Contact Form

- [ ] Create `/api/contact/route.ts` with Resend integration
- [ ] Use `process.env.RESEND_API_KEY` (env var)
- [ ] Update Contact page to use fetch to `/api/contact`
- [ ] Add error handling for missing API key

### Photography

- [ ] Create `lib/photos.ts` helper to read manifest
- [ ] Create `data/photos-manifest.json` (empty array placeholder)
- [ ] Update NotWork page to use local photos
- [ ] Update Photography page to use local photos
- [ ] Remove usePhotographyImages hook

---

## Phase 6: SEO Migration

- [ ] Root layout metadata
- [ ] Home page metadata
- [ ] Projects page metadata
- [ ] Case Studies list metadata
- [ ] Case Study detail generateMetadata
- [ ] Not Work page metadata
- [ ] Photography page metadata
- [ ] Contact page metadata
- [ ] Verify OG images work
- [ ] Test Twitter cards

---

## Phase 7: Cleanup

### Files to Delete

- [ ] `src/integrations/supabase/client.ts`
- [ ] `src/integrations/supabase/types.ts`
- [ ] `supabase/config.toml`
- [ ] `supabase/migrations/*`
- [ ] `vite.config.ts`
- [ ] `index.html`
- [ ] `src/main.tsx`
- [ ] `src/App.tsx`
- [ ] `src/App.css`
- [ ] `src/vite-env.d.ts`
- [ ] `src/hooks/usePhotographyImages.ts`

### Dependencies to Remove

- [ ] `@supabase/supabase-js`
- [ ] `react-router-dom`
- [ ] `@tanstack/react-query`
- [ ] `@vitejs/plugin-react-swc`
- [ ] `vite`
- [ ] `lovable-tagger`

---

## Phase 8: Environment Variables

- [ ] Create `.env.local` file
- [ ] Add `RESEND_API_KEY=` placeholder to `.env.local`
- [ ] Ensure `.env.local` is in `.gitignore`
- [ ] Document env var in `.env.example`
- [ ] **POST-DEPLOY:** Add `RESEND_API_KEY` to Vercel Environment Variables

---

## Phase 9: Testing

### Navigation
- [ ] `/` loads
- [ ] `/projects` loads
- [ ] `/case-studies` loads
- [ ] `/case-studies/event-funnel-scaling` loads
- [ ] `/case-studies/merekapade-ai-commerce` loads
- [ ] `/case-studies/martech-attribution` loads
- [ ] `/case-studies/meeting-scheduler` loads
- [ ] `/not-work` loads
- [ ] `/photography` loads
- [ ] `/contact` loads
- [ ] 404 page works

### SEO
- [ ] Titles correct
- [ ] Descriptions correct
- [ ] OG images work
- [ ] Canonical URLs correct

### Styling
- [ ] Dark theme correct
- [ ] Responsive design works
- [ ] Animations work

### Forms
- [ ] Contact form submits
- [ ] Email received

---

## Phase 10: Deployment

- [ ] Deploy to Vercel preview
- [ ] Full QA on preview
- [ ] Merge to main
- [ ] Verify production deployment
- [ ] Monitor for 48 hours

---

## Post-Migration Tasks (Manual Steps Required)

> **Complete these after the code refactor is done:**

### Photography Images
- [ ] Upload images to `/public/assets/photography/`
- [ ] Update `data/photos-manifest.json` with image metadata
- [ ] Verify images display on Not Work and Photography pages

### Resend API Key
- [ ] Get API key from Resend dashboard
- [ ] Add to `.env.local` for local testing
- [ ] Add to Vercel Environment Variables for production
- [ ] Test contact form sends email to `kmandalam@gmail.com`

### Final Verification
- [ ] All pages load correctly
- [ ] Contact form works end-to-end
- [ ] Photography grid displays images
- [ ] SEO metadata correct on all pages

---

## Notes

_Add any issues, blockers, or decisions here during migration._

