import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: "event-funnel-scaling",
    title: "Scaling Event Funnels for ₹9M Revenue",
    tags: ["Martech", "Event Automation", "Conversion Optimization"],
    description: "When registration drop-offs started affecting top-of-funnel efficiency, I redesigned the entire event journey — from landing page to CRM attribution.",
    details: [
      "Introduced 1-click registration and email validation via n8n",
      "Removed Google login loops, cutting friction by 30%",
      "Built multi-touchpoint lifecycle flows via WebEngage",
      "Personalized reminders, WABA fallback, and dynamic tagging"
    ],
    outcomes: [
      "+90% registrations",
      "₹9M revenue impact in 4 months",
      "+25% conversion to leads from events"
    ]
  },
  {
    id: "martech-attribution",
    title: "Revamping Martech Stack for Attribution Accuracy",
    tags: ["Automation", "CRM", "Analytics Infrastructure"],
    description: "Fragmented tools → messy attribution → wasted budget. I unified our martech stack using GA4, Netcore, HubSpot, and Metabase.",
    details: [
      "Built UTM-first tracking model using GTM + server-side logic",
      "Orchestrated lead tagging flows in n8n based on campaign source",
      "Implemented CRM deduplication, proper channel attribution",
      "Rolled out channel-wise performance dashboards in Metabase"
    ],
    outcomes: [
      "+20% lead quality",
      "+25% reporting speed",
      "Reduced budget misallocation"
    ]
  },
  {
    id: "merekapade-ai-commerce",
    title: "Building MereKapade – AI-Led Design Commerce",
    tags: ["Product", "AI", "Supabase", "Canvas API"],
    description: "I wanted to test what an AI-native product from scratch could look like.",
    details: [
      "Built a full-stack MVP: Supabase (auth + storage) + Canvas API",
      "Integrated GPT for prompt-to-design generation",
      "JWT-secured user profiles with saved designs and orders",
      "Dynamic product rendering with React + Tailwind"
    ],
    outcomes: [
      "First 100 test users onboarded",
      "Reduced design-to-order time by 90%",
      "Preparing for soft launch with early evangelists"
    ]
  },
  {
    id: "scheduling-microservice",
    title: "Scheduling Microservice That Cut Ops Time by 70%",
    tags: ["Infrastructure", "UX", "CRM Sync"],
    description: "Internal scheduling was broken. I built a modular system from scratch.",
    details: [
      "Calendly-style microservice in NextJS with Supabase DB",
      "Dynamic slot generation, calendar sync, role-based logic",
      "Automated lead capture + CRM updates",
      "Built fallback workflows via Netcore and n8n"
    ],
    outcomes: [
      "80% faster booking flow",
      "Enabled 1,000+ self-serve meetings/month",
      "70% ops time saved"
    ]
  },
  {
    id: "third-place-community",
    title: "Designing \"The Third Place\" – Community Infra That Scales",
    tags: ["Community", "System Design", "Role Logic"],
    description: "How do you build curated, creator-led communities that scale but don't devolve into spam?",
    details: [
      "Defined data models for events, hosts, badges, discussions",
      "Admin-only override controls with privacy-first design",
      "Manual host assignment, referral tracking, and expiry control",
      "Discussions only visible to active community members"
    ],
    outcomes: [
      "Designed for low moderation effort",
      "RBAC and event visibility handled at infra level",
      "Launching in closed beta"
    ]
  },
  {
    id: "content-ops-automation",
    title: "Automating Content Ops for Predictability & Scale",
    tags: ["Education", "Agile", "Jira Automation"],
    description: "As AlmaBetter scaled, content delivery was breaking. I restructured the entire lifecycle.",
    details: [
      "Introduced JIRA-based agile workflows for content teams",
      "Created sprint boards, WIP tracking, and error flagging",
      "Setup Metabase dashboards to measure velocity and quality",
      "Integrated learner feedback loops into process"
    ],
    outcomes: [
      "90% reduction in delivery errors",
      "7-week predictable lead time",
      "23% drop in student journey drop-offs"
    ]
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Case Studies</h1>
          <p className="text-xl text-muted-foreground mb-4 italic">
            How I think, build, and drive outcomes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This is a deep dive into real-world problems I've tackled — spanning martech, automation, product infra, and AI-led platforms. Each case study breaks down the challenge, the process, the systems I designed, and the results we shipped.
          </p>
        </div>

        {/* Case Studies Feed */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <article key={study.id} className="group">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Title */}
              <Link 
                to={`/case-studies/${study.id}`} 
                className="block mb-6 group-hover:text-primary transition-smooth"
              >
                <h2 className="text-2xl md:text-3xl font-bold font-serif leading-tight">
                  {study.title}
                </h2>
              </Link>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                {study.description}
              </p>
              
              {/* Details */}
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {study.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">→</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              
              {/* Outcomes */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <span className="mr-2">📈</span>
                  Outcome:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {study.outcomes.map((outcome, i) => (
                    <div key={i} className="text-sm font-medium text-primary bg-primary/10 rounded-lg px-3 py-2">
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Read More Link */}
              <Link 
                to={`/case-studies/${study.id}`}
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-smooth group"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* Separator */}
              {index < caseStudies.length - 1 && (
                <div className="mt-16 border-t border-border/50"></div>
              )}
            </article>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 text-center border-t border-border/50 pt-16">
          <h2 className="text-2xl font-bold font-serif mb-4">Want to build something together?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you're exploring product ideas, marketing automation, or AI-native workflows — let's chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-smooth"
            >
              📬 Contact Me
            </Link>
            <Link 
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary/20 text-primary rounded-full font-medium hover:bg-primary/10 transition-smooth"
            >
              💡 View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}