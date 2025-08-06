-- Create storage bucket for photography images
INSERT INTO storage.buckets (id, name, public) VALUES ('photography', 'photography', true);

-- Create policies for photography bucket
CREATE POLICY "Photography images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'photography');

CREATE POLICY "Allow uploads to photography bucket" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'photography');

CREATE POLICY "Allow updates to photography bucket" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'photography');

CREATE POLICY "Allow deletes from photography bucket" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'photography');