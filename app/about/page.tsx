import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cloud, Code2, Globe2, Palette, TrendingUp } from "lucide-react";
import DotNetwork from "@/components/ui/DotNetwork";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Learn who VisionCore Technologies is and how we help businesses build, digitize and grow.",
};

const capabilities = [
  { icon: Palette, name: "VisionCore Creative", description: "Corporate Branding, Logos & Print Collateral" },
  { icon: Globe2, name: "VisionCore Web", description: "High-Converting Corporate Websites & E-commerce" },
  { icon: Code2, name: "VisionCore Software", description: "Custom Business Portals, Mobile Apps & AI Chatbots" },
  { icon: Cloud, name: "VisionCore Cloud", description: "Managed Server Infrastructure, Networking & Backups" },
  { icon: TrendingUp, name: "VisionCore Growth", description: "Digital Marketing, SEO & Lead Generation" },
];

const metrics = [
  ["5-in-1", "Unified Technology Capabilities"],
  ["100%", "Custom Engineered Solutions"],
  ["99.9%", "Target System Reliability"],
  ["24/7", "Dedicated Technical Support"],
];

const values = [
  ["Innovation", "Engineering modern, future-ready systems."],
  ["Integrity", "Transparent engagements, clear scopes, and honest timelines."],
  ["Quality", "Clean code, pixel-perfect design, and reliable infrastructure."],
  ["Customer Focus", "Directing technology toward tangible business outcomes."],
  ["Reliability", "Consistent uptime, ongoing maintenance, and dependable support."],
  ["Growth", "Scaling our clients' reach through data-driven strategies."],
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-white text-[#0A192F]">
      <DotNetwork className="fixed inset-0 z-0 h-screen opacity-10" variant="dense" />
      <section className="relative overflow-hidden">
        <DotNetwork className="opacity-20" variant="dense" />
        <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-10 text-center sm:px-6 lg:px-8 md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">ABOUT VISIONCORE</span>
          <h1 className="mt-2 mb-3 text-3xl font-extrabold md:text-5xl"><span className="bg-gradient-to-r from-[#FF5722] via-[#FF7043] to-[#0A192F] bg-clip-text text-transparent">Technology with Purpose.</span></h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600">We help businesses build stronger corporate identities, modernize operational workflows, and scale through practical, connected digital solutions.</p>
        </div>
      </section>

      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm backdrop-blur-sm md:grid-cols-4">
            {metrics.map(([value, label]) => <div key={label} className="border-l-2 border-[#FF5722]/30 pl-4"><p className="text-2xl font-extrabold text-[#0A192F] md:text-3xl">{value}</p><p className="mt-1 text-xs leading-relaxed text-slate-500">{label}</p></div>)}
          </div>
        </Reveal>

        <section className="pb-12">
          <Reveal><div className="mb-8"><span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">WHO WE ARE</span><h2 className="mt-1 mb-3 text-3xl font-extrabold md:text-5xl"><span className="bg-gradient-to-r from-[#0A192F] via-[#FF5722] to-[#E64A19] bg-clip-text text-transparent">ONE PARTNER FOR THE ENTIRE DIGITAL JOURNEY.</span></h2><p className="max-w-3xl text-base leading-relaxed text-slate-600">VisionCore Technologies brings creative, web, software, cloud, and growth capabilities together under one unified partner.</p></div></Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">{capabilities.map(({ icon: Icon, name, description }, index) => <Reveal key={name} delay={index * 60}><div className="group h-full rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5722]/40 hover:shadow-lg"><div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF5722]/10 text-[#FF5722] transition-colors group-hover:bg-[#FF5722]/20"><Icon className="h-5 w-5" /></div><h3 className="text-sm font-bold text-[#0A192F]">{name}</h3><p className="mt-2 text-xs leading-relaxed text-slate-600">{description}</p></div></Reveal>)}</div>
        </section>

        <section className="relative my-10 mb-12 overflow-hidden rounded-2xl border border-slate-800 bg-[#0A192F]/95 p-8 text-white shadow-xl backdrop-blur-md md:p-10">
          <DotNetwork className="opacity-20" variant="dense" />
          <div className="relative grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center"><div><p className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">OUR DIRECTION</p><h2 className="mt-3 flex flex-col gap-1 text-3xl font-extrabold tracking-tight md:text-5xl"><span className="text-white">BUILD.</span><span className="text-[#FF5722]">DIGITIZE.</span><span className="text-white">GROW.</span></h2></div><div className="space-y-7"><div><h3 className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">MISSION</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">To empower businesses with practical, scalable, and connected digital solutions that optimize operations and drive sustainable growth.</p></div><div><h3 className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">VISION</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">To become the preferred technology transformation partner for enterprise businesses across the region.</p></div></div></div>
        </section>

        <section className="pb-12"><Reveal><span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">OUR VALUES</span><h2 className="mt-1 mb-6 bg-gradient-to-r from-[#0A192F] via-[#FF5722] to-[#E64A19] bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">HOW WE SHOW UP.</h2></Reveal><div className="grid grid-cols-1 gap-4 md:grid-cols-3">{values.map(([name, description], index) => <Reveal key={name} delay={index * 50}><div className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5722]/40 hover:shadow-lg"><div className="mb-2 flex items-center gap-3"><span className="rounded-md bg-[#FF5722]/10 px-2.5 py-1 text-xs font-extrabold text-[#FF5722]">0{index + 1}</span><h3 className="text-base font-bold text-[#0A192F]">{name}</h3></div><p className="text-xs leading-relaxed text-slate-600">{description}</p></div></Reveal>)}</div></section>

        <section className="relative mb-12 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-slate-800 bg-[#0A192F]/95 p-8 text-white shadow-xl backdrop-blur-md md:flex-row"><DotNetwork className="opacity-20" variant="dense" /><div className="relative text-left"><h3 className="text-2xl font-bold">Ready to digitize your business?</h3><p className="mt-2 text-sm text-slate-400">Let&apos;s discuss your upcoming project or custom software requirements.</p></div><Link href="/contact" className="relative inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#FF5722] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#E64A19]">Start a Project <ArrowRight className="h-4 w-4" /></Link></section>
      </main>
    </div>
  );
}
