import React from "react";

export const StructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Karan Mandalam",
    "url": "https://karan-profile-zeta.vercel.app",
    "jobTitle": "AI Product Builder & Systems Engineer",
    "description": "I build AI agents, payment infrastructure, growth automation, and full-stack products — shipped to production. Multi-agent architecture, eval-driven CI, Razorpay payments, 90+ n8n workflows.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressCountry": "IN"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "BITS Pilani"
    },
    "knowsAbout": [
      "Multi-Agent AI Systems",
      "LLM Evaluation Frameworks",
      "AI Product Management",
      "LLM Orchestration",
      "Prompt Engineering",
      "Truthfulness Guards for LLMs",
      "Eval-Driven CI/CD",
      "Python",
      "TypeScript",
      "Next.js",
      "React",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Razorpay Payment Integration",
      "n8n Workflow Automation",
      "GA4/GTM Analytics",
      "HubSpot CRM",
      "WebEngage",
      "WhatsApp Business API",
      "Telegram Bot API",
      "VAPI Voice AI",
      "LaTeX",
      "Docker",
      "AWS EC2",
      "Railway",
      "Vercel",
      "fabric.js",
      "OpenAI API",
      "OpenRouter",
      "GTM Strategy",
      "Market Sizing",
      "RBAC Design"
    ],
    "sameAs": [
      "https://twitter.com/pingmepi",
      "https://linkedin.com/in/mandalam-karan",
      "https://instagram.com/theghostinphotographs",
      "https://github.com/pingmepi"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Karan Mandalam | AI Product Builder & Systems Engineer",
    "url": "https://karan-profile-zeta.vercel.app"
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
