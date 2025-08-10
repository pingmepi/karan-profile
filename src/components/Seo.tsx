import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  canonicalPath?: string; // e.g., "/projects"
  noIndex?: boolean;
  structuredData?: Record<string, any> | Record<string, any>[];
  imageUrl?: string; // optional override for OG/Twitter image
}

export function Seo({ title, description, canonicalPath, noIndex, structuredData, imageUrl }: SeoProps) {
  useEffect(() => {
    // Title
    if (title) document.title = title.slice(0, 60);

    // Meta description
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description.slice(0, 160));
    }

    // Canonical
    const origin = window.location.origin;
    const canonicalUrl = canonicalPath ? `${origin}${canonicalPath}` : window.location.href;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // Robots (noindex)
    let robots = document.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex, nofollow');
    } else if (robots) {
      robots.setAttribute('content', 'index, follow');
    }

    // Basic OG/Twitter tags
    const ensureMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    const ensureNameMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const ogImage = imageUrl || "/assets/og-image.png"; // default asset path in /public/assets

    ensureMeta('og:title', title);
    if (description) ensureMeta('og:description', description.slice(0, 160));
    ensureMeta('og:url', canonicalUrl);
    ensureMeta('og:type', 'website');
    ensureMeta('og:site_name', 'Karan Mandalam');
    ensureMeta('og:image', ogImage);

    ensureNameMeta('twitter:card', 'summary_large_image');
    ensureNameMeta('twitter:site', '@pingmepi');
    ensureNameMeta('twitter:image', ogImage);
    ensureNameMeta('twitter:title', title);
    if (description) ensureNameMeta('twitter:description', description.slice(0, 160));

    // JSON-LD structured data
    const existingJsonLd = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
    existingJsonLd.forEach((n) => n.parentElement?.removeChild(n));

    if (structuredData) {
      const entries = Array.isArray(structuredData) ? structuredData : [structuredData];
      entries.forEach((sd) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(sd);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonicalPath, noIndex, structuredData, imageUrl]);

  return null;
}
