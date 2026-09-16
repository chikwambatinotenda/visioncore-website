import type { Metadata } from "next";
import { Palette, Globe, Code2, Server, TrendingUp } from "lucide-react";
import ServicesCapabilityCard from "@/components/services/ServicesCapabilityCard";
import { services } from "@/lib/services";

const serviceIcons = {
  creative: Palette,
  web: Globe,
  software: Code2,
  cloud: Server,
  growth: TrendingUp,
};

const serviceCards = services.map((service) => ({
  ...service,
  icon: serviceIcons[service.slug],
}));

export const metadata: Metadata = {
  title: "Services",
  description:
    "Five digital capabilities under one technology partner: Creative, Web, Software, Cloud and Growth.",
};

export default function ServicesIndexPage() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(252,76,0,0.07),transparent_28%),radial-gradient(circle_at_82%_38%,rgba(9,44,66,0.08),transparent_32%)]" />
      <div className="absolute inset-0 -z-10 opacity-45 [background-image:radial-gradient(rgba(9,44,66,0.22)_0.8px,transparent_0.8px)] [background-size:18px_18px]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#FC4C00]">CAPABILITIES</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#092C42] md:text-4xl">
            ONE TECHNOLOGY PARTNER. FIVE DIGITAL CAPABILITIES.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#092C42]/70">
            Choose a capability to explore, or start a project and we&apos;ll help you decide what&apos;s right for your business.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {serviceCards.map((service) => (
            <ServicesCapabilityCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
