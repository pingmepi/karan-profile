"use client";

import { useState } from "react";
import type { Photo } from "@/lib/photos";

interface Props {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: Props) {
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  const getAspectClass = (aspect: string) => {
    switch (aspect) {
      case "portrait": return "aspect-[3/4]";
      case "landscape": return "aspect-[4/3]";
      case "square": return "aspect-square";
      default: return "aspect-[4/3]";
    }
  };

  const filteredPhotos = photos.filter((p) => !brokenImages.has(p.url));

  if (filteredPhotos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No photos yet. Add entries to <code>src/data/photos-manifest.json</code> and place images in <code>public/photos/</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredPhotos.map((photo) => (
        <div
          key={photo.id}
          className={`${getAspectClass(photo.aspect)} bg-muted rounded-lg overflow-hidden hover-lift cursor-pointer group`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.url}
            alt={photo.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={() =>
              setBrokenImages((prev) => new Set([...prev, photo.url]))
            }
          />
        </div>
      ))}
    </div>
  );
}

