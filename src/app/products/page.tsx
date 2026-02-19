import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Product bets — MyThirdPlace, MereKapade, AI workflow systems, and in-progress builds.",
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
    },
    {
        title: "AI Orchestration Workflows",
        tagline: "LLM pipelines for production",
        description:
            "Multi-agent orchestration, evaluation gating, and cost-controlled inference pipelines. Building the infrastructure layer for autonomous AI systems.",
        stack: "LangChain · Genkit · Telegram · Eval Frameworks",
        status: "In Progress",
        featured: false,
    },
    {
        title: "In-Progress Builds",
        tagline: "Experiments and explorations",
        description:
            "RAG frameworks, NLP2SQL interfaces, and agentic job search systems. Active experiments in applied AI with evaluation-first development.",
        stack: "Various",
        status: "Exploring",
        featured: false,
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
                    Deliberate product directions. Not side projects.
                </p>
            </div>

            {/* Hero Product — MyThirdPlace */}
            <div className="max-w-5xl mx-auto mb-12">
                <div className="bg-klein text-gallery p-8 md:p-12 border-2 border-ink shadow-brutal">
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
                    <div className="inline-block border-2 border-gallery px-4 py-1 font-display font-bold text-sm">
                        Live
                    </div>
                </div>
            </div>

            {/* Remaining Products */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.title} className="brutal-card p-6">
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
                    </div>
                ))}
            </div>
        </main>
    );
}
