import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudy = {
  title: "AI-Powered Marketing Automation",
  subtitle: "Product Lead | Tech Innovators Inc. | 2021-2023",
  problem: "Tech Innovators Inc. faced challenges in personalizing customer interactions and optimizing marketing campaigns. The existing marketing automation system lacked the ability to dynamically adapt to individual customer behaviors and preferences, resulting in suboptimal engagement and conversion rates.",
  approach: [
    {
      title: "Discovery & Planning",
      content: "Conducted thorough market research and customer segmentation analysis to identify key target audiences and their unique needs. Developed a comprehensive product roadmap outlining the integration of AI-driven features into the marketing automation platform."
    },
    {
      title: "Implementation & Integration", 
      content: "Led cross-functional teams to integrate machine learning algorithms for personalized content delivery, predictive analytics for campaign optimization, and automated A/B testing frameworks."
    },
    {
      title: "Optimization & Iteration",
      content: "Continuously monitored performance metrics and user feedback to refine AI models and improve system accuracy. Implemented advanced segmentation strategies and dynamic content personalization."
    }
  ],
  outcomes: [
    "25% increase in click-through rates on email campaigns",
    "15% improvement in conversion rates on landing pages", 
    "10% reduction in customer churn rate"
  ]
};

export default function CaseStudies() {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Button variant="ghost" className="mb-6 p-0 h-auto text-muted-foreground hover:text-foreground">
            ← Back
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{caseStudy.title}</h1>
          <p className="text-muted-foreground">{caseStudy.subtitle}</p>
        </div>

        {/* Problem Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Problem</h2>
          <p className="text-muted-foreground leading-relaxed">
            {caseStudy.problem}
          </p>
        </section>

        {/* Approach Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Approach</h2>
          <div className="space-y-4">
            {caseStudy.approach.map((section, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-smooth"
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
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Outcomes Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Outcomes</h2>
          <p className="text-muted-foreground mb-6">
            The implementation of AI-powered marketing automation resulted in significant 
            improvements across key performance indicators:
          </p>
          <div className="space-y-4">
            {caseStudy.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{outcome}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}