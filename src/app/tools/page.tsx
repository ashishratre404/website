import type { Metadata } from "next";
import SectionHeader from "@/components/common/SectionHeader";
import { TOOLS } from "@/data/tools";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tools • Doozl AI",
  description:
    "Explore Doozl AI tools — practical AI for creators and teams. CaptionIt, Custom Support, ReVoice and more.",
};

export default function ToolsPage() {
  return (
    <div className="flex flex-col gap-16">
      <SectionHeader
        eyebrow="Our tools"
        title="Practical AI tools that solve real problems"
        subtitle="Clean, focused, and production‑ready. Built to remove everyday friction for creators, businesses, and teams."
      />

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((tool) => (
          <div
            key={tool.id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[color:var(--color-gray-200)] bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-1 min-w-0 items-center gap-3">
                {tool.icon ? (
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--color-brand-100)] text-xl">
                    <span aria-hidden>{tool.icon}</span>
                  </div>
                ) : null}
                <div className="min-w-0">
                  <h3 className="text-balance line-clamp-2 text-lg font-semibold leading-snug text-[color:var(--color-foreground)]">
                    {tool.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-[color:var(--color-gray-600)]">
                    {tool.tagline}
                  </p>
                </div>
              </div>

              {/* <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-[color:var(--color-gray-200)] bg-white px-3 py-1 text-xs font-medium text-[color:var(--color-gray-700)] transition hover:border-[color:var(--color-gray-300)] hover:bg-[color:var(--color-gray-50)]"
                aria-label={`Open ${tool.subdomain} in a new tab`}
              >
                {tool.subdomain}
                <span aria-hidden>↗</span>
              </a> */}
            </div>

            <p className="mt-4 line-clamp-[12] text-sm leading-6 text-[color:var(--color-gray-600)]">
              {tool.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[color:var(--color-primary)] px-4 py-2 text-sm font-semibold text-[color:var(--color-primary-foreground)] shadow-sm transition hover:brightness-110"
                aria-label={`${tool.ctaLabel} — ${tool.name}`}
              >
                {tool.ctaLabel}
              </a>

              <Link
                href={`/tools#${tool.id}`}
                className="inline-flex items-center justify-center rounded-lg border border-[color:var(--color-gray-300)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--color-foreground)] transition hover:bg-[color:var(--color-gray-100)]"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
