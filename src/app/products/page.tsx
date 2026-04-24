import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Shipped products — AI agents, community platforms, commerce experiments, automation workflows, and in-progress builds.",
    alternates: { canonical: "/products" },
};

const allProducts = [
    {
        title: "Job Search Agent",
        tagline: "AI that turns job postings into ready-to-send application packs",
        description:
            "Telegram webhook pipeline that produces tailored resumes, outreach drafts, structured reports, and Drive-organized artifact packs. Releases are checked against curated eval fixtures.",
        stack: "FastAPI · Telegram · PostgreSQL · Google Drive · Railway",
        status: "Live",
        caseStudySlug: "job-search-agent",
        tags: ["AI", "Agents", "Eval"],
    },
    {
        title: "MyThirdPlace",
        tagline: "Community & events platform for local communities",
        description:
            "Discover events, join communities, and pay for experiences — all in one place. Built for community builders who need payments, analytics, and admin tools without stitching together 5 different SaaS products.",
        stack: "Next.js (SSR) · Supabase · Razorpay · Resend · GA4/GTM · Vercel",
        status: "Live",
        caseStudySlug: "community-infra",
        liveUrl: "https://mythirdplace.rapchai.com",
        tags: ["Full-Stack", "Payments", "Community"],
        featured: true,
    },
    {
        title: "Admin Panel (MyThirdPlace)",
        tagline: "Operations dashboard for community platform operators",
        description:
            "Manage events, track payments, post to social media, and control access — all from one panel. Built for non-technical operators who need full control without touching code.",
        stack: "React · TypeScript · Vite · Supabase · Tailwind · Shadcn/ui",
        status: "Live",
        liveUrl: "https://admin.rapchai.com",
        caseStudySlug: "community-infra",
        tags: ["Product Build", "Admin Tools"],
    },
    {
        title: "MereKapade",
        tagline: "Design a t-shirt with words, see it on a canvas instantly",
        description:
            "Describe what you want, AI generates the design, and you preview it on a real-time canvas. Exploring prompt-to-purchase flows for custom merchandise.",
        stack: "React · fabric.js · Supabase · OpenAI (GPT-4o / DALL-E)",
        status: "Building",
        caseStudySlug: "merekapade",
        liveUrl: "https://merekapade.com",
        tags: ["AI", "Commerce", "GenAI"],
    },
    {
        title: "Photo Sorter",
        tagline: "Photo ops with local vision models",
        description:
            "Custom photo ingest, dedupe, and search infrastructure with worker-local Ollama classification, ordered model fallback, and confidence-routed review states. Current runtime guidance uses PhotoPrism plus local Ollama on the worker VM.",
        stack: "Python · FastAPI · SQLite/FTS5 · Ollama",
        status: "Active",
        caseStudySlug: "photo-sorter",
        tags: ["Vision Systems", "Infra", "Search"],
    },
    {
        title: "Quant Trading Platform",
        tagline: "Client: automated trading with Indian broker integrations",
        description:
            "Connects to Indian brokers via OAuth/TOTP, executes trades programmatically, and runs smoke tests to verify everything works before real money flows.",
        stack: "Python · Docker · OAuth · REST APIs",
        status: "Building",
        caseStudySlug: "quant-trading-platform",
        tags: ["Client Work", "Fintech", "Python"],
    },
    {
        title: "Mental Health Platform",
        tagline: "Client: website rebuild for a mental health startup",
        description:
            "Full website rebuild with SEO-first architecture and a Mental Fitness Quiz for lead capture. Designed for a startup that needed discoverability and conversion from day one.",
        stack: "Next.js · JavaScript · SEO",
        status: "Live",
        caseStudySlug: "mental-health-platform",
        tags: ["Client Work", "Full-Stack", "SEO"],
    },
    {
        title: "n8n Workflow Library",
        tagline: "90+ automation workflows for sales, marketing, and AI agents",
        description:
            "Production workflow library running on self-hosted n8n (EC2 + Docker). Includes AI agents (calling, planning, booking), email orchestration, calendar management, social automation, and web scrapers.",
        stack: "n8n · Python · Docker · AWS EC2 · Various APIs",
        status: "Live",
        caseStudySlug: "n8n-workflows",
        tags: ["Automation", "AI", "Ops"],
    },
    {
        title: "Rapchai Landing",
        tagline: "Landing page for a multi-product food & community ecosystem",
        description:
            "Neo-brutalist landing page routing users to food ordering and community events. Designed to unify multiple products under one brand.",
        stack: "Next.js 16 · Framer Motion · Tailwind",
        status: "Live",
        liveUrl: "https://rapchai.com",
        caseStudySlug: "community-infra",
        tags: ["Design", "Product Build"],
    },
    {
        title: "Voice AI KYC Server",
        tagline: "Assignment: voice-first identity verification flow",
        description:
            "Tool server that integrates with VAPI voice AI to walk users through identity verification and KYC flows over a phone call. Built as a proof-of-concept for voice-first fintech onboarding.",
        stack: "VAPI · REST APIs · Node.js",
        status: "Live",
        caseStudySlug: "voice-ai-kyc",
        tags: ["Voice AI", "Fintech", "API"],
    },
    {
        title: "The Void App",
        tagline: "Voice notes that disappear — privacy-first, no cloud",
        description:
            "Record a thought, set a countdown, and it's gone. Encrypted local storage, no cloud sync, no accounts. Built for people who want to think out loud without a permanent record.",
        stack: "Flutter · Dart · Encrypted Storage",
        status: "Building",
        caseStudySlug: "void-app",
        tags: ["Mobile", "Privacy"],
    },
    {
        title: "Tribeca KPI Dashboard",
        tagline: "Analytics dashboard for business KPIs at a glance",
        description:
            "Dashboard with KPI strips, trend charts, and multi-bar visualizations. Designed for operations teams who need a daily business snapshot without digging through spreadsheets.",
        stack: "Python · Data Visualization",
        status: "Live",
        caseStudySlug: "tribeca-dashboard",
        tags: ["Data", "Analytics"],
    },
];

export default function ProductsPage() {
    const featured = allProducts.find((p) => p.featured);
    const rest = allProducts.filter((p) => !p.featured);

    return (
        <main className="pt-24 pb-16 section-gap min-h-screen">
            <div className="max-w-5xl mx-auto mb-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl geo-underline mb-6">
                    Products
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-2xl">
                    Current product builds with live links and case studies.
                </p>
            </div>

            {featured && (
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="group block bg-klein text-gallery p-8 md:p-12 border-2 border-ink shadow-brutal">
                        <span className="inline-block font-mono text-xs uppercase tracking-widest text-bauhaus mb-4 border-b-2 border-bauhaus pb-1">
                            {featured.status}
                        </span>
                        <h2 className="text-3xl md:text-5xl mb-4">{featured.title}</h2>
                        <p className="font-body text-lg text-gallery/80 mb-6 max-w-2xl">
                            {featured.description}
                        </p>
                        <div className="font-mono text-xs text-gallery/60 mb-4">
                            {featured.stack}
                        </div>
                        <div className="flex items-center justify-between gap-3">
                            {featured.liveUrl && (
                                <a
                                    href={featured.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border-2 border-gallery px-4 py-1 font-display font-bold text-sm hover:bg-gallery hover:text-ink transition-colors"
                                >
                                    Live
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                            {featured.caseStudySlug && (
                                <Link
                                    href={`/work/${featured.caseStudySlug}`}
                                    className="inline-flex items-center gap-2 font-display font-bold text-sm text-bauhaus border-2 border-bauhaus px-3 py-1.5 hover:bg-bauhaus hover:text-ink transition-all duration-150"
                                >
                                    View case study
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {rest.map((product, i) => (
                        <div
                            key={product.title}
                            className={`group brutal-card p-6 flex flex-col ${i === 0 ? "brutal-card-klein" : ""}`}
                        >
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
                                        Live
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
