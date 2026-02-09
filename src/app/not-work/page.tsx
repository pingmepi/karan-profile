import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Camera, Bike, MapPin, Users, Calendar } from "lucide-react";
import { getPhotos } from "@/lib/photos";
import PhotoGrid from "./PhotoGrid";

export const metadata: Metadata = {
  title: "Not Work – Karan Mandalam",
  description:
    "Photography, motorcycling adventures, and volunteer work. Exploring creativity and community beyond product management.",
  keywords: [
    "Photography",
    "Motorcycling",
    "Volunteer work",
    "Creative pursuits",
    "Community work",
  ],
  alternates: { canonical: "/not-work" },
  openGraph: {
    title: "Not Work – Karan Mandalam",
    description:
      "Photography, motorcycling adventures, and volunteer work. Exploring creativity and community beyond product management.",
    url: "/not-work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Not Work – Karan Mandalam",
    description:
      "Photography, motorcycling adventures, and volunteer work.",
  },
};

const rides = [
  { title: "Pacific Coast Highway", location: "California, USA", description: "Epic coastal ride through Big Sur with breathtaking ocean views and winding cliffs.", distance: "655 miles", date: "Summer 2023" },
  { title: "Blue Ridge Parkway", location: "Virginia & North Carolina", description: "Scenic mountain roads through the Appalachian Highlands with endless curves.", distance: "469 miles", date: "Fall 2022" },
  { title: "Going-to-the-Sun Road", location: "Montana, USA", description: "Challenging mountain pass through Glacier National Park's pristine wilderness.", distance: "50 miles", date: "Summer 2023" },
];

const volunteerExperience = [
  { organization: "Tech for Good India", role: "Product Mentor", period: "2022 - Present", description: "Mentoring early-stage social impact startups on product strategy and technical implementation.", impact: "Guided 12+ startups to successful MVP launches" },
  { organization: "Code for India", role: "Technical Advisor", period: "2021 - 2022", description: "Led technical workshops and contributed to open-source civic technology projects.", impact: "Trained 50+ developers in modern web technologies" },
];

export default function NotWorkPage() {
  const photos = getPhotos();

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Not Work</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The lens, the road, and the community — where I find perspective, challenge myself, and give back.
          </p>
          <div className="flex justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2"><Camera className="h-5 w-5" /><span className="text-sm">Photography</span></div>
            <div className="flex items-center gap-2"><Bike className="h-5 w-5" /><span className="text-sm">Motorcycling</span></div>
            <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span className="text-sm">Volunteering</span></div>
          </div>
        </div>

        {/* Photography Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Camera className="h-8 w-8 text-primary" />
              Through the Lens
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capturing moments that tell stories — from bustling street scenes to quiet contemplative landscapes.
            </p>
          </div>
          <PhotoGrid photos={photos} />
        </section>

        {/* Motorcycling Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Bike className="h-8 w-8 text-primary" />
              Two Wheels, Endless Roads
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every mile teaches something new — about focus, patience, and the art of navigating uncertainty.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {rides.map((ride, index) => (
              <Card key={index} className="glass-card hover-lift group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">{ride.title}</h3>
                    <Badge variant="secondary" className="text-xs">{ride.distance}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                    <MapPin className="h-4 w-4" />{ride.location}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{ride.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />{ride.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-semibold mb-6">Why I Ride</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Motorcycling mirrors product work in unexpected ways. Both demand total presence,
                calculated risk-taking, and the ability to adapt quickly when conditions change.
                The road teaches what no classroom can — how to trust your instincts while staying humble
                enough to keep learning.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Volunteering Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Heart className="h-8 w-8 text-primary" />
              Giving Back
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Using technology and product thinking to create meaningful impact in communities and causes I care about.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerExperience.map((experience, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{experience.organization}</h3>
                      <p className="text-primary font-medium">{experience.role}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">{experience.period}</Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{experience.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-foreground font-medium">{experience.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Connection Section */}
        <section className="text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-semibold mb-6">The Thread That Connects</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                Whether framing a shot, navigating a mountain pass, or mentoring a startup —
                it&apos;s all about finding clarity in complexity and helping others see new possibilities.
                These experiences shape how I approach product work with empathy, patience, and perspective.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Let&apos;s Connect</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

