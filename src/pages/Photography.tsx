import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePhotographyImages } from "@/hooks/usePhotographyImages";



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
  const { photos, loading, error, refetch } = usePhotographyImages();

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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments and journeys through the lens
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="aspect-[4/3] bg-muted rounded-lg animate-pulse"
              />
            ))
          ) : error ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                {error}. Upload images to the 'photography' bucket in Supabase Storage.
              </p>
            </div>
          ) : photos.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                No photos found. Upload images to the 'photography' bucket in Supabase Storage.
              </p>
            </div>
          ) : (
            photos.map((photo) => (
              <div
                key={photo.id}
                className={`${getAspectClass(photo.aspect)} bg-muted rounded-lg overflow-hidden hover-lift cursor-pointer group`}
              >
                <img
                  src={photo.url}
                  alt={photo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Hide broken images and refetch
                    e.currentTarget.style.display = 'none';
                    setTimeout(() => refetch(), 1000);
                  }}
                />
              </div>
            ))
          )}
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