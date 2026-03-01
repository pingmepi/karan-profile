import React from "react";

export const StructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Karan Mandalam",
    "url": "https://karan-profile-zeta.vercel.app",
    "jobTitle": "Systems Builder",
    "description": "I build systems that bring order to chaos. Growth infrastructure, automation, AI workflows, and new product bets.",
    "sameAs": [
      "https://twitter.com/pingmepi",
      "https://linkedin.com/in/mandalam-karan",
      "https://instagram.com/theghostinphotographs"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Karan Mandalam | Systems Builder",
    "url": "https://karan-profile-zeta.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://karan-profile-zeta.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};
