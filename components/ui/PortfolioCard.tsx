import Link from "next/link";
import { CaseStudy } from "@/lib/portfolio";

export default function PortfolioCard({ project }: { project: CaseStudy }) {
  const isSkyHouse = project.slug === "sky-house-finishing";

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[#092C42]/10 transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(9,44,66,0.25)]"
    >
      <div className={`relative overflow-hidden bg-[#092C42] ${isSkyHouse ? "p-3" : "flex h-48 items-center justify-center"}`}>
        {isSkyHouse && project.image ? (
          <div className="relative overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-lg">
            <div className="flex items-center gap-1 border-b border-slate-200 bg-slate-100 p-2">
              <span className="h-2 w-2 rounded-full bg-[#FF5722]" />
              <span className="h-2 w-2 rounded-full bg-[#092C42]/25" />
              <span className="h-2 w-2 rounded-full bg-[#092C42]/25" />
            </div>
            <img src={project.image} alt="Sky House Finishing website preview" className="h-40 w-full object-cover object-top" />
            <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-xl border border-slate-200 bg-white/95 p-2 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-md">
              <span className="font-extrabold text-emerald-500">★ 5.0</span> Google Business Profile &amp; Local SEO
            </div>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 opacity-40" style={{ background: "var(--vc-gradient-primary)" }} />
            <p className="relative z-10 px-6 text-center text-sm font-semibold tracking-wide text-white/90">{project.category}</p>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {isSkyHouse && project.badges ? (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {project.badges.map((badge) => <span key={badge} className="rounded-full bg-[#FF5722]/10 px-2.5 py-0.5 text-xs font-semibold text-[#FF5722]">{badge}</span>)}
          </div>
        ) : <p className="text-xs font-semibold tracking-[0.15em] text-[#FC4C00]">{project.category.toUpperCase()}</p>}
        <h3 className={`${isSkyHouse ? "" : "mt-2"} text-lg font-bold text-[#092C42]`}>{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#092C42]/65">{project.summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#092C42] group-hover:text-[#FC4C00]">
          View case study
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="transition-transform duration-250 ease-out group-hover:translate-x-1" aria-hidden="true">
            <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
