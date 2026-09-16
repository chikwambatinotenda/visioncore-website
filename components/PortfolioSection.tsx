"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { projects, Project } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <div className="group grid w-full grid-cols-1 items-center gap-8 rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 lg:col-span-12 lg:grid-cols-12 lg:gap-12 lg:p-8">
      <div className="lg:col-span-7">
        <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-50 shadow-xl">
          <div className="flex items-center gap-1.5 border-b border-gray-200/80 bg-gray-100 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-[#FF5722]" /><span className="h-2.5 w-2.5 rounded-full bg-[#0A192F]/20" /><span className="h-2.5 w-2.5 rounded-full bg-[#0A192F]/20" /><span className="ml-3 h-5 flex-1 rounded-md bg-white/80" /></div>
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-slate-100 p-3 sm:p-5">
            <Image src={project.image} alt={project.title} width={1600} height={1000} className="h-full w-full rounded-xl object-contain shadow-sm transition-transform duration-500 ease-out group-hover:scale-[1.02]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 lg:col-span-5">
        <div>
          <div className="mb-3 flex flex-wrap gap-2">{project.badges.map((badge) => <span key={badge} className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-semibold text-[#FF5722]">{badge}</span>)}</div>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">Sky House Finishing - Full Digital Launch</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">360° execution from scratch: brand identity, custom web platform, Google Business Profile, local SEO, and managed hosting support.</p>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button type="button" onClick={() => onOpen(project)} className="rounded-xl bg-[#0A192F] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">View Case Study →</button>
          <a href="https://www.skyhousefinishing.co.zw" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Visit Live Site ↗</a>
        </div>
      </div>
    </div>
  );
}

function CaseStudyDrawer({ project, onClose }: { project: Project; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <button type="button" aria-label="Close case study" onClick={onClose} className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm" />
      <aside role="dialog" aria-modal="true" aria-labelledby="case-study-title" className="fixed inset-y-0 right-0 z-50 flex h-full max-h-screen w-full max-w-2xl flex-col justify-between overflow-hidden bg-white p-5 shadow-2xl md:p-6">
        <div className="flex items-start justify-between gap-6">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5722]">{project.category}</p><h2 id="case-study-title" className="mb-1 mt-1 text-xl font-bold tracking-tight text-[#092C42] sm:text-2xl">{project.title}</h2><p className="text-xs text-slate-500">{project.client} · {project.location}</p></div>
          <button type="button" onClick={onClose} aria-label="Close" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-[#FF5722] hover:text-[#FF5722]"><X className="h-5 w-5" /></button>
        </div>
        <div className="mb-3 mt-3 flex flex-wrap gap-2">{project.badges.map((badge) => <span key={badge} className="rounded-full bg-[#FF5722]/10 px-3 py-1 text-xs font-semibold text-[#FF5722]">{badge}</span>)}</div>
        {project.gallery.length > 0 && <div className="mt-3 grid grid-cols-3 gap-3">{project.gallery.map((galleryImage, index) => <button key={galleryImage} type="button" onClick={() => { setActiveImage(index); setLightboxImage(galleryImage); }} aria-label={`Open project image ${index + 1}`} className={`group relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-lg border p-1 ${activeImage === index ? "border-[#FF5722]" : "border-slate-200"} bg-slate-50 hover:border-[#FF5722]`}><Image src={galleryImage} alt="Project thumbnail" width={300} height={180} className="h-full w-full rounded object-contain" /><span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#0A192F]/0 text-white opacity-0 transition-all group-hover:bg-[#0A192F]/35 group-hover:opacity-100"><span className="rounded-full bg-[#0A192F]/70 px-2 py-1 text-[10px] font-semibold">Zoom image</span></span></button>)}</div>}
        <section className="mt-4"><h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5722]">Deliverable Highlights</h3><ul className="mt-3 grid grid-cols-2 gap-2 text-xs">{project.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-2 leading-relaxed text-slate-600"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF5722]" />{highlight}</li>)}</ul></section>
        {project.techStack && <p className="mt-3 text-[11px] text-slate-500">Built with: {project.techStack.join(" • ")}</p>}
        <div className="mt-4 rounded-xl bg-[#0A192F] p-3 text-white"><p className="text-xs leading-relaxed text-slate-300">{project.summary}</p><div className="mt-3 flex flex-wrap items-center gap-2"><CTAButton href="/contact" className="px-5 py-2.5 text-xs">START A PROJECT</CTAButton>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-white transition hover:border-white">Visit Live Site ↗</a>}</div></div>
      </aside>
      {lightboxImage && <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={() => setLightboxImage(null)}><div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}><button type="button" aria-label="Close image lightbox" onClick={() => setLightboxImage(null)} className="absolute right-3 top-3 z-10 rounded-full bg-slate-100 p-1.5 text-slate-700 transition hover:bg-slate-200">✕</button><Image src={lightboxImage} alt="Preview" width={1800} height={1200} className="h-auto max-h-[70vh] w-full rounded-lg object-contain" /></div></div>}
    </>
  );
}

export default function PortfolioSection({ showHeader = true }: { showHeader?: boolean }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className={`bg-white ${showHeader ? "py-24" : "pb-24 pt-0"}`}>
      <div className="mx-auto max-w-7xl px-6">
        {showHeader && <Reveal><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5722]">Selected Work</p><h2 className="text-3xl font-extrabold tracking-tight text-[#092C42] sm:text-4xl">PROOF IN PRACTICE.</h2></div><CTAButton href="/portfolio" variant="secondary">VIEW OUR WORK</CTAButton></div></Reveal>}
        <div className={`${showHeader ? "mt-14" : "mt-0"} grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12`}>{projects.filter((project) => project.slug === "sky-house-finishing").map((project) => <Reveal key={project.slug} className="lg:col-span-12"><ProjectCard project={project} onOpen={setSelectedProject} /></Reveal>)}</div>
      </div>
      {selectedProject && <CaseStudyDrawer project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
