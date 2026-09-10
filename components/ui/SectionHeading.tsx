export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.2em] uppercase ${
            dark ? "text-[#FC4C00]" : "text-[#FC4C00]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight ${
          dark ? "text-white" : "text-[#092C42]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-white/75" : "text-[#092C42]/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
