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
        title: "Community Infra — Events, Badges, Hosts, Referrals",
        summary: "RBAC-first architecture with privacy-centric visibility.",
        kpis: ["Decoupled role/badge logic", "Closed beta live"],
        tags: ["Platform", "Community", "Privacy UX"],
        tech: ["Supabase", "Next.js", "RBAC", "Admin tools"],
        sections: [
            {
                heading: "Overview",
                content:
                    "Infra for communities to run events with assigned hosts, badges, and optional participant visibility.",
            },
            {
                heading: "Context & Role",
                content: "Architect & PM; admin-only edits by design.",
            },
            {
                heading: "Problem",
                content:
                    "Role/badge coupling; visibility/privacy requirements; host workflows.",
            },
            {
                heading: "Objectives",
                content:
                    "Separation of concerns; admin-only edits; privacy by default.",
            },
            {
                heading: "Product Decisions",
                content:
                    "Badge system separate from roles; one host per event; admin assignment. Visibility flags enforced at API layer; no participant data sent by default.",
            },
            {
                heading: "Solution",
                content:
                    "RBAC model; visibility filters; Google Sign-In; preferences endpoint; storage-efficient activity logging.",
            },
            {
                heading: "Architecture",
                content:
                    "Supabase (RLS) + Next.js; endpoints for events/hosts/badges; admin console.",
            },
            {
                heading: "Metrics & Impact",
                content:
                    "Clean governance; beta usage across growing communities.",
            },
            {
                heading: "Evidence",
                content: "ERD; RLS policies; privacy tests.",
            },
            {
                heading: "Challenges",
                content:
                    "Balancing visibility with privacy and safety.",
            },
            {
                heading: "Lessons",
                content:
                    "Make privacy choices backend-configurable and overridable.",
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
