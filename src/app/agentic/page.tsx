import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Agentic",
    description:
        "Why structure precedes autonomy — mapping systems to agentic capabilities and what I'm exploring now.",
    alternates: { canonical: "/agentic" },
};

const sections = [
    {
        number: "01",
        title: "Why Structure Precedes Autonomy",
        primitive: "△",
        content:
            "Autonomous systems need guardrails before they get freedom. Every agentic workflow I build starts with state machines, evaluation gates, and cost containment — not prompt engineering. Structure is what makes autonomy safe.",
    },
    {
        number: "02",
        title: "Mapping Systems to Agentic Capabilities",
        primitive: "□",
        content:
            "The infrastructure I've built — event-driven comms, CRM orchestration, funnel instrumentation — maps directly to agentic patterns. Multi-step workflows become agent chains. Attribution pipelines become evaluation frameworks. The transition is structural, not conceptual.",
    },
    {
        number: "03",
        title: "What I'm Exploring Now",
        primitive: "○",
        content:
            "Multi-agent orchestration with evaluation gating. Cost-controlled inference pipelines. Telegram-based agent interfaces. RAG frameworks with hard and soft evals. The goal: agents that can be trusted in production, not just demos.",
    },
];

export default function AgenticPage() {
    return (
        <main className="pt-24 pb-16 section-gap min-h-screen">
            <div className="max-w-4xl mx-auto mb-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl geo-underline mb-6">
                    Agentic
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-xl">
                    Technical. Short. No philosophy here — that lives in{" "}
                    <Link href="/about" className="text-klein dark:text-bauhaus underline">
                        /about
                    </Link>
                    .
                </p>
            </div>

            {/* Three sections with geometric primitives */}
            <div className="max-w-4xl mx-auto space-y-16">
                {sections.map((section) => (
                    <div
                        key={section.number}
                        className="border-t-2 border-foreground pt-8"
                    >
                        <div className="flex items-start gap-6">
                            {/* Geometric primitive */}
                            <div className="shrink-0 w-16 h-16 flex items-center justify-center border-2 border-foreground text-klein text-3xl font-display">
                                {section.primitive}
                            </div>

                            <div>
                                <span className="font-mono text-xs text-muted-foreground">
                                    {section.number}
                                </span>
                                <h2 className="text-2xl md:text-3xl mb-4">{section.title}</h2>
                                <p className="font-body text-base text-muted-foreground max-w-2xl leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
