import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Karan Mandalam — Systems Builder",
  description:
    "I build systems that bring order to chaos. Growth infrastructure, automation, AI workflows, and new product bets.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeClient />;
}