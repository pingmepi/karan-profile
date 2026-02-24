import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Karan Mandalam — product leadership, consulting, or collaboration on AI-native products and systems.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="pt-24 pb-16 section-gap min-h-screen grid-visible">
      <div className="max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl md:text-7xl lg:text-8xl geo-underline mb-6">
          Contact
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-xl">
          Pick a shape. Reach out.
        </p>
      </div>

      {/* Geometric shape buttons */}
      <div className="max-w-3xl mx-auto flex flex-wrap gap-8 mb-16">
        {/* Square = Email */}
        <a
          href="mailto:karan@example.com"
          className="group flex flex-col items-center gap-3"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-foreground bg-klein text-gallery flex items-center justify-center shadow-brutal group-hover:shadow-none group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-all duration-150">
            <span className="font-display font-bold text-lg">✉</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Email
          </span>
        </a>

        {/* Circle = Social */}
        <a
          href="https://twitter.com/pingmepi"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-foreground bg-gallery dark:bg-ink flex items-center justify-center shadow-brutal group-hover:shadow-none group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-all duration-150">
            <span className="font-display font-bold text-lg">𝕏</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Social
          </span>
        </a>

        {/* Triangle = LinkedIn */}
        <a
          href="https://linkedin.com/in/karanmandalam"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-foreground bg-bauhaus text-ink flex items-center justify-center shadow-brutal group-hover:shadow-none group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-all duration-150"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          >
            <span className="font-display font-bold text-lg mt-6">in</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            LinkedIn
          </span>
        </a>
      </div>

      {/* Existing contact form */}
      <div className="max-w-3xl mx-auto">
        <div className="brutal-card p-8">
          <h2 className="text-2xl md:text-3xl mb-6">Or send a message</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
