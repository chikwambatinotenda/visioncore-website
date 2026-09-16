"use client";

import { motion } from "framer-motion";
import GradientText from "@/components/ui/GradientText";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-3xl font-extrabold leading-tight text-[#092C42] sm:text-4xl">
            NOT SURE WHERE TO <GradientText>START?</GradientText>
          </motion.h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#092C42]/70">
            Tell us what you&apos;re trying to build, improve or grow, and we&apos;ll help you choose the
            right VisionCore capability.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href="/contact">CONTACT VISIONCORE</CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
