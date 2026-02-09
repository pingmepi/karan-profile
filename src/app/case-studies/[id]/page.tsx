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
  return {
    title: `${caseStudy.title} – Karan Mandalam`,
    description: caseStudy.overview.slice(0, 150),
    alternates: { canonical: `/case-studies/${id}` },
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

