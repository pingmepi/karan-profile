import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About",
    description:
        "Karan Mandalam — BITS Pilani CS grad, AI product builder in Bangalore. The story, the belief system, and what I'm doing with it all.",
    alternates: { canonical: "/about" },
};

export default function AboutPage() {
    return (
        <main className="pt-24 pb-16 section-gap min-h-screen">
            {/* ──────── Hero ──────── */}
            <div className="max-w-3xl mx-auto px-6 md:px-12 mb-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl geo-underline mb-8">
                    About
                </h1>
                <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed max-w-2xl">
                    I&apos;m Karan. I build things — AI agents, products, systems
                    that need to work under real load — and I think out loud about
                    it here.
                </p>
            </div>

            {/* ──────── The Short Version ──────── */}
            <section className="max-w-3xl mx-auto px-6 md:px-12 mb-24">
                <h2 className="text-2xl md:text-3xl geo-underline mb-8">
                    The short version
                </h2>
                <div className="space-y-5 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                    <p>
                        I graduated from BITS Pilani with a CS degree and walked into
                        Capgemini debugging Disney&apos;s booking system at 3am. That
                        was the job. I liked the detective work of it — tracing API
                        calls through Splunk logs until I found the thing that
                        actually broke.
                    </p>
                    <p>
                        Turns out that&apos;s most of what I do, still. Systems go
                        wrong for boring reasons. The interesting work is figuring
                        out which boring reason this time.
                    </p>
                    <p>
                        After Capgemini I moved into product — UpGrad, AlmaBetter,
                        then Miles Education — building the infrastructure
                        underneath growth teams: CRM pipelines, attribution,
                        lifecycle automation, a scheduling microservice, 90+ n8n
                        workflows that quietly eliminated 80+ hours of manual work a
                        week. I shipped, I fixed, I wrote a lot of SOPs.
                    </p>
                    <p>
                        Late 2025, I left to build. I wanted to work on AI-native
                        products where the interesting problem isn&apos;t the prompt —
                        it&apos;s the <em>system</em> around the prompt. Quality
                        gates, cost controls, graceful failure modes, the stuff that
                        separates a demo from a product.
                    </p>
                    <p>
                        That&apos;s where I am now. Building Job Search Agent, The
                        Third Place, and taking consulting work for founders who
                        need a systems thinker who can actually ship.
                    </p>
                </div>
            </section>

            {/* ──────── What I Believe ──────── */}
            <section className="max-w-3xl mx-auto px-6 md:px-12 mb-24">
                <h2 className="text-2xl md:text-3xl geo-underline mb-8">
                    What I believe
                </h2>

                <div className="space-y-8">
                    <div className="border-l-4 border-klein pl-6">
                        <h3 className="text-xl md:text-2xl font-display font-bold mb-3">
                            Most problems aren&apos;t technical.
                        </h3>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                            They&apos;re integration problems, data problems, handoff
                            problems. The code usually works. The system around it
                            doesn&apos;t. When a CRM pipeline &ldquo;stops working,&rdquo;
                            it&apos;s rarely the CRM — it&apos;s five different tools
                            disagreeing about what a lead is.
                        </p>
                    </div>

                    <div className="border-l-4 border-signal pl-6">
                        <h3 className="text-xl md:text-2xl font-display font-bold mb-3">
                            Autonomy needs guardrails.
                        </h3>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                            Especially for AI. I don&apos;t trust a system that can do
                            anything — I trust a system that can&apos;t do the wrong
                            thing. Eval gates, cost caps, edit regions, confidence
                            thresholds. These aren&apos;t limits on what AI can do.
                            They&apos;re what make shipping it honest.
                        </p>
                    </div>

                    <div className="border-l-4 border-bauhaus pl-6">
                        <h3 className="text-xl md:text-2xl font-display font-bold mb-3">
                            Ship it, then measure.
                        </h3>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                            I&apos;ve seen too many roadmaps die in review cycles.
                            The work of a builder is closing the gap between &ldquo;this
                            should work&rdquo; and &ldquo;this does work, for real users.&rdquo;
                            Instrument first, ship early, tune based on evidence.
                        </p>
                    </div>

                    <div className="border-l-4 border-klein pl-6">
                        <h3 className="text-xl md:text-2xl font-display font-bold mb-3">
                            Work and home aren&apos;t enough.
                        </h3>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                            Everyone needs a third place. Mine are two: a motorcycle
                            and a camera. That conviction is why I&apos;m building
                            MyThirdPlace — a platform for people to find theirs.
                        </p>
                    </div>
                </div>
            </section>

            {/* ──────── Personal ──────── */}
            <section className="max-w-3xl mx-auto px-6 md:px-12 mb-24">
                <h2 className="text-2xl md:text-3xl geo-underline mb-8">
                    Outside of shipping
                </h2>

                <div className="space-y-5 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                    <p>
                        I ride with a small group of people who&apos;ve turned weekend
                        routes around Bangalore into something more intentional — we
                        call it <strong className="text-foreground">The Handlebar
                        Dialogue</strong>. Saturday we plan, brief, and check the
                        bikes. Sunday we ride. It&apos;s as much about the
                        conversations between stops as it is the road.
                    </p>
                    <p>
                        I volunteered with <strong className="text-foreground">U&amp;I
                        Trust</strong> for three years — teaching underprivileged
                        children, then running a center from scratch with 40+
                        volunteers. It&apos;s where I learned that management is
                        mostly removing obstacles so other people can do their best
                        work.
                    </p>
                    <p>
                        I shoot photos, mostly street and light studies. I read a
                        lot about product, systems, and the occasional history
                        book. I live in Bangalore.
                    </p>
                </div>
            </section>

            {/* ──────── CTA ──────── */}
            <section className="max-w-3xl mx-auto px-6 md:px-12">
                <div className="brutal-card p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                        If any of this resonates —
                    </h2>
                    <p className="font-body text-base text-muted-foreground mb-6">
                        I&apos;m open to AI product roles, consulting engagements, or
                        just a conversation with someone building something
                        interesting.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/contact"
                            className="brutal-btn-primary inline-flex items-center gap-2"
                        >
                            Say hi →
                        </Link>
                        <Link
                            href="/writings"
                            className="brutal-btn inline-flex items-center gap-2 border-2 border-foreground px-4 py-2 font-display font-bold text-sm"
                        >
                            Read my writing
                        </Link>
                        <Link
                            href="/life"
                            className="brutal-btn inline-flex items-center gap-2 border-2 border-foreground px-4 py-2 font-display font-bold text-sm"
                        >
                            See what I do outside work
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
