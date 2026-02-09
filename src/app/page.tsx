import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, Settings, Users, Target } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { PersonStructuredData, WebsiteStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Karan Mandalam — AI Product Leader (Strategy, Martech, Automation)",
  description:
    "I lead AI-native product initiatives in martech and CRM orchestration—shipping outcomes like 5× SEO traffic, significant revenue impact, 70% ops savings, +90% registrations.",
  keywords: [
    "AI Product Manager",
    "Product Leader",
    "Martech",
    "Marketing Automation",
    "CRM Orchestration",
    "Product Strategy",
    "AI-native products",
    "Growth Systems",
    "Attribution",
    "Karan Mandalam",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Karan Mandalam — AI Product Leader",
    description:
      "Leading AI-native product initiatives in martech and CRM orchestration. Proven outcomes: 5× SEO traffic, 70% ops savings, +90% registrations.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Karan Mandalam - AI Product Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Mandalam — AI Product Leader",
    description:
      "Leading AI-native product initiatives in martech and CRM orchestration. Proven outcomes: 5× SEO traffic, 70% ops savings, +90% registrations.",
    images: ["/assets/og-image.png"],
  },
};

const heroMetrics = [
  "5× SEO traffic",
  "Significant revenue impact",
  "70% ops savings",
  "+20% lead quality",
];

const whatIDoItems = [
  {
    title: "Product Strategy & Roadmaps",
    description:
      "Own discovery→definition→delivery; align goals, score trade-offs, and drive iteration.",
  },
  {
    title: "Systems & Architecture",
    description:
      "Design API-first martech/CRM stacks with reliable attribution, privacy, and auditability.",
  },
  {
    title: "Automation & Agents",
    description:
      "n8n + LLM/HITL flows with retries, fallbacks, and cost controls, integrated into product surfaces.",
  },
  {
    title: "Measurement & Governance",
    description:
      "KPIs instrumented end-to-end (marketing → CRM → revenue) with dashboards leaders trust.",
  },
];

const impactMetrics = [
  {
    icon: "TrendingUp" as const,
    metric: "5× increase",
    description: "in organic traffic via an SEO-first CMS.",
    link: "/case-studies/event-funnels-cms",
  },
  {
    icon: "DollarSign" as const,
    metric: "Significant revenue impact",
    description: "from event-funnel optimisation (4-month window).",
    link: "/case-studies/event-funnels-cms",
  },
  {
    icon: "Settings" as const,
    metric: "70% reduction",
    description: "in operational effort via automations (scheduler + comms).",
    link: "/case-studies/scheduling-at-scale",
  },
  {
    icon: "Users" as const,
    metric: "+90% registrations",
    description: "after funnel & UX fixes.",
    link: "/case-studies/event-funnels-cms",
  },
  {
    icon: "Target" as const,
    metric: "+20% lead quality",
    description: "from attribution & segmentation.",
    link: "/case-studies/martech-revamp-attribution",
  },
  {
    icon: "TrendingUp" as const,
    metric: "25% faster reporting",
    description: "via consolidated analytics.",
    link: "/case-studies/martech-revamp-attribution",
  },
];

const iconMap = { TrendingUp, DollarSign, Settings, Users, Target };

const featuredWork = [
  {
    title: "Event CMS + SEO System",
    blurb: "Strapi + Next.js; CRM/Zoom integrations; enabled 40+ events/month.",
    link: "/case-studies/event-funnels-cms",
    cta: "View case study",
  },
  {
    title: "Scheduling Microservice",
    blurb:
      "Multi-tenant, dynamic slot logic, CRM sync; 70% ops reduction; 1,000+ meetings/month.",
    link: "/case-studies/scheduling-at-scale",
    cta: "View case study",
  },
  {
    title: "MereKapade",
    blurb: "AI-led design commerce MVP; React + Canvas + Supabase + GPT.",
    link: "/case-studies/merekapade",
    cta: "Read write-up",
  },
];

export default function HomePage() {
  return (
    <>
      <PersonStructuredData
        name="Karan Mandalam"
        jobTitle="AI Product Leader"
        url="https://karanmandalam.com"
        sameAs={[
          "https://www.linkedin.com/in/mandalam-karan/",
          "https://x.com/pingmepi",
          "https://github.com/pingmepi",
        ]}
        description="AI Product Leader specializing in martech, CRM orchestration, and marketing automation. Proven track record of delivering measurable outcomes in product strategy and AI-native systems."
      />
      <WebsiteStructuredData
        name="Karan Mandalam - AI Product Leader"
        url="https://karanmandalam.com"
        description="Portfolio and case studies of Karan Mandalam, an AI Product Leader specializing in martech, CRM orchestration, and product strategy."
      />
      <div className="min-h-screen">
        {/* Section 1: Hero */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              AI Product Leader
            </h1>
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-muted-foreground font-light">
                I build and scale AI-native products—combining product strategy, martech architecture, and automation to drive measurable growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {heroMetrics.map((pill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-foreground"
                >
                  {pill}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/case-studies">Read Case Studies</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Section: What I Do */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">What I Do</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIDoItems.map((item, idx) => (
              <Card key={idx} className="p-6">
                <CardContent className="p-0">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Impact Highlights */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Impact Highlights</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {impactMetrics.map((metric, index) => {
              const IconComponent = iconMap[metric.icon];
              const content = (
                <Card className="metric-card text-center p-6 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-xl font-bold text-foreground mb-2">{metric.metric}</div>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              );
              return metric.link ? (
                <Link key={index} href={metric.link} className="block">
                  {content}
                </Link>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section: Featured Work */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">Featured Work</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWork.map((proj, idx) => (
              <Link key={idx} href={proj.link} className="block">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{proj.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{proj.blurb}</p>
                    <Button variant="outline" size="sm">
                      {proj.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section: CTA */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Let&apos;s Build Something Together</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Got a product idea, automation problem, or AI workflow to figure out?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link href="/projects">Explore Projects</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      </div>
    </>
  );
}