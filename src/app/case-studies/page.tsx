import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies – Karan Mandalam",
  description: "Deep dives into product, automation, attribution, and AI outcomes.",
  alternates: { canonical: "/case-studies" },
};

const caseStudies = [
  {
    id: "event-funnel-scaling",
    title: "Scaling Event Funnels",
    tags: ["Product Strategy", "Event Automation", "Funnel Optimization"],
    description: "When fragmented journeys and drop-offs started impacting acquisition ROI, I led a full-funnel redesign — aligning marketing, tech, and CRM to simplify the user experience and improve lead-to-enrollment conversion.",
    details: [
      "Introduced 1-click registration with email validation (via n8n)",
      "Eliminated Google login loops, reducing friction by 30%",
      "Designed lifecycle journeys in WebEngage based on user behavior",
      "Enabled dynamic tagging, multi-channel reminders, and WABA fallback",
      "Streamlined lead flow from events → CRM with attribution intact",
    ],
    outcomes: ["+90% registrations", "significant revenue impact", "+25% conversion to qualified leads from events"],
  },
  {
    id: "martech-attribution",
    title: "Revamping the Martech Stack for Attribution Accuracy",
    tags: ["Marketing Ops", "CRM Architecture", "Analytics"],
    description: "Led a martech revamp across GA4, Netcore, HubSpot, and Metabase to fix attribution, enrich leads, and enable daily channel-wise ROI insights across campaigns.",
    details: [
      "Defined unified UTM schema across platforms",
      "Built lead enrichment + tagging workflows in n8n",
      "Orchestrated CRM sync + fallback logic for clean attribution",
      "Created Postgres-backed Metabase dashboards for performance reporting",
      "Instituted monthly data audits and cleanup cycles",
    ],
    outcomes: ["+20% lead quality", "25% faster reporting", "40% reduction in duplicate CRM entries"],
  },
  {
    id: "merekapade-ai-commerce",
    title: "MereKapade — An AI-Led Design Commerce Platform",
    tags: ["Zero-to-One", "Generative AI", "Consumer Product"],
    description: "Designed and built a solo MVP that lets users generate wearable designs from prompts — with real-time preview, saved sessions, and JWT-secured profiles.",
    details: [
      "Built frontend in React + Canvas API for custom design UX",
      "Integrated GPT for prompt-to-design generation",
      "Used Supabase for auth, RLS, and user storage",
      "Added order management logic (size, SKU, pricing)",
      "Deployed via Vercel with full token tracking and error retries",
    ],
    outcomes: ["MVP shipped in 8 weeks", "100+ testers onboarded", "Avg. 3.4 designs per user in first session"],
  },
  {
    id: "scheduling-microservice",
    title: "Scheduling Microservice That Delivered 70% ops savings",
    tags: ["Internal Tools", "SaaS Infra", "Lead Automation"],
    description: "Led the design of a multi-tenant scheduling system to automate 1,000+ meetings/mo across sales and academic teams — reducing friction and ops dependency.",
    details: [
      "Developed a modular scheduler using NextJS + Supabase",
      "Integrated CRM sync, role-based access, and slot logic",
      "Used n8n for event triggers, reminders, and lead tagging",
      "Designed fallback logic for CRM/API failures",
      "Enabled team-level view and audit logs for scheduling flows",
    ],
    outcomes: ["70% ops savings", "1,000+ meetings/mo", "25% faster lead-to-meeting time"],
  },
  {
    id: "third-place-community",
    title: "Designing \"The Third Place\" – A Community Infra Stack",
    tags: ["System Design", "Community Product", "Privacy UX"],
    description: "Architected backend logic for a role-based, event-driven community platform with RBAC, badge systems, host workflows, and referral tracking.",
    details: [
      "Defined data models for events, users, badges, and hosts",
      "Built manual host assignment + admin override logic",
      "Designed discussion expiry and community-level visibility filters",
      "Added participant control + Google Sign-In + preference management",
      "Scoped activity logging for privacy-first infra",
    ],
    outcomes: ["Fully decoupled role + badge logic", "Privacy filters built at infra layer", "Live in closed beta with growing communities"],
  },
  {
    id: "content-ops-automation",
    title: "Automating Content Ops for Predictability & Scale",
    tags: ["Agile Ops", "Education Delivery", "Product-Led Processes"],
    description: "Introduced Jira-based workflows and analytics dashboards to transform content ops into a sprint-driven, measurable process — reducing delays and improving learner experience.",
    details: [
      "Setup structured Jira workflows with sprint reviews",
      "Integrated learner feedback from WebEngage + support tickets",
      "Automated tracking via Zapier + Metabase",
      "Built dashboards for velocity, error types, and module-level health",
      "Instituted 2-week delivery cadence with ownership clarity",
    ],
    outcomes: ["90% reduction in content errors", "7-week predictable delivery lead time", "23% drop in learner journey drop-offs"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Case Studies</h1>
          <p className="text-xl text-muted-foreground mb-4 italic">How I think, build, and drive outcomes.</p>
          <p className="text-muted-foreground leading-relaxed">
            This is a deep dive into real-world problems I&apos;ve tackled — spanning martech, automation, product infra, and AI-led platforms. Each case study breaks down the challenge, the process, the systems I designed, and the results we shipped.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <article key={study.id} className="group">
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
              <Link href={`/case-studies/${study.id}`} className="block mb-6 group-hover:text-primary transition-smooth">
                <h2 className="text-2xl md:text-3xl font-bold font-serif leading-tight">{study.title}</h2>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{study.description}</p>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {study.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">→</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <span className="mr-2">📈</span>Outcome:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {study.outcomes.map((outcome, i) => (
                    <div key={i} className="text-sm font-medium text-primary bg-primary/10 rounded-lg px-3 py-2">{outcome}</div>
                  ))}
                </div>
              </div>
              <Link href={`/case-studies/${study.id}`} className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-smooth group">
                <span>Read Full Case Study</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              {index < caseStudies.length - 1 && <div className="mt-16 border-t border-border/50"></div>}
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center border-t border-border/50 pt-16">
          <h2 className="text-2xl font-bold font-serif mb-4">Want to build something together?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you&apos;re exploring product ideas, marketing automation, or AI-native workflows — let&apos;s chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-smooth"
            >
              📬 Contact Me
            </Link>
            <Link
              href="/projects"
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

