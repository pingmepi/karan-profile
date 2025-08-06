import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const recentProjects = [
  {
    title: "AI-Powered Marketing Automation",
    description: "Developed an AI-driven platform to automate marketing tasks, resulting in a 30% increase in efficiency.",
    category: "AI & Martech"
  },
  {
    title: "Personalized Customer Journeys",
    description: "Designed and implemented personalized customer journeys using machine learning, boosting conversion rates by 20%.",
    category: "Product Strategy"
  },
  {
    title: "Predictive Analytics Platform",
    description: "Built a predictive analytics platform for sales forecasting, enabling data-driven decisions and improved targeting.",
    category: "Data & Analytics"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent">
              Karan
            </h1>
            
            {/* Tagline */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-6">
                Product Leader at the Intersection of{" "}
                <span className="text-primary">AI, Martech & Digital Experiences</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                7+ years of experience. BITS Pilani alum. Built products and platforms. 
                Led AI + automation charters across industries.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h3>
            <p className="text-lg text-muted-foreground">
              Latest work at the forefront of AI and product innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <Card key={index} className="glass-card hover-lift cursor-pointer group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
