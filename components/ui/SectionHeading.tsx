"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.2em] uppercase ${
            dark ? "text-[#FC4C00]" : "text-[#FC4C00]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight ${
          dark ? "text-white" : "text-[#092C42]"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-white/75" : "text-[#092C42]/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
