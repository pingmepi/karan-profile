"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CaseStudyData } from "@/data/case-study-details";

interface Props {
  caseStudy: CaseStudyData;
}

export default function CaseStudyDetailContent({ caseStudy }: Props) {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Button variant="ghost" className="mb-6 p-0 h-auto text-muted-foreground hover:text-foreground" asChild>
            <Link href="/case-studies">← Back to Case Studies</Link>
          </Button>

          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-6">{caseStudy.title}</h1>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">📌</span>Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{caseStudy.overview}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">🧩</span>Context
          </h2>
          <p className="text-muted-foreground leading-relaxed">{caseStudy.context}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">❌</span>The Challenge
          </h2>
          <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">🛠️</span>My Approach
          </h2>
          <p className="text-muted-foreground mb-6">
            I treated this as a <strong>full-funnel experience redesign</strong> across UX, martech automation, and tracking:
          </p>
          <div className="space-y-4">
            {caseStudy.approach.map((section, index) => (
              <div key={index} className="border border-border/50 rounded-lg">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-smooth rounded-lg"
                >
                  <h3 className="font-medium">{section.title}</h3>
                  {expandedSection === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                {expandedSection === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">⚙️</span>Execution Details
          </h2>
          <ul className="space-y-3">
            {caseStudy.execution.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">📈</span>Outcomes
          </h2>
          <div className="space-y-4">
            {caseStudy.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-medium text-primary">{outcome}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-6 flex items-center">
            <span className="mr-3">🧠</span>What I Learned
          </h2>
          <ul className="space-y-4">
            {caseStudy.learnings.map((learning, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">→</span>
                <span className="text-muted-foreground leading-relaxed">{learning}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-border/50 pt-8">
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <Link href="/case-studies">← Back to All Case Studies</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

