# Portfolio Website Audit Report

**Site:** karan-profile-zeta.vercel.app
**Audit date:** 3 April 2026
**Scope:** Compare redesigned site (local code) against actual work shipped in the last 6 months (Oct 2025 -- Apr 2026)

---

## 1. What the site currently shows

The redesigned site positions you as an **AI Product Leader** with navigation: Home, Projects, Case Studies, Not Work, Contact. It features 6 impact metrics on the homepage, 7 project cards, 6 case studies, and a personal/hobby page.

### Projects listed (projects page)

| # | Project | Status on site | Tags |
|---|---------|---------------|------|
| 1 | AI-Powered Marketing Automation | Completed | Martech, AI, CRM |
| 2 | Martech Stack Optimization | Completed | Product Strategy, Automation, Attribution |
| 3 | MereKapade | Featured | Product Build, GenAI, Commerce |
| 4 | Event CMS Platform | Completed | Infra, Workflow, Scale |
| 5 | The Third Place | WIP | Community, Systems, Identity |
| 6 | Scheduling Microservice | Completed | Infra, SaaS Design, UX Simplification |
| 7 | Content Ops Automation | Completed | Process Design, Jira, Education |

### Case studies with detail pages (case-study-details.ts)

1. Event Funnel Scaling (AlmaBetter)
2. Martech Attribution (Miles Education)
3. MereKapade AI Commerce (solo build)
4. Scheduling Microservice (Miles Education)
5. Content Ops Automation (AlmaBetter)

---

## 2. What you actually built in the last 6 months

Based on git history, tracker files, and folder contents across Desktop and Downloads:

### A. Job Search Agent (Oct 2025 -- Apr 2026) -- 39 commits, 222 tests

Your most significant recent project. A multi-agent system that converts job postings into complete application packs via Telegram. Key capabilities: OCR/URL ingestion of job descriptions, LLM-powered resume mutation with truthfulness guards and editable-region enforcement, LaTeX compilation with single-page enforcement, automated outreach draft generation (email, LinkedIn DM, referral), eval-driven CI gating (compile rate, forbidden claims, edit violations, cost, latency), Telegram webhook service (FastAPI), Google Drive upload and Calendar event creation, follow-up scheduling with escalation tiers, planner/executor architecture separation, deployed on Railway with PostgreSQL.

**Tech stack:** Python, FastAPI, OpenRouter LLMs, LaTeX, Telegram Bot API, PostgreSQL, Google Drive/Calendar APIs, pypdf.

**Not on your website at all.**

### B. The Third Place -- Consumer App (Oct 2025 -- Apr 2026) -- 118 commits

Massive feature work well beyond what the website describes. The site calls it "closed beta" and frames it as system design. In reality, it's a live production app at mythirdplace.rapchai.com with: Razorpay payment flow (idempotent sessions, orphaned session cleanup, cancellation guards, polling UX), payment confirmation emails via Resend, short URLs for events (/e/:shortCode) and communities (/c/:slug), image/video gallery with adaptive masonry layout, post-signup name prompt modal, GA4/GTM analytics implementation with full event tracking (auth, e-commerce, community engagement), SEO meta with IST timezone handling, canonical URLs.

**Tech stack:** Next.js (SSR), TypeScript, Supabase, Razorpay, Resend, GA4/GTM, Vercel.

**Website severely understates this. Case study references "closed beta" and "privacy filters." The actual product is live, handling payments, and has 118 commits of feature work.**

### C. Place Command Center -- Admin Panel (Oct 2025 -- Apr 2026) -- 36 commits

A full admin dashboard that doesn't appear on the website at all. Features: dashboard with quick-create modals and at-a-glance cards, recurring events with decoupled editing and bulk operations, event/community short URL management, Hootsuite social posting integration, video uploads in gallery, admin panel hardening (strict TypeScript, audit logging, N+1 query fixes, email templates), gallery preview in event details, payment session tracking.

**Tech stack:** React, TypeScript, Vite, Tailwind, Supabase, Shadcn/ui.

**Not on your website at all.**

### D. MindFarm Website (Feb -- Mar 2026)

Client project: transforming a single-page Next.js site into a multi-page conversion engine. You wrote a 25K-word scope of work, added a Mental Fitness Quiz with lead capture, sitemap/robots.txt, email sending via Resend, SEO implementation.

**Not on your website (understandable -- client work).**

### E. Rapchai Landing Page (Mar -- Apr 2026)

Neo-brutalist landing page for the Rapchai ecosystem, routing users to food ordering and community/events. Next.js 16 App Router, Framer Motion animations, static site with hardcoded content.

**Not on your website.**

### F. Tiger Card Mock Server (Mar 2026)

Vercel-deployed mock tool server for VAPI voice AI integration. Handles 4 tool calls (verify_identity, check_onboarding_status, send_kyc_deep_link, log_call_outcome).

**Not on your website.**

### G. The Void App (Jan 2026)

Flutter privacy-first voice note app. Speech-to-text, ephemeral 10-second countdown, encrypted Gems storage, auto-wipe on background.

**Not on your website.**

### H. n8n Workflow Library (ongoing)

Your Downloads folder contains 90+ n8n workflow JSON files spanning sales automation, email orchestration, calendar management, Amazon integrations, Google Drive workflows, and more.

**Not on your website (the "Automation & Agents" card on the homepage references n8n but doesn't showcase this depth).**

---

## 3. Gap analysis -- What's missing

### CRITICAL: Entire projects missing from the site

| Project | Why it matters | Suggested action |
|---------|---------------|-----------------|
| **Job Search Agent** | Your most technically impressive recent work. Multi-agent architecture, eval-driven CI, production Telegram bot, LLM orchestration with cost controls. This is exactly what "AI Product Leader" should showcase. | Add as a featured project + full case study |
| **Admin Panel (Place Command Center)** | Shows you can build complete internal tools, not just consumer-facing products. Recurring events, audit logging, social posting integration, payment tracking. | Add as a project card, potentially merge into The Third Place case study as "the full stack" |
| **Rapchai Landing** | Shows you can ship fast, handle modern frameworks (Next.js 16), and design for multi-product ecosystems. | Add as a project card |

### CRITICAL: Outdated case study for The Third Place

The current case study (`third-place-community`) describes system design work: "RBAC, badge systems, host workflows, referral tracking." This was accurate 6+ months ago. Today, the project is a live production app processing real payments. The case study should reflect: payment infrastructure (Razorpay integration with session management), GA4/GTM analytics, gallery system, short URLs, email notifications, and the admin panel.

### Missing skills and technologies

Your website's "What I Do" section covers: Product Strategy, Systems & Architecture, Automation & Agents, Measurement & Governance. Based on actual work, these skills are demonstrated but not mentioned:

| Skill/Tech | Evidence | Currently shown? |
|------------|----------|-----------------|
| **Multi-agent AI systems** | Job Search Agent (planner/executor, profile agent, inbox agent) | No |
| **LLM evaluation frameworks** | Soft evals, CI gates, truthfulness guards, forbidden-claim detection | No |
| **Payment infrastructure** | Razorpay integration, idempotent sessions, webhook handlers | No |
| **Flutter / mobile development** | The Void App | No |
| **Voice AI / VAPI** | Tiger Card mock server | No |
| **Telegram Bot development** | Job Search Agent webhook service | No |
| **LaTeX / document compilation** | Resume compilation pipeline | No |
| **Railway deployment** | Job Search Agent production hosting | No |
| **PostgreSQL migrations** | SQLite-to-Postgres migration for Job Search Agent | No |
| **GA4/GTM implementation** | Full analytics stack for The Third Place | Vaguely in case study but not highlighted |
| **Resend email integration** | Payment confirmations, contact forms | No |
| **n8n at scale** | 90+ production workflows | Mentioned but not showcased |

### Impact metrics gap

The homepage shows 6 metrics, all from older work (AlmaBetter/Miles Education era):

- 5x SEO traffic
- Significant revenue impact
- 70% ops savings
- +90% registrations
- +20% lead quality
- 25% faster reporting

**Missing recent metrics:** 222 tests passing with CI gates green (Job Search Agent), 118 commits on a live production app (Third Place), payment flow processing real transactions, 90+ automation workflows, MVP shipped in 8 weeks (MereKapade -- this one is shown).

### Not Work page issues

**Motorcycle rides are fabricated placeholders.** The rides listed are Pacific Coast Highway (California), Blue Ridge Parkway (Virginia/NC), and Going-to-the-Sun Road (Montana). These are American routes. You're based in India. Unless you actually did these rides, this is immediately detectable as placeholder content and damages credibility.

**Volunteer experience appears generic.** "Tech for Good India" and "Code for India" with claims of "Guided 12+ startups" and "Trained 50+ developers." If these are real, keep them. If they're placeholders, remove them.

**Photo gallery is empty.** The `photos-manifest.json` file is literally `[]`. The PhotoGrid component correctly shows "No photos yet" as fallback text.

### Writings page -- hidden but still accessible

The /writings route is commented out of navigation but the page exists with 4 placeholder blog posts (dated Sep-Dec 2024) that have no actual content behind them. The subscribe form doesn't work. If someone finds this URL directly, it looks abandoned.

### Contact form dependency

The contact form relies on Resend with a `noreply@contact.merekapade.com` sender domain. This works but ties your personal portfolio to the MereKapade domain. If that domain lapses, your contact form breaks.

---

## 4. Broken links in the local code

| Page | Link | Issue |
|------|------|-------|
| Homepage impact metric | `/case-studies/event-funnels-cms` | No matching key in `case-study-details.ts` (key is `event-funnel-scaling`) |
| Homepage impact metric | `/case-studies/scheduling-at-scale` | No matching key (key is `scheduling-microservice`) |
| Homepage impact metric | `/case-studies/martech-revamp-attribution` | No matching key (key is `martech-attribution`) |
| Projects > Event CMS | `/case-studies` | Links to index, not a specific case study |
| Projects > The Third Place | `/case-studies` | Links to index, has no detail page |
| Case Studies > Third Place | `/case-studies/third-place-community` | No matching key in `case-study-details.ts` -- will 404 |

The homepage's "Featured Work" and "Impact Highlights" link to case study slugs that don't match the actual keys in the data file. This means clicking those cards leads to 404 pages.

---

## 5. Recommendations (priority order)

Each recommendation is scored against the three website objectives:
- **AI PM** = Positions Karan as an AI Product Manager candidate
- **Consulting** = Showcases breadth and delivery for freelance/contract clients
- **Discoverability** = Improves findability by LLMs, HRM AI agents, and Google Search

---

**P0 -- Fix immediately (breaks credibility)**

1. **Fix the broken case study links** (slug mismatches between page.tsx and case-study-details.ts)
   - AI PM: ★★★ (interviewers clicking impact metrics hit 404s — kills trust)
   - Consulting: ★★★ (same — clients bounce)
   - Discoverability: ★★ (broken internal links hurt crawlability and SEO)

2. **Replace Not Work page placeholders with real content.** Remove fake US motorcycle routes (Handlebar Dialogue rides instead). Replace "Tech for Good India"/"Code for India" with U&I Trust (real org, 3 years, 40+ volunteers, center leadership).
   - AI PM: ★★★ (interviewers always check Not Work for culture fit — fake content is disqualifying)
   - Consulting: ★ (clients rarely check this page)
   - Discoverability: ★ (minimal SEO value)

3. **Clean up the /writings page** — remove 4 placeholder blog posts, replace with "Coming soon" state. Keep hidden from nav.
   - AI PM: ★★ (an abandoned blog signals lack of follow-through)
   - Consulting: ★ (clients don't care about blog)
   - Discoverability: ★ (placeholder posts have no SEO value; real posts later will)

---

**P1 -- Add within a week (missing your best recent work)**

4. **Add the Job Search Agent as a featured project and flagship case study.** Multi-agent architecture, eval-driven CI, production Telegram bot, LLM orchestration with cost controls. Frame as product thinking: problem → architecture decisions → measurement → trade-offs → roadmap.
   - AI PM: ★★★★★ (THE proof point — multi-agent systems, evals, CI gates, failure mode thinking)
   - Consulting: ★★ (shows technical depth but not consulting-relevant breadth)
   - Discoverability: ★★★★★ (keywords: multi-agent architecture, LLM eval, AI product management)

5. **Rewrite The Third Place case study** to reflect its current state: live production app with Razorpay payments, GA4/GTM analytics, gallery, email notifications, and admin panel — not a system design exercise about "closed beta" and "privacy filters."
   - AI PM: ★★★ (shows 0→1 product ownership, system design, payment architecture)
   - Consulting: ★★★★★ (full-stack, payments, analytics, admin panel — exactly what clients hire for)
   - Discoverability: ★★★ (keywords: Razorpay, Supabase, Next.js, GA4, full-stack)

6. **Add the Admin Panel (Place Command Center)** as a project card or fold into The Third Place case study as "the full stack."
   - AI PM: ★★ (shows RBAC design, audit logging — product thinking about internal tools)
   - Consulting: ★★★★ (clients love seeing you build internal tools too, not just consumer-facing)
   - Discoverability: ★★ (adds RBAC, admin panel keywords)

---

**P2 -- Add within two weeks (strengthens positioning)**

7. **Create a dedicated Skills page** with categories ordered by audience priority: AI & LLM Engineering first (for interviewers), then breadth categories (for clients). Schema.org markup on each category for crawlers.
   - AI PM: ★★★★★ (surfaces "LLM Eval Frameworks", "Multi-Agent Architecture" as keywords)
   - Consulting: ★★★★★ (clients scan for specific tools: n8n, Razorpay, Supabase, GA4)
   - Discoverability: ★★★★★ (the keyword bank — Schema.org markup makes this page a machine-readable skills index)

8. **Refresh homepage impact metrics** with recent work: "222 tests with CI gates" (Job Search Agent), "3 products shipped 0→1", alongside proven Miles metrics. The hero must dual-read: interviewers see AI rigor, clients see delivery.
   - AI PM: ★★★★ (quantified AI engineering metrics)
   - Consulting: ★★★★ (quantified delivery outcomes)
   - Discoverability: ★★★ (numbers get parsed by HRM AI agents)

9. **Add Rapchai Landing and Tiger Card/VAPI as smaller project cards** in a "Side Projects" section.
   - AI PM: ★ (minor signal)
   - Consulting: ★★★ (shows breadth and speed — shipped fast)
   - Discoverability: ★★ (adds Voice AI, VAPI, Next.js 16 keywords)

---

**P3 -- Nice to have (but high discoverability value)**

10. **Add llms.txt** at `/llms.txt` — structured plain text file for AI agents summarizing identity, skills, projects, and availability. Emerging standard, equivalent of robots.txt for LLMs.
    - AI PM: ★★★★★ (meta-signal: you understand how AI agents work, so you built for them)
    - Consulting: ★★★★ (makes you findable for contract work queries)
    - Discoverability: ★★★★★ (direct pipeline into LLM-powered hiring tools)

11. **Update Schema.org Person structured data** with expanded `knowsAbout`, `alumniOf`, `address`, `sameAs` arrays. Add per-page meta descriptions and Open Graph tags.
    - AI PM: ★★★ (structured data helps AI hiring tools parse your profile)
    - Consulting: ★★★ (same for client-side discovery)
    - Discoverability: ★★★★★ (foundational SEO and AI agent optimization)

12. **Write 1-2 real blog posts** about topics you've worked on (eval-driven AI development, multi-agent architectures, building payment flows). Long-tail SEO for "LLM eval frameworks for production", "multi-agent architecture patterns."
    - AI PM: ★★★★ (thought leadership signals)
    - Consulting: ★★ (clients care about work, not writing)
    - Discoverability: ★★★★★ (long-tail SEO is the highest-ROI discoverability play)

13. Resolve the Instagram handle inconsistency (theghostinphotographs vs pingmepi).
