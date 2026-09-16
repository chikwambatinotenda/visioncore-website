"use client";

import { motion } from "framer-motion";
import ProcessStep from "@/components/ui/ProcessStep";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/lib/nav";

export default function HowWeBuild() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#FF5722] md:text-sm">OUR PROCESS</p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-8 bg-gradient-to-r from-slate-900 via-orange-600 to-[#FF5722] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:mb-10 md:text-5xl">
            HOW WE BUILD.
          </motion.h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 70}>
              <ProcessStep number={step.number} name={step.name.toUpperCase()} description={step.description} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
