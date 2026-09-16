import { notFound } from "next/navigation";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import GradientText from "@/components/ui/GradientText";
import Reveal from "@/components/ui/Reveal";
import DotNetwork from "@/components/ui/DotNetwork";
import { getServiceBySlug, services } from "@/lib/services";

type PackageOverride = {
  name: string;
  description: string;
  deliverables: string[];
  action: string;
};

export default function ServicePageTemplate({ slug, packageOverrides, compactPackages = false, compactTitle, compactLabel, compactDescription }: { slug: string; packageOverrides?: PackageOverride[]; compactPackages?: boolean; compactTitle?: string; compactLabel?: string; compactDescription?: string }) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);
  const packages = packageOverrides ?? service.packages.map((pkg) => ({ ...pkg, action: pkg.price }));

  return (
    <>
      {!compactPackages && <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <DotNetwork className="opacity-25" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#FC4C00]">
              {service.name.toUpperCase()}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#092C42] sm:text-5xl">
              <GradientText>{service.tagline}</GradientText>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#092C42]/70">
              {service.description}
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton href="/contact">{service.cta} →</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>}

      {!compactPackages && <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-[#092C42]">WHAT WE DO</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {service.offerings.map((offering, i) => (
              <Reveal key={offering} delay={i * 70}>
                <div className="flex items-start gap-3 border-t border-[#092C42]/10 pt-5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FC4C00]" />
                  <p className="text-sm leading-relaxed text-[#092C42]/80">{offering}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>}

      <section className={compactPackages ? "bg-white" : "bg-[#092C42]/[0.03] py-20"}>
        <div className={compactPackages ? "mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8" : "mx-auto max-w-7xl px-6"}>
          {compactPackages ? <>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">{compactLabel ?? "VISIONCORE CREATIVE"}</span>
            <h1 className="mb-2 mt-1 text-3xl font-extrabold text-[#0A192F] md:text-4xl">{compactTitle ?? "Branding & Design Packages"}</h1>
            <p className="mb-8 text-sm text-slate-600">{compactDescription ?? "Starting points for creative work. Every engagement can be tailored to your business."}</p>
          </> : <Reveal>
            <h2 className="text-2xl font-extrabold text-[#092C42]">PACKAGES</h2>
            <p className="mt-2 max-w-xl text-sm text-[#092C42]/60">Starting points for {service.shortName.toLowerCase()} work. Every engagement can be tailored to your business.</p>
          </Reveal>}
          <div className={`${compactPackages ? "mt-0" : "mt-10"} grid grid-cols-1 gap-6 md:grid-cols-3`}>
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 80}>
                <div className={`relative flex h-full flex-col rounded-2xl bg-white p-6 ${i === 1 ? "border-2 border-[#FF5722] shadow-xl" : "border border-slate-200"}`}>
                  {i === 1 && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#FF5722] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">MOST POPULAR</span>}
                  <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#092C42]/65">{pkg.description}</p>
                  <ul className="mb-6 mt-5 space-y-2.5 text-sm text-slate-600">
                    {pkg.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="font-bold text-emerald-500">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto inline-flex items-center justify-center rounded-full bg-[#FF5722] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E64A19]">Request Quote</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {!compactPackages && <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-[#092C42]">READY TO GET STARTED?</h2>
            <div className="mt-6 flex justify-center">
              <CTAButton href="/contact">{service.cta} →</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>}

      <section className={`border-t border-[#092C42]/10 bg-white ${compactPackages ? "pb-8 pt-4" : "py-16"}`}>
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#092C42]/50">OTHER CAPABILITIES</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="rounded-md border border-[#092C42]/10 px-4 py-2 text-sm font-medium text-[#092C42] hover:border-[#FC4C00] hover:text-[#FC4C00] transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
