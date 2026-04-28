# Unified Work Inventory — All Sources Collated

**Compiled:** 3 April 2026
**Sources:** Claude (local repo scan), ChatGPT (chat history), Gemini (chat history), Perplexity (chat history)

---

## How to Read This

Each project is tagged with where the evidence came from. Source codes:

- **[C]** = Claude — verified from local git repos, code, tracker files
- **[GPT]** = ChatGPT — reconstructed from chat history (many items marked [uncertain])
- **[GEM]** = Gemini — reconstructed from chat history
- **[PPX]** = Perplexity — reconstructed from chat history

When multiple sources mention the same project, they're merged into one entry. Conflicts are noted inline.

---

## PART 1: SHIPPED PROJECTS (Code Exists, Deployed or Deployable)

### 1. Job Search Agent
| Field | Detail |
|---|---|
| Status | Active — Phase 2 in progress |
| Timespan | Oct 2025 — Apr 2026 |
| Sources | **[C]** (39 commits, 222 tests, full tracker) |
| One-liner | Multi-agent system that converts job postings into complete application packs via Telegram |
| What was built | OCR/URL ingestion of job descriptions, LLM-powered resume mutation with truthfulness guards & editable-region enforcement, LaTeX compilation with single-page enforcement, automated outreach drafts (email, LinkedIn DM, referral), eval-driven CI gating (compile rate, forbidden claims, edit violations, cost, latency), Telegram webhook service (FastAPI), Google Drive upload & Calendar event creation, follow-up scheduling with escalation tiers, planner/executor/profile agent architecture |
| Tech stack | Python, FastAPI, OpenRouter LLMs, LaTeX, Telegram Bot API, PostgreSQL, Google Drive API, Google Calendar API, pypdf, Railway |
| Impact | 222 tests passing, CI gates green, 21+ Linear issues completed, production-deployed on Railway |
| Unfinished | KAR-62 (SaaS readiness), KAR-72-76 (various enhancements), Phase 2 target Apr 5, Phase 3 target Apr 30 |
| On portfolio? | **No — completely missing** |

### 2. The Third Place — Consumer App
| Field | Detail |
|---|---|
| Status | Active — live in production |
| Timespan | Oct 2025 — Apr 2026 |
| Sources | **[C]** (118 commits, production at mythirdplace.rapchai.com), **[GPT]** (positioning/narrative work), **[GEM]** (schema/RLS architecture) |
| One-liner | Community and events platform with payments, galleries, short URLs, and analytics |
| What was built | Razorpay payment flow (idempotent sessions, orphaned session cleanup, cancellation guards, polling UX), payment confirmation emails via Resend, short URLs (/e/:shortCode, /c/:slug), image/video gallery with adaptive masonry, post-signup name prompt modal, GA4/GTM analytics (auth, e-commerce, community engagement tracking), SEO meta with IST timezone handling, canonical URLs |
| Tech stack | Next.js (SSR), TypeScript, Supabase (PostgreSQL, Auth, RLS, Storage), Razorpay, Resend, GA4/GTM, Vercel |
| Impact | Live production app handling real payments, 118 commits of feature work |
| Notes | GPT describes positioning work around "zero-to-one case study" framing. Gemini adds RLS refactoring into Edge Functions and 230+ test cases (may overlap with admin panel tests). GPT flags "quantified usage or traction metrics" as missing |
| On portfolio? | **Yes but severely outdated — case study says "closed beta" when it's live with payments** |

### 3. Place Command Center — Admin Panel
| Field | Detail |
|---|---|
| Status | Active |
| Timespan | Oct 2025 — Apr 2026 |
| Sources | **[C]** (36 commits, full project tracker) |
| One-liner | Admin dashboard for The Third Place with recurring events, social posting, gallery, and payment tracking |
| What was built | Dashboard with quick-create modals and at-a-glance cards, recurring events with decoupled editing and bulk operations, short URL management, Hootsuite social posting integration, video uploads in gallery, admin hardening (strict TypeScript, audit logging, N+1 query fixes, email templates), gallery preview in event details, payment session tracking, RBAC with 5 roles |
| Tech stack | React, TypeScript, Vite, Tailwind, Supabase, Shadcn/ui |
| Impact | Phases 1-4 completed (Foundation, Auth, CRUD modules, Analytics) |
| On portfolio? | **No — completely missing** |

### 4. MereKapade
| Field | Detail |
|---|---|
| Status | Completed (MVP shipped) |
| Timespan | Jan 2026 — Mar 2026 |
| Sources | **[C]** (on portfolio), **[GEM]** (fabric.js canvas, DALL-E/GPT-4o integration), **[GPT]** (referenced in outreach) |
| One-liner | AI-powered custom apparel design platform — generative images on a real-time canvas editor |
| What was built | OpenAI DALL-E/GPT-4o integration for image/style generation, custom fabric.js canvas for real-time layering and design editing, end-to-end design-to-order flow |
| Tech stack | React, fabric.js, OpenAI API, Supabase |
| Impact | Functional MVP delivered in 3-month cycle for a seed-stage startup |
| Issues | Canvas lag on high-res images — resolved with asset optimization and lazy-loading [GEM] |
| On portfolio? | **Yes — listed as featured project with case study** |

### 5. MindFarm Website Rebuild
| Field | Detail |
|---|---|
| Status | Planning/early implementation |
| Timespan | Feb — Mar 2026 |
| Sources | **[C]** (25K-word scope doc, local code), **[GPT]** (scope development, revenue-share modeling) |
| One-liner | Multi-page conversion redesign for MindFarm Inc. — calendar booking, payments, SEO, lead generation |
| What was built | 25K-word scope-of-work with 3 priority bands (54-70 hrs total), Mental Fitness Quiz with lead capture, sitemap/robots.txt, email via Resend, SEO implementation. GPT adds: CTA audit across 11+ buttons, revenue-sharing model, proposal language |
| Tech stack | Next.js 14, React 18, Tailwind, Calendly Pro/Cal.com (planned), Razorpay (planned), GA4, Microsoft Clarity (planned), Mailchimp/ConvertKit (planned), Schema.org |
| Impact | Converted vague rebuild request into phased execution plan with 17 scoped tasks [GPT] |
| Unfinished | Calendar implementation, Razorpay integration, lead magnets, GA4/Clarity install, commercial terms with client |
| On portfolio? | **No (client work — reasonable)** |

### 6. Rapchai Landing Page
| Field | Detail |
|---|---|
| Status | Completed |
| Timespan | Mar — Apr 2026 |
| Sources | **[C]** (local code) |
| One-liner | Neo-brutalist landing page routing users to food ordering and community/events |
| Tech stack | Next.js 16 App Router, Framer Motion, static site |
| On portfolio? | **No** |

### 7. Tiger Card Mock Server
| Field | Detail |
|---|---|
| Status | Completed |
| Timespan | Mar 2026 |
| Sources | **[C]** (local code, Vercel deployment) |
| One-liner | Mock tool server for VAPI voice AI integration — 4 tool calls for identity verification and KYC |
| Tech stack | Vercel, VAPI, API tool serving |
| On portfolio? | **No** |

### 8. The Void App
| Field | Detail |
|---|---|
| Status | Completed/paused |
| Timespan | Jan 2026 |
| Sources | **[C]** (local code) |
| One-liner | Flutter privacy-first voice note app — speech-to-text, ephemeral countdown, encrypted storage |
| Tech stack | Flutter, speech-to-text, encryption |
| On portfolio? | **No** |

### 9. Google Docs Automation Scripts
| Field | Detail |
|---|---|
| Status | Completed |
| Timespan | Nov 2025 — Jan 2026 |
| Sources | **[GEM]** |
| One-liner | Google Apps Script suite for bulk document formatting and text manipulation |
| Tech stack | Google Apps Script, JavaScript |
| Impact | ~70% reduction in manual editing time |
| On portfolio? | **No** |

---

## PART 2: STRATEGY, RESEARCH, AND ADVISORY WORK (No Shipped Code)

### 10. Saaya.ai Strategy
| Field | Detail |
|---|---|
| Status | Active (strategy phase) |
| Timespan | Jul 2025 |
| Sources | **[GPT]** (GTM, pricing, architecture, trust, PLG), **[PPX]** (business plan, positioning, competitive analysis, YC seed deck) |
| What was done | GTM narrative ("Time is Value"), hybrid pricing with tiered limits, modular agent architecture (retries, Pub/Sub, fallback, shared memory), trust enablers (audit trails, OpenRouter with caching), PLG-enterprise motion, onboarding templates, RBAC, India/SEA focus. PPX adds: YC seed deck structuring, competitive landscape vs n8n and convergence AI players, market sizing |
| On portfolio? | **No — but demonstrates product strategy and AI architecture thinking** |

### 11. Enterprise API Scenario Architectures
| Field | Detail |
|---|---|
| Status | Active |
| Timespan | Dec 2025 |
| Sources | **[PPX]** |
| What was done | Designed 50 reasoning-heavy enterprise API scenarios across 35 tools. Created scenario/tool mappings, coverage summaries. Built offboarding and finance-close workflows with strict sequential logic. Covered Google Drive, Calendar, Email APIs |
| Impact | Mapped 35 tools across 50 scenarios |
| On portfolio? | **No — but shows eval/testing thinking that maps to the Job Search Agent's eval-driven approach** |

### 12. Stripe Tool Surface Analysis
| Field | Detail |
|---|---|
| Status | Completed |
| Timespan | Dec 2025 |
| Sources | **[PPX]** |
| What was done | Compared Stripe tool JSON against official API surface. Identified missing resource families. Mapped every tool to prompt/scenario usage counts. Ranked use cases by frequency |
| On portfolio? | **No** |

### 13. Enterprise LMS Evaluation (20K Users)
| Field | Detail |
|---|---|
| Status | Completed |
| Timespan | Mar 2026 |
| Sources | **[GEM]** |
| What was done | Feature and pricing audits for Darwinbox, Disprz, SAP SuccessFactors. White-labeling and scalability analysis for 20K seats. Indian corporate environment focus |
| On portfolio? | **No — but demonstrates B2B SaaS evaluation capability** |

### 14. Market Sizing / TAM-SAM-SOM
| Field | Detail |
|---|---|
| Status | Completed |
| Timespan | Feb 2026 |
| Sources | **[PPX]** |
| What was done | Verified TAM claims for QSR market, refined sizing language, adjusted competitive landscape, clarified SOM assumptions |
| Likely related to | The Third Place / Rapchai business model |
| On portfolio? | **No** |

### 15. Tribeca/Turing Chief-of-Staff Bot
| Field | Detail |
|---|---|
| Status | Completed |
| Timespan | 2025 — 2026 [uncertain] |
| Sources | **[GPT]** |
| What was done | AI-assisted internal bot for task and communication visibility. Embedded into team comms to track ownership and task state. Used in outreach as proof of AI-native product building |
| On portfolio? | **No — but strengthens the "Agents" narrative** |

### 16. ESG Software Market Orientation
| Field | Detail |
|---|---|
| Status | Completed (research) |
| Timespan | Mar 2026 |
| Sources | **[GPT]** |
| What was done | Explored ESG software landscape, prepared discovery call conversation framework |
| On portfolio? | **No** |

---

## PART 3: INFRASTRUCTURE AND TOOLING

### 17. n8n Workflow Library & Infrastructure
| Field | Detail |
|---|---|
| Status | Active (ongoing) |
| Timespan | Ongoing, discussed Mar 2026 |
| Sources | **[C]** (90+ workflow JSON files in Downloads), **[GPT]** (EC2/Docker setup, 18 documented workflows) |
| What exists | 90+ n8n workflow JSON files spanning sales automation, email orchestration, calendar management, Amazon integrations, Google Drive workflows. Self-hosted on EC2 with Docker Compose, custom image with Python packages, LLM integration |
| Tech stack | n8n, Ubuntu, AWS EC2, Docker Compose, Python, LLMs |
| On portfolio? | **Mentioned on homepage ("Automation & Agents") but the depth isn't showcased at all** |

### 18. LaTeX Resume Pipeline
| Field | Detail |
|---|---|
| Status | Active |
| Timespan | Jan 2026 — Apr 2026 |
| Sources | **[C]** (Job Search Agent includes LaTeX compilation), **[GEM]** (custom template, font/margin tuning), **[GPT]** (role-specific iterations) |
| What exists | Custom single-column LaTeX template, ATS-optimized, single-page enforcement, font 9.5, title-above-company hierarchy. Used both manually and automated via Job Search Agent |
| On portfolio? | **No** |

---

## PART 4: NON-PROJECT WORK (Career, Research, Prep)

### Job Search & Career Positioning
**Sources:** [GPT] (heaviest), [GEM], [PPX]
**Timespan:** Jan 2025 — Apr 2026

This was your most active non-project workstream across all models:

- **Resume iterations** — Multiple role-specific versions targeting growth PM, AI PM, platform PM, martech, logistics, fintech, adtech. Singapore-format versions. Consolidated Tribeca+Turing into single Consultant role [GPT]
- **Outreach drafts** — LinkedIn InMails, recruiter emails, hiring manager emails, referral asks for: Razorpay, Nykaa, Locus, Singpass, Shopify, AdMedia, Delhivery, Help Scout, Hypotenuse AI, and more [GPT]
- **Interview prep** — STAR stories, category-wise answer banks, self-intros, 60-second fit videos, zero-to-one examples, voice AI role prep [GPT] [GEM] [PPX]
- **Company research** — Logistics/TMS prep (Locus, Delhivery), Razorpay "Fix My Itch" screening, Blue Machines role research [GPT] [PPX]
- **Identity framing** — "Product eng / vibe coder / PM" positioning, "Technical Hunter" persona for B2B Fintech/MSME roles [GPT] [GEM]

### The Handlebar Dialogue
**Source:** [GEM]
**Timespan:** Feb — Mar 2026

Motorcycle community experience design — "Saturday for Sunday" ride flow, route vetting (Panchapalli Dam, Rocky Ridge), safety protocols, social architecture. Not a software project, but relevant for the "Not Work" page on your portfolio (and much more authentic than the US placeholder routes currently there).

### Marketing Asset Work
**Source:** [GEM]
**Timespan:** Mar 2026

Brand-specific imagery including silver-can product edits and Red Bull logo removal. Minor but exists.

### Location Transition
**Source:** [GEM]
**Timespan:** Jan 2026

Relocated from Gurugram to Bangalore. Updated professional contact info.

---

## PART 5: UNIFIED SKILLS INVENTORY

Consolidated from all sources. Only skills with actual project evidence.

| Skill | Proficiency | Evidence From |
|---|---|---|
| **Python** | Proficient | Job Search Agent, n8n workflows [C] |
| **FastAPI** | Proficient | Job Search Agent [C], Tiger Card Mock [C] |
| **Next.js (SSR/App Router)** | Proficient | Third Place [C], MindFarm [C][GPT], Rapchai [C], Portfolio [C] |
| **React** | Proficient | Admin Panel [C], MereKapade [C][GEM] |
| **TypeScript** | Proficient | Third Place [C], Admin Panel [C] |
| **Supabase (Postgres, Auth, RLS, Storage)** | Proficient | Third Place [C], Admin Panel [C], MereKapade [GEM] |
| **Razorpay Integration** | Proficient | Third Place [C], MindFarm (planned) [GPT] |
| **n8n Workflow Automation** | Proficient | 90+ workflows [C], EC2 infra [GPT] |
| **GA4/GTM Analytics** | Proficient | Third Place [C], Miles Education [GPT] |
| **LLM Orchestration (OpenRouter, OpenAI)** | Proficient | Job Search Agent [C], MereKapade [GEM], n8n [GPT] |
| **Multi-Agent Architecture** | Proficient | Job Search Agent [C], Tribeca CoS Bot [GPT] |
| **Eval/CI Gating for LLMs** | Proficient | Job Search Agent (truthfulness, forbidden claims, cost, latency) [C] |
| **LaTeX** | Used | Resume pipeline [C][GEM], Job Search Agent [C] |
| **Telegram Bot API** | Used | Job Search Agent [C] |
| **PostgreSQL** | Proficient | Third Place RLS [C][GEM], Job Search Agent [C] |
| **Resend Email API** | Used | Third Place [C], MindFarm [C], Portfolio contact [C] |
| **Railway Deployment** | Used | Job Search Agent [C] |
| **Vercel Deployment** | Proficient | Third Place [C], Portfolio [C], Tiger Card [C] |
| **Docker/Docker Compose** | Used | n8n infra [GPT] |
| **AWS EC2** | Used | n8n hosting [GPT] |
| **Flutter** | Explored | The Void App [C] |
| **VAPI Voice AI** | Explored | Tiger Card Mock [C] |
| **Stripe API** | Used | Analysis work [PPX] |
| **Google Apps Script** | Used | Doc automation [GEM] |
| **fabric.js** | Used | MereKapade canvas [GEM] |
| **Framer Motion** | Used | Rapchai Landing [C] |
| **Tailwind CSS** | Proficient | Admin Panel [C], MindFarm [C][GPT], Rapchai [C] |
| **Shadcn/ui** | Used | Admin Panel [C] |
| **Hootsuite Integration** | Used | Admin Panel [C] |
| **Schema.org / SEO** | Proficient | Portfolio [C], MindFarm [C][GPT] |
| **HubSpot** | Proficient | Miles Martech [GPT] |
| **WebEngage** | Proficient | Miles Martech [GPT] |
| **Netcore / CleverTap** | Proficient | Miles Martech [GPT] |
| **Prompt Engineering** | Proficient | API scenarios [PPX], Job Search Agent [C], Saaya [GPT] |
| **Competitive Analysis** | Proficient | Saaya/YC deck [PPX], LMS eval [GEM] |
| **Product Strategy & GTM** | Proficient | Saaya [GPT][PPX], MindFarm [GPT], AlmaBetter [GPT] |

---

## PART 6: SUMMARY STATS

| Metric | Count |
|---|---|
| Total distinct projects (shipped code) | 9 |
| Total strategy/research/advisory work | 7 |
| Total non-project workstreams | 5+ |
| Projects on your portfolio currently | 7 |
| Projects missing from portfolio entirely | 6 (Job Search Agent, Admin Panel, Rapchai, Tiger Card, Void App, GDocs Scripts) |
| Projects severely understated on portfolio | 1 (The Third Place) |
| Approximate conversations across all models | 100-120 threads |
| Most active project by commit count | The Third Place (118 commits) [C] |
| Most active non-project workstream | Job search & career positioning [GPT][GEM][PPX] |

---

## PART 7: WHAT TO DO WITH THIS

**For the portfolio site**, the highest-value additions from this inventory:

1. **Job Search Agent** — Add as featured project + full case study. It's your strongest "AI Product Leader" evidence and no model except Claude had visibility into it (it lived entirely in local code).

2. **The Third Place** — Rewrite the case study from scratch. Merge consumer app + admin panel into one narrative showing the full stack: schema design, RLS, payments, analytics, admin tooling.

3. **Skills section** — Your site has no dedicated skills/tech section. This inventory gives you 35+ verified skills to draw from.

4. **Not Work page** — Replace the US motorcycle routes with The Handlebar Dialogue content from Gemini. That's your actual motorcycle community work.

5. **n8n showcase** — 90+ workflows is a serious automation portfolio. Consider a dedicated project card or a section on the Automation & Agents case study.

6. **Eval/testing narrative** — The enterprise API scenario work (Perplexity) + Job Search Agent CI gating (Claude) together tell a strong story about LLM evaluation that no single model saw in full.

---

## SOURCE RELIABILITY NOTES

- **Claude [C]**: Highest confidence. Verified against actual code, git history, and tracker files on disk. Every claim is backed by files that exist.
- **ChatGPT [GPT]**: Moderate confidence. Extensive work history but heavily marked [uncertain]. Most value is in the career/positioning work and the MindFarm scope development — areas where no local code was produced.
- **Gemini [GEM]**: Moderate confidence. Strongest on MereKapade (fabric.js detail Claude didn't have), Handlebar Dialogue (authentic personal content), and the LaTeX resume specifics.
- **Perplexity [PPX]**: Moderate confidence. Unique contributions around Stripe analysis, enterprise API scenario design, YC deck, and market sizing that no other model covered.
