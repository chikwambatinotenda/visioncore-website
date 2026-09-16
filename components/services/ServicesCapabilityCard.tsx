import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ServiceDivision } from "@/lib/services";

type IconName = ServiceDivision["slug"];

const cardCopy: Record<IconName, { description: string }> = {
  creative: {
    description: "Brand identity, logo design, and corporate design systems that give your business a high-impact, cohesive presence.",
  },
  web: {
    description: "High-performance corporate websites, web applications, and digital platforms engineered to engage visitors and drive conversions.",
  },
  software: {
    description: "Bespoke internal portals, management software, and automated workflows designed to streamline operations and enhance team productivity.",
  },
  cloud: {
    description: "Scalable cloud deployment, enterprise domain management, managed business email, and secure hosting that ensure 99.9% uptime.",
  },
  growth: {
    description: "Data-driven marketing campaigns, search engine visibility, and conversion-focused growth strategies that turn target audiences into inquiries.",
  },
};

type ServiceCardData = ServiceDivision & { icon: LucideIcon };

export default function ServicesCapabilityCard({ service }: { service: ServiceCardData }) {
  const copy = cardCopy[service.slug];

  return (
    <Link href={service.href} className="group relative flex min-h-[330px] w-full flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#FC4C00]/50 hover:shadow-xl md:p-8 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
        <service.icon className="w-6 h-6 text-orange-500" />
      </div>
      <h3 className="text-xl font-bold tracking-tight text-[#092C42]">{service.name}</h3>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#FC4C00]">{service.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[#092C42]/65">{copy.description}</p>
      <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#092C42] transition-colors duration-300 group-hover:text-[#FC4C00]">
        Explore Capabilities
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
