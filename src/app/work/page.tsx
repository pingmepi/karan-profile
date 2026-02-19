import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work",
    description:
        "Shipped production systems — marketing orchestration, growth infrastructure, platform builds, and AI workflows.",
    alternates: { canonical: "/work" },
};

const systems = [
    {
        title: "Event-Driven Comms Infrastructure",
        domain: "Marketing Orchestration",
        stack: "CRM · WhatsApp · Analytics · Webhooks",
        impact: "Automated 70% of event communications pipeline",
        description:
            "Built event-driven comms infra across CRM, WhatsApp, and analytics platforms. Replaced manual broadcast workflows with trigger-based orchestration.",
    },
    {
        title: "Growth Event Engine",
        domain: "Growth Systems",
        stack: "UTM Framework · Funnel Instrumentation · Attribution",
        impact: "₹9M revenue impact via funnel optimization",
        description:
            "Designed the event tracking engine powering growth funnels — UTM normalization, multi-touch attribution, and conversion instrumentation end-to-end.",
    },
    {
        title: "CMS & Scheduling Platform",
        domain: "Platform Builds",
        stack: "Strapi · Next.js · State Machines · Cron",
        impact: "Enabled 40+ events/month at scale",
        description:
            "Shipped CMS platforms and scheduling services with workflow state machines. Operator-level tooling for content, events, and automation.",
    },
    {
        title: "LLM Orchestration Pipelines",
        domain: "AI Workflows",
        stack: "LLM Chains · NLP2SQL · Generative Pipelines",
        impact: "25% faster reporting via consolidated analytics",
        description:
            "Built LLM orchestration layers, NLP-to-SQL query interfaces, and generative pipelines for content and data workflows.",
    },
];

export default function WorkPage() {
    return (
        <main className="pt-24 pb-16 section-gap grid-visible min-h-screen">
            {/* Page Header */}
            <div className="max-w-5xl mx-auto mb-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl geo-underline mb-6">
                    Work
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-2xl">
                    Only shipped, production systems. Structured, operator-level
                    documentation. No philosophy. No unfinished experiments.
                </p>
            </div>

            {/* Systems Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {systems.map((system, i) => (
                    <div
                        key={system.title}
                        className={`brutal-card p-6 md:p-8 ${i % 2 === 0 ? "" : "brutal-card-klein"
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
                    </div>
                ))}
            </div>
        </main>
    );
}
