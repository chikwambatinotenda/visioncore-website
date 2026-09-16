import GradientText from "@/components/ui/GradientText";
import DotNetwork from "@/components/ui/DotNetwork";

export default function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <DotNetwork className="opacity-20" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] text-[#FC4C00]">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#092C42] sm:text-5xl">
          <GradientText>{title}</GradientText>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#092C42]/70">{description}</p>
      </div>
    </section>
  );
}
