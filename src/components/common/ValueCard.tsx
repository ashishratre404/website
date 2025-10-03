type ValueCardProps = {
  icon?: string;
  title: string;
  desc: string;
};

export default function ValueCard({ icon, title, desc }: ValueCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[color:var(--color-gray-200)] bg-white p-6 shadow-sm transition hover:shadow-md">
      {icon ? (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--color-brand-100)] text-xl">
          <span aria-hidden>{icon}</span>
        </div>
      ) : null}
      <h3 className="mt-4 text-lg font-semibold text-[color:var(--color-foreground)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[color:var(--color-gray-600)]">
        {desc}
      </p>
    </div>
  );
}
