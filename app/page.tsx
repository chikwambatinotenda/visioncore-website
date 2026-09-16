import { Palette, Globe, Code2, Server, TrendingUp } from "lucide-react";
import Hero from "@/components/home/Hero";
import CapabilityOverview from "@/components/home/CapabilityOverview";
import WhyVisionCore from "@/components/home/WhyVisionCore";
import PortfolioSection from "@/components/PortfolioSection";
import HowWeBuild from "@/components/home/HowWeBuild";
import ServiceCTA from "@/components/home/ServiceCTA";
import CareersTeaser from "@/components/home/CareersTeaser";

const serviceIcons = {
  creative: Palette,
  web: Globe,
  software: Code2,
  cloud: Server,
  growth: TrendingUp,
};

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityOverview serviceIcons={serviceIcons} />
      <WhyVisionCore />
      <PortfolioSection />
      <HowWeBuild />
      <ServiceCTA />
      <CareersTeaser />
    </>
  );
}
