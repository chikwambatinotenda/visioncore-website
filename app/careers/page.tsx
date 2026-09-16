import type { Metadata } from "next";
import TalentNetworkForm from "@/components/careers/TalentNetworkForm";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build the future with VisionCore Technologies and join our growing talent network.",
};

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-8 md:py-12">
        <div className="relative mx-auto max-w-7xl px-6"><span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">CAREERS</span><h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0A192F] md:text-5xl">BUILD THE FUTURE WITH US.</h1><p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">VisionCore is building a technology company around software engineering, digital transformation, cloud, infrastructure, creative technology and digital growth.</p></div>
      </section>
      <section className="bg-white pb-16 pt-2">
        <div className="mx-auto max-w-7xl px-6">
          <TalentNetworkForm />
        </div>
      </section>
    </>
  );
}
