import { Card, CardContent } from "@/components/ui/card";

const rides = [
  {
    title: "Pacific Coast Highway",
    location: "California, USA",
    description: "Epic coastal ride through Big Sur with breathtaking ocean views.",
    image: "/placeholder.svg"
  },
  {
    title: "Blue Ridge Parkway",
    location: "Virginia & North Carolina",
    description: "Scenic mountain roads through the Appalachian Highlands.",
    image: "/placeholder.svg"
  },
  {
    title: "Going-to-the-Sun Road",
    location: "Montana, USA", 
    description: "Challenging mountain pass through Glacier National Park.",
    image: "/placeholder.svg"
  },
  {
    title: "Tail of the Dragon",
    location: "Tennessee & North Carolina",
    description: "318 curves in 11 miles of pure riding excitement.",
    image: "/placeholder.svg"
  }
];

export default function Motorcycling() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Riding Adventures</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the world on two wheels, one road at a time
          </p>
        </div>

        {/* Rides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {rides.map((ride, index) => (
            <Card key={index} className="glass-card hover-lift cursor-pointer group">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-smooth">
                    <div className="w-20 h-20 bg-primary/40 rounded-lg"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {ride.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">{ride.location}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {ride.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-semibold mb-6">Why I Ride</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Motorcycling isn't just a hobby—it's a mindset. The focus required, the connection 
                to the environment, and the sense of freedom mirror the same principles I bring 
                to product development: attention to detail, adaptability, and the courage to 
                take calculated risks.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}