import { useEffect } from "react";
import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "AI-Powered Marketing Automation",
    problem: "Designed lead nurturing and personalized communication workflows using n8n, WABA & Mandrill.",
    impact: "Reduced drop-offs by 30% and boosted lifecycle engagement by 2.5×",
    tags: ["Martech", "AI", "CRM"],
    cta: "View Case Study",
    status: "completed",
    link: "/case-studies/event-funnel-scaling"
  },
  {
    title: "Martech Stack Optimization",
    problem: "Audited, restructured, and optimized Netcore, HubSpot & GA4 stack.",
    impact: "20% improvement in lead quality, 25% faster reporting cycles",
    tags: ["Product Strategy", "Automation", "Attribution"],
    cta: "View More",
    status: "completed",
    link: "/case-studies/martech-attribution"
  },
  {
    title: "MereKapade",
    problem: "AI-powered custom t-shirt design platform.",
    impact: "Canvas API + Supabase + JWT Auth + LLM integration",
    tags: ["Product Build", "GenAI", "Commerce"],
    cta: "Live Site",
    ctaSecondary: "Product Doc",
    status: "featured",
    link: "/case-studies/merekapade-ai-commerce"
  },
  {
    title: "Event CMS Platform",
    problem: "Designed Strapi + NextJS CMS integrated with Zoom API & CRM.",
    impact: "Enabled teams to independently run 40+ events/month",
    tags: ["Infra", "Workflow", "Scale"],
    cta: "Read More",
    status: "completed",
    link: "/case-studies"
  },
  {
    title: "The Third Place",
    problem: "Community platform with RBAC, events, badges, and referral tracking.",
    impact: "Designed modular APIs with privacy-first participant visibility",
    tags: ["Community", "Systems", "Identity"],
    cta: "Coming Soon",
    status: "wip",
    link: "/case-studies"
  },
  {
    title: "Scheduling Microservice",
    problem: "Calendly-style booking system with dynamic slot logic and CRM sync.",
    impact: "Cut meeting ops time by 80%, supported 1000+ monthly meetings",
    tags: ["Infra", "SaaS Design", "UX Simplification"],
    cta: "Case Study",
    status: "completed",
    link: "/case-studies/scheduling-microservice"
  },
  {
    title: "Content Ops Automation",
    problem: "Automated technical content delivery pipelines for AlmaBetter.",
    impact: "90% error reduction + 7-week predictable delivery cycles",
    tags: ["Process Design", "Jira", "Education"],
    cta: "Learn More",
    status: "completed",
    link: "/case-studies/content-ops-automation"
  }
];

const experiments = [
  {
    title: "LangGraph + OpenRouter",
    description: "Multi-agent memory testing",
    icon: "🤖"
  },
  {
    title: "Commerce + AI Design UX",
    description: "Instant visual feedback",
    icon: "🛒"
  },
  {
    title: "Voice AI Bots (Retell.ai)",
    description: "Domain-specific speech interfaces",
    icon: "🎤"
  }
];

export default function Projects() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const goTo = (link?: string, external?: boolean) => {
    if (!link) {
      navigate('/case-studies');
      return;
    }
    if (external) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      navigate(link);
    }
  };

  const handleCardClick = (project: { link?: string; external?: boolean; title: string }) => {
    goTo(project.link, project.external);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    project: { link?: string; external?: boolean; title: string }
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(project);
    }
  };


  return (
    <div className="min-h-screen pt-20 pb-16">
      <Seo title="Projects – Karan Mandalam" description="Selected projects across AI, martech, automation, and product." canonicalPath="/projects" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Selected Work</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
            Projects at the intersection of AI, Martech, and Product Innovation
          </p>
          <p className="text-sm text-muted-foreground/80">
            Here's a look at things I've built, scaled, or am currently experimenting with.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hover-lift cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              onClick={() => handleCardClick(project)}
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, project)}
              aria-label={`Open ${project.title}`}
            >
              <CardContent className="p-6">
                {/* Status indicator */}
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
                  <Button
                    size="sm"
                    variant={project.status === "wip" ? "secondary" : "default"}
                    onClick={(e) => { e.stopPropagation(); goTo(project.link, project.external); }}
                  >
                    {project.cta}
                    {project.status !== "wip" && <ArrowRight className="ml-1 h-3 w-3" />}
                  </Button>
                  {project.ctaSecondary && (
                    <Button size="sm" variant="outline" onClick={(e) => e.stopPropagation()}>
                      {project.ctaSecondary}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}