export default function ProcessStep({
  number,
  name,
  description,
}: {
  number: string;
  name: string;
  description: string;
}) {
  return (
    <div className="group cursor-pointer rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5722]/40 hover:shadow-xl md:p-8">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF5722] text-sm font-extrabold text-white shadow-md shadow-[#FF5722]/25">
          {number}
        </div>
        <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-[#FF5722] md:text-xl">{name}</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
