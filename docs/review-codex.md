# Codex Review Notes

`docs/implementation-plan.md` is the latest plan and the rebuild should follow it as the source of truth.

## Agreed Execution Order

1. Foundation first
- Update `tailwind.config.ts`, `src/app/globals.css`, `src/app/layout.tsx`, and `src/components/Navigation.tsx` to the Kinetic Geometry design system, typography, and target route map.

2. Route migration second
- Add new pages:
  - `src/app/work/page.tsx`
  - `src/app/products/page.tsx`
  - `src/app/agentic/page.tsx`
  - `src/app/life/page.tsx`
  - `src/app/about/page.tsx`
- Keep `src/app/contact/page.tsx` and restyle it to match the new system.

3. Homepage rewrite third
- Fully rewrite `src/app/page.tsx` per the implementation plan:
  - Hero with two CTAs
  - "Where I've Worked on Systems"
  - "Currently Building"

4. Content/data cleanup
- Remove or de-prioritize legacy IA routes (`/projects`, `/case-studies`, `/not-work`, `/photography`, `/writings`) and align sitemap/metadata with the new IA.

5. Motion + verification
- Add `framer-motion` and implement the planned entry animations.
- Run build verification and route checks.
