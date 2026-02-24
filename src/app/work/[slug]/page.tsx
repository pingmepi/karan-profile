import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { caseStudies, getCaseStudyBySlug, getAllSlugs } from "@/data/case-studies";

interface Props {
    params: { slug: string };
}

export function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
    const cs = getCaseStudyBySlug(params.slug);
    if (!cs) return { title: "Not Found" };
    return {
        title: cs.title,
        description: cs.summary,
        alternates: { canonical: `/work/${cs.slug}` },
    };
}

const accentColors = [
    "bg-klein",
    "bg-signal",
    "bg-bauhaus",
    "bg-klein",
    "bg-signal",
    "bg-bauhaus",
];

export default function CaseStudyPage({ params }: Props) {
    const cs = getCaseStudyBySlug(params.slug);
    if (!cs) notFound();

    return (
        <main className="pt-24 pb-16 min-h-screen">
            {/* Back link */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 mb-8">
                <Link
                    href="/work"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Work
                </Link>
            </div>

            {/* Hero */}
            <header className="max-w-4xl mx-auto px-6 md:px-12 mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl geo-underline mb-6">
                    {cs.title}
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-2xl mb-8">
                    {cs.summary}
                </p>

                {/* KPI pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {cs.kpis.map((kpi) => (
                        <span
                            key={kpi}
                            className="inline-block border-2 border-foreground bg-klein text-gallery font-display font-bold text-sm px-4 py-2"
                        >
                            {kpi}
                        </span>
                    ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                        <span
                            key={tag}
                            className="font-mono text-xs uppercase tracking-widest text-muted-foreground border border-foreground/30 px-3 py-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            {/* Sections */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
                {cs.sections.map((section, i) => (
                    <section key={section.heading} className="brutal-card p-6 md:p-8">
                        {/* Accent bar */}
                        <div
                            className={`w-10 h-1.5 ${accentColors[i % accentColors.length]} mb-4`}
                        />
                        <h2 className="text-xl md:text-2xl mb-4">{section.heading}</h2>
                        <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                            {section.content}
                        </p>
                    </section>
                ))}

                {/* Tech Stack */}
                <section className="border-t-2 border-foreground pt-8">
                    <h2 className="text-xl md:text-2xl mb-4">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {cs.tech.map((t) => (
                            <span
                                key={t}
                                className="font-mono text-xs border-2 border-foreground px-3 py-1.5 bg-gallery dark:bg-ink"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </section>
            </div>

            {/* Bottom navigation */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t-2 border-foreground">
                <div className="flex flex-wrap gap-4 justify-between items-center">
                    <Link href="/work" className="brutal-btn-primary">
                        ← All Work
                    </Link>
                    {(() => {
                        const currentIndex = caseStudies.findIndex(
                            (c) => c.slug === cs.slug
                        );
                        const nextCs = caseStudies[(currentIndex + 1) % caseStudies.length];
                        return (
                            <Link
                                href={`/work/${nextCs.slug}`}
                                className="brutal-btn border-2 border-foreground shadow-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                            >
                                Next: {nextCs.title} →
                            </Link>
                        );
                    })()}
                </div>
            </div>
        </main>
    );
}
