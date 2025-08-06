import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = {
  "event-funnel-scaling": {
    title: "Scaling Event Funnels for ₹9M Revenue Impact",
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
      "₹9M revenue impact in 4 months",
      "Reduced registration time by 60%",
      "Created templates now reused across 30+ campaigns",
      "Improved event-to-enrollment ratio by 2.5×"
    ],
    learnings: [
      "Friction ≠ Form Fields — It's about cognitive load. Even perceived effort kills conversions.",
      "CRM hygiene is a multiplier. Attribution and automation are only as good as your input schema.",
      "Martech tools (WebEngage, n8n, Zoom) become true leverage when orchestrated via clear logic, not UI checkboxes."
    ]
  }
};

export default function CaseStudyDetail() {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);
  const { id } = useParams();
  const navigate = useNavigate();

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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