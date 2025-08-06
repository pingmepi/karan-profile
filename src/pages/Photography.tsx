import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Portraits", "Street", "Landscape"];

const photos = [
  { id: 1, category: "Portraits", aspect: "portrait" },
  { id: 2, category: "Landscape", aspect: "landscape" },
  { id: 3, category: "Landscape", aspect: "landscape" },
  { id: 4, category: "Portraits", aspect: "portrait" },
  { id: 5, category: "Street", aspect: "square" },
  { id: 6, category: "Landscape", aspect: "landscape" },
  { id: 7, category: "Portraits", aspect: "portrait" },
  { id: 8, category: "Street", aspect: "square" },
  { id: 9, category: "Landscape", aspect: "landscape" },
  { id: 10, category: "Portraits", aspect: "portrait" },
  { id: 11, category: "Street", aspect: "landscape" },
  { id: 12, category: "Landscape", aspect: "landscape" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
      </div>
    </div>
  );
}