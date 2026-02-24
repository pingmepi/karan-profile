"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
const systemCards = [
  {
    title: "Marketing Orchestration",
    body: "Event-driven comms infra across CRM, WhatsApp, and analytics — trigger-based, not manual.",
    accent: "bg-klein",
  },
  {
    title: "Growth Systems",
    body: "Funnel instrumentation, UTM normalization, multi-touch attribution. ₹1Cr revenue impact.",
    accent: "bg-signal",
  },
  {
    title: "Platform Builds",
    body: "CMS, scheduling services, state machines. Operator-level tooling for content and events.",
    accent: "bg-bauhaus",
  },
  {
    title: "AI Workflows",
    body: "LLM orchestration, NLP2SQL, generative pipelines. 25% faster reporting via consolidated analytics.",
    accent: "bg-klein",
  },
];

const currentBuilds = [
  {
    name: "MyThirdPlace",
    description: "Community & events infrastructure",
    status: "Live",
    href: "/work/community-infra",
  },
  {
    name: "MereKapade",
    description: "AI-assisted commerce experiment",
    status: "MVP",
    href: "/work/merekapade",
  },
  {
    name: "AI Orchestration",
    description: "Multi-agent pipelines with eval gating",
    status: "In Progress",
    href: "/products",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ═══════════ HERO ═══════════ */}
      <section className="pt-24 md:pt-32 pb-20 relative overflow-hidden grid-visible">
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
            Growth infrastructure, automation, AI workflows, and new product
            bets.
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

      {/* ═══════════ WHERE I'VE WORKED ON SYSTEMS ═══════════ */}
      <section className="py-20 bg-ink dark:bg-gallery text-gallery dark:text-ink">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">
            Where I&apos;ve worked on systems
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systemCards.map((card, i) => (
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

      {/* ═══════════ CURRENTLY BUILDING ═══════════ */}
      <section className="py-20 section-gap">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 geo-underline">
            Currently building
          </h2>

          <div className="space-y-6">
            {currentBuilds.map((build, i) => (
              <Link key={build.name} href={build.href}>
                <motion.div
                  className="brutal-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 cursor-pointer"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={i}
                >
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
                </motion.div>
              </Link>
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