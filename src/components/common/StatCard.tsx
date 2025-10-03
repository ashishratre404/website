type StatCardProps = {
  value: string;
  label: string;
  desc?: string;
};

export default function StatCard({ value, label, desc }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-[color:var(--color-gray-200)] bg-white p-6 shadow-sm">
      <div className="text-3xl font-semibold text-[color:var(--color-foreground)]">
        {value}
      </div>
      <div className="mt-1 text-sm font-medium text-[color:var(--color-gray-600)]">
        {label}
      </div>
      {desc ? (
        <p className="mt-2 text-sm text-[color:var(--color-gray-500)]">
          {desc}
        </p>
      ) : null}
    </div>
  );
}
