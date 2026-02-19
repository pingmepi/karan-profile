import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

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
    default: "Karan Mandalam — Systems Builder",
    template: "%s | Karan Mandalam",
  },
  description:
    "I build systems that bring order to chaos. Growth infrastructure, automation, AI workflows, and new product bets.",
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
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
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
