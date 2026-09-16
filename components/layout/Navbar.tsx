"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/nav";
import { services } from "@/lib/services";
import CTAButton from "@/components/ui/CTAButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div
      className={`w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-[#092C42]/10 bg-white/90 backdrop-blur-md py-3"
          : "border-transparent bg-white py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/assets/logo-horizontal.png"
            alt="VisionCore Technologies"
            width={240}
            height={80}
            className="h-14 w-auto object-contain md:h-16"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {primaryNav.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={`group relative py-2 text-sm transition-colors ${isActive(item.href) ? "font-bold text-[#FF5722]" : "font-medium text-[#0A192F] hover:text-[#FF5722]"}`}>
                  {item.label}
                  <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#FF5722] transition-all duration-300 ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
                </button>
                <div
                  className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    servicesOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  }`}
                >
                  <div className="rounded-lg border border-[#092C42]/10 bg-white p-2 shadow-xl shadow-[#092C42]/10">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.href}
                        className="block rounded-md px-4 py-3 text-sm hover:bg-[#092C42]/[0.04] transition-colors"
                      >
                        <span className="block font-semibold text-[#092C42]">{s.name}</span>
                        <span className="block text-xs text-[#092C42]/60">{s.tagline}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-2 text-sm transition-colors ${isActive(item.href) ? "font-bold text-[#FF5722]" : "font-medium text-[#0A192F] hover:text-[#FF5722]"}`}
              >
                {item.label}
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#FF5722] transition-all duration-300 ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <CTAButton href="/contact" className="px-5 py-2.5 text-xs">
            START A PROJECT
          </CTAButton>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden flex h-11 w-11 items-center justify-center rounded-md text-[#092C42] active:scale-95"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-[#092C42]/10 bg-white px-6 py-4">
          <div className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-h-11 items-center rounded-md px-2 py-3 text-sm transition-colors ${isActive(item.href) ? "font-bold text-[#FF5722]" : "font-medium text-[#0A192F] hover:text-[#FF5722]"}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2">
              <CTAButton href="/contact" className="w-full">
                START A PROJECT
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
