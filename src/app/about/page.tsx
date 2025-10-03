import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/common/SectionHeader";
import StatCard from "@/components/common/StatCard";
import ValueCard from "@/components/common/ValueCard";
import {
  ABOUT_HERO,
  ABOUT_STATS,
  ABOUT_VALUES,
  ABOUT_MISSION,
  ABOUT_VISION,
  ABOUT_TEAM_BLURB,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Doozl AI",
  description:
    "Learn about Doozl AI's mission, values, and approach to building useful AI tools.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24">
      <section className="relative overflow-hidden rounded-3xl border border-[color:var(--color-gray-200)] bg-gradient-to-b from-[color:var(--color-brand-50)] to-white p-10 md:p-16 shadow-[0_24px_60px_-20px_rgba(17,24,39,0.15)] ring-1 ring-inset ring-white/60">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[color:var(--color-brand-500)] opacity-20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-brand-700)] opacity-20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow={ABOUT_HERO.eyebrow}
            title={ABOUT_HERO.title}
            subtitle={ABOUT_HERO.subtitle}
            align="center"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">
          Mission
        </h2>
        <p className="mt-3 text-[color:var(--color-gray-700)]">
          {ABOUT_MISSION}
        </p>
      </section>

      <section className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">
          Vision
        </h2>
        <p className="mt-3 text-[color:var(--color-gray-700)]">
          {ABOUT_VISION}
        </p>
      </section>

      <section className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {ABOUT_STATS.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              desc={stat.desc}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">
            Our values
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[color:var(--color-gray-600)]">
            Principles that guide how we design, build, and ship.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ABOUT_VALUES.map((val) => (
            <ValueCard
              key={val.title}
              icon={val.icon}
              title={val.title}
              desc={val.desc}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">
          The team
        </h2>
        <p className="mt-3 text-[color:var(--color-gray-700)]">
          {ABOUT_TEAM_BLURB}
        </p>
      </section>

      <section className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[color:var(--color-gray-200)] bg-gradient-to-tr from-[color:var(--color-brand-600)] to-[color:var(--color-brand-500)] p-[1px]">
        <div className="rounded-2xl bg-white p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">
                We’re just getting started
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[color:var(--color-gray-600)]">
                Explore our tools and see what’s possible—or reach out and tell
                us what you’re building.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center rounded-lg bg-[color:var(--color-primary)] px-4 py-2 text-sm font-semibold text-[color:var(--color-primary-foreground)] shadow-sm transition hover:brightness-110"
              >
                View Tools
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-[color:var(--color-gray-300)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--color-foreground)] transition hover:bg-[color:var(--color-gray-100)]"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
