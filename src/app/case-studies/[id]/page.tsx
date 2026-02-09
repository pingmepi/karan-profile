import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-study-details";
import CaseStudyDetailContent from "./CaseStudyDetailContent";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const caseStudy = caseStudies[id];
  if (!caseStudy) {
    return { title: "Case Study Not Found" };
  }

  const description = caseStudy.overview.slice(0, 155) + (caseStudy.overview.length > 155 ? "..." : "");

  return {
    title: `${caseStudy.title} – Karan Mandalam`,
    description,
    keywords: [
      "Product case study",
      "Martech",
      "Product management",
      ...caseStudy.tags,
    ],
    alternates: { canonical: `/case-studies/${id}` },
    openGraph: {
      title: `${caseStudy.title} – Karan Mandalam`,
      description,
      url: `/case-studies/${id}`,
      type: "article",
      images: [
        {
          url: "/assets/og-image.png",
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} – Karan Mandalam`,
      description,
      images: ["/assets/og-image.png"],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { id } = await params;
  const caseStudy = caseStudies[id];
  if (!caseStudy) {
    notFound();
  }
  return <CaseStudyDetailContent caseStudy={caseStudy} />;
}

