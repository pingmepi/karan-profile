import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About",
    description:
        "Professional arc, philosophy, and the belief behind MyThirdPlace — structure over noise, autonomy with guardrails, and the third place.",
    alternates: { canonical: "/about" },
};

const arcSteps = [
    { label: "Execution", shape: "○" },
    { label: "Systems", shape: "□" },
    { label: "Orchestration", shape: "△" },
    { label: "Product Bets", shape: "□" },
    { label: "AI Direction", shape: "○" },
];

const pillars = [
    {
        number: "01",
        title: "Structure Over Noise",
        shadow: "shadow-brutal",
        content:
            "Clarity over ambiguity. Instrumented systems over ad-hoc processes. State transitions designed, not discovered. Every system I build starts with the question: what are the states, and what triggers the transitions?",
    },
    {
        number: "02",
        title: "Autonomy With Guardrails",
        shadow: "shadow-brutal-klein",
        content:
            "Autonomy is interesting. Chaos is not. Evaluation gates, cost containment, failure boundaries — these are not constraints on autonomy, they're what make it possible. This belief drives every agentic system I build.",
    },
    {
        number: "03",
        title: "MyThirdPlace",
        shadow: "shadow-brutal-bauhaus",
        content:
            "Work and home are not enough. My third place is on two wheels and behind a lens — motorcycling and photography are where I reset, see differently, and find clarity. That lived experience led to building MyThirdPlace — a platform for people to find and build their own third places.",
    },
];

export default function AboutPage() {
    return (
        <main className="pt-24 pb-16 section-gap min-h-screen">
            <div className="max-w-5xl mx-auto mb-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl geo-underline mb-6">
                    About
                </h1>
            </div>

            {/* ──────── A. Professional Arc ──────── */}
            <section className="max-w-5xl mx-auto mb-24">
                <h2 className="text-2xl md:text-3xl geo-underline mb-10">
                    Professional Arc
                </h2>

                {/* Geometric timeline */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    {arcSteps.map((step, i) => (
                        <div key={step.label} className="flex items-center gap-4 md:gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-foreground flex items-center justify-center text-klein text-xl md:text-2xl font-display">
                                    {step.shape}
                                </div>
                                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                                    {step.label}
                                </span>
                            </div>

                            {/* Arrow connector (skip last) */}
                            {i < arcSteps.length - 1 && (
                                <div className="w-6 md:w-10 h-0.5 bg-foreground" />
                            )}
                        </div>
                    ))}
                </div>

                <p className="font-body text-base text-muted-foreground mt-8 max-w-2xl leading-relaxed">
                    Short version: I started executing campaigns, moved into building the
                    systems behind them, then into orchestrating those systems at scale.
                    Now I&apos;m placing product bets and pushing into AI-native
                    infrastructure. No resume copy — just the progression.
                </p>
            </section>

            {/* ──────── B. Philosophy ──────── */}
            <section className="max-w-5xl mx-auto mb-24">
                <h2 className="text-2xl md:text-3xl geo-underline mb-10">Philosophy</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.number}
                            className={`border-2 border-foreground bg-gallery dark:bg-ink p-6 ${pillar.shadow} hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-150`}
                        >
                            <span className="font-mono text-xs text-muted-foreground">
                                {pillar.number}
                            </span>
                            <h3 className="text-xl md:text-2xl mt-1 mb-4">{pillar.title}</h3>
                            <p className="font-body text-sm text-muted-foreground leading-relaxed">
                                {pillar.content}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ──────── C. Outside Work ──────── */}
            <section className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl geo-underline mb-6">
                    Outside Work
                </h2>
                <div className="flex gap-6">
                    <Link
                        href="/life"
                        className="brutal-card p-4 px-6 font-display font-bold text-sm"
                    >
                        Photography →
                    </Link>
                    <Link
                        href="/life"
                        className="brutal-card p-4 px-6 font-display font-bold text-sm"
                    >
                        Riding →
                    </Link>
                </div>
            </section>
        </main>
    );
}
