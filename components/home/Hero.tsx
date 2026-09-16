"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Typewriter from "typewriter-effect";
import CTAButton from "@/components/ui/CTAButton";
import DotNetwork from "@/components/ui/DotNetwork";

const dashboardViews = [
  { name: "Creative", title: "Brand System & Asset Hub", eyebrow: "VISIONCORE CREATIVE", metric: "98% Consistency", detail: "Visual consistency metrics", bars: [42, 58, 72, 68, 82, 88, 94, 98] },
  { name: "Web", title: "Web Vitals & Experience Analytics", eyebrow: "VISIONCORE WEB", metric: "2.4× Engagement", detail: "Connected customer journeys", bars: [30, 44, 54, 49, 72, 68, 86, 100] },
  { name: "Software", title: "Custom Business Portals & Workflows", eyebrow: "VISIONCORE SOFTWARE", metric: "99.5% SLA", detail: "Operational workflow status", bars: [88, 91, 90, 94, 92, 97, 95, 99] },
  { name: "Cloud", title: "Cloud Infrastructure & Hosting", eyebrow: "VISIONCORE CLOUD", metric: "99.9% Uptime", detail: "Infrastructure reliability", bars: [96, 99, 98, 100, 99, 100, 99, 100] },
  { name: "Growth", title: "Digital Marketing & Enquiry Pipeline", eyebrow: "VISIONCORE GROWTH", metric: "+48% Conversion", detail: "Tracked growth performance", bars: [28, 40, 38, 55, 64, 72, 84, 96] },
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeView, setActiveView] = useState(0);
  const view = dashboardViews[activeView];

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = window.setInterval(() => setActiveView((current) => (current + 1) % dashboardViews.length), 5000);
    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(252,76,0,0.07),transparent_28%),radial-gradient(circle_at_82%_38%,rgba(9,44,66,0.08),transparent_32%)]" />
      <div className="absolute inset-0 -z-10 opacity-45 [background-image:radial-gradient(rgba(9,44,66,0.22)_0.8px,transparent_0.8px)] [background-size:18px_18px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-10 sm:gap-12 sm:pb-20 sm:pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:pb-20 lg:pt-14">
        <div className="relative z-10 max-w-2xl">
          <motion.p custom={0} initial="hidden" animate="visible" variants={reveal} className="mb-2 text-xs font-semibold tracking-[0.25em] text-[#FC4C00]">VISIONCORE TECHNOLOGIES</motion.p>
          <motion.h1 custom={0.1} initial="hidden" animate="visible" variants={reveal} className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            <span className="block bg-gradient-to-r from-[#092C42] to-[#FC4C00] bg-clip-text text-transparent">BUILD.</span>
            <span className="block min-h-[1.1em] bg-gradient-to-r from-[#FC4C00] to-[#092C42] bg-clip-text text-transparent lg:whitespace-nowrap">
              {shouldReduceMotion ? "DIGITIZE." : <Typewriter options={{ strings: ["DIGITIZE.", "Websites.", "Web Applications.", "Digital Portals.", "Software Solutions."], autoStart: true, loop: true, delay: 65, deleteSpeed: 35 }} />}
            </span>
            <span className="block bg-gradient-to-r from-[#092C42] to-[#FC4C00] bg-clip-text text-transparent">GROW.</span>
          </motion.h1>
          <motion.p custom={0.2} initial="hidden" animate="visible" variants={reveal} className="mt-4 max-w-xl text-base leading-relaxed text-[#092C42]/70 sm:text-lg">We build custom enterprise software, modern web experiences and connected digital systems that help ambitious businesses operate smarter and grow with confidence.</motion.p>
          <motion.div custom={0.3} initial="hidden" animate="visible" variants={reveal} className="mt-6 flex flex-wrap gap-4"><CTAButton href="/contact">START A PROJECT</CTAButton><CTAButton href="/services" variant="secondary">EXPLORE SERVICES</CTAButton></motion.div>
        </div>

        <motion.div initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-xl px-2 pb-10 sm:px-8">
          <DotNetwork className="scale-125 opacity-60" variant="dense" />
          <div className="relative rounded-2xl border border-[#092C42]/15 bg-[#092C42]/[0.06] p-2 shadow-[0_35px_80px_-35px_rgba(9,44,66,0.5)] backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0A192F] shadow-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#FF5722_1px,transparent_1px)] opacity-20 [background-size:16px_16px]" />
              <div className="relative">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#FF5722]" /><span className="text-xs font-medium tracking-wide text-white/75">VISIONCORE OS</span></div><span className="text-[10px] tracking-[0.18em] text-white/40">{view.eyebrow}</span></div>
              <div className="flex gap-1 overflow-x-auto border-b border-white/10 px-3 pt-3 sm:px-5">{dashboardViews.map((item, index) => <button key={item.name} type="button" onClick={() => setActiveView(index)} className={`min-w-[5.2rem] flex-1 border-b-2 px-1 pb-3 text-[10px] font-medium leading-tight transition-colors sm:min-w-0 sm:text-xs ${activeView === index ? "border-[#FF5722] text-white" : "border-transparent text-white/40 hover:text-white/70"}`}>{item.name}</button>)}</div>
              <motion.div key={view.title} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} className="space-y-5 p-5 sm:p-7">
                <div className="flex items-end justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[0.18em] text-white/45">{view.eyebrow}</p><p className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl">{view.title}</p></div><span className="shrink-0 rounded-full border border-[#FF5722]/30 bg-[#FF5722]/10 px-3 py-1 text-[10px] font-medium text-[#FF5722]">LIVE</span></div>
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4"><div className="flex items-center justify-between text-[10px] text-white/45"><span>{view.detail}</span><span className="text-[#FF5722]">{view.metric}</span></div><div className="mt-4 flex h-24 items-end gap-1.5">{view.bars.map((height, index) => <span key={index} className={`w-full rounded-t-sm ${index > 5 ? "bg-[#FF5722]" : "bg-white/20"}`} style={{ height: `${height}%` }} />)}</div></div>
                <div className="grid grid-cols-3 gap-3">{["Connected", "Scalable", "Secure"].map((label, index) => <div key={label} className="rounded-lg border border-white/10 bg-white/[0.06] p-3"><span className={`block h-1.5 w-8 rounded-full ${index === 0 ? "bg-[#FF5722]" : "bg-white/30"}`} /><p className="mt-4 text-xs font-semibold text-white/85">{label}</p></div>)}</div>
              </motion.div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-1 right-3 flex max-w-[calc(100%-1.5rem)] flex-wrap justify-end gap-x-3 gap-y-1 rounded-2xl border border-[#092C42]/10 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md sm:right-8 sm:px-4">{["99.9% Uptime", "Automated Workflows", "Connected Systems"].map((label, index) => <span key={label} className={`text-[9px] font-semibold sm:text-[10px] ${index === 0 ? "text-[#FC4C00]" : "text-[#092C42]/65"}`}>{label}</span>)}</div>
        </motion.div>
      </div>
    </section>
  );
}
