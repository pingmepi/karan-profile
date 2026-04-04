"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

/* ─── Animation variants ─── */
const dropIn = {
    hidden: { y: -80, opacity: 0 },
    visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 24,
            delay: i * 0.12,
        },
    }),
};

const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.4 + i * 0.1 },
    }),
};

/* ─── Data ─── */
const whatIDo = [
    {
        title: "Agents & Automation",
        body: "Multi-agent AI systems, eval-driven CI gating, Telegram bots, 90+ n8n production workflows. LLM orchestration with cost controls and truthfulness guards.",
        accent: "bg-klein",
    },
    {
        title: "Systems & Architecture",
        body: "Razorpay payment flows with idempotent sessions, Supabase RLS architecture, admin panel RBAC with 5 roles. Full-stack from database to deployment.",
        accent: "bg-signal",
    },
    {
        title: "Growth Infrastructure",
        body: "Event funnels, UTM attribution, CRM orchestration, scheduling microservices. Marketing ops that compound — not manual broadcasts.",
        accent: "bg-bauhaus",
    },
    {
        title: "Measurement & Governance",
        body: "Eval-driven development. CI gates for LLM outputs — truthfulness, cost, latency. GA4/GTM instrumentation. Audit logging and RBAC from day one.",
        accent: "bg-klein",
    },
];

const featuredWork = [
    {
        name: "Job Search Agent",
        description: "Multi-agent AI, eval gates, Telegram, LaTeX",
        status: "Production",
        caseStudyHref: "/work/job-search-agent",
    },
    {
        name: "The Third Place",
        description: "Live community platform, Razorpay, analytics, admin panel",
        status: "Live",
        caseStudyHref: "/work/community-infra",
        liveUrl: "https://mythirdplace.rapchai.com",
    },
    {
        name: "MereKapade",
        description: "AI design commerce, fabric.js canvas, GPT",
        status: "MVP",
        caseStudyHref: "/work/merekapade",
        liveUrl: "https://merekapade.com",
    },
];

const impactMetrics = [
    { metric: "3 products", detail: "shipped 0→1", href: "/products" },
    { metric: "₹1Cr+/qtr", detail: "revenue via GTM", href: "/work/event-funnels-cms" },
    { metric: "30% churn reduction", detail: "CRM automation", href: "/work/martech-revamp-attribution" },
    { metric: "-50% lead drop-off", detail: "funnel optimization", href: "/work/event-funnels-cms" },
    { metric: "5× SEO traffic", detail: "via CMS platform", href: "/work/event-funnels-cms" },
    { metric: "+20% lead quality", detail: "martech attribution", href: "/work/martech-revamp-attribution" },
];

export function HomeClient() {
    return (
        <main className="min-h-screen">
            {/* ═══════════ HERO ═══════════ */}
            <section aria-label="Introduction" className="pt-24 md:pt-32 pb-20 relative overflow-hidden grid-visible">
                <div className="max-w-5xl mx-auto px-6 md:px-12">
                    {/* Geometric shapes — gravity-drop entrance */}
                    <div className="absolute top-20 right-8 md:right-24 pointer-events-none">
                        <motion.div
                            className="w-16 h-16 md:w-24 md:h-24 bg-klein"
                            variants={dropIn}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                        />
                    </div>
                    <div className="absolute top-40 right-24 md:right-48 pointer-events-none">
                        <motion.div
                            className="w-8 h-8 md:w-12 md:h-12 bg-signal rotate-45"
                            variants={dropIn}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                        />
                    </div>
                    <div className="absolute top-28 right-48 md:right-72 pointer-events-none">
                        <motion.div
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-bauhaus"
                            variants={dropIn}
                            initial="hidden"
                            animate="visible"
                            custom={2}
                        />
                    </div>

                    {/* Heading */}
                    <motion.h1
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] leading-none font-display font-extrabold mb-6 max-w-4xl"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        I build systems
                        <br />
                        that bring order
                        <br />
                        to chaos.
                    </motion.h1>

                    {/* Sub */}
                    <motion.p
                        className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        AI agents, payment infrastructure, growth automation, and
                        full-stack product builds — shipped to production.
                    </motion.p>

                    {/* CTA buttons — brutal squares */}
                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                    >
                        <Link href="/work" className="brutal-btn-primary">
                            See the work →
                        </Link>
                        <Link href="/about" className="brutal-btn border-2 border-foreground shadow-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
                            About me
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ IMPACT METRICS ═══════════ */}
            <section aria-label="Impact metrics" className="py-12 border-y-2 border-foreground">
                <div className="max-w-5xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {impactMetrics.map((item, i) => (
                            <motion.div
                                key={item.metric}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-30px" }}
                                custom={i}
                            >
                                <Link href={item.href} className="group block text-center">
                                    <div className="font-display font-extrabold text-2xl md:text-3xl text-klein dark:text-bauhaus group-hover:text-signal transition-colors">
                                        {item.metric}
                                    </div>
                                    <div className="font-body text-xs text-muted-foreground mt-1">
                                        {item.detail}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ WHAT I DO ═══════════ */}
            <section aria-label="What I do" className="py-20 bg-ink dark:bg-gallery text-gallery dark:text-ink">
                <div className="max-w-5xl mx-auto px-6 md:px-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">
                        What I do
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {whatIDo.map((card, i) => (
                            <motion.div
                                key={card.title}
                                className="border-2 border-gallery dark:border-ink p-6 md:p-8 shadow-brutal bg-ink dark:bg-gallery text-gallery dark:text-ink hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-150"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                custom={i}
                            >
                                {/* Accent bar */}
                                <div className={`w-10 h-1.5 ${card.accent} mb-4`} />
                                <h3 className="text-xl md:text-2xl font-display font-bold mb-3">
                                    {card.title}
                                </h3>
                                <p className="font-body text-sm text-gallery/70 dark:text-ink/70">
                                    {card.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ FEATURED WORK ═══════════ */}
            <section aria-label="Featured work" className="py-20 section-gap">
                <div className="max-w-5xl mx-auto px-6 md:px-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 geo-underline">
                        Featured work
                    </h2>

                    <div className="space-y-6">
                        {featuredWork.map((build, i) => (
                            <motion.div
                                key={build.name}
                                className="brutal-card p-6 flex flex-col gap-4"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-30px" }}
                                custom={i}
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-display font-bold">
                                            {build.name}
                                        </h3>
                                        <p className="font-body text-sm text-muted-foreground">
                                            {build.description}
                                        </p>
                                    </div>
                                    <span className="font-mono text-xs border-2 border-foreground px-3 py-1 shrink-0 self-start md:self-auto">
                                        {build.status}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 flex-wrap">
                                    <Link
                                        href={build.caseStudyHref}
                                        className="inline-flex items-center gap-2 font-display font-bold text-sm text-klein dark:text-bauhaus"
                                    >
                                        View case study
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    {build.liveUrl && (
                                        <a
                                            href={build.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 font-display font-bold text-sm border-2 border-foreground px-3 py-1"
                                        >
                                            Live
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <Link href="/products" className="brutal-btn-primary">
                            All products →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
