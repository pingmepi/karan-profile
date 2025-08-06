import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "AI-Powered Marketing Automation",
    description: "Automated lead nurturing and personalized content delivery using AI.",
    image: "/placeholder.svg",
    category: "AI & Martech"
  },
  {
    title: "Martech Stack Optimization", 
    description: "Optimized marketing technology stack for efficiency and ROI.",
    image: "/placeholder.svg",
    category: "Product Strategy"
  },
  {
    title: "Design System Implementation",
    description: "Implemented a scalable design system for consistent user experiences.",
    image: "/placeholder.svg",
    category: "Design & UX"
  },
  {
    title: "No-Code Workflow Automation",
    description: "Automated workflows using no-code tools for increased productivity.",
    image: "/placeholder.svg",
    category: "Automation"
  },
  {
    title: "Rapid Prototyping with Figma",
    description: "Rapidly prototyped and tested new features using Figma.",
    image: "/placeholder.svg",
    category: "Product Design"
  },
  {
    title: "Cross-Functional Collaboration",
    description: "Facilitated collaboration between product, design, and engineering teams.",
    image: "/placeholder.svg",
    category: "Leadership"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Selected Work</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects at the intersection of AI, Martech, and Product Innovation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover-lift cursor-pointer group">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/30 rounded-lg"></div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="mb-3">
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}