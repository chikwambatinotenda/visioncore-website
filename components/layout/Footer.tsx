import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageSquare } from "lucide-react";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A192F] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#FF5722_1px,transparent_1px)] opacity-15 [background-size:24px_24px]" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="relative mb-16 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_30px_rgba(255,87,34,0.1)] md:flex-row md:p-12">
          <div className="max-w-lg">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              READY TO BUILD <span className="text-[#FF5722]">WHAT&apos;S NEXT?</span>
            </h2>
            <p className="mt-3 text-white/70">
              Let&apos;s turn your business goals into a practical digital solution.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#FF5722] px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF5722]/90">
            START A PROJECT <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid w-full grid-cols-1 justify-between gap-8 py-14 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-white/50">SERVICES</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="text-white/80 transition-colors hover:text-[#FF5722]">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-white/50">COMPANY</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/about" className="text-white/80 transition-colors hover:text-[#FF5722]">About</Link></li>
              <li><Link href="/portfolio" className="text-white/80 transition-colors hover:text-[#FF5722]">Work</Link></li>
              <li><Link href="/careers" className="text-white/80 transition-colors hover:text-[#FF5722]">Careers</Link></li>
              <li><Link href="/contact" className="text-white/80 transition-colors hover:text-[#FF5722]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-white/50">CONTACT</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li><div className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-white"><Mail className="h-4 w-4 shrink-0 text-[#FF5722]" /><a href="mailto:contact@visioncoretechnologies.co.zw" className="truncate text-xs md:text-sm">contact@visioncoretechnologies.co.zw</a></div></li>
              <li><div className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-white"><MessageSquare className="h-4 w-4 shrink-0 text-[#FF5722]" /><a href="https://wa.me/263776848364" className="whitespace-nowrap text-xs md:text-sm">WhatsApp (+263 776 848 364)</a></div></li>
              <li><div className="flex items-center gap-2.5 text-slate-300"><MapPin className="h-4 w-4 shrink-0 text-[#FF5722]" /><span className="whitespace-nowrap text-xs md:text-sm">Harare, Zimbabwe</span></div></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} VisionCore Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/60">
            <a href="#" className="transition-colors hover:text-[#FF5722]">LinkedIn<ArrowUpRight className="ml-0.5 inline h-3 w-3 opacity-60" /></a>
            <a href="#" className="transition-colors hover:text-[#FF5722]">Facebook<ArrowUpRight className="ml-0.5 inline h-3 w-3 opacity-60" /></a>
            <a href="#" className="transition-colors hover:text-[#FF5722]">Instagram<ArrowUpRight className="ml-0.5 inline h-3 w-3 opacity-60" /></a>
            <a href="#" className="transition-colors hover:text-[#FF5722]">TikTok<ArrowUpRight className="ml-0.5 inline h-3 w-3 opacity-60" /></a>
            <a href="#" className="transition-colors hover:text-[#FF5722]">YouTube<ArrowUpRight className="ml-0.5 inline h-3 w-3 opacity-60" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
