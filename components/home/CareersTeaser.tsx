"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

export default function CareersTeaser() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-[#092C42]/10 bg-[#092C42]/[0.03] p-10 sm:flex-row sm:items-center sm:p-14">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#FC4C00]">CAREERS</p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }} className="mt-3 text-2xl font-extrabold leading-tight text-[#092C42] sm:text-3xl">
                BUILD THE FUTURE WITH US.
              </motion.h2>
              <p className="mt-3 text-sm leading-relaxed text-[#092C42]/70">
                We&apos;re building a technology company around software engineering, digital
                transformation, cloud, infrastructure, creative technology and digital growth.
              </p>
            </div>
            <CTAButton href="/careers" variant="secondary">
              VIEW OPPORTUNITIES
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
