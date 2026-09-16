import type { Metadata } from "next";
import PortfolioSection from "@/components/PortfolioSection";

export const metadata: Metadata = { title: "Work", description: "Selected VisionCore case studies across creative, web and software capability areas." };

export default function PortfolioPage() {
  return <>
    <div className="mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-6 lg:px-8">
      <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">SELECTED WORK</span>
      <h1 className="mb-8 mt-1 text-3xl font-extrabold tracking-tight text-[#0A192F] md:text-4xl">PROOF IN PRACTICE.</h1>
    </div>
    <PortfolioSection showHeader={false} />
  </>;
}
