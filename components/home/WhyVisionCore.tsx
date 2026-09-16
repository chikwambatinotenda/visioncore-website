"use client";

import { Briefcase, Network, ShieldCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const pillars = [
  { icon: ShieldCheck, title: "ONE PARTNER", description: "One coordinated technology partner eliminating the friction of managing multiple disconnected vendors." },
  { icon: Briefcase, title: "BUSINESS-FIRST", description: "Engineering bespoke web, software, and cloud architectures mapped strictly around your operational revenue goals." },
  { icon: TrendingUp, title: "SCALABLE", description: "Modular systems built with enterprise standards that scale seamlessly alongside your business expansion." },
  { icon: Network, title: "CONNECTED", description: "Unified integrations ensuring your branding, digital platforms, cloud infrastructure, and software operate in sync." },
];

export default function WhyVisionCore() {
  return (
    <section className="relative overflow-hidden bg-[#0A192F] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#FC4C00_1px,transparent_1px)] opacity-20 [background-size:24px_24px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(252,76,0,0.12),transparent_68%)] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FC4C00]">WHY VISIONCORE</p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            ONE PARTNER. <span className="text-[#FC4C00]">YOUR COMPLETE DIGITAL ENGINE.</span>
          </motion.h2>
          <p className="max-w-2xl text-base text-slate-300 md:text-lg">
            VisionCore brings Creative, Web, Software, Cloud and Growth together under one company.
          </p>
        </Reveal>
        <div className="relative z-10 mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#FC4C00]/50 hover:bg-white/[0.06] hover:shadow-[0_0_25px_rgba(252,76,0,0.15)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#FC4C00]/20 bg-[#FC4C00]/10 transition-colors group-hover:bg-[#FC4C00]/20">
                  <p.icon className="h-5 w-5 text-[#FC4C00]" />
                </div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">{p.title}</h3>
                <p className="text-xs leading-relaxed text-slate-200 md:text-sm">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
