import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills",
    description:
        "Technical skills — AI & LLM engineering, multi-agent architecture, full-stack development, payments, martech, automation, and product strategy.",
    alternates: { canonical: "/skills" },
};

const skillCategories = [
    {
        title: "AI & LLM Engineering",
        accent: "bg-klein",
        skills: [
            "OpenRouter",
            "OpenAI API (GPT-4o, DALL-E)",
            "Multi-Agent Architecture",
            "LLM Eval / CI Gating",
            "Prompt Engineering",
            "Truthfulness Guards",
            "NLP-to-SQL",
            "Agent Orchestration (n8n + LLM)",
        ],
    },
    {
        title: "Languages & Frameworks",
        accent: "bg-signal",
        skills: [
            "Python",
            "TypeScript",
            "JavaScript",
            "Dart (Flutter)",
            "Next.js",
            "React",
            "FastAPI",
            "Vite",
        ],
    },
    {
        title: "Data & Infrastructure",
        accent: "bg-bauhaus",
        skills: [
            "Supabase (PostgreSQL, Auth, RLS, Storage, Edge Functions)",
            "Railway",
            "Vercel",
            "AWS EC2",
            "Docker / Docker Compose",
            "Splunk",
            "Google Drive API",
            "Google Calendar API",
        ],
    },
    {
        title: "Payments & Commerce",
        accent: "bg-klein",
        skills: [
            "Razorpay (idempotent sessions, webhooks)",
            "Stripe (API analysis)",
        ],
    },
    {
        title: "Automation & Workflow",
        accent: "bg-signal",
        skills: [
            "n8n (90+ production workflows incl. AI agents)",
            "Jira (scrum boards, custom workflows, automation)",
            "Basecamp",
            "Metabase (dashboards, analytics)",
        ],
    },
    {
        title: "Martech & CRM",
        accent: "bg-bauhaus",
        skills: [
            "HubSpot",
            "WebEngage",
            "Netcore",
            "CleverTap",
            "GA4 / GTM",
            "Mandrill",
            "WhatsApp Business API (WABA)",
        ],
    },
    {
        title: "Communication & Integrations",
        accent: "bg-klein",
        skills: [
            "Telegram Bot API",
            "VAPI Voice AI",
            "Resend Email",
            "Hootsuite",
            "LaTeX",
            "Framer Motion",
            "fabric.js",
        ],
    },
    {
        title: "Product & Strategy",
        accent: "bg-signal",
        skills: [
            "GTM Strategy",
            "Competitive Analysis",
            "Market Sizing (TAM/SAM/SOM)",
            "Pitch Decks",
            "Scope-of-Work Documents",
            "RBAC Design",
            "Audit Logging",
            "Capacity Planning",
            "Vendor Negotiation",
        ],
    },
];

export default function SkillsPage() {
    return (
        <main className="pt-24 pb-16 section-gap min-h-screen">
            {/* Page Header */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 mb-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl geo-underline mb-6">
                    Skills
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-2xl">
                    Verified against shipped work — not aspirational lists.
                    Every skill here has production evidence.
                </p>
            </div>

            {/* Skill Categories */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-12">
                {skillCategories.map((category) => (
                    <section key={category.title} className="brutal-card p-6 md:p-8">
                        {/* Accent bar */}
                        <div className={`w-10 h-1.5 ${category.accent} mb-4`} />
                        <h2 className="text-xl md:text-2xl font-display font-bold mb-6">
                            {category.title}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="font-mono text-xs border-2 border-foreground px-3 py-1.5 bg-gallery dark:bg-ink hover:bg-klein hover:text-gallery dark:hover:bg-bauhaus dark:hover:text-ink transition-colors duration-150"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
