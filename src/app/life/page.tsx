import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Life",
    description: "Photography and riding. Just curated identity.",
    alternates: { canonical: "/life" },
};

/* Placeholder image paths — replace with real assets */
const photography = [
    { src: "/assets/photos/photo-1.jpg", alt: "Street composition", width: 600, height: 800 },
    { src: "/assets/photos/photo-2.jpg", alt: "Architecture detail", width: 600, height: 800 },
    { src: "/assets/photos/photo-3.jpg", alt: "Light study", width: 600, height: 800 },
    { src: "/assets/photos/photo-4.jpg", alt: "Urban geometry", width: 600, height: 800 },
    { src: "/assets/photos/photo-5.jpg", alt: "Portrait", width: 600, height: 800 },
    { src: "/assets/photos/photo-6.jpg", alt: "Night frame", width: 600, height: 800 },
];

export default function LifePage() {
    return (
        <main className="pt-24 pb-16 section-gap min-h-screen">
            <div className="max-w-5xl mx-auto mb-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl geo-underline mb-6">
                    Life
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-xl">
                    No metaphors. No forced justification. Just curated identity.
                </p>
            </div>

            {/* Photography Section */}
            <section className="max-w-5xl mx-auto mb-24">
                <h2 className="text-3xl md:text-4xl geo-underline mb-10">
                    Photography
                </h2>

                {/* Masonry-style grid */}
                <div className="columns-2 md:columns-3 gap-6 space-y-6">
                    {photography.map((photo) => (
                        <div
                            key={photo.alt}
                            className="break-inside-avoid border-2 border-ink dark:border-gallery shadow-brutal hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-150 overflow-hidden relative group"
                        >
                            <div className="w-full aspect-[3/4] bg-muted flex items-center justify-center">
                                {/* Ready for assets: <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} className="object-cover transition-transform group-hover:scale-105" /> */}
                                <span className="font-mono text-xs text-muted-foreground">
                                    {photo.alt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Divider — geometric */}
            <div className="max-w-5xl mx-auto flex items-center gap-4 mb-24">
                <div className="h-0.5 flex-1 bg-foreground" />
                <div className="w-4 h-4 bg-klein rotate-45" />
                <div className="h-0.5 flex-1 bg-foreground" />
            </div>

            {/* Riding Section */}
            <section className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl geo-underline mb-10">Riding</h2>

                <div className="border-2 border-ink dark:border-gallery shadow-brutal-klein p-8 md:p-12">
                    {/* Hero riding image placeholder */}
                    <div className="w-full aspect-video bg-muted flex items-center justify-center mb-6">
                        <span className="font-mono text-sm text-muted-foreground">
                            Riding photo
                        </span>
                    </div>
                    <p className="font-body text-base text-muted-foreground max-w-xl">
                        Two wheels, open roads. No metaphors needed.
                    </p>
                </div>
            </section>
        </main>
    );
}
