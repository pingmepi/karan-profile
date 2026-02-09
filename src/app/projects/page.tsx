import Link from "next/link";
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects – Karan Mandalam",
  description:
    "Selected projects across AI, martech, automation, and product strategy. Explore work in marketing automation, CRM optimization, and AI-powered systems.",
  keywords: [
    "AI projects",
    "Martech projects",
    "Marketing automation",
    "CRM optimization",
    "Product portfolio",
    "AI-powered systems",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects – Karan Mandalam",
    description:
      "Selected projects across AI, martech, automation, and product strategy. Explore work in marketing automation, CRM optimization, and AI-powered systems.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects – Karan Mandalam",
    description:
      "Selected projects across AI, martech, automation, and product strategy.",
  },
};

const projects = [
  {
    title: "AI-Powered Marketing Automation",
    problem: "Designed lead nurturing and personalized communication workflows using n8n, WABA & Mandrill.",
    impact: "+90% registrations · +20% lead quality",
    tags: ["Martech", "AI", "CRM"],
    cta: "View Case Study",
    status: "completed",
    link: "/case-studies/event-funnel-scaling",
  },
  {
    title: "Martech Stack Optimization",
    problem: "Audited, restructured, and optimized Netcore, HubSpot & GA4 stack.",
    impact: "+20% lead quality · 25% faster reporting",
    tags: ["Product Strategy", "Automation", "Attribution"],
    cta: "View More",
    status: "completed",
    link: "/case-studies/martech-attribution",
  },
  {
    title: "MereKapade",
    problem: "AI-powered custom t-shirt design platform.",
    impact: "Canvas API + Supabase + JWT Auth + LLM integration",
    tags: ["Product Build", "GenAI", "Commerce"],
    cta: "Live Site",
    ctaSecondary: "Product Doc",
    status: "featured",
    link: "/case-studies/merekapade-ai-commerce",
  },
  {
    title: "Event CMS Platform",
    problem: "Designed Strapi + NextJS CMS integrated with Zoom API & CRM.",
    impact: "5× SEO traffic · significant revenue impact",
    tags: ["Infra", "Workflow", "Scale"],
    cta: "Read More",
    status: "completed",
    link: "/case-studies",
  },
  {
    title: "The Third Place",
    problem: "Community platform with RBAC, events, badges, and referral tracking.",
    impact: "Designed modular APIs with privacy-first participant visibility",
    tags: ["Community", "Systems", "Identity"],
    cta: "Coming Soon",
    status: "wip",
    link: "/case-studies",
  },
  {
    title: "Scheduling Microservice",
    problem: "Calendly-style booking system with dynamic slot logic and CRM sync.",
    impact: "70% ops savings · 1,000+ meetings/mo",
    tags: ["Infra", "SaaS Design", "UX Simplification"],
    cta: "Case Study",
    status: "completed",
    link: "/case-studies/scheduling-microservice",
  },
  {
    title: "Content Ops Automation",
    problem: "Automated technical content delivery pipelines for AlmaBetter.",
    impact: "25% faster reporting",
    tags: ["Process Design", "Jira", "Education"],
    cta: "Learn More",
    status: "completed",
    link: "/case-studies/content-ops-automation",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Selected Work</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
            Projects at the intersection of AI, Martech, and Product Innovation
          </p>
          <p className="text-sm text-muted-foreground/80">
            Here&apos;s a look at things I&apos;ve built, scaled, or am currently experimenting with.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} className="block group">
              <Card className="glass-card hover-lift cursor-pointer h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {project.status === "featured" && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {project.problem}
                  </p>
                  <p className="text-foreground text-sm font-medium mb-4">
                    {project.impact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant={project.status === "wip" ? "secondary" : "default"}>
                      {project.cta}
                      {project.status !== "wip" && <ArrowRight className="ml-1 h-3 w-3" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

