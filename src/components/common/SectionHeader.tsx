type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow ? (
        <div
          className={
            (isCenter ? "mx-auto " : "") +
            "inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-lg backdrop-blur-sm"
          }
        >
          <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden />
          {eyebrow}
        </div>
      ) : null}
      <h1
        className={
          (eyebrow ? "mt-6 " : "") +
          "text-balance text-4xl font-semibold leading-tight md:text-6xl bg-gradient-to-b from-[color:var(--color-brand-900)] to-[color:var(--color-brand-700)] bg-clip-text text-transparent"
        }
      >
        {title}
      </h1>
      {subtitle ? (
        <p
          className={
            (eyebrow ? "mt-4 " : "mt-2 ") +
            "mx-auto max-w-2xl text-pretty text-lg leading-7 text-[color:var(--color-gray-600)] md:text-xl md:leading-8"
          }
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
