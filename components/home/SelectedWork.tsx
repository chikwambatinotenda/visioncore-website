import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioCard from "@/components/ui/PortfolioCard";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/portfolio";

export default function SelectedWork() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Selected Work" title="PROOF IN PRACTICE." />
            <CTAButton href="/portfolio" variant="secondary">
              VIEW OUR WORK
            </CTAButton>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
