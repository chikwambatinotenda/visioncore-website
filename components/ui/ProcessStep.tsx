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
    <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md md:p-6">
      <div className="mb-3 flex items-center gap-3">
        <div className="shrink-0 rounded-md border border-orange-100 bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-600">
          {number}
        </div>
        <h3 className="text-base font-bold leading-tight text-gray-900 transition-colors group-hover:text-[#FF5722] md:text-lg">{name}</h3>
      </div>
      <p className="text-xs leading-relaxed text-gray-500 md:text-sm">{description}</p>
    </div>
  );
}
