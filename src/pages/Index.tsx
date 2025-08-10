import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Rocket, User, TrendingUp, DollarSign, Settings, Users, Target, Camera, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
const impactMetrics = [
  {
    icon: TrendingUp,
    metric: "3× Organic Traffic",
    description: "via SEO-first CMS"
  },
  {
    icon: DollarSign,
    metric: "Revenue Impact",
    description: "via optimized event funnels"
  },
  {
    icon: Settings,
    metric: "70% Ops Efficiency",
    description: "through automation systems"
  },
  {
    icon: Users,
    metric: "90% Uplift in Registrations",
    description: "with improved UX"
  },
  {
    icon: Target,
    metric: "20% Lead Quality Boost",
    description: "via segmentation + attribution"
  }
];

// Removed aboutCards and projectPreviews arrays

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo title="Karan Mandalam – AI, Product, Automation" description="Product leader blending AI, martech, and automation. Projects, case studies, photography, contact." canonicalPath="/" />
      {/* Section 1: Hero - Clear, Punchy, and Human */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Name */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold italic mb-8 text-foreground animate-scale-in">
              Karan
            </h1>
            
            {/* Headline with emoji */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-6 flex items-center justify-center gap-3">
                <Zap className="text-primary h-8 w-8 md:h-10 md:w-10" />
                Building at the Intersection of AI, Product, and Possibility
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                I'm a product leader blending martech, automation, and AI to design systems that scale.
                <br className="hidden md:block" />
                Whether it's orchestrating LLMs, driving funnel growth, or launching platforms — I move fast and think deep.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/case-studies">Case Studies</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Section 3: What I Believe / Product Philosophy */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic text-foreground max-w-4xl mx-auto leading-relaxed">
              💬 "I believe good products behave like good systems: they scale, adapt, and respect the user's time."
            </blockquote>
            <p className="text-muted-foreground mt-6 italic">
              Most things worth building start with a messy whiteboard and a clear intention.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Work That Made a Dent (Impact Metrics) */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Work That Made a Dent</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index} className="metric-card text-center p-6 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-xl font-bold text-foreground mb-2">{metric.metric}</div>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


      {/* Section 6: Outside Work */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card relative overflow-hidden">
            <CardContent className="p-12 text-center relative z-10">
              <div className="flex justify-center gap-4 mb-6">
                <Car className="h-8 w-8 text-primary" />
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
                When I'm not building products,<br />
                I'm riding motorcycles, capturing moments through a lens, or chasing stories across new roads.
              </h3>
              <Button asChild variant="outline" size="lg">
                <Link to="/not-work">
                  Photography & Riding
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 7: Let's Build Something Together */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Let's Build Something Together</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Got a product idea, automation problem, or AI workflow to figure out?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/projects">Explore Projects</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;