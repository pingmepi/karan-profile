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
            "+25% event→qualified lead",
            "40+ events/month self-serve",
            "Revenue impact within 4 months",
        ],
        tags: ["Growth Product", "Funnel Optimization", "SEO", "CRM Integration"],
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
        kpis: ["+20% lead quality", "25% faster reporting", "40% fewer CRM duplicates", "Single source of truth"],
        tags: ["Data Strategy", "Attribution", "Decision Infrastructure"],
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
            "1,000+ meetings/month automated",
            "25% faster lead→meeting",
            "Self-serve booking",
        ],
        tags: ["Platform Product", "Ops Efficiency", "Internal Tools"],
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
            "100+ early testers",
            "3.4 designs per session",
            "Prompt-to-purchase flow validated",
        ],
        tags: ["Generative AI", "Consumer Product", "Commerce"],
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
            "Shipped a full-stack community and events platform from zero to production — consumer app with Razorpay payments, GA4/GTM analytics, and a dedicated admin panel with RBAC, recurring events, and social posting.",
        kpis: [
            "3 platforms live in production",
            "Real payments processing",
            "End-to-end analytics pipeline",
            "5-role access control system",
        ],
        tags: ["Platform Product", "Payments", "Analytics", "0→1"],
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
                    "The Third Place is a live community and events platform — the idea that work and home aren't enough, people need shared spaces. I built three interconnected platforms from scratch: a consumer app for discovery and payments, an admin panel for operators, and a landing page that ties the ecosystem together.",
            },
            {
                heading: "The Ecosystem",
                content:
                    "Three platforms, one shared Supabase backend:\n\n• Consumer App (mythirdplace.rapchai.com) — Event discovery, community pages, Razorpay payments, GA4/GTM analytics\n• Admin Panel (admin.rapchai.com) — RBAC with 5 roles, event management, social posting, payment tracking, audit logging\n• Landing Page (rapchai.com) — Neo-brutalist ecosystem landing routing users to food ordering and community/events",
            },
            {
                heading: "Context & Role",
                content:
                    "Solo architect, PM, and IC. Built all three applications end-to-end — from database schema and RLS policies to frontend and deployment.",
            },
            {
                heading: "Consumer App — What Shipped",
                content:
                    "Razorpay payment integration with idempotent sessions, orphaned payment cleanup, and cancellation guards. Payment confirmation emails via Resend. Short URLs for events (/e/:shortCode) and communities (/c/:slug). Image and video gallery with adaptive masonry layout. Post-signup name prompt modal for progressive profiling. GA4/GTM analytics covering auth events, e-commerce tracking, and community engagement. SEO meta tags with IST timezone handling and canonical URLs.",
            },
            {
                heading: "Admin Panel — What Shipped",
                content:
                    "Full admin dashboard with quick-create modals and at-a-glance status cards. RBAC with 5 distinct roles. Recurring event management with decoupled editing and bulk operations. Short URL management for marketing. Hootsuite social posting integration. Video gallery uploads. Payment session tracking and audit logging.",
            },
            {
                heading: "Product Decisions",
                content:
                    "Chose Razorpay over Stripe for India-first payment UX — built idempotent session handling to prevent double charges. Implemented RLS at the Supabase layer so privacy is enforced at the database, not the UI. Decoupled recurring events from single events to allow independent editing without cascade bugs. Made audit logging a first-class requirement from Phase 1.",
            },
            {
                heading: "Architecture",
                content:
                    "Consumer: Next.js (SSR) → Supabase (PostgreSQL + Auth + RLS + Storage) → Razorpay → Resend → Vercel.\nAdmin: React + Vite → Supabase → Hootsuite API.\nLanding: Next.js 16 + Framer Motion → Vercel.\nShared Supabase instance with RLS policies governing consumer vs admin access patterns.",
            },
            {
                heading: "Metrics & Impact",
                content:
                    "Three platforms live in production. Consumer app processing real payments with full analytics pipeline from signup through payment conversion. Admin panel operational across all 4 phases. Gallery, events, and communities all serving real user traffic.",
            },
            {
                heading: "Challenges & Trade-offs",
                content:
                    "Razorpay's webhook reliability required building orphaned session cleanup and polling UX as fallbacks. Balancing admin flexibility (5 roles) with simplicity — solved by progressive disclosure in the UI. GA4/GTM event taxonomy needed IST timezone normalization to avoid attribution errors on day boundaries.",
            },
            {
                heading: "Lessons",
                content:
                    "Payment integrations need defensive engineering — idempotency keys, orphaned session cleanup, and cancellation guards aren't optional. Audit logging from day one saves debugging time later. RLS-enforced privacy is more trustworthy than UI-layer permission checks. Shipping three interconnected platforms on a shared backend forces you to think about access patterns from day one.",
            },
        ],
    },
    {
        slug: "job-search-agent",
        title: "Job Search Agent — Multi-Agent AI System with Eval-Driven CI",
        summary:
            "Built a multi-agent system that converts job postings into complete application packs via Telegram — OCR ingestion, LLM-powered resume mutation with truthfulness guards, LaTeX compilation, and eval-gated CI preventing regressions.",
        kpis: [
            "Multi-agent orchestration",
            "Eval-gated quality control",
            "Zero hallucinated claims",
            "Telegram → full application pack",
        ],
        tags: ["AI Product", "Multi-Agent Systems", "Quality Engineering", "0→1"],
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
                    "Solo builder — owned architecture, implementation, eval framework, and deployment. PRD with planner/executor/profile agent architecture. 21+ Linear issues planned and shipped. Phase 2 active (Oct 2025 – Apr 2026).",
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
                    "The core differentiator: every change runs through an eval suite before shipping. Metrics tracked: compile rate (LaTeX must produce valid PDF), forbidden claims detection (no hallucinated skills), edit region violations (mutations only in designated sections), cost per application (OpenRouter spend), and latency budgets.\n\nEval gates prevent regressions — any change that increases forbidden claims or breaks output quality cannot ship.",
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
                    "Production-deployed and generating complete application packs from a single Telegram message. Eval framework catches forbidden claims, compilation failures, and edit violations before they reach users. Quality gates enforced on every change.",
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
        slug: "mental-health-platform",
        title: "Website Rebuild for a Mental Health Platform",
        summary:
            "Full website rebuild for a mental health startup — SEO implementation, lead capture quiz, structured content architecture, and deployment pipeline.",
        kpis: [
            "Full platform shipped",
            "SEO-first architecture",
            "Lead capture via quiz",
            "Scoped in 3 priority bands",
        ],
        tags: ["Client Delivery", "SEO", "Lead Generation", "0→1"],
        tech: ["Next.js", "JavaScript", "SEO", "Sitemap/Robots.txt"],
        sections: [
            {
                heading: "Overview",
                content:
                    "A mental health platform needed their website rebuilt from scratch — better SEO, a lead capture mechanism, and a structured content architecture that could scale.",
            },
            {
                heading: "Context & Role",
                content:
                    "Freelance engagement. Owned the full rebuild — scope definition, technical architecture, implementation, and deployment.",
            },
            {
                heading: "What Shipped",
                content:
                    "Complete website rebuild with SEO-first architecture — sitemap, robots.txt, meta tags, structured data. Mental Fitness Quiz as the primary lead capture mechanism. Content architecture designed for scalability. Delivered in 3 priority bands with clear scope boundaries.",
            },
            {
                heading: "Product Decisions",
                content:
                    "Prioritised SEO fundamentals before visual polish — the site needed to be discoverable before it needed to be pretty. Designed the quiz as a progressive engagement tool rather than a gated form.",
            },
            {
                heading: "Lessons",
                content:
                    "Scope-of-work documents with priority bands prevent scope creep and set clear expectations. SEO implementation from day one compounds over time.",
            },
        ],
    },
    {
        slug: "quant-trading-platform",
        title: "Quant Trading Platform with Broker Integrations",
        summary:
            "Python-based trading platform with broker OAuth/TOTP authentication, order execution pipeline, and automated smoke testing — containerized with Docker.",
        kpis: [
            "Multi-broker authentication",
            "Automated order execution",
            "Pre-deploy smoke testing",
            "Production-ready infra",
        ],
        tags: ["Client Delivery", "Fintech", "Trading Systems"],
        tech: ["Python", "Docker", "Shell", "OAuth", "REST APIs"],
        sections: [
            {
                heading: "Overview",
                content:
                    "A fintech client needed a quant trading platform that could authenticate with Indian brokers, execute orders programmatically, and run automated smoke tests to verify connectivity and order flow.",
            },
            {
                heading: "Context & Role",
                content:
                    "Freelance engagement. Owned architecture, broker integration, authentication flows, and deployment infrastructure.",
            },
            {
                heading: "What Shipped",
                content:
                    "Broker authentication via OAuth and TOTP (supporting direct-connect flows). Order placement pipeline with session management. Automated smoke testing suite for connectivity and order validation. Containerized for reproducible deployment across environments.",
            },
            {
                heading: "Product Decisions",
                content:
                    "Built authentication as a modular layer — new brokers can be added without touching the order pipeline. Smoke tests run on every deployment to catch broker API changes early. Containerized from day one to avoid environment drift.",
            },
            {
                heading: "Challenges",
                content:
                    "Indian broker APIs have inconsistent auth flows — some use OAuth, others TOTP, some both. Built an abstraction layer that normalizes these into a single session interface.",
            },
            {
                heading: "Lessons",
                content:
                    "Financial APIs need defensive engineering — session timeouts, retry logic, and smoke tests aren't optional. Modular auth layers pay off when integrating multiple providers.",
            },
        ],
    },
    {
        slug: "n8n-workflows",
        title: "90+ Automation Workflows — AI Agents, Sales, Ops",
        summary:
            "Production workflow library running on self-hosted n8n — AI agents, sales automation, email orchestration, calendar management, social posting, and web scrapers. Eliminates 80+ hours/week of manual ops.",
        kpis: [
            "90+ production workflows",
            "80+ hrs/week ops eliminated",
            "AI agent orchestration",
            "Cross-team automation",
        ],
        tags: ["Automation Strategy", "AI Agents", "Ops Efficiency"],
        tech: ["n8n", "Python", "Docker", "AWS EC2", "Various APIs"],
        sections: [
            {
                heading: "Overview",
                content:
                    "A library of 90+ production workflows on a self-hosted n8n instance (EC2 + Docker Compose), built across two companies and independent consulting. Covers everything from AI agents to CRM automation to web scrapers.",
            },
            {
                heading: "AI Agent Workflows",
                content:
                    "Calling Agent for automated outbound calls, Planner Agent for task decomposition, Restaurant Booking Agent for reservation management. Content generation workflows using LLMs for social media and email.",
            },
            {
                heading: "Sales & Marketing",
                content:
                    "Lead routing and lifecycle journeys across CRM, WhatsApp, and email. Calendar management and meeting scheduling. UTM tracking and attribution pipeline feeding into Metabase dashboards.",
            },
            {
                heading: "Operations",
                content:
                    "Web scrapers for competitor monitoring and data collection. Social media automation (X/Twitter, Hootsuite). Google Drive workflow automation. Error handling with retries, logging, and alerting — no silent failures.",
            },
            {
                heading: "Impact",
                content:
                    "At Miles Education ($30M ARR): eliminated 80+ hours/week of manual ops across sales, marketing, and alumni teams. Self-hosted architecture keeps data in-house and costs predictable.",
            },
        ],
    },
    {
        slug: "voice-ai-kyc",
        title: "Voice AI Tool Server for Identity Verification",
        summary:
            "VAPI voice AI integration that walks users through identity verification and KYC flows over a phone call — proof-of-concept for voice-first fintech onboarding.",
        kpis: [
            "Voice-first onboarding",
            "Hands-free KYC flow",
            "Reusable tool server pattern",
            "Shipped",
        ],
        tags: ["Voice AI", "Fintech", "Onboarding UX"],
        tech: ["VAPI", "REST APIs", "Node.js"],
        sections: [
            {
                heading: "Overview",
                content:
                    "A tool server that integrates with VAPI voice AI to conduct identity verification and KYC flows entirely over voice. Built as a proof-of-concept for fintech companies exploring voice-first onboarding.",
            },
            {
                heading: "How It Works",
                content:
                    "VAPI handles the voice interaction and speech recognition. The tool server orchestrates the verification flow — collecting identity details, validating against mock data, and routing through verification steps. Designed as a reusable pattern for any voice-driven workflow.",
            },
            {
                heading: "Why Voice",
                content:
                    "Many KYC users are uncomfortable with forms or have accessibility needs. Voice removes friction and makes verification accessible to a wider audience. The tool server pattern means the same backend can power multiple voice workflows.",
            },
        ],
    },
    {
        slug: "void-app",
        title: "The Void — Privacy-First Voice Notes That Disappear",
        summary:
            "Flutter app for ephemeral voice notes — record a thought, set a countdown, and it's gone. Encrypted local storage, no cloud, no accounts.",
        kpis: [
            "Zero cloud dependency",
            "Privacy-by-architecture",
            "Self-destructing recordings",
            "No accounts needed",
        ],
        tags: ["Mobile Product", "Privacy-First", "Consumer"],
        tech: ["Flutter", "Dart", "Encrypted Storage"],
        sections: [
            {
                heading: "Overview",
                content:
                    "A mobile app for people who want to think out loud without creating a permanent record. Record a voice note, set a countdown timer, and it self-destructs. No cloud sync, no accounts, no data leaving the device.",
            },
            {
                heading: "Design Philosophy",
                content:
                    "Most note-taking apps optimize for permanence. The Void optimizes for impermanence — the freedom to capture a fleeting thought without the anxiety of it being stored, synced, or searchable forever.",
            },
            {
                heading: "Technical Approach",
                content:
                    "All recordings stored in encrypted local storage on the device. Countdown timer triggers permanent deletion — no recovery, no trash folder. No network calls, no analytics, no user accounts. Privacy isn't a feature, it's the architecture.",
            },
        ],
    },
    {
        slug: "tribeca-dashboard",
        title: "KPI Dashboard for Business Operations",
        summary:
            "Python analytics dashboard with KPI strips, trend charts, and multi-bar visualizations — designed for operations teams who need a daily business snapshot.",
        kpis: [
            "At-a-glance business health",
            "Automated daily snapshots",
            "Period-over-period trends",
            "No analyst dependency",
        ],
        tags: ["Decision Infrastructure", "Analytics", "Ops Visibility"],
        tech: ["Python", "Data Visualization"],
        sections: [
            {
                heading: "Overview",
                content:
                    "A dashboard built for operations teams who need to check business health every morning without digging through spreadsheets or waiting for a BI team to build reports.",
            },
            {
                heading: "What It Shows",
                content:
                    "KPI strip cards with current values and period-over-period change. Trend charts showing directional movement. Multi-bar charts for comparative analysis across business units or time periods.",
            },
            {
                heading: "Why Custom-Built",
                content:
                    "Off-the-shelf BI tools require SQL knowledge or analyst support for every new view. This dashboard is opinionated — it shows exactly what the ops team decided matters, updated automatically, with no query writing required.",
            },
        ],
    },
    {
        slug: "content-ops-automation",
        title: "Content Ops → Predictable, Measurable, Sprint-Driven",
        summary:
            "Jira workflows + analytics turned content delivery into a reliable machine.",
        kpis: [
            "90% error reduction",
            "7-week predictable delivery",
            "23% fewer learner drop-offs",
            "Sprint-driven content ops",
        ],
        tags: ["Process Design", "Ops Efficiency", "Education"],
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
    {
        slug: "job-search-agent",
        title: "Webhook-First Job Search Agent",
        summary:
            "Telegram-vetted job intake flows through a multi-agent system that generates tailored resumes, outreach drafts, structured reports, and Drive-organized artifacts.",
        kpis: [
            "Webhook-first intake",
            "Railway deployed",
            "Drive artifact packs",
            "CI eval gating",
        ],
        tags: ["AI Workflows", "Automation", "Eval Systems", "Recruiting Ops"],
        tech: [
            "FastAPI",
            "Telegram",
            "PostgreSQL",
            "Google Drive",
            "OCR",
            "Railway",
            "Eval Fixtures",
        ],
        sections: [
            {
                heading: "Overview",
                content:
                    "Built a Telegram webhook pipeline that turns vetted job posts into tailored application artifacts and records run state for each run.",
            },
            {
                heading: "Context & Role",
                content:
                    "Solo builder: product scope, pipeline orchestration, deployment, and quality gates.",
            },
            {
                heading: "Problem",
                content:
                    "Manual application tailoring is slow and inconsistent.",
            },
            {
                heading: "Objectives",
                content:
                    "Accept vetted intake, generate tailored collateral end-to-end, keep outputs auditable, and gate changes with deterministic evals.",
            },
            {
                heading: "Product Decisions",
                content:
                    "Switched intake to webhooks instead of polling. Moved from SQLite to PostgreSQL for concurrent webhook processing. Kept Google Drive as the artifact surface so every run lands in a predictable folder.",
            },
            {
                heading: "Solution",
                content:
                    "Telegram webhook → routing/orchestration → resume tailoring + optional outreach drafts + markdown report → Drive upload. Added run logging, webhook event lifecycle tracking, replay tooling, and follow-up detection/generation paths.",
            },
            {
                heading: "Architecture",
                content:
                    "Telegram webhook → FastAPI on Railway → PostgreSQL state/logs → LLM/OCR pipeline → Drive artifacts + follow-up jobs.",
            },
            {
                heading: "Metrics & Impact",
                content:
                    "Railway deployment. Each run produces a tailored resume PDF, optional outreach drafts, a structured application report, and a per-job Drive folder. Releases are checked against curated eval fixtures.",
            },
            {
                heading: "Evidence",
                content:
                    "Webhook event lifecycle tables, per-step run logs, replay CLI, Drive upload integration, CI gate, and deployed health endpoint.",
            },
            {
                heading: "Challenges & Trade-offs",
                content:
                    "Concurrency forced a SQLite → PostgreSQL move. Headless Google OAuth for Drive/Calendar required deployment-friendly token handling.",
            },
            {
                heading: "Lessons",
                content:
                    "The pipeline treats artifacts, state transitions, evals, webhooks, and audit trails as first-class.",
            },
        ],
    },
    {
        slug: "photo-sorter",
        title: "Photo Sorting Pipeline with Ollama-Routed Review States",
        summary:
            "Built custom photo ingest, dedupe, and search infrastructure with worker-local Ollama classification, ordered model fallback, and confidence-based routing into review states.",
        kpis: [
            "Qwen → LLaVA fallback",
            "Confidence-routed review",
            "Hash-based dedupe",
            "PhotoPrism runtime path",
        ],
        tags: ["Vision Systems", "Infra", "Search", "Human-in-the-Loop"],
        tech: [
            "Python",
            "FastAPI",
            "SQLite/FTS5",
            "Ollama",
            "Terraform",
            "Ansible",
            "PhotoPrism",
        ],
        sections: [
            {
                heading: "Overview",
                content:
                    "Started as a custom system for turning unsorted photos into structured, searchable records. The pipeline now classifies locally with Ollama, routes low-confidence outputs for review, and uses PhotoPrism for the primary library/frontend in the current runtime guidance.",
            },
            {
                heading: "Context & Role",
                content:
                    "Built the ingest pipeline, worker/app topology, deploy path, and current runtime boundary.",
            },
            {
                heading: "Problem",
                content:
                    "Raw photo dumps are hard to search, duplicate-heavy, and too noisy for fully automatic classification.",
            },
            {
                heading: "Objectives",
                content:
                    "Process unsorted photos, classify them locally, and keep low-confidence results reviewable.",
            },
            {
                heading: "Product Decisions",
                content:
                    "Ollama stays on the worker VM with ordered fallback models. Confidence thresholds route outputs into published (≥0.80), needs review (≥0.50), or rejected states. Current runtime guidance uses PhotoPrism on the worker VM as the primary library/frontend.",
            },
            {
                heading: "Solution",
                content:
                    "Worker pipeline computes hashes, skips duplicates, runs image classification through worker-local Ollama, writes sidecar JSON and DB metadata, then exposes search/review flows via FastAPI + SQLite FTS5. Current runtime guidance keeps local Ollama and uses PhotoPrism for the primary library/frontend.",
            },
            {
                heading: "Architecture",
                content:
                    "Ingest request → worker pipeline → hash dedupe → Ollama classification (qwen2.5vl:3b with llava:7b fallback) → confidence routing → metadata store/search UI or PhotoPrism runtime.",
            },
            {
                heading: "Metrics & Impact",
                content:
                    "Deployed smoke checks passed for the app and worker services. Low-confidence outputs are explicitly routed for human review instead of silently accepted. The runtime was simplified around the higher-memory worker VM.",
            },
            {
                heading: "Evidence",
                content:
                    "Worker fallback logs, confidence-gating tests, deployment verification docs, and active PhotoPrism/Ollama runtime documentation.",
            },
            {
                heading: "Challenges & Trade-offs",
                content:
                    "NFS between app and worker hosts was environment-sensitive, and local-model reliability required fallback handling.",
            },
            {
                heading: "Lessons",
                content:
                    "Current runtime guidance keeps Ollama on the worker VM and PhotoPrism as the primary library/frontend.",
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
