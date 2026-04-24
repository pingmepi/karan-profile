import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Product bets — MyThirdPlace, Job Search Agent, Photo Sorter, and MereKapade.",
    alternates: { canonical: "/products" },
};

const products = [
    {
        title: "MereKapade",
        tagline: "AI-assisted commerce experiment",
        description:
            "AI-led design commerce MVP. React + Canvas + Supabase + GPT. Exploring AI-assisted product customization and generative design workflows.",
        stack: "React · Canvas API · Supabase · OpenAI",
        status: "MVP",
        featured: false,
        caseStudySlug: "merekapade",
        liveUrl: "https://merekapade.com",
        liveLabel: "Live",
    },
    {
        title: "Job Search Agent",
        tagline: "Webhook-first application automation",
        description:
            "Telegram-vetted job intake flows through a multi-agent pipeline that produces tailored resumes, outreach drafts, structured markdown reports, and Drive-organized artifact packs. Deterministic eval fixtures gate releases.",
        stack: "FastAPI · Telegram · PostgreSQL · Google Drive",
        status: "Deployed",
        featured: false,
        caseStudySlug: "job-search-agent",
    },
    {
        title: "Photo Sorter",
        tagline: "Photo ops with local vision models",
        description:
            "Custom photo ingest, dedupe, and search infrastructure with worker-local Ollama classification, ordered model fallback, and confidence-routed review states. Current runtime guidance uses PhotoPrism plus local Ollama on the worker VM.",
        stack: "Python · FastAPI · SQLite/FTS5 · Ollama",
        status: "Active",
        featured: false,
        caseStudySlug: "photo-sorter",
    },
];

export default function ProductsPage() {
    return (
        <main className="pt-24 pb-16 section-gap min-h-screen">
            {/* Page Header */}
            <div className="max-w-5xl mx-auto mb-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl geo-underline mb-6">
                    Products
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-2xl">
                    Current product builds with live links and case studies.
                </p>
            </div>

            {/* Hero Product — MyThirdPlace */}
            <div className="max-w-5xl mx-auto mb-12">
                <div className="group block bg-klein text-gallery p-8 md:p-12 border-2 border-ink shadow-brutal">
                    <span className="inline-block font-mono text-xs uppercase tracking-widest text-bauhaus mb-4 border-b-2 border-bauhaus pb-1">
                        Primary
                    </span>
                    <h2 className="text-3xl md:text-5xl mb-4">MyThirdPlace</h2>
                    <p className="font-body text-lg text-gallery/80 mb-6 max-w-2xl">
                        Community &amp; events infrastructure. Work and home are not enough
                        — people need shared spaces. MyThirdPlace is the platform for
                        building, discovering, and running community-driven events and
                        spaces.
                    </p>
                    <div className="font-mono text-xs text-gallery/60 mb-4">
                        Next.js · Supabase · Razorpay · Vercel
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <a
                            href="https://mythirdplace.rapchai.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border-2 border-gallery px-4 py-1 font-display font-bold text-sm hover:bg-gallery hover:text-ink transition-colors"
                        >
                            Live
                            <ExternalLink className="w-4 h-4" />
                        </a>
                        <Link
                            href="/work/community-infra"
                            className="inline-flex items-center gap-2 font-display font-bold text-sm text-bauhaus border-2 border-bauhaus px-3 py-1.5 hover:bg-bauhaus hover:text-ink transition-all duration-150"
                        >
                            View case study
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Remaining Products */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.title} className="group brutal-card p-6 flex flex-col">
                        <span className="inline-block font-mono text-xs uppercase tracking-widest text-klein dark:text-bauhaus mb-3">
                            {product.status}
                        </span>
                        <h3 className="text-xl mb-2">{product.title}</h3>
                        <p className="font-body text-xs text-muted-foreground mb-1 italic">
                            {product.tagline}
                        </p>
                        <p className="font-body text-sm text-muted-foreground mb-4">
                            {product.description}
                        </p>
                        <div className="font-mono text-xs text-muted-foreground border-t-2 border-foreground pt-3">
                            {product.stack}
                        </div>
                        <div className="mt-4 flex items-center gap-3 flex-wrap">
                            {product.caseStudySlug && (
                                <Link
                                    href={`/work/${product.caseStudySlug}`}
                                    className="inline-flex items-center gap-2 font-display font-bold text-sm text-klein dark:text-bauhaus"
                                >
                                    View case study
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            )}
                            {product.liveUrl && (
                                <a
                                    href={product.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 font-display font-bold text-sm border-2 border-foreground px-3 py-1"
                                >
                                    {product.liveLabel ?? "Live"}
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
