import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";

const caseStudies = {
  "event-funnel-scaling": {
    title: "Scaling Event Funnels for Revenue Impact",
    tags: ["Martech", "Event Automation", "Conversion Optimization"],
    overview: "As part of my role in the COO's Office at AlmaBetter, I led a critical program to overhaul our event-based lead acquisition funnels. This initiative not only unlocked significant revenue upside but also became the foundation for a sustainable event marketing engine.",
    context: "Events were a key part of our marketing strategy to drive top-of-funnel leads. However, the conversion from registration to lead and from lead to enrollment was inconsistent and often inefficient due to fragmented user journeys across multiple platforms, redundant steps causing drop-offs, and lack of targeted post-registration communication.",
    challenge: "Despite a high volume of registrants, the conversion rate from event to enrollment was low, and CAC was ballooning. A few core issues stood out: Multiple clicks required to register (Google login + forms), no lifecycle automation post-registration, and generic follow-ups not tailored to user behavior.",
    approach: [
      {
        title: "Friction Audit",
        content: "Mapped every click from ad to form to CRM entry to identify bottlenecks and unnecessary steps in the user journey."
      },
      {
        title: "Flow Simplification", 
        content: "Collapsed all touchpoints into a single registration action, replacing Google login with 1-click email-based registration via Mandrill validation."
      },
      {
        title: "Lifecycle Orchestration",
        content: "Used WebEngage and n8n to design multi-step, personalized communication journeys with fallback sequences using WhatsApp (WABA) for no-shows."
      },
      {
        title: "Attribution Clean-Up",
        content: "Implemented UTM tagging and custom fields to track source-wise performance, auto-tagging leads with custom attributes for source, event type, and conversion stage."
      },
      {
        title: "Lead Scoring + Prioritization",
        content: "Segmented leads in CRM based on behavior (event attended, clicked reminder, etc.) and implemented A/B testing on subject lines, timings, and channels."
      }
    ],
    execution: [
      "Replaced Google login with a 1-click email-based registration (via Mandrill validation)",
      "Used n8n to integrate landing pages, Zoom, WebEngage, and CRM",
      "Created fallback sequences using WhatsApp (WABA) for no-shows",
      "Auto-tagged leads with custom attributes for source, event type, and conversion stage",
      "Implemented A/B testing on subject lines, timings, and channels"
    ],
    outcomes: [
      "+90% increase in event registrations",
      "Reduced registration time by 60%",
      "Created templates now reused across 30+ campaigns",
      "Improved event-to-enrollment ratio by 2.5×"
    ],
    learnings: [
      "Friction ≠ Form Fields — It's about cognitive load. Even perceived effort kills conversions.",
      "CRM hygiene is a multiplier. Attribution and automation are only as good as your input schema.",
      "Martech tools (WebEngage, n8n, Zoom) become true leverage when orchestrated via clear logic, not UI checkboxes."
    ]
  },
  "martech-attribution": {
    title: "Revamping the Martech Stack for Attribution Accuracy",
    tags: ["Automation", "CRM", "Analytics Infrastructure"],
    overview: "At Miles Education, fragmented tools were leading to duplicated leads, attribution errors, and delayed insights. I spearheaded a complete overhaul of the martech stack — aligning data flows across ad platforms, CRM, analytics, and automation layers to drive better decision-making and campaign ROI.",
    context: "The business was scaling fast, but marketing visibility wasn't. Each team was using siloed tools: Leads were entering from multiple sources (landing pages, forms, WhatsApp, events), attribution data was either missing, overwritten, or misclassified, there was no consistent UTM structure or source tracking logic, and Metabase dashboards pulled from outdated or mismatched data. This caused inaccurate campaign reporting, poor budget allocation, and frequent conflicts between performance, automation, and sales teams.",
    challenge: "We needed a single source of truth for all leads — and a martech system that could: attribute leads accurately from first touch to conversion, enable cohort-wise ROI tracking, eliminate duplicates across CRM entries, and surface insights daily, not post-mortem.",
    approach: [
      {
        title: "UTM Schema Definition",
        content: "Established a consistent structure across all campaigns (source, medium, campaign, content, term) to ensure uniform tracking and attribution."
      },
      {
        title: "Landing Page & Form Integration", 
        content: "Captured UTM data across the funnel via GTM and embedded JS tracking. Used hidden fields to preserve context across redirects and signups."
      },
      {
        title: "Lead Flow Orchestration in n8n",
        content: "Built flows to clean, dedupe, and enrich leads before pushing to CRM. Attached UTM values, lead source, and campaign tags dynamically. Created retry + error-catch logic for fallback handling."
      },
      {
        title: "Reporting Infrastructure with Metabase",
        content: "Connected Postgres (via Supabase) to generate channel-wise reports. Defined funnel metrics: visits → MQL → SQL → demo booked → enrolled. Synced dashboards with campaign and sales performance weekly."
      }
    ],
    execution: [
      "Tools used: n8n, Netcore, HubSpot, GA4, GTM, Metabase, PostgreSQL",
      "Custom logic to split leads by vertical, funnel stage, and region",
      "Monthly CRM audit to clean up misrouted, untagged, or \"unknown source\" leads",
      "Built fallback logic for leads missing UTMs (used referrer, form path, campaign name)"
    ],
    outcomes: [
      "20% improvement in lead quality",
      "25% reduction in reporting turnaround (from 5 days to under 36 hours)",
      "40% decrease in duplicate lead entries",
      "Enabled channel-level ROI tracking → improved ad budget allocation",
      "Alignment across marketing, automation, and sales teams"
    ],
    learnings: [
      "Attribution isn't just about pixels or UTM tags — it's a cross-functional contract across teams and tools",
      "A robust naming convention system saved hundreds of hours in debugging and misreporting",
      "Building your own attribution logic in tools like n8n gives far more control than depending on out-of-box CRM defaults"
    ]
  },
  "merekapade-ai-commerce": {
    title: "Building MereKapade — An AI-Led Design Commerce Platform",
    tags: ["Product", "AI", "Supabase", "Canvas API"],
    overview: "MereKapade started as a challenge to myself: Could I build a fully functional, AI-powered design commerce platform — solo? From product vision and user workflows to infra, security, and launch prep — I built MereKapade from scratch to test what it means to ship an AI-native consumer product.",
    context: "I noticed a growing gap in creative commerce: people wanted unique, personal designs but lacked the skills or tools to create them. AI image generation was exploding, but most tools were either generic or disconnected from actual buying experiences. The question: What if users could describe a t-shirt design in words, and wear it within minutes?",
    challenge: "To go from concept to commerce, I needed to solve: Secure user onboarding and data storage, real-time AI-based design generation and preview, canvas interaction and customization (without needing Figma skills), order flow with saved sessions and designs, and a backend that was fast, scalable, and cost-effective.",
    approach: [
      {
        title: "Prompt → Design",
        content: "Users describe a visual (e.g., \"retro motorcycle on Mars\") → system calls an LLM/image generator → renders design."
      },
      {
        title: "Design → Canvas", 
        content: "Built a canvas-based UI where users can preview, drag, or adjust designs on t-shirt mockups."
      },
      {
        title: "Auth → Save",
        content: "Users log in via email (JWT-based Supabase auth) and can view, download, or edit saved designs."
      },
      {
        title: "Design → Order (Coming Soon)",
        content: "Users can convert a design into a purchasable order with pricing logic, size options, and UPI integration."
      }
    ],
    execution: [
      "Frontend: React 18 + TypeScript + Vite + Tailwind CSS",
      "Canvas: Custom logic using HTML5 Canvas API",
      "AI Integration: OpenAI + fallback image models (custom prompt tuning)",
      "Backend: Supabase (PostgreSQL, Auth, RLS, Storage)",
      "State Management: React Context + React Query",
      "Validation: Zod + React Hook Form",
      "Deployment: Vercel",
      "Security: JWT Auth + RLS at the DB level"
    ],
    outcomes: [
      "Built MVP from idea to live site in under 8 weeks",
      "100+ users onboarded for testing",
      "Avg. 3.4 designs/user generated in first session",
      "Reduced time from idea → design to under 20 seconds",
      "Secured early interest from an angel investor"
    ],
    learnings: [
      "Shipping solo products at scale requires making decisive scoping calls — I prioritized stability + UX over visual polish in V1",
      "Canvas UX is its own world — making it intuitive without design tools takes careful constraint design",
      "A lot of \"AI-powered\" products break at ops — I designed with retry logic, usage caps, and token tracking from the start"
    ]
  },
  "scheduling-microservice": {
    title: "Building a Scheduling Microservice That Cut Ops Time by 70%",
    tags: ["Infrastructure", "UX", "CRM Sync"],
    overview: "While working in the CTO's Office at Miles Education, I designed and shipped a Calendly-style scheduling microservice that streamlined appointment booking across marketing, sales, and academic teams. The solution not only eliminated manual coordination but became a reusable asset powering 1,000+ meetings/month.",
    context: "Lead-to-meeting handoff was one of the weakest links in our funnel. Despite having inbound leads and outbound cadences, the actual scheduling process was: Manual (via emails, WhatsApp, or shared Google Sheets), untracked (no centralized view of booked or missed meetings), and unattributed (CRM didn't log source, time-to-meeting, or lead status). This created 30%+ drop-offs post-lead capture, no-show spikes due to poor reminders, and high operational load on support teams.",
    challenge: "We needed a multi-tenant, modular scheduling system that could: Allow dynamic slot-based booking based on available faculty or advisors, automatically sync meetings with CRM + calendars, trigger personalized reminders via WhatsApp & email, securely handle access (role-based views for marketing vs academic teams), and work without paying for enterprise Calendly or routing through Zapier.",
    approach: [
      {
        title: "Frontend Booking Widget",
        content: "Built using React + Tailwind with dynamic slot fetching based on advisor availability. Clean, responsive UI embedded on multiple product pages."
      },
      {
        title: "Role-Based Access Logic", 
        content: "Defined access layers (internal vs public) using Supabase Auth + JWT. Academic heads could manage calendars; marketers had read-only slots."
      },
      {
        title: "Automated Workflows",
        content: "Used n8n to sync confirmed bookings with CRM (HubSpot), trigger reminders via Netcore (email) + WABA (WhatsApp), and tag leads based on booking source, funnel stage, and meeting outcome."
      },
      {
        title: "Fallback + Retry Logic",
        content: "If a CRM sync failed or a contact method was missing, fallback flows kicked in with alternate reminders or manual routing."
      }
    ],
    execution: [
      "Frontend: NextJS + Tailwind",
      "Backend: Supabase (PostgreSQL, RLS, Auth, Storage)",
      "Orchestration: n8n",
      "CRM: HubSpot",
      "Communication: Netcore (email) + WhatsApp Business API",
      "Security: JWT-based user validation + DB-level permissions"
    ],
    outcomes: [
      "70% reduction in ops effort for scheduling",
      "1000+ self-serve meetings/month with automated sync",
      "25% decrease in lead-to-meeting time",
      "Improved conversion rates for leads who scheduled within 48 hrs",
      "Reused the same microservice across 3 teams (marketing, academic advising, sales)"
    ],
    learnings: [
      "Calendly works great — until you need logic specific to your workflows, lead types, or funnel stages",
      "A microservice mindset helps decouple systems and give teams more control",
      "Building with Supabase + n8n gave the perfect balance of speed, scalability, and observability"
    ]
  },
  "content-ops-automation": {
    title: "Automating Content Ops for Predictability & Scale",
    tags: ["Education", "Agile", "Jira Automation"],
    overview: "At AlmaBetter, I was tasked with fixing a growing pain point — content creation and delivery for learner programs was inconsistent, error-prone, and hard to track. Over the course of a few weeks, I implemented a Jira-based content lifecycle system, introduced sprint-based tracking, and built analytics dashboards that turned content ops from a black box into a predictable engine.",
    context: "The company's learner programs were scaling fast, but behind the scenes: Delivery timelines were slipping, content iterations were chaotic, feedback loops were broken, and there was no visibility on what was delayed, blocked, or live. This was affecting learner satisfaction (CSAT), instructor readiness, and internal bandwidth planning.",
    challenge: "We needed a systematic, repeatable process to manage: Multiple content owners and stakeholders (SMEs, video editors, curriculum designers), continuous content improvements based on learner feedback, and time-boxed delivery (often tied to live batches and marketing commitments).",
    approach: [
      {
        title: "Jira Workflow Setup",
        content: "Defined clear statuses: Backlog → In Progress → Review → Approved → Published. Introduced swimlanes by module + assigned content owners."
      },
      {
        title: "Sprint Cadence & Reviews", 
        content: "Moved content ops to a 2-week sprint cycle. Weekly demo/review calls with stakeholders to unblock or reprioritize."
      },
      {
        title: "Feedback Integration Loop",
        content: "Mapped learner feedback from WebEngage and support tickets directly into Jira as backlog items. Triaged based on severity and impact."
      },
      {
        title: "Analytics Layer with Metabase",
        content: "Created dashboards to track: Weekly content velocity, % of items published on-time, error types and recurrence, and module-wise delays."
      },
      {
        title: "Automation Layer",
        content: "Used Zapier to auto-update content status based on team inputs from shared Google Sheets, Slack pings, and GitHub commits."
      }
    ],
    execution: [
      "Workflow & Tracking: Jira",
      "Automation: Zapier",
      "Analytics: Metabase",
      "Feedback Sources: WebEngage, support CRM",
      "Delivery Status: Shared Confluence & Git-integrated repos"
    ],
    outcomes: [
      "90% reduction in content errors",
      "Established a predictable 7-week lead time from ideation to publish",
      "Weekly content velocity dashboard became a core reporting tool",
      "Increased cross-functional alignment across content, ops, and tech",
      "23% reduction in learner journey drop-offs (linked to improved content quality and release timing)"
    ],
    learnings: [
      "Content is code. It needs structure, sprints, owners, and clear success metrics.",
      "Feedback is valuable only if you can route it to action — automation helps scale that routing",
      "You don't need heavy content ops tools — just well-defined processes and lightweight automation"
    ]
  }
};

export default function CaseStudyDetail() {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);
  const { id } = useParams();
  const navigate = useNavigate();

  const caseStudy = caseStudies[id as keyof typeof caseStudies];
  const seoTitle = `${caseStudy ? caseStudy.title : 'Case Study'} – Karan Mandalam`;
  const seoDesc = caseStudy?.overview?.slice(0, 150) ?? 'Case study details';
  const canonical = `/case-studies/${id}`;
  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={() => navigate('/case-studies')}>
            Back to Case Studies
          </Button>
        </div>
      </div>
    );
  }

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <Seo title={seoTitle} description={seoDesc} canonicalPath={canonical} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Button 
            variant="ghost" 
            className="mb-6 p-0 h-auto text-muted-foreground hover:text-foreground"
            onClick={() => navigate('/case-studies')}
          >
            ← Back to Case Studies
          </Button>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-6">{caseStudy.title}</h1>
        </div>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">📌</span>
            Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {caseStudy.overview}
          </p>
        </section>

        {/* Context Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">🧩</span>
            Context
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {caseStudy.context}
          </p>
        </section>

        {/* Challenge Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">❌</span>
            The Challenge
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {caseStudy.challenge}
          </p>
        </section>

        {/* Approach Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">🛠️</span>
            My Approach
          </h2>
          <p className="text-muted-foreground mb-6">
            I treated this as a <strong>full-funnel experience redesign</strong> across UX, martech automation, and tracking:
          </p>
          <div className="space-y-4">
            {caseStudy.approach.map((section, index) => (
              <div key={index} className="border border-border/50 rounded-lg">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-smooth rounded-lg"
                >
                  <h3 className="font-medium">{section.title}</h3>
                  {expandedSection === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                {expandedSection === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Execution Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">⚙️</span>
            Execution Details
          </h2>
          <ul className="space-y-3">
            {caseStudy.execution.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Outcomes Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">📈</span>
            Outcomes
          </h2>
          <div className="space-y-4">
            {caseStudy.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-medium text-primary">{outcome}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Learnings Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">🧠</span>
            What I Learned
          </h2>
          <ul className="space-y-4">
            {caseStudy.learnings.map((learning, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">→</span>
                <span className="text-muted-foreground leading-relaxed">{learning}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Navigation */}
        <div className="border-t border-border/50 pt-8">
          <Button 
            onClick={() => navigate('/case-studies')}
            variant="outline"
            className="w-full sm:w-auto"
          >
            ← Back to All Case Studies
          </Button>
        </div>
      </div>
    </div>
  );
}