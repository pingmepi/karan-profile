# Portfolio Website Update Plan (v3)

**Goal:** Full rework of karan-profile-zeta.vercel.app using the unified work inventory
**Timeline:** This weekend (2 focused sessions)
**Approach:** I draft all content from inventory data, you review and adjust
**Navigation:** Option B — add Skills page, keep everything else

---

## STRATEGIC FRAMEWORK

**Read `website-strategy.md` first — it's the source of truth.** Below is the operating summary.

This website serves THREE objectives equally. No single objective should dominate at the expense of others.

### Objective 1: AI PM Positioning (Aspiration)
Karan is primed to be an AI PM based on demonstrated work — orchestrations, architecture, system design, evals, failure modes. The site should make this obvious through evidence, not claims. Show shipped AI systems and let the interviewer connect the dots.

**Strongest AI PM evidence (order by on projects page, lead with in featured work):**
- Job Search Agent — Multi-agent architecture, eval-driven CI gating, LLM orchestration with cost controls
- Enterprise API Scenario Design — 50 scenarios, 35 tools, reasoning-heavy workflow testing
- Saaya.ai Strategy — Full product strategy for an AI agent platform
- n8n + LLM Workflows — 23+ workflows with AI agents
- Tribeca/Turing Chief-of-Staff Bot — LLM-driven internal coordination
- MereKapade — GPT-4o/DALL-E integration for generative design

### Objective 2: Consulting Portfolio (Strength)
Clients looking for contract/freelance help should have an "aha" moment. Play to actual strengths, not ambition. Show breadth, speed, and outcomes.

**Strongest consulting evidence (keep visible, don't bury):**
- 90+ n8n workflows spanning sales, email, calendar, AI agents
- Razorpay payment integration (idempotent sessions, webhooks)
- Full-stack product builds: The Third Place (consumer + admin), MereKapade
- GA4/GTM analytics implementation
- Martech orchestration (WebEngage, HubSpot, Netcore, CleverTap)
- SEO CMS platform (5× traffic), event funnels (+90% registrations)
- Admin panel with RBAC, audit logging, social posting

### Objective 3: Discoverability (Machine-readable)
The site must be findable by LLMs powering hiring tools, Google Search, and AI agents that HRMs use. This requires:
- Schema.org Person markup with comprehensive `knowsAbout`
- `llms.txt` file at `public/llms.txt` (see website-strategy.md for exact content)
- Semantic HTML (proper heading hierarchy, `<article>`, `<section>`, `aria-label`)
- Per-page meta descriptions that read well when an LLM summarizes the page
- Natural keyword density for both "AI product manager" and "freelance automation engineer"

### How the dual-audience works
The site doesn't need separate sections. Content should dual-read:
- Homepage hero: Interviewer reads "AI Product Leader who ships." Client reads "This person builds real products with real outcomes."
- Projects page: Ordered AI-first (interviewers scan top-down), but ALL projects visible (clients need breadth)
- Case studies: Job Search Agent is the AI PM flagship. Martech case studies are consulting-grade proof. Both coexist.
- Skills page: AI & LLM Engineering as first category (interviewer signal), full tech breadth below (client signal, crawl signal)
- Each piece of content should serve at least one audience strongly and not alienate the other

---

## Decisions Locked In

- **Volunteer section:** Replace "Tech for Good India" / "Code for India" with U&I (real org — Center Leader managing 40+ volunteers, Fundraising Coach with 10% YoY growth, ~3 years total)
- **Photo gallery:** Keep as-is — you'll share a folder of photos later
- **Writings page:** Keep it, remove placeholder posts — you'll add real content after the revamp
- **Navigation:** Option B — Home, Projects, Case Studies, Skills, Not Work, Contact
- **Career history:** Full timeline available in `career-history.md` (Capgemini → UpGrad → U&I → AlmaBetter → Miles → Independent builder)

## New Intel from GitHub (pingmepi)

Repos not previously in the inventory:

| Repo | What it is | Portfolio relevance |
|---|---|---|
| **website-creation-guidebook-nexus** | The Third Place consumer app (42 PRs, Razorpay payment gating, shop/cart actions) | Already covered but confirms massive scope |
| **custom-t-shirt-hub** | MereKapade's earlier name — design editing, auth, security hardening | Already on site but adds depth |
| **Tribeca_Collection_Dashboard** | Python KPI dashboard fork — KPI strip, trend charts, multi-bar charts | Confirms Tribeca work that ChatGPT referenced. Adds to skills (Python dashboards, data viz) |
| **n8n-backups** | 23 workflow JSONs: Calling Agent, Planner Agent, Restaurant Booking Agent, X/Twitter content generation, video generator, news fetcher, web scraper | Strengthens n8n showcase significantly |
| **greet-the-browser** | Small Supabase+Vite project (May 2025) | Minor — skip for portfolio |
| **spacetime-maps** | Fork only, not your work | Skip |

---

## Session 1: Fixes + Content Overhaul (Saturday)

### 1A. Fix Broken Links (30 min)
**File:** `src/app/page.tsx`

The homepage impact metrics link to slugs that don't exist. Fix all 6:

| Current (broken) | Correct |
|---|---|
| `/case-studies/event-funnels-cms` | `/case-studies/event-funnel-scaling` |
| `/case-studies/scheduling-at-scale` | `/case-studies/scheduling-microservice` |
| `/case-studies/martech-revamp-attribution` | `/case-studies/martech-attribution` |
| `/case-studies/merekapade` | `/case-studies/merekapade-ai-commerce` |

Also fix the featured work links at the bottom of the homepage — same slug mismatches.

### 1B. Rewrite Case Studies (2 hrs)
**File:** `src/data/case-study-details.ts`

**Update existing:**

- `third-place-community` — Complete rewrite. Current version says "closed beta" and "privacy filters." New version covers the full stack:
  - Consumer app: Razorpay payments (idempotent sessions, orphaned cleanup, cancellation guards), Resend payment confirmation emails, short URLs (/e/:shortCode, /c/:slug), image/video gallery with adaptive masonry, GA4/GTM analytics (auth, e-commerce, community engagement tracking), SEO meta with IST timezone handling
  - Admin panel (Command Center): RBAC with 5 roles, recurring events with decoupled editing, Hootsuite social posting, video gallery uploads, audit logging, payment session tracking
  - Data from: 118 commits consumer [C], 36 commits admin [C], 42 PRs on GitHub, RLS architecture [GEM], analytics implementation doc [C]

**Add new:**

- `job-search-agent` — **THIS IS THE FLAGSHIP CASE STUDY FOR AI PM INTERVIEWS.** Write it to demonstrate every AI PM competency: problem framing, architecture decisions, eval thinking, trade-offs, measurement, iteration.

  Source material:
  - 39 commits, 222 tests, 21+ Linear issues [C]
  - PRD with planner/executor/profile agent architecture [C]
  - TRACKER.md with phase milestones [C]
  - Eval framework: compile rate, forbidden claims, edit violations, cost, latency [C]
  - Telegram webhook, LaTeX compilation, Google Drive/Calendar, follow-up scheduling [C]

  **Framing guidance for this case study:**
  - Lead with the PROBLEM (job applications are tedious, manual, inconsistent) not the tech
  - Show PRODUCT DECISIONS: why multi-agent over monolithic? Why eval CI gates? Why Telegram as the interface?
  - Show MEASUREMENT: what evals exist, why those specific ones (truthfulness guards = prevent hallucinated resume claims), what the CI gate thresholds are
  - Show TRADE-OFFS: cost vs quality (OpenRouter model selection), speed vs accuracy (LaTeX compilation retries), automation vs control (editable regions)
  - End with outcomes AND what's next (Phase 2, Phase 3 targets) — shows roadmap thinking

**Also update** the case studies index page (`src/app/case-studies/page.tsx`) to include new entries and fix the `third-place-community` description.

### 1C. Update Projects Page (1 hr)
**File:** `src/app/projects/page.tsx`

**Ordering matters for interviewers.** AI projects first, then product builds, then ops/martech.

**Update existing:**
- The Third Place — status: "live", rewrite problem/impact to reflect production + payments + analytics

**Add new project cards (main grid) — ORDER BY AI RELEVANCE:**

| # | Project | Problem | Impact | Tags | Status |
|---|---|---|---|---|---|
| 1 | **Job Search Agent** | Multi-agent system: OCR ingestion → LLM resume mutation → eval-gated CI → Telegram delivery | 222 tests, CI gates green, production on Railway | AI, Agents, Eval | **Featured** |
| 2 | **MereKapade** | (already on site — keep as #2, it's an AI product) | | GenAI, Commerce | Featured |
| 3 | **The Third Place** | (update to "live" status with payments/analytics) | | Product Build, Community | Live |
| 4 | **Place Command Center** | Admin dashboard — recurring events, social posting, payment tracking, RBAC | 5 roles, 4 phases shipped | Product Build, Infra | Completed |
| 5-7 | Existing martech projects | (keep, push lower in the list) | | | |

**Add side projects section (smaller cards, 1-line each):**

| Project | One-liner | Tags |
|---|---|---|
| Tiger Card Mock | VAPI voice AI tool server — identity verification & KYC flow | Voice AI, API |
| n8n AI Workflows | 23+ production workflows: Calling Agent, Planner Agent, content generation, web scrapers | AI, Automation |
| Tribeca KPI Dashboard | Python analytics dashboard with KPI strips and trend visualizations | Data, Analytics |
| The Void App | Flutter privacy-first voice note app — ephemeral countdown, encrypted storage | Mobile, Privacy |
| Rapchai Landing | Neo-brutalist landing page for multi-product ecosystem | Design, Product Build |

### 1D. Update Homepage — AI PM Positioning (1.5 hr)
**File:** `src/app/page.tsx`

**CRITICAL: The homepage is the first thing an interviewer sees. It must say "AI Product Leader who ships" in the first 10 seconds.**

**Hero section** — The current title "AI Product Leader" is good. But the subtitle and metrics should land harder:
- Current metrics: "5× SEO traffic", "Significant revenue impact", "70% ops savings", "+20% lead quality" — these read as growth marketing, not AI PM
- Proposed metrics: "3 AI products shipped 0→1", "222 tests with eval CI gates", "Multi-agent systems in production", "70% ops savings via automation"
  These immediately signal: ships AI, thinks about quality/evals, builds systems, drives outcomes

**What I Do cards** — Reframe around AI PM competencies:
1. **AI Systems & Agents** (was "Automation & Agents") → Multi-agent architectures, LLM eval frameworks, Telegram bots, 23+ n8n workflows with AI agents. Lead with the Job Search Agent's planner/executor/profile agent pattern.
2. **Product Strategy & Roadmaps** → Keep, but add: "From 0→1 for AI-native products" and reference Saaya.ai strategy, MereKapade MVP
3. **Full-Stack Architecture** (was "Systems & Architecture") → Supabase/Postgres, Razorpay payments, RBAC, admin panels. Signal: "I can go deep with engineers"
4. **Measurement & Governance** → Reframe: "Eval-driven development. CI gates for LLM outputs. Cost/latency tracking. GA4/GTM instrumentation." This is gold for AI PM interviews — shows you think about LLM quality, not just ship-and-pray.

**Featured work** — Lead with AI, strongest trio:
1. **Job Search Agent** — "Multi-agent system with eval-driven CI" → `/case-studies/job-search-agent` (THIS IS YOUR HEADLINE PROJECT for AI PM interviews)
2. **The Third Place** — "Live community platform: payments, analytics, admin panel" → `/case-studies/third-place-community` (shows 0→1 product ownership)
3. **MereKapade** — "AI design commerce: GPT-4o + DALL-E + canvas editor" → `/case-studies/merekapade-ai-commerce` (shows GenAI product thinking)

**Impact metrics** — Fix all 6 slugs (1A), then replace 2 older metrics:
- Keep: "5× SEO traffic" (strong number), "70% ops savings" (strong number)
- Replace "Significant revenue impact" with: "Multi-agent AI in production" → link to job-search-agent
- Replace "+20% lead quality" with: "Eval CI gates: truthfulness, cost, latency" → link to job-search-agent
- Keep: "+90% registrations", "25% faster reporting" (or replace one with a Third Place metric)

**Impact metrics** — Fix all 6 slugs (1A), then consider replacing 1-2 older metrics with:
- "222 tests + CI gates green" → Job Search Agent
- "Live payments in production" → The Third Place

---

## Session 2: New Sections + Polish (Sunday)

### 2A. Add Skills Page (1.5 hrs)
**New file:** `src/app/skills/page.tsx`

A dedicated /skills page (Option B). Grouped by category with Shadcn badges. **Lead with AI — interviewers scan top-down.**

**AI & LLM Engineering** ← FIRST CATEGORY, this is what they're hiring for
Multi-Agent Architecture (planner/executor/profile agents), LLM Eval Frameworks (truthfulness guards, forbidden-claim detection, cost/latency CI gates), OpenRouter, OpenAI API (GPT-4o, DALL-E), Prompt Engineering, NLP-to-SQL, Agent Orchestration (n8n + LLM)

**Languages & Frameworks**
Python, TypeScript, JavaScript, Dart (Flutter), Next.js, React, FastAPI, Vite

**Data & Infrastructure**
Supabase (PostgreSQL, Auth, RLS, Storage, Edge Functions), Railway, Vercel, AWS EC2, Docker/Docker Compose, Splunk, Google Drive API, Google Calendar API

**Payments & Commerce**
Razorpay (idempotent sessions, webhooks), Stripe (API analysis)

**Automation & Workflow**
n8n (23+ production workflows including AI agents), Jira (scrum boards, custom workflows, automation), Basecamp, Metabase (dashboards, analytics)

**Martech & CRM**
HubSpot, WebEngage, Netcore, CleverTap, GA4/GTM, Mandrill, WhatsApp Business API (WABA)

**Communication & Integrations**
Telegram Bot API, VAPI Voice AI, Resend Email, Hootsuite, LaTeX, Framer Motion, fabric.js

**Product & Strategy**
GTM Strategy, Competitive Analysis, Market Sizing (TAM/SAM/SOM), Pitch Decks, Scope-of-Work Documents, RBAC Design, Audit Logging, Capacity Planning, Vendor Negotiation

### 2B. Update Navigation (30 min)
**File:** `src/components/Navigation.tsx`

Add Skills to nav items:
```
Home → Projects → Case Studies → Skills → Not Work → Contact
```

Also:
- Update `src/app/sitemap.ts` to include `/skills`
- Add metadata to skills page (title, description, OG tags)
- Keep Writings hidden from nav but accessible (per your decision)

### 2C. Fix Not Work Page (1 hr)
**File:** `src/app/not-work/page.tsx`

**Motorcycling section:**
- Remove the 3 US placeholder routes (Pacific Coast Highway, Blue Ridge Parkway, Going-to-the-Sun Road)
- Replace with The Handlebar Dialogue content [GEM]: Panchapalli Dam, Rocky Ridge, "Saturday for Sunday" ride flow, safety protocols and social architecture
- Frame it as building a motorcycle community through structured dialogue and intentional route curation — not just "I ride bikes"

**Volunteer section:**
- Remove "Tech for Good India" and "Code for India"
- Replace with U&I (real organization — I'll incorporate details from your image once you re-share it)

**Photo gallery:**
- Keep the empty gallery as-is — you'll share photos later
- Make sure the "No photos yet" fallback text isn't embarrassing (maybe soften to "Photos coming soon")

### 2D. Handle Writings Page (30 min)
**File:** `src/app/writings/page.tsx`

- Remove the 4 placeholder blog posts (fake titles, no content)
- Keep the page structure and subscribe form
- Replace with a clean "Writings coming soon" state
- Keep hidden from nav (already is) — you'll add real content post-revamp

### 2E. Discoverability Layer — Structured Data, Meta, llms.txt (1 hr)

This step implements Objective 3 from `website-strategy.md`. The site must be findable by LLMs, HRM AI agents, and Google for both "AI product manager" and "freelance automation engineer."

**2E-1. Create `public/llms.txt` (15 min)**

New file. This is the equivalent of robots.txt but for AI agents. Content:
```
# Karan Mandalam

## Identity
AI Product Leader based in Bangalore, India. BITS Pilani CS graduate.

## What I do
- Build AI-native products: multi-agent systems, LLM eval frameworks, production automation
- Ship full-stack products 0→1: payments, analytics, admin panels, consumer apps
- Automate operations: 90+ n8n workflows, martech orchestration, CRM automation

## Looking for
- AI Product Management roles (full-time)
- Contract/freelance: automation, full-stack product builds, AI system design

## Key projects
- Job Search Agent: Multi-agent system with eval-driven CI (Python, FastAPI, OpenRouter)
- The Third Place: Live community platform with Razorpay payments (Next.js, Supabase)
- MereKapade: AI-powered design commerce with GPT-4o/DALL-E (React, OpenAI API)
- 90+ n8n automation workflows including AI agents

## Skills
Multi-Agent Architecture, LLM Eval/CI Gating, Python, TypeScript, Next.js, FastAPI,
Supabase, PostgreSQL, Razorpay, n8n, GA4/GTM, OpenRouter, OpenAI API, React,
HubSpot, WebEngage, Netcore, CleverTap, Docker, AWS EC2, Railway, Vercel

## Contact
Website: https://karan-profile-zeta.vercel.app
LinkedIn: https://linkedin.com/in/mandalam-karan
GitHub: https://github.com/pingmepi
Email: kmandalam@gmail.com
```

**2E-2. Update Schema.org Person (`src/components/StructuredData.tsx`) (15 min)**

Update `PersonStructuredData` with expanded schema:
```json
{
  "@type": "Person",
  "name": "Karan Mandalam",
  "jobTitle": "AI Product Leader",
  "description": "Product leader building AI-native systems — multi-agent architectures, LLM eval frameworks, and production automation. Available for AI product roles and consulting.",
  "knowsAbout": [
    "Multi-Agent AI Systems",
    "LLM Evaluation Frameworks",
    "Product Management",
    "n8n Workflow Automation",
    "Supabase",
    "Razorpay Integration",
    "GA4/GTM Analytics",
    "Full-Stack Product Development",
    "Martech & CRM Orchestration",
    "Python",
    "TypeScript",
    "Next.js",
    "FastAPI"
  ],
  "alumniOf": { "@type": "CollegeOrUniversity", "name": "BITS Pilani" },
  "address": { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressCountry": "India" },
  "url": "https://karan-profile-zeta.vercel.app",
  "sameAs": [
    "https://linkedin.com/in/mandalam-karan",
    "https://github.com/pingmepi",
    "https://x.com/pingmepi"
  ]
}
```

**2E-3. Per-page meta descriptions (15 min)**

Each page needs a unique `<meta name="description">` that reads well when an LLM summarizes it:

| Page | Meta description |
|---|---|
| / (Home) | "Karan Mandalam — AI Product Leader shipping multi-agent systems, LLM eval frameworks, and full-stack products. Based in Bangalore. Open to AI PM roles and consulting." |
| /projects | "Projects by Karan Mandalam: multi-agent AI systems, community platforms with payments, AI design commerce, martech automation, and 90+ n8n workflows." |
| /case-studies | "Detailed case studies: multi-agent job search system with eval CI gates, live community platform with Razorpay, AI-powered design commerce, event funnel scaling." |
| /skills | "Technical skills: Multi-Agent Architecture, LLM Eval Frameworks, Python, TypeScript, Next.js, FastAPI, Supabase, Razorpay, n8n, GA4/GTM, and 30+ more." |
| /not-work | "Beyond work: motorcycle community building, U&I Trust volunteer leadership, and photography." |
| /contact | "Get in touch with Karan Mandalam for AI product roles or consulting engagements." |

**2E-4. Semantic HTML audit (15 min)**

While editing pages in Session 1 and 2, ensure:
- Proper heading hierarchy (h1 → h2 → h3, no skips)
- Use `<article>` for case study detail pages
- Use `<section>` with descriptive `aria-label` for homepage sections
- Don't use `<div>` where a semantic tag would work
- Ensure all images have descriptive `alt` text

**2E-5. Update sitemap and layout metadata**

**File:** `src/app/sitemap.ts`
- Add `/skills` route
- Add `/case-studies/job-search-agent` route

**File:** `src/app/layout.tsx`
- Update default meta description (see table above)
- Ensure metadataBase is correct

### 2F. Build, Verify, Deploy (1 hr)

- `npm run build` — catch type errors and broken imports
- Click through every route: /, /projects, /case-studies, /case-studies/[each-id], /skills, /not-work, /contact, /writings
- Verify no 404s from any link on any page
- Check all case study detail pages render
- Verify meta tags with `view-source` on key pages
- Verify `llms.txt` is accessible at the root URL
- Verify Schema.org structured data renders correctly (check with view-source or JSON-LD validator)
- Test contact form still sends
- `git add`, `git commit`, `git push` → triggers Vercel deploy
- Verify on live URL after deploy

---

## Work Sequence Summary

| # | Task | Files | Est. Time |
|---|---|---|---|
| **Session 1** | | | |
| 1A | Fix broken homepage links | `page.tsx` | 30 min |
| 1B | Rewrite Third Place + add Job Search Agent case studies | `case-study-details.ts`, `case-studies/page.tsx` | 2 hrs |
| 1C | Update + add project cards + side projects section | `projects/page.tsx` | 1 hr |
| 1D | Refresh homepage (metrics, featured work, what I do) | `page.tsx` | 1 hr |
| **Session 2** | | | |
| 2A | Create Skills page | New `skills/page.tsx` + component | 1.5 hrs |
| 2B | Update navigation + sitemap | `Navigation.tsx`, `sitemap.ts` | 30 min |
| 2C | Fix Not Work page (rides, volunteer, gallery text) | `not-work/page.tsx` | 1 hr |
| 2D | Clean up Writings page | `writings/page.tsx` | 30 min |
| 2E | Update structured data + metadata | `StructuredData.tsx`, `layout.tsx`, `sitemap.ts` | 30 min |
| 2F | Build, verify, deploy | Multiple | 1 hr |
| | **Total** | | **~8.5 hrs** |

---

## Still Needed From You

1. **U&I image** — Please re-share the image with volunteer details (it didn't come through). I need it to write the correct role, timeframe, and description.
2. **Handlebar Dialogue** — Are Panchapalli Dam and Rocky Ridge rides you've actually done? Any other rides to include?
3. **Any corrections** to this plan before we start executing.
