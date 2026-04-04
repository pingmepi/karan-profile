import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { StructuredData } from "@/components/StructuredData";
import { WhatsAppPing } from "@/components/WhatsAppPing";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Karan Mandalam — AI Product Builder & Systems Engineer",
    template: "%s | Karan Mandalam",
  },
  description:
    "AI agents, payment infrastructure, growth automation, and full-stack product builds — shipped to production. Multi-agent architecture, eval-driven CI, Razorpay, 90+ n8n workflows. Bangalore, India.",
  metadataBase: new URL("https://karan-profile-zeta.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "Karan Mandalam",
    images: ["/assets/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pingmepi",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <StructuredData />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="min-h-screen bg-background">
            <Navigation />
            {children}
            <WhatsAppPing />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
