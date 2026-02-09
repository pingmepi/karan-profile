import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact – Karan Mandalam",
  description:
    "Get in touch with Karan Mandalam for product leadership opportunities, consulting, or collaboration on AI-native products and martech systems.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact – Karan Mandalam",
    description:
      "Get in touch for product leadership opportunities, consulting, or collaboration on AI-native products and martech systems.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact – Karan Mandalam",
    description:
      "Get in touch for product leadership opportunities, consulting, or collaboration on AI-native products and martech systems.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}

