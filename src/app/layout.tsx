import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Karan Mandalam — AI Product Leader",
    template: "%s | Karan Mandalam",
  },
  description:
    "I lead AI-native product initiatives in martech and CRM orchestration—shipping outcomes like 5× SEO traffic, significant revenue impact, 70% ops savings, +90% registrations.",
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
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="min-h-screen bg-background">
            <Navigation />
            {children}
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}

