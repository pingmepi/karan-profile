import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: "ai-marketing-automation",
    title: "AI-Powered Marketing Automation",
    subtitle: "Product Lead | Tech Innovators Inc. | 2021-2023",
    description: "Automated lead nurturing and personalized content delivery using AI, resulting in significant performance improvements across key metrics.",
    image: "/placeholder.svg",
    outcomes: [
      "25% increase in click-through rates",
      "15% improvement in conversion rates", 
      "10% reduction in customer churn"
    ],
    category: "AI & Martech"
  },
  {
    id: "martech-optimization",
    title: "Martech Stack Optimization",
    subtitle: "Product Lead | Digital Solutions Corp | 2020-2021",
    description: "Optimized marketing technology stack for efficiency and ROI, streamlining workflows and improving team productivity.",
    image: "/placeholder.svg",
    outcomes: [
      "40% reduction in tool licensing costs",
      "30% improvement in team efficiency",
      "50% faster campaign deployment"
    ],
    category: "Product Strategy"
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics Platform",
    subtitle: "Senior Product Manager | Analytics Pro | 2019-2020",
    description: "Built a predictive analytics platform for sales forecasting, enabling data-driven decisions and improved targeting strategies.",
    image: "/placeholder.svg",
    outcomes: [
      "20% improvement in forecast accuracy",
      "35% increase in sales team efficiency",
      "15% boost in revenue attribution"
    ],
    category: "Data & Analytics"
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dives into product challenges, solutions, and measurable outcomes across AI, Martech, and Product Innovation
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="glass-card hover-lift cursor-pointer group">
              <Link to={`/case-studies/${study.id}`}>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="lg:col-span-1">
                      <div className="aspect-video lg:aspect-square bg-muted overflow-hidden lg:rounded-l-lg rounded-t-lg lg:rounded-tr-none">
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-smooth">
                          <div className="w-20 h-20 bg-primary/40 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:col-span-2 p-8">
                      <div className="mb-4">
                        <span className="text-sm text-primary font-medium">{study.category}</span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-smooth">
                        {study.title}
                      </h2>
                      
                      <p className="text-muted-foreground text-sm mb-4">{study.subtitle}</p>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {study.description}
                      </p>
                      
                      {/* Key Outcomes */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-foreground mb-3">Key Outcomes:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {study.outcomes.map((outcome, i) => (
                            <div key={i} className="text-sm text-muted-foreground bg-accent/50 rounded-lg px-3 py-2">
                              {outcome}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Read More Link */}
                      <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-smooth">
                        <span>Read Full Case Study</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}