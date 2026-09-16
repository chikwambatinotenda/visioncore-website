import type { Metadata } from "next";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Tell VisionCore Technologies what you are trying to build, improve or grow." };

export default function ContactPage() {
  return (
    <section className="bg-white pt-8 pb-16 px-4 md:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF4D15]">CONTACT VISIONCORE</span>
          <h1 className="mt-2 text-3xl font-extrabold text-[#0A192F] md:text-4xl">Let&apos;s build what&apos;s next.</h1>
          <p className="mt-3 max-w-sm text-base leading-relaxed text-slate-600">Tell us what you&apos;re trying to build, improve, or grow.</p>
          <div className="mt-8 space-y-3">
            <a href="mailto:contact@visioncoretechnologies.co.zw" className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm transition hover:border-[#FF4D15]"><Mail className="h-5 w-5 shrink-0 text-[#FF4D15]" /><span><span className="block text-xs font-semibold uppercase tracking-wider text-[#FF4D15]">Email</span>contact@visioncoretechnologies.co.zw</span></a>
            <a href="https://wa.me/263776848364" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm transition hover:border-[#FF4D15]"><MessageSquare className="h-5 w-5 shrink-0 text-[#FF4D15]" /><span><span className="block text-xs font-semibold uppercase tracking-wider text-[#FF4D15]">WhatsApp</span>+263 776 848 364</span></a>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm"><MapPin className="h-5 w-5 shrink-0 text-[#FF4D15]" /><span><span className="block text-xs font-semibold uppercase tracking-wider text-[#FF4D15]">Location</span>Harare, Zimbabwe</span></div>
          </div>
          <p className="mt-5 text-xs font-medium text-slate-500">⚡ Average response time: &lt; 24 hours</p>
        </div>
        <div className="lg:col-span-7"><ContactForm /></div>
      </div>
    </section>
  );
}
