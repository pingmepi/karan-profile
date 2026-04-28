import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { essays, getEssayBySlug, getAllEssaySlugs } from "@/data/essays";
import { decodeHtmlEntities } from "@/lib/utils";

export async function generateStaticParams() {
    return getAllEssaySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const essay = getEssayBySlug(slug);
    if (!essay) return {};
    return {
        title: decodeHtmlEntities(essay.title),
        description: decodeHtmlEntities(essay.summary),
        alternates: { canonical: `/writings/${slug}` },
        openGraph: {
            title: decodeHtmlEntities(essay.title),
            description: decodeHtmlEntities(essay.summary),
            type: "article",
            publishedTime: essay.date,
            tags: essay.tags.map((tag) => decodeHtmlEntities(tag)),
        },
    };
}

export default async function EssayPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const essay = getEssayBySlug(slug);

    if (!essay) notFound();
    const decodedTitle = decodeHtmlEntities(essay.title);
    const decodedSummary = decodeHtmlEntities(essay.summary);
    const decodedContent = decodeHtmlEntities(essay.content);
    const decodedTags = essay.tags.map((tag) => decodeHtmlEntities(tag));

    return (
        <main className="pt-24 pb-16 min-h-screen">
            <article>
                <div className="max-w-3xl mx-auto px-6 md:px-12 mb-8">
                    <Link
                        href="/writings"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Writings
                    </Link>
                </div>

                <header className="max-w-3xl mx-auto px-6 md:px-12 mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <time
                            dateTime={essay.date}
                            className="font-mono text-xs uppercase tracking-widest text-klein dark:text-bauhaus"
                        >
                            {new Date(essay.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                        <span className="font-mono text-xs text-muted-foreground">·</span>
                        <span className="font-mono text-xs text-muted-foreground">
                            {essay.readingTime}
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl geo-underline mb-6">
                        {decodedTitle}
                    </h1>
                    <p className="font-body text-lg text-muted-foreground max-w-2xl">
                        {decodedSummary}
                    </p>
                </header>

                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    <div className="prose-essay">
                        {decodedContent.split("\n\n").map((para, i) => {
                            if (para.startsWith("## ")) {
                                return (
                                    <h2
                                        key={i}
                                        className="text-2xl md:text-3xl font-display font-bold mt-12 mb-6"
                                    >
                                        {para.replace("## ", "")}
                                    </h2>
                                );
                            }
                            if (para.match(/^\d+\. \*\*/)) {
                                return (
                                    <div
                                        key={i}
                                        className="font-body text-base leading-relaxed mb-6 whitespace-pre-line"
                                    >
                                        {renderInlineBold(para)}
                                    </div>
                                );
                            }
                            if (para.startsWith("- ")) {
                                const items = para.split("\n").map((l) => l.replace(/^- /, ""));
                                return (
                                    <ul key={i} className="list-disc pl-6 mb-6 space-y-2">
                                        {items.map((item, j) => (
                                            <li key={j} className="font-body text-base leading-relaxed">
                                                {renderInlineBold(item)}
                                            </li>
                                        ))}
                                    </ul>
                                );
                            }
                            return (
                                <p
                                    key={i}
                                    className="font-body text-base leading-relaxed mb-6"
                                >
                                    {renderInlineBold(para)}
                                </p>
                            );
                        })}
                    </div>

                    <div className="mt-16 pt-8 border-t-2 border-foreground flex flex-wrap gap-2">
                        {decodedTags.map((tag) => (
                            <span
                                key={tag}
                                className="font-mono text-xs uppercase tracking-widest text-muted-foreground border border-foreground/30 px-3 py-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="max-w-3xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t-2 border-foreground">
                    <div className="flex flex-wrap gap-4 justify-between items-center">
                        <Link href="/writings" className="brutal-btn-primary">
                            ← All Writings
                        </Link>
                        {(() => {
                            const currentIndex = essays.findIndex((e) => e.slug === essay.slug);
                            const nextEssay = essays[(currentIndex + 1) % essays.length];
                            if (!nextEssay || nextEssay.slug === essay.slug) return null;
                            return (
                                <Link
                                    href={`/writings/${nextEssay.slug}`}
                                    className="brutal-btn border-2 border-foreground shadow-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                                >
                                    Next: {decodeHtmlEntities(nextEssay.title)} →
                                </Link>
                            );
                        })()}
                    </div>
                </div>
            </article>
        </main>
    );
}

function renderInlineBold(text: string): React.ReactNode {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
}
