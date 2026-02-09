import Script from "next/script";

interface PersonStructuredDataProps {
  name: string;
  jobTitle: string;
  url: string;
  sameAs: string[];
  description: string;
}

export function PersonStructuredData({
  name,
  jobTitle,
  url,
  sameAs,
  description,
}: PersonStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    url,
    sameAs,
    description,
    knowsAbout: [
      "Product Management",
      "Artificial Intelligence",
      "Marketing Technology",
      "CRM Systems",
      "Marketing Automation",
      "Product Strategy",
      "Growth Systems",
    ],
  };

  return (
    <Script
      id="person-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface WebsiteStructuredDataProps {
  name: string;
  url: string;
  description: string;
}

export function WebsiteStructuredData({
  name,
  url,
  description,
}: WebsiteStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
  };

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface ArticleStructuredDataProps {
  headline: string;
  description: string;
  author: string;
  datePublished?: string;
  dateModified?: string;
  url: string;
}

export function ArticleStructuredData({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  url,
}: ArticleStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    url,
  };

  return (
    <Script
      id="article-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

