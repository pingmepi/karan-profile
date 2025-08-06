import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Photo {
  id: string;
  name: string;
  url: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export const usePhotographyImages = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const { data: files, error } = await supabase.storage
          .from('photography')
          .list('', {
            limit: 100,
            sortBy: { column: 'name', order: 'asc' }
          });

        if (error) throw error;

        const photoData: Photo[] = await Promise.all(
          files.map(async (file) => {
            const { data: { publicUrl } } = supabase.storage
              .from('photography')
              .getPublicUrl(file.name);

            // Extract category and aspect from filename
            // Expected format: category_aspect_filename.jpg
            const nameParts = file.name.split('_');
            const category = nameParts[0] || 'Landscape';
            const aspect = (nameParts[1] as Photo['aspect']) || 'landscape';

            return {
              id: file.id || file.name,
              name: file.name,
              url: publicUrl,
              category: category.charAt(0).toUpperCase() + category.slice(1),
              aspect
            };
          })
        );

        setPhotos(photoData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch photos');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
};