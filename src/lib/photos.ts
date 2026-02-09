import manifest from "@/data/photos-manifest.json";

export interface Photo {
  id: string;
  name: string;
  url: string;
  category: string;
  aspect: "portrait" | "landscape" | "square";
}

/**
 * Returns the list of photos from the local manifest.
 * In the future, images can be placed in public/photos/ and entries added here.
 */
export function getPhotos(): Photo[] {
  return manifest as Photo[];
}

