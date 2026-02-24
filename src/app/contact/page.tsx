import type { Metadata } from "next";
import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";
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
          href="mailto:kmandalam@gmail.com"
          className="group flex flex-col items-center gap-3"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-foreground bg-klein text-gallery flex items-center justify-center shadow-brutal group-hover:shadow-none group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-all duration-150">
            <Mail className="w-7 h-7 md:w-8 md:h-8" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Email
          </span>
        </a>

        {/* Circle = Twitter/X */}
        <a
          href="https://twitter.com/pingmepi"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-foreground bg-gallery dark:bg-ink flex items-center justify-center shadow-brutal group-hover:shadow-none group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-all duration-150">
            <Twitter className="w-7 h-7 md:w-8 md:h-8" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Twitter
          </span>
        </a>

        {/* Triangle = LinkedIn */}
        <a
          href="https://linkedin.com/in/mandalam-karan"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3"
        >
          <div
            className="w-20 h-20 md:w-24 md:h-24 border-2 border-foreground bg-bauhaus text-ink flex items-center justify-center shadow-brutal group-hover:shadow-none group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-all duration-150"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          >
            <Linkedin className="w-6 h-6 md:w-7 md:h-7 mt-6" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            LinkedIn
          </span>
        </a>

        {/* Diamond = Instagram */}
        <a
          href="https://instagram.com/theghostinphotographs"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-foreground bg-signal text-gallery flex items-center justify-center shadow-brutal group-hover:shadow-none group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-all duration-150 rotate-45">
            <Instagram className="w-7 h-7 md:w-8 md:h-8 -rotate-45" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">
            Instagram
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
