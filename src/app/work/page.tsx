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
        domain: "AI Product",
        stack: "FastAPI · Telegram · PostgreSQL · Google Drive · Railway",
        impact: "Telegram webhook pipeline with eval fixtures",
        description:
            "A Telegram webhook pipeline that produces tailored application artifacts, run logs, and Drive-organized outputs.",
        slug: "job-search-agent",
    },
    {
        title: "The Third Place — Community Platform",
        domain: "Platform Product",
        stack: "Next.js · Supabase · Razorpay · GA4/GTM · Resend",
        impact: "3 platforms live, processing real payments",
        description:
            "Community and events platform for local communities — discover events, pay for experiences, and manage everything from a single admin panel. Live with real users and real money.",
        slug: "community-infra",
    },
    {
        title: "Event Funnels & SEO-first Event CMS",
        domain: "Growth Product",
        stack: "Strapi · Next.js · n8n · WebEngage · WABA · GA4",
        impact: "+90% registrations, revenue impact within 4 months",
        description:
            "Redesigned event journeys and shipped a self-serve Event CMS. Removed friction from registration, fixed attribution, and enabled 40+ events/month without manual ops.",
        slug: "event-funnels-cms",
    },
    {
        title: "Multi-Tenant Scheduling Microservice",
        domain: "Platform Product",
        stack: "Next.js · Supabase (Auth/RLS) · n8n · Webhooks · CRM",
        impact: "70% ops reduction, 1,000+ meetings/month automated",
        description:
            "Self-serve booking system replacing manual scheduling across sales and academic teams. Dynamic slot logic, CRM sync, and automated reminders.",
        slug: "scheduling-at-scale",
    },
    {
        title: "Martech Revamp for Attribution Accuracy",
        domain: "Data Strategy",
        stack: "GA4 · Netcore · HubSpot · n8n · Postgres · Metabase",
        impact: "+20% lead quality, single source of truth",
        description:
            "Rebuilt the data path from tracking to dashboards so teams could trust the numbers. Clean attribution, deduplicated CRM, and self-serve reporting.",
        slug: "martech-revamp-attribution",
    },
    {
        title: "Prompt-to-Design Commerce MVP",
        domain: "Generative AI",
        stack: "React · Canvas API · Supabase · OpenAI",
        impact: "MVP in 8 weeks, 100+ testers, 3.4 designs/session",
        description:
            "Describe a t-shirt design in words, see it on a real-time canvas instantly. Exploring prompt-to-purchase flows for custom merchandise.",
        slug: "merekapade",
    },
    {
        title: "Content Ops Automation",
        domain: "Process Design",
        stack: "Jira · Zapier · Metabase · Feedback tooling",
        impact: "90% error reduction, 7-week predictable delivery",
        description:
            "Turned ad-hoc content delivery into a sprint-driven machine. Standardized workflows, feedback loops, and dashboards replaced guesswork with predictability.",
        slug: "content-ops-automation",
    },
    {
        title: "Photo Sorting Pipeline",
        domain: "Platform Builds",
        stack: "Python · FastAPI · SQLite FTS5 · Ollama",
        impact: "Confidence-routed classification with local model chain",
        description:
            "Photo ingest, dedupe, and search infrastructure with worker-local Ollama classification, model fallback, and confidence-based routing into publish, review, and reject states.",
        slug: "photo-sorter",
    },
];

export default function WorkPage() {
    return (
        <main className="pt-24 pb-16 section-gap grid-visible min-h-screen">
            <div className="max-w-5xl mx-auto px-6 md:px-12 mb-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl geo-underline mb-6">
                    Work
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-2xl">
                    Shipped production systems. AI agents first, then full-stack builds, growth infrastructure, and automation.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {systems.map((system, i) => (
                    <Link
                        key={system.title}
                        href={`/work/${system.slug}`}
                        className={`group brutal-card p-6 md:p-8 flex flex-col ${i % 2 === 0 ? "" : "brutal-card-klein"
                            }`}
                    >
                        <span className="inline-block font-mono text-xs uppercase tracking-widest text-klein dark:text-bauhaus mb-4 border-b-2 border-klein dark:border-bauhaus pb-1">
                            {system.domain}
                        </span>

                        <h2 className="text-xl md:text-2xl mb-3">{system.title}</h2>

                        <p className="font-body text-sm text-muted-foreground mb-4">
                            {system.description}
                        </p>

                        <div className="font-mono text-xs text-muted-foreground mb-3">
                            {system.stack}
                        </div>

                        <div className="border-t-2 border-foreground pt-3 mt-auto">
                            <span className="font-display font-bold text-signal text-sm">
                                {system.impact}
                            </span>
                        </div>

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
