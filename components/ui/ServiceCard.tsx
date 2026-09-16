import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ServiceDivision } from "@/lib/services";

export default function ServiceCard({ service, icon: Icon }: { service: ServiceDivision; icon: LucideIcon }) {
  return (
    <Link
      href={service.href}
      className="group relative flex h-full w-full cursor-pointer flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/40 hover:shadow-xl"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#FC4C00] transition-transform duration-250 ease-out group-hover:scale-x-100" />
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10">
          <Icon className="h-6 w-6 text-orange-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">{service.tagline}</p>
        </div>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-[#092C42]/65">{service.description}</p>
      <span className="mt-7 inline-flex items-center text-sm font-semibold text-slate-800 transition-colors group-hover:text-orange-500">
        Explore
        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>
    </Link>
  );
}
