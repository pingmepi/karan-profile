import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const impactMetrics = [
  {
    metric: "3× blog traffic",
    description: "via SEO CMS"
  },
  {
    metric: "₹9M revenue boost",
    description: "via event funnel optimization"
  },
  {
    metric: "70% reduction",
    description: "in ops inefficiencies"
  },
  {
    metric: "90% increase",
    description: "in registrations"
  },
  {
    metric: "20% improvement",
    description: "in lead quality"
  }
];

const whatIDoSections = [
  {
    title: "💡 Product Strategy Meets AI Execution",
    description: "I work where ideas meet systems — shaping user journeys, driving experiments, and architecting automation for speed and scale."
  },
  {
    title: "📈 Growth x Martech x Data",
    description: "UTM tracking, lifecycle journeys, CRM integrations, funnel optimization — all stitched into one unified motion to move metrics."
  },
  {
    title: "🤖 AI-Native Workflows",
    description: "LLM-powered assistants, agentic design patterns, workflow orchestration via n8n, OpenAI, and Google AI ecosystem."
  }
];

// Updated homepage component

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
            
            {/* Headline */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-6">
                Building at the intersection of{" "}
                <span className="text-primary">AI, Product, and Possibility</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                I'm Karan — a product leader, martech architect, and builder of AI-native systems.
                From marketing automation to generative design platforms, I turn complexity into clarity and scale.
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
                <Link to="/case-studies">Explore Case Studies</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Bio Section */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Quick Bio</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="glass-card">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-primary">Who I Am</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Over the last 7 years, I've shipped SaaS platforms, launched automation systems, and embedded LLMs into customer and business workflows. I've worked across EdTech, Martech, and e-commerce — leading product charters that drive scale and compound business value.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-primary">Currently</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Driving AI and automation-led growth at <strong>Miles Education</strong> (CTO's Office)<br/>
                  Building <strong>MereKapade</strong>, an AI-first design commerce platform<br/>
                  Experimenting with community tech at <strong>The Third Place</strong>
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-primary">Past Work</h4>
                <p className="text-muted-foreground leading-relaxed">
                  UpGrad, AlmaBetter, Capgemini<br/>
                  BITS Pilani alumnus<br/>
                  Go-to guy for experimentation, automation, and new tool rollouts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {whatIDoSections.map((section, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{section.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Metrics */}
          <div className="text-center mb-8">
            <h4 className="text-2xl font-semibold mb-8 text-primary">Impact Metrics</h4>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="glass-card text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">{metric.metric}</div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Side Persona Section */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Outside Work</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                You'll usually find me behind a camera or on a motorcycle, chasing stories and sunsets. 
                I believe good products — like good rides — need a strong engine, the right terrain, and a dash of chaos.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/photography">
                  Photography & Riding
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Let's Build Something Together</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Product idea? Tech challenge? Just curious about automation or AI?
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
