import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import siteContent from "@/content/siteContent";
const home = siteContent.home;

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo title={home.seo?.title ?? "Karan — Product, AI & Automation"} description={home.seo?.description ?? "Product leader with a bias to build. From AI-first workflows to scalable automation systems."} canonicalPath="/" />
      {/* Section 1: Hero - Clear, Punchy, and Human */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Name */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold italic mb-8 text-foreground animate-scale-in">
              {home.hero?.name ?? 'Karan'}
            </h1>
            
            {/* Headline with emoji */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-6 flex items-center justify-center gap-3">
                <Zap className="text-primary h-8 w-8 md:h-10 md:w-10" />
                {home.hero?.headline ?? 'Building at the intersection of AI, Product, and Possibility'}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                {home.hero?.subhead}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {home.hero?.ctas?.map((cta: { label: string; href: string; style?: string }, idx: number) => (
                <Button
                  asChild
                  key={idx}
                  size="lg"
                  variant={cta.style === 'primary' ? 'default' : 'outline'}
                  className="text-lg px-8"
                >
                  <Link to={cta.href}>
                    {cta.label}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>


      {home.philosophy?.quote ? (
        <section className="pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic text-foreground max-w-4xl mx-auto leading-relaxed">
                {home.philosophy.quote}
              </blockquote>
              {home.philosophy.supportLine ? (
                <p className="text-muted-foreground mt-6 italic">{home.philosophy.supportLine}</p>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {home.impactMetrics?.length ? (
        <section className="pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Work That Made a Dent</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {home.impactMetrics.map((metric: { metric: string; description: string }, index: number) => (
                <Card key={index} className="metric-card text-center p-6 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="text-xl font-bold text-foreground mb-2">{metric.metric}</div>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : null}


      {home.outsideWork ? (
        <section className="pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="glass-card relative overflow-hidden">
              <CardContent className="p-12 text-center relative z-10">
                <h3 className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
                  {home.outsideWork.headline}
                </h3>
                {home.outsideWork.cta ? (
                  <Button asChild variant="outline" size="lg">
                    <Link to={home.outsideWork.cta.href}>
                      {home.outsideWork.cta.label}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          </div>
        </section>
      ) : null}

      {home.finalCta ? (
        <section className="pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="glass-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">{home.finalCta.headline}</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  {home.finalCta.body}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {home.finalCta.primaryCta ? (
                    <Button asChild size="lg" className="text-lg px-8">
                      <Link to={home.finalCta.primaryCta.href}>
                        {home.finalCta.primaryCta.label}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  ) : null}
                  {home.finalCta.secondaryCta ? (
                    <Button asChild variant="outline" size="lg" className="text-lg px-8">
                      <Link to={home.finalCta.secondaryCta.href}>
                        {home.finalCta.secondaryCta.label}
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Index;