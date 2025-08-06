import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = ["All", "Portraits", "Street", "Landscape", "Motorcycling"];

const photos = [
  { id: 1, category: "Portraits", aspect: "portrait" },
  { id: 2, category: "Landscape", aspect: "landscape" },
  { id: 3, category: "Landscape", aspect: "landscape" },
  { id: 4, category: "Portraits", aspect: "portrait" },
  { id: 5, category: "Street", aspect: "square" },
  { id: 6, category: "Landscape", aspect: "landscape" },
  { id: 7, category: "Portraits", aspect: "portrait" },
  { id: 8, category: "Street", aspect: "square" },
  { id: 9, category: "Motorcycling", aspect: "landscape" },
  { id: 10, category: "Portraits", aspect: "portrait" },
  { id: 11, category: "Motorcycling", aspect: "landscape" },
  { id: 12, category: "Landscape", aspect: "landscape" },
];

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

export default function Photography() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const getAspectClass = (aspect: string) => {
    switch (aspect) {
      case "portrait": return "aspect-[3/4]";
      case "landscape": return "aspect-[4/3]";
      case "square": return "aspect-square";
      default: return "aspect-[4/3]";
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Photography & Motorcycling</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Capturing moments and journeys through the lens
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className={`${getAspectClass(photo.aspect)} bg-muted rounded-lg overflow-hidden hover-lift cursor-pointer group`}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-smooth">
                <div className="w-12 h-12 bg-primary/40 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Riding Adventures Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Riding Adventures</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exploring the world on two wheels, one road at a time
            </p>
          </div>

          {/* Rides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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