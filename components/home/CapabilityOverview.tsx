import ServiceCard from "@/components/ui/ServiceCard";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/services";
import type { LucideIcon } from "lucide-react";

type ServiceIcons = Record<(typeof services)[number]["slug"], LucideIcon>;

export default function CapabilityOverview({ serviceIcons }: { serviceIcons: ServiceIcons }) {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#FC4C00]">Capabilities</p>
            <h2 className="bg-gradient-to-r from-slate-900 via-orange-600 to-orange-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
              ONE TECHNOLOGY PARTNER.
              <br />
              FIVE DIGITAL CAPABILITIES.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 flex flex-wrap justify-center gap-6 md:gap-8">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
              <ServiceCard service={service} icon={serviceIcons[service.slug]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
