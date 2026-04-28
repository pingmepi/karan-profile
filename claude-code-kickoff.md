# Claude Code Kickoff Prompt

Paste the section below (between the `---` lines) into Claude Code as your first message.

---

You are updating the portfolio website at `karan-profile/`. Before writing any code, read these planning files in order:

1. `website-strategy.md` — Source of truth. Defines the three website objectives (AI PM positioning, consulting portfolio, machine discoverability) and how content should dual-read for both interviewers and consulting clients. **Do not start coding until you've internalized this.**
2. `website-update-plan.md` — The full execution plan with task breakdown, file-by-file instructions, content specs, and exact slug mappings. This is your work order.
3. `unified-work-inventory.md` — Raw data: every project, skill, and metric you'll need. Cross-referenced by source: [C] = Claude/local repos, [GPT] = ChatGPT, [GEM] = Gemini, [PPX] = Perplexity.
4. `website-audit-report.md` — Current-state audit with gap analysis. Each recommendation is scored against all three objectives (AI PM, Consulting, Discoverability). Use these scores to make judgment calls if you need to cut scope.
5. `career-history.md` — Full career timeline from Capgemini through present. Use for the "About" content, skills evidence, and any timeline references.

## Three Non-Negotiable Objectives

Every change you make must serve at least one of these. No change should actively harm any of them.

1. **AI PM Positioning** — The Job Search Agent case study is the flagship. Multi-agent architecture, eval-driven CI gating, LLM orchestration with cost controls. Show product thinking (problem → decisions → measurement → trade-offs → roadmap), not just tech.

2. **Consulting Portfolio** — Clients need an "aha" moment. The Third Place (live with payments + analytics + admin panel), n8n workflows (90+), martech stack orchestration. Play to strengths, not ambition.

3. **Discoverability** — `llms.txt` at public root, Schema.org Person markup with comprehensive `knowsAbout`, per-page meta descriptions that read well when summarized by an LLM, semantic HTML. Target both "AI product manager" and "freelance automation engineer" queries.

## Execution Order

Follow the task sequence in `website-update-plan.md` exactly:

**Session 1 (Fixes + Content):**
- 1A: Fix 6 broken case study slug links in `src/app/page.tsx`
- 1B: Rewrite Third Place case study + add Job Search Agent as flagship in `src/data/case-study-details.ts`
- 1C: Reorder and expand projects page — AI projects first, add side projects section
- 1D: Refresh homepage — hero, What I Do cards, featured work trio, impact metrics

**Session 2 (New Sections + Polish):**
- 2A: Create `/skills` page — AI & LLM Engineering as first category
- 2B: Update navigation (add Skills) + sitemap
- 2C: Fix Not Work page — replace fake US motorcycle routes with Handlebar Dialogue, replace placeholder volunteer orgs with U&I Trust (Center Leader, 40+ volunteers, Fundraising Coach, 10% YoY growth, ~3 years)
- 2D: Clean up Writings page — remove 4 placeholder posts, keep page with "Coming soon" state
- 2E: Discoverability layer — llms.txt, Schema.org, per-page meta, semantic HTML audit, sitemap update
- 2F: Build, verify all routes, deploy

## Key Data Points

Broken slug mappings (1A):
- `event-funnels-cms` → `event-funnel-scaling`
- `scheduling-at-scale` → `scheduling-microservice`
- `martech-revamp-attribution` → `martech-attribution`
- `merekapade` → `merekapade-ai-commerce`

Job Search Agent stats: 39 commits, 222 tests, 21+ Linear issues, planner/executor/profile agent architecture, eval CI gates (compile rate, forbidden claims, edit violations, cost, latency), Telegram webhook, Railway deployment.

The Third Place stats: 118 commits consumer + 36 commits admin, 42 PRs on GitHub, Razorpay with idempotent sessions, GA4/GTM full analytics, Resend emails, short URLs, gallery system.

Navigation order: Home → Projects → Case Studies → Skills → Not Work → Contact (Writings hidden but accessible).

## Constraints

- Do NOT invent metrics or claims not backed by the planning files.
- The case studies in `case-study-details.ts` use a specific `CaseStudyData` interface — match the existing TypeScript types.
- The site uses Next.js 14 App Router, Tailwind, Shadcn/ui, Radix UI. Stay within the existing design system.
- Run `npm run build` before committing to catch type errors.
- After deploy, verify `llms.txt` is accessible at the root URL and Schema.org data renders in page source.

Start with 1A (broken links) — it's a quick win that unblocks the rest.

---
