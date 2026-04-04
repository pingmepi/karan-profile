import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Life",
    description: "Motorcycling community building, volunteering with U&I Trust, and photography.",
    alternates: { canonical: "/life" },
};

export default function LifePage() {
    return (
        <main className="pt-24 pb-16 section-gap min-h-screen">
            <div className="max-w-5xl mx-auto px-6 md:px-12 mb-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl geo-underline mb-6">
                    Life
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-xl">
                    The things that matter outside of work.
                </p>
            </div>

            {/* Riding Section — The Handlebar Dialogue */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 mb-24">
                <h2 className="text-3xl md:text-4xl geo-underline mb-10">
                    The Handlebar Dialogue
                </h2>

                <div className="brutal-card p-6 md:p-8 mb-6">
                    <div className={`w-10 h-1.5 bg-signal mb-4`} />
                    <p className="font-body text-base text-muted-foreground mb-6">
                        A motorcycle community built on structured dialogue and intentional route curation.
                        Not just group rides — a system for building connection through shared experience.
                    </p>

                    <div className="space-y-4">
                        <div className="border-l-4 border-signal pl-4">
                            <h3 className="font-display font-bold text-sm mb-1">Saturday for Sunday</h3>
                            <p className="font-body text-xs text-muted-foreground">
                                Ride flow designed around a weekend cadence — Saturday route planning and safety briefings, Sunday ride execution. Structured enough to be safe, loose enough to be fun.
                            </p>
                        </div>
                        <div className="border-l-4 border-signal pl-4">
                            <h3 className="font-display font-bold text-sm mb-1">Route Curation</h3>
                            <p className="font-body text-xs text-muted-foreground">
                                Panchapalli Dam, Rocky Ridge, and surrounding routes vetted for road quality, scenic value, and group safety. Every route ridden before being added to the rotation.
                            </p>
                        </div>
                        <div className="border-l-4 border-signal pl-4">
                            <h3 className="font-display font-bold text-sm mb-1">Safety & Social Architecture</h3>
                            <p className="font-body text-xs text-muted-foreground">
                                Safety protocols baked into the ride structure — not afterthoughts. The social architecture is designed to make new riders feel included without slowing down experienced ones.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center gap-4 mb-24">
                <div className="h-0.5 flex-1 bg-foreground" />
                <div className="w-4 h-4 bg-klein rotate-45" />
                <div className="h-0.5 flex-1 bg-foreground" />
            </div>

            {/* Volunteering — U&I Trust */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 mb-24">
                <h2 className="text-3xl md:text-4xl geo-underline mb-10">
                    Volunteering
                </h2>

                <div className="brutal-card p-6 md:p-8">
                    <div className={`w-10 h-1.5 bg-bauhaus mb-4`} />
                    <h3 className="text-xl font-display font-bold mb-2">
                        U&I Trust
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground mb-4">
                        ~3 years · Volunteer → Center Leader → Fundraising Coach
                    </p>
                    <p className="font-body text-base text-muted-foreground mb-6">
                        Worked with underprivileged children on education. Started as a volunteer teacher, eventually took ownership of a new center built from scratch — managing 40+ volunteers, designing SOPs, and tracking student progress.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="border-2 border-foreground p-3 text-center">
                            <div className="font-display font-extrabold text-lg text-klein dark:text-bauhaus">40+</div>
                            <div className="font-body text-xs text-muted-foreground">volunteers managed</div>
                        </div>
                        <div className="border-2 border-foreground p-3 text-center">
                            <div className="font-display font-extrabold text-lg text-klein dark:text-bauhaus">10%</div>
                            <div className="font-body text-xs text-muted-foreground">YoY fundraising growth</div>
                        </div>
                        <div className="border-2 border-foreground p-3 text-center">
                            <div className="font-display font-extrabold text-lg text-klein dark:text-bauhaus">50%</div>
                            <div className="font-body text-xs text-muted-foreground">next leaders from team</div>
                        </div>
                        <div className="border-2 border-foreground p-3 text-center">
                            <div className="font-display font-extrabold text-lg text-klein dark:text-bauhaus">~3 yrs</div>
                            <div className="font-body text-xs text-muted-foreground">active involvement</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center gap-4 mb-24">
                <div className="h-0.5 flex-1 bg-foreground" />
                <div className="w-4 h-4 bg-signal rotate-45" />
                <div className="h-0.5 flex-1 bg-foreground" />
            </div>

            {/* Photography Section */}
            <section className="max-w-5xl mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-4xl geo-underline mb-10">
                    Photography
                </h2>

                <div className="brutal-card p-8 md:p-12 text-center">
                    <p className="font-body text-base text-muted-foreground">
                        Photos coming soon.
                    </p>
                </div>
            </section>
        </main>
    );
}
