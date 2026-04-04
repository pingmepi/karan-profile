export interface CaseStudySection {
    heading: string;
    content: string;
}

export interface CaseStudy {
    slug: string;
    title: string;
    summary: string;
    kpis: string[];
    tags: string[];
    tech: string[];
    sections: CaseStudySection[];
    liveUrl?: string;
    liveLabel?: string;
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "event-funnels-cms",
        title: "Event Funnels & SEO-first Event CMS",
        summary:
            "Redesigned event journeys and shipped an SEO-first Event CMS integrated with CRM & Zoom to improve registrations and reduce ops overhead.",
        kpis: [
            "+90% registrations",
            "Significant revenue impact",
            "+25% event→QL",
            "40+ events/mo",
        ],
        tags: [
            "Product Strategy",
            "Event Automation",
            "Funnel Optimisation",
            "SEO",
            "CRM",
        ],
        tech: [
            "Strapi",
            "Next.js",
            "n8n",
            "WebEngage",
            "WABA",
            "Zoom API",
            "GA4",
            "Postgres/Metabase",
            "CRM",
        ],
        sections: [
            {
                heading: "Overview",
                content:
                    "Fragmented journeys and login loops hurt conversions. I led the product work—reframed the funnel, set success metrics, and delivered an SEO-focused Event CMS to make events self-serve.",
            },
            {
                heading: "Context & Role",
                content:
                    "Companies: AlmaBetter (funnel/registrations), Miles Education (Event CMS). Role: Lead PM / Program Manager (CTO's Office). Teams: Marketing, CRM, Engineering, Design, Ops.",
            },
            {
                heading: "Problem",
                content:
                    "Registration friction (Google login loops; multi-step forms). Manual event creation; uneven SEO. Broken attribution between events → CRM.",
            },
            {
                heading: "Objectives",
                content:
                    "Increase registrations and lead quality. Enable self-serve event creation and promotion. Preserve clean attribution into CRM.",
            },
            {
                heading: "Product Decisions",
                content:
                    "Prioritised 1-click registration and form simplification over heavy pre-qualification. Standardised SEO templates and promo blocks to scale content quickly. Enforced UTM discipline and event→CRM mapping before adding new channels.",
            },
            {
                heading: "Solution",
                content:
                    "1-click registration with inline email validation (n8n). Removed Google login loop; simplified forms; conditional fields. Lifecycle journeys (WebEngage) + WABA fallback. Event CMS (Strapi + Next.js): SEO templates; CRM & Zoom integration. Attribution plumbing: UTM-consistent links; event→CRM normalisation.",
            },
            {
                heading: "Architecture",
                content:
                    "Next.js (web) → Strapi (CMS) → CRM & Zoom APIs · n8n for validation/reminders/tagging · UTM → CRM fields → Metabase.",
            },
            {
                heading: "Metrics & Impact",
                content:
                    "+90% registrations. Significant revenue impact within a 4-month window. +25% event→qualified-lead conversion. 40+ events/month via CMS.",
            },
            {
                heading: "Evidence",
                content:
                    "GA4 funnel; CRM opportunity mapping; Metabase cohorts; Zoom attendance logs.",
            },
            {
                heading: "Challenges & Trade-offs",
                content:
                    "Form length vs qualification; SEO editorial guardrails; syncing across Zoom & CRM.",
            },
            {
                heading: "Lessons",
                content:
                    "UTM discipline matters as much as UX; self-serve needs templates + validation.",
            },
        ],
    },
    {
        slug: "martech-revamp-attribution",
        title: "Martech Revamp for Attribution Accuracy",
        summary:
            "Re-architected GA4/Netcore/HubSpot/Metabase for clean attribution, faster reporting, and better lead quality.",
        kpis: ["+20% lead quality", "25% faster reporting", "−40% CRM duplicates"],
        tags: ["Martech", "Attribution", "Analytics", "Data Quality"],
        tech: ["GA4", "Netcore", "HubSpot", "n8n", "Postgres", "Metabase"],
        sections: [
            {
                heading: "Overview",
                content:
                    "Attribution was inconsistent and reporting slow. I owned the product roadmap for measurement and rebuilt the data path to trust outcomes—daily.",
            },
            {
                heading: "Context & Role",
                content:
                    "Company: Miles Education. Role: Program Manager (CTO's Office).",
            },
            {
                heading: "Problem",
                content:
                    "Mixed UTM taxonomies; duplicate contacts; manual reporting.",
            },
            {
                heading: "Objectives",
                content: "Single source of truth; faster, self-serve reporting.",
            },
            {
                heading: "Product Decisions",
                content:
                    "Mandated a pragmatic UTM spec; wrote guardrails into tooling (link builders, validation). Prioritised dedupe and enrichment before advanced analytics to avoid compounding errors.",
            },
            {
                heading: "Solution",
                content:
                    "UTM standard + link governance; n8n enrichment (normalisation, tagging, dedupe); Metabase dashboards on Postgres; monthly audits.",
            },
            {
                heading: "Architecture",
                content:
                    "Ingest (web/app) → GA4 → ETL (n8n) → CRM + Postgres → Metabase.",
            },
            {
                heading: "Metrics & Impact",
                content:
                    "+20% lead quality · 25% faster reporting · −40% CRM duplicates.",
            },
            {
                heading: "Evidence",
                content:
                    "Pre/post UTM compliance; dedupe logs; dashboard load times; QBR snippets.",
            },
            {
                heading: "Challenges",
                content:
                    "UTM enforcement across many operators; legacy campaigns.",
            },
            {
                heading: "Lessons",
                content:
                    "Specs are necessary; enforcement via tools is sufficient.",
            },
        ],
    },
    {
        slug: "scheduling-at-scale",
        title: "Multi-Tenant Scheduling Microservice",
        summary:
            "Dynamic slot logic + CRM sync reduced ops load and accelerated lead→meeting.",
        kpis: [
            "70% ops reduction",
            "1,000+ meetings/mo",
            "25% faster lead→meeting",
        ],
        tags: ["Platform", "SaaS Infra", "Ops Automation"],
        tech: ["Next.js", "Supabase (Auth/RLS)", "n8n", "Webhooks", "CRM"],
        sections: [
            {
                heading: "Overview",
                content:
                    "Manual scheduling slowed growth teams. I wrote the PRD, set success metrics, and led delivery across teams.",
            },
            {
                heading: "Context & Role",
                content:
                    "Internal product for sales & academic teams; cross-functional leadership.",
            },
            {
                heading: "Problem",
                content:
                    "Spreadsheet slots; inconsistent rules; no auditability.",
            },
            {
                heading: "Objectives",
                content:
                    "Self-serve booking; consistent rules; unified audit trail.",
            },
            {
                heading: "Product Decisions",
                content:
                    "Declarative slot logic with test cases; auditability as a first-class requirement. CRM as source of truth for people/state; scheduler as orchestration layer.",
            },
            {
                heading: "Solution",
                content:
                    "Next.js + Supabase (RBAC, calendars, conflict checks); n8n triggers (reminders, reschedules, tagging); CRM sync + API fallback; webhooks; audit logs.",
            },
            {
                heading: "Architecture",
                content:
                    "Scheduler service ↔ CRM ↔ n8n ↔ Notification providers.",
            },
            {
                heading: "Metrics & Impact",
                content:
                    "70% ops reduction · 1,000+ meetings/mo · 25% faster lead→meeting.",
            },
            {
                heading: "Evidence",
                content: "Ops time studies; CRM event logs; scheduler audits.",
            },
            {
                heading: "Challenges",
                content:
                    "Multi-team priorities; timezones; overlap edge cases.",
            },
            {
                heading: "Lessons",
                content:
                    "Testable slot logic and audit trails prevent regressions at scale.",
            },
        ],
    },
    {
        slug: "merekapade",
        title: "Prompt-to-Design Commerce MVP",
        summary:
            "Users generate wearable designs from prompts with live preview and saved sessions.",
        kpis: [
            "MVP in 8 weeks",
            "100+ testers",
            "3.4 designs/session",
        ],
        tags: ["AI", "Consumer", "Commerce"],
        tech: ["React", "Canvas API", "Supabase (Auth/RLS/Storage)", "GPT"],
        liveUrl: "https://merekapade.com",
        liveLabel: "Live Product",
        sections: [
            {
                heading: "Overview",
                content:
                    "A solo build exploring AI-assisted design → purchase flows with a friction-light canvas UI.",
            },
            {
                heading: "Context & Role",
                content:
                    "Solo PM/IC: market hypothesis, UX, MVP scope, validation loops.",
            },
            {
                heading: "Problem",
                content:
                    "Cold-start creativity; session persistence; safe prompts.",
            },
            {
                heading: "Objectives",
                content: "Fast ideation → preview; save/share; low latency.",
            },
            {
                heading: "Product Decisions",
                content:
                    "Prioritised latency and usability over advanced generation controls. Kept profiles RLS-secured for safety and portability.",
            },
            {
                heading: "Solution",
                content:
                    "React + Canvas customiser; GPT for ideation; Supabase Auth/RLS; order model (size/SKU/pricing); token accounting + retries.",
            },
            {
                heading: "Architecture",
                content:
                    "React FE ↔ Supabase (Auth/DB/Storage) ↔ Prompt service ↔ Order service.",
            },
            {
                heading: "Metrics & Impact",
                content:
                    "100+ testers; 3.4 designs per first session; qualitative feedback: playful & fast.",
            },
            {
                heading: "Evidence",
                content:
                    "Event logs (session length, saves); prompt error rates; order funnel.",
            },
            {
                heading: "Challenges",
                content:
                    "Prompt safety; rendering performance on low-end devices.",
            },
            {
                heading: "Lessons",
                content:
                    "Preview latency trumps model fanciness for novice users.",
            },
        ],
    },
    {
        slug: "community-infra",
        title: "The Third Place — Live Community Platform with Payments & Admin Panel",
        summary:
            "Shipped a full-stack community and events platform from zero to production — consumer app with Razorpay payments, GA4/GTM analytics, and a dedicated admin panel (Command Center) with RBAC, recurring events, and social posting.",
        kpis: [
            "118 commits (consumer)",
            "36 commits (admin)",
            "Live Razorpay payments",
            "42 PRs shipped",
        ],
        tags: ["Full-Stack", "Payments", "Analytics", "Product Build", "0→1"],
        tech: [
            "Next.js (SSR)",
            "TypeScript",
            "Supabase (Auth/RLS/Storage)",
            "Razorpay",
            "Resend",
            "GA4/GTM",
            "React",
            "Vite",
            "Tailwind",
            "Vercel",
        ],
        liveUrl: "https://mythirdplace.rapchai.com",
        liveLabel: "Live Product",
        sections: [
            {
                heading: "Overview",
                content:
                    "The Third Place is a live community and events platform — the idea that work and home aren't enough, people need shared spaces. I built both the consumer app and the admin panel (Command Center) from scratch, shipping real payment flows, analytics, and operational tooling into production.",
            },
            {
                heading: "Context & Role",
                content:
                    "Solo architect, PM, and IC. Built both applications end-to-end: consumer-facing Next.js app and React-based admin dashboard. 118 commits on the consumer app, 36 on admin, 42 PRs merged on GitHub.",
            },
            {
                heading: "Consumer App — What Shipped",
                content:
                    "Razorpay payment integration with idempotent sessions, orphaned payment cleanup, and cancellation guards. Payment confirmation emails via Resend. Short URLs for events (/e/:shortCode) and communities (/c/:slug). Image and video gallery with adaptive masonry layout. Post-signup name prompt modal for progressive profiling. GA4/GTM analytics covering auth events, e-commerce tracking, and community engagement. SEO meta tags with IST timezone handling and canonical URLs.",
            },
            {
                heading: "Command Center (Admin Panel)",
                content:
                    "Full admin dashboard with quick-create modals and at-a-glance status cards. RBAC with 5 distinct roles. Recurring event management with decoupled editing and bulk operations. Short URL management for marketing. Hootsuite social posting integration. Video gallery uploads. Payment session tracking and audit logging. Strict TypeScript, N+1 query fixes, and email templates.",
            },
            {
                heading: "Product Decisions",
                content:
                    "Chose Razorpay over Stripe for India-first payment UX — built idempotent session handling to prevent double charges. Implemented RLS at the Supabase layer so privacy is enforced at the database, not the UI. Decoupled recurring events from single events to allow independent editing without cascade bugs. Made audit logging a first-class requirement from Phase 1.",
            },
            {
                heading: "Architecture",
                content:
                    "Consumer: Next.js (SSR) → Supabase (PostgreSQL + Auth + RLS + Storage) → Razorpay → Resend → Vercel.\nAdmin: React + Vite → Supabase → Hootsuite API.\nShared Supabase instance with RLS policies governing consumer vs admin access patterns.",
            },
            {
                heading: "Metrics & Impact",
                content:
                    "Live in production processing real payments. 4 phases of admin panel completed. Full analytics pipeline from user signup through payment conversion. Gallery, events, and communities all operational with real user traffic.",
            },
            {
                heading: "Challenges & Trade-offs",
                content:
                    "Razorpay's webhook reliability required building orphaned session cleanup and polling UX as fallbacks. Balancing admin flexibility (5 roles) with simplicity — solved by progressive disclosure in the UI. GA4/GTM event taxonomy needed IST timezone normalization to avoid attribution errors on day boundaries.",
            },
            {
                heading: "Lessons",
                content:
                    "Payment integrations need defensive engineering — idempotency keys, orphaned session cleanup, and cancellation guards aren't optional. Audit logging from day one saves debugging time later. RLS-enforced privacy is more trustworthy than UI-layer permission checks.",
            },
        ],
    },
    {
        slug: "job-search-agent",
        title: "Job Search Agent — Multi-Agent AI System with Eval-Driven CI",
        summary:
            "Built a multi-agent system that converts job postings into complete application packs via Telegram — OCR ingestion, LLM-powered resume mutation with truthfulness guards, LaTeX compilation, and eval-gated CI preventing regressions.",
        kpis: [
            "222 tests passing",
            "39 commits",
            "CI gates green",
            "Production on Railway",
        ],
        tags: ["AI", "Agents", "Eval Frameworks", "Multi-Agent", "0→1"],
        tech: [
            "Python",
            "FastAPI",
            "OpenRouter LLMs",
            "LaTeX",
            "PostgreSQL",
            "Telegram Bot API",
            "Railway",
            "Google Drive API",
            "Google Calendar API",
        ],
        sections: [
            {
                heading: "Overview",
                content:
                    "A production multi-agent system that takes a job posting (URL or screenshot) and produces a complete application pack: tailored resume, cover letter, outreach drafts, and follow-up schedule. Deployed on Railway with a Telegram bot interface, eval-driven CI gating, and 222 passing tests.",
            },
            {
                heading: "Context & Role",
                content:
                    "Solo builder — architecture, implementation, eval framework, and deployment. 39 commits, 21+ Linear issues tracked, PRD with planner/executor/profile agent architecture. Phase 2 active (Oct 2025 – Apr 2026).",
            },
            {
                heading: "Problem",
                content:
                    "Job applications are repetitive but high-stakes: each requires a tailored resume, cover letter, and outreach strategy. Manual tailoring takes 30–60 minutes per application. Existing AI tools generate generic output with no quality guarantees — hallucinated skills, broken formatting, and no way to prevent regressions.",
            },
            {
                heading: "Agent Architecture",
                content:
                    "Three-agent system: Planner Agent parses job descriptions and identifies requirements, keywords, and match signals. Executor Agent mutates resume content within editable regions only — enforcing truthfulness guards that prevent fabricated skills or experience. Profile Agent maintains a canonical user profile that evolves across applications.\n\nAll agents orchestrated via OpenRouter with cost tracking per invocation.",
            },
            {
                heading: "Eval-Driven CI Gating",
                content:
                    "The core differentiator: every code change runs through an eval suite before merging. Metrics tracked: compile rate (LaTeX must produce valid PDF), forbidden claims detection (no hallucinated skills), edit region violations (mutations only in designated sections), cost per application (OpenRouter spend), and latency budgets.\n\n222 tests enforce these constraints. CI gates prevent regressions — a PR that increases forbidden claims or breaks compilation cannot merge.",
            },
            {
                heading: "Ingestion & Output Pipeline",
                content:
                    "Input: Telegram bot receives job posting URL or screenshot (OCR extraction). Processing: parse JD → match against profile → mutate resume → compile LaTeX (single-page enforcement) → generate outreach drafts (email, LinkedIn DM, referral ask). Output: compiled PDF uploaded to Google Drive, calendar event created for follow-up, escalation tiers for automated follow-up scheduling.",
            },
            {
                heading: "Product Decisions",
                content:
                    "Chose Telegram over web UI for zero-friction input — paste a link, get a pack. LaTeX over DOCX for precise formatting control and ATS compatibility. Editable regions over full-document mutation to enforce truthfulness — the LLM can only modify designated sections, never fabricate new experience. Eval-first development: wrote the eval framework before building the agents, so quality constraints shaped the architecture.",
            },
            {
                heading: "Architecture",
                content:
                    "Telegram webhook → FastAPI service → Agent orchestrator (Planner → Executor → Profile) → LaTeX compiler → Google Drive upload → Calendar event creation.\n\nPostgreSQL for application history and profile state. Railway for deployment with environment-based config.",
            },
            {
                heading: "Metrics & Impact",
                content:
                    "222 tests passing with CI gates enforced. 39 commits across the project. Production-deployed on Railway. Complete application pack generated from a single Telegram message. Eval framework catches forbidden claims, compilation failures, and edit violations before they reach production.",
            },
            {
                heading: "Challenges & Trade-offs",
                content:
                    "LLM output variance required building the eval framework first — without it, resume mutations would drift toward hallucination. LaTeX single-page enforcement needed iterative font/margin tuning per resume variant. Cost control: OpenRouter routing lets the system pick cheaper models for parsing while reserving expensive models for resume mutation.",
            },
            {
                heading: "Lessons",
                content:
                    "Eval frameworks aren't overhead — they're the product. Without CI-gated quality checks, LLM-powered systems degrade silently. Truthfulness guards must be architectural (editable regions), not just prompt-level. Telegram bots are underrated as production interfaces for personal tools.",
            },
        ],
    },
    {
        slug: "content-ops-automation",
        title: "Content Ops → Predictable, Measurable, Sprint-Driven",
        summary:
            "Jira workflows + analytics turned content delivery into a reliable machine.",
        kpis: [
            "−90% errors",
            "7-week predictable delivery",
            "−23% learner drop-offs",
        ],
        tags: ["Agile Ops", "Education", "Analytics"],
        tech: ["Jira", "Zapier", "Metabase", "Feedback tooling"],
        sections: [
            {
                heading: "Overview",
                content:
                    "Transformed content ops using standardised workflows, feedback loops and dashboards.",
            },
            {
                heading: "Context & Role",
                content:
                    "Cross-functional with content teams; process + tooling ownership.",
            },
            {
                heading: "Problem",
                content:
                    "Ad-hoc delivery; unclear ownership; recurring errors; poor visibility.",
            },
            {
                heading: "Objectives",
                content: "Predictability, quality, transparency.",
            },
            {
                heading: "Product Decisions",
                content:
                    "Defined DRIs and rituals; built dashboards for velocity and defects. Integrated learner feedback into sprint reviews for continuous improvement.",
            },
            {
                heading: "Solution",
                content:
                    "Jira workflows; sprint reviews; ownership matrix; feedback ingestion; Zapier + Metabase dashboards; 2-week cadence.",
            },
            {
                heading: "Architecture",
                content:
                    "Intake → Jira → Automation → Metabase dashboards → Review cadence.",
            },
            {
                heading: "Metrics & Impact",
                content:
                    "−90% errors; 7-week predictable delivery; −23% learner drop-offs.",
            },
            {
                heading: "Evidence",
                content:
                    "Burndowns; error trend charts; release cadence logs.",
            },
            {
                heading: "Challenges",
                content:
                    "Cultural change; initial slowdown with quality gates.",
            },
            {
                heading: "Lessons",
                content:
                    "Measurement + visibility → accountability; rituals compound.",
            },
        ],
    },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllSlugs(): string[] {
    return caseStudies.map((cs) => cs.slug);
}
