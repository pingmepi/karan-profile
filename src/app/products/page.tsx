import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Shipped products — AI agents, community platforms, commerce experiments, automation workflows, and in-progress builds.",
    alternates: { canonical: "/products" },
};

const featuredProducts = [
    {
        title: "Job Search Agent",
        tagline: "Multi-agent AI system with eval-driven CI",
        description:
            "Converts job postings into complete application packs via Telegram — OCR ingestion, LLM resume mutation with truthfulness guards, LaTeX compilation, and eval-gated CI preventing regressions.",
        stack: "Python · FastAPI · OpenRouter · LaTeX · PostgreSQL · Telegram · Railway",
        status: "Production",
        caseStudySlug: "job-search-agent",
        tags: ["AI", "Agents", "Eval"],
    },
    {
        title: "Place Command Center",
        tagline: "Full admin dashboard for The Third Place",
        description:
            "Admin panel with RBAC (5 roles), recurring event management, Hootsuite social posting, gallery uploads, payment session tracking, and audit logging.",
        stack: "React · TypeScript · Vite · Supabase · Tailwind · Shadcn/ui",
        status: "Completed",
        tags: ["Product Build", "Infra", "Systems"],
    },
    {
        title: "Rapchai Landing",
        tagline: "Neo-brutalist ecosystem landing page",
        description:
            "Landing page routing users to food ordering and community/events ecosystem. Shipped fast with Next.js 16 App Router and Framer Motion animations.",
        stack: "Next.js 16 · Framer Motion · Tailwind",
        status: "Shipped",
        tags: ["Design", "Product Build"],
    },
];

const products = [
    {
        title: "MereKapade",
        tagline: "AI-assisted commerce experiment",
        description:
            "AI-led design commerce MVP. Users describe a t-shirt design in words, the system generates and previews it on a real-time canvas. Exploring prompt-to-purchase flows.",
        stack: "React · fabric.js · Supabase · OpenAI (GPT-4o / DALL-E)",
        status: "MVP",
        caseStudySlug: "merekapade",
        liveUrl: "https://merekapade.com",
        liveLabel: "Live",
    },
];

const sideProjects = [
    {
        title: "Tiger Card Mock",
        oneLiner: "VAPI voice AI tool server — identity verification & KYC flow",
        tags: ["Voice AI", "API"],
    },
    {
        title: "The Void App",
        oneLiner: "Flutter privacy-first voice note app — ephemeral countdown, encrypted storage",
        tags: ["Mobile", "Privacy"],
    },
    {
        title: "Tribeca KPI Dashboard",
        oneLiner: "Python analytics dashboard with KPI strips and trend visualizations",
        tags: ["Data", "Analytics"],
    },
    {
        title: "n8n Workflow Library",
        oneLiner: "90+ production workflows including AI agents, social automation, and web scrapers",
        tags: ["Automation", "AI"],
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
                    Shipped products, active builds, and side projects. AI-first where it matters, full-stack everywhere.
                </p>
            </div>

            {/* Hero Product — MyThirdPlace */}
            <div className="max-w-5xl mx-auto mb-12">
                <div className="group block bg-klein text-gallery p-8 md:p-12 border-2 border-ink shadow-brutal">
                    <span className="inline-block font-mono text-xs uppercase tracking-widest text-bauhaus mb-4 border-b-2 border-bauhaus pb-1">
                        Live · Primary
                    </span>
                    <h2 className="text-3xl md:text-5xl mb-4">MyThirdPlace</h2>
                    <p className="font-body text-lg text-gallery/80 mb-6 max-w-2xl">
                        Community &amp; events platform with live Razorpay payments, GA4/GTM analytics, and a full admin panel (Command Center). 118 commits on consumer app, 36 on admin, 42 PRs shipped.
                    </p>
                    <div className="font-mono text-xs text-gallery/60 mb-4">
                        Next.js (SSR) · Supabase · Razorpay · Resend · GA4/GTM · Vercel
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

            {/* Featured Products */}
            <div className="max-w-5xl mx-auto mb-16">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 geo-underline">
                    Featured Builds
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProducts.map((product, i) => (
                        <div key={product.title} className={`group brutal-card p-6 flex flex-col ${i === 0 ? "brutal-card-klein" : ""}`}>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="font-mono text-xs uppercase tracking-widest text-klein dark:text-bauhaus">
                                    {product.status}
                                </span>
                            </div>
                            <h3 className="text-xl mb-2">{product.title}</h3>
                            <p className="font-body text-xs text-muted-foreground mb-1 italic">
                                {product.tagline}
                            </p>
                            <p className="font-body text-sm text-muted-foreground mb-4">
                                {product.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-foreground/20 px-2 py-0.5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="font-mono text-xs text-muted-foreground border-t-2 border-foreground pt-3 mt-auto">
                                {product.stack}
                            </div>
                            {product.caseStudySlug && (
                                <div className="mt-4">
                                    <Link
                                        href={`/work/${product.caseStudySlug}`}
                                        className="inline-flex items-center gap-2 font-display font-bold text-sm text-klein dark:text-bauhaus"
                                    >
                                        View case study
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Other Products */}
            <div className="max-w-5xl mx-auto mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                            <div className="font-mono text-xs text-muted-foreground border-t-2 border-foreground pt-3 mt-auto">
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
            </div>

            {/* Side Projects */}
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 geo-underline">
                    Side Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sideProjects.map((project) => (
                        <div
                            key={project.title}
                            className="brutal-card p-4 flex items-start gap-4"
                        >
                            <div className="w-2 h-2 bg-signal mt-2 shrink-0" />
                            <div>
                                <h3 className="font-display font-bold text-sm mb-1">
                                    {project.title}
                                </h3>
                                <p className="font-body text-xs text-muted-foreground mb-2">
                                    {project.oneLiner}
                                </p>
                                <div className="flex gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-foreground/20 px-2 py-0.5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
