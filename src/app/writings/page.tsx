import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { essays } from "@/data/essays";
import { decodeHtmlEntities } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Writings",
    description:
        "Essays on building AI products, shipping systems that work, and the messy middle between idea and production.",
    alternates: { canonical: "/writings" },
};

export default function WritingsPage() {
    return (
        <main className="pt-24 pb-16 section-gap min-h-screen">
            <div className="max-w-4xl mx-auto px-6 md:px-12 mb-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl geo-underline mb-6">
                    Writings
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-2xl">
                    Notes from building. AI products, broken systems, and what you
                    learn shipping things to real users.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <ul className="space-y-8">
                    {essays.map((essay, i) => (
                        <li key={essay.slug}>
                            <Link
                                href={`/writings/${essay.slug}`}
                                className={`group block brutal-card p-6 md:p-8 ${i === 0 ? "brutal-card-klein" : ""}`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="font-mono text-xs uppercase tracking-widest text-klein dark:text-bauhaus">
                                        {new Date(essay.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                    <span className="font-mono text-xs text-muted-foreground">·</span>
                                    <span className="font-mono text-xs text-muted-foreground">
                                        {essay.readingTime}
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl mb-3 group-hover:translate-x-1 transition-transform">
                                    {decodeHtmlEntities(essay.title)}
                                </h2>
                                <p className="font-body text-base text-muted-foreground mb-4">
                                    {decodeHtmlEntities(essay.summary)}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {essay.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-foreground/20 px-2 py-0.5"
                                        >
                                            {decodeHtmlEntities(tag)}
                                        </span>
                                    ))}
                                </div>
                                <div className="inline-flex items-center gap-2 font-display font-bold text-sm text-klein dark:text-bauhaus">
                                    Read essay
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
