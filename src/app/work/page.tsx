import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Work",
    description:
        "Shipped production systems — AI agents, payment infrastructure, growth systems, platform builds, and automation workflows.",
    alternates: { canonical: "/work" },
};

const systems = [
    {
        title: "Job Search Agent",
        domain: "AI & Multi-Agent Systems",
        stack: "Python · FastAPI · OpenRouter · LaTeX · Telegram · Railway",
        impact: "222 tests with eval CI gates in production",
        description:
            "Multi-agent system converting job postings into complete application packs — OCR ingestion, LLM resume mutation with truthfulness guards, and eval-gated CI preventing regressions.",
        slug: "job-search-agent",
    },
    {
        title: "The Third Place — Community Platform",
        domain: "Full-Stack Product Build",
        stack: "Next.js · Supabase · Razorpay · GA4/GTM · Resend",
        impact: "Live with payments, 118 commits, 42 PRs shipped",
        description:
            "Community and events platform with Razorpay payment flows, GA4/GTM analytics, and a full admin panel (Command Center) with RBAC, recurring events, and social posting.",
        slug: "community-infra",
    },
    {
        title: "Event Funnels & SEO-first Event CMS",
        domain: "Growth Systems",
        stack: "Strapi · Next.js · n8n · WebEngage · WABA · GA4",
        impact: "+90% registrations, significant revenue impact",
        description:
            "Redesigned event journeys and shipped an SEO-first Event CMS integrated with CRM & Zoom to improve registrations and reduce ops overhead.",
        slug: "event-funnels-cms",
    },
    {
        title: "Multi-Tenant Scheduling Microservice",
        domain: "Platform Builds",
        stack: "Next.js · Supabase (Auth/RLS) · n8n · Webhooks · CRM",
        impact: "70% ops reduction, 1,000+ meetings/mo",
        description:
            "Calendly-style scheduling service with dynamic slot logic, CRM sync, and automated reminders. Reused across 3 teams.",
        slug: "scheduling-at-scale",
    },
    {
        title: "Martech Revamp for Attribution Accuracy",
        domain: "Marketing Orchestration",
        stack: "GA4 · Netcore · HubSpot · n8n · Postgres · Metabase",
        impact: "+20% lead quality, 25% faster reporting",
        description:
            "Re-architected GA4/Netcore/HubSpot/Metabase for clean attribution, faster reporting, and better lead quality.",
        slug: "martech-revamp-attribution",
    },
    {
        title: "Prompt-to-Design Commerce MVP",
        domain: "AI & Consumer Product",
        stack: "React · Canvas API · Supabase · OpenAI",
        impact: "MVP in 8 weeks, 100+ testers, 3.4 designs/session",
        description:
            "AI-powered custom apparel platform — users describe designs in words, the system generates and previews them on a real-time canvas.",
        slug: "merekapade",
    },
    {
        title: "Content Ops Automation",
        domain: "Agile Operations",
        stack: "Jira · Zapier · Metabase · Feedback tooling",
        impact: "-90% errors, 7-week predictable delivery",
        description:
            "Transformed content ops using standardised Jira workflows, sprint-based tracking, and analytics dashboards.",
        slug: "content-ops-automation",
    },
];

export default function WorkPage() {
    return (
        <main className="pt-24 pb-16 section-gap grid-visible min-h-screen">
            {/* Page Header */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 mb-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl geo-underline mb-6">
                    Work
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-2xl">
                    Shipped production systems. AI agents first, then full-stack builds, growth infrastructure, and automation.
                </p>
            </div>

            {/* Systems Grid */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {systems.map((system, i) => (
                    <Link
                        key={system.title}
                        href={`/work/${system.slug}`}
                        className={`group brutal-card p-6 md:p-8 flex flex-col ${i % 2 === 0 ? "" : "brutal-card-klein"
                            }`}
                    >
                        {/* Domain tag */}
                        <span className="inline-block font-mono text-xs uppercase tracking-widest text-klein dark:text-bauhaus mb-4 border-b-2 border-klein dark:border-bauhaus pb-1">
                            {system.domain}
                        </span>

                        <h2 className="text-xl md:text-2xl mb-3">{system.title}</h2>

                        <p className="font-body text-sm text-muted-foreground mb-4">
                            {system.description}
                        </p>

                        {/* Stack */}
                        <div className="font-mono text-xs text-muted-foreground mb-3">
                            {system.stack}
                        </div>

                        {/* Impact */}
                        <div className="border-t-2 border-foreground pt-3 mt-auto">
                            <span className="font-display font-bold text-signal text-sm">
                                {system.impact}
                            </span>
                        </div>

                        {/* CTA */}
                        <div className="mt-4 flex items-center gap-2 font-display font-bold text-sm text-klein dark:text-bauhaus group-hover:gap-3 transition-all duration-150">
                            View case study
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
