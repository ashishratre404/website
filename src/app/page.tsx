"use client";

import { HOME_FEATURES } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-[color:var(--color-gray-200)] bg-[color:var(--color-brand-900)] text-white p-10 md:p-16 dark:border-[color:var(--color-gray-800)] dark:bg-[color:var(--color-brand-950)]">
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[color:var(--color-brand-500)] opacity-20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-brand-700)] opacity-20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-brand-700)]/40 bg-[color:var(--color-brand-800)]/60 px-3 py-1 text-sm font-medium text-white/90 dark:border-[color:var(--color-brand-700)]/40 dark:bg-[color:var(--color-brand-900)]/40 dark:text-[color:var(--color-brand-200)]"
          >
            <span className="h-2 w-2 rounded-full bg-[color:var(--color-success-light)]" />
            Doozl AI — Where problems meet AI solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 text-balance text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            Build practical AI tools that solve real problems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-7 text-white/80 md:text-xl md:leading-8"
          >
            We design accessible, useful AI that integrates seamlessly into
            everyday workflows—so your team can move faster with less friction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--color-primary)] px-5 py-3 text-base font-semibold text-[color:var(--color-primary-foreground)] shadow-[0_8px_30px_rgba(99,102,241,0.35)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-brand-300)]/60"
            >
              Explore Tools
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent px-5 py-3 text-base font-semibold text-white transition hover:bg-white/10 dark:border-[color:var(--color-gray-700)] dark:bg-transparent dark:hover:bg-[color:var(--color-brand-900)]/40"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Subtle animated grid */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(67,56,202,0.15),transparent_35%)]"
        />
      </section>

      {/* Feature grid */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {HOME_FEATURES?.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-[color:var(--color-gray-200)] bg-white p-6 shadow-sm transition hover:shadow-md dark:border-[color:var(--color-gray-800)] dark:bg-[color:var(--color-brand-950)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--color-brand-100)] text-xl dark:bg-[color:var(--color-brand-900)]">
              <span>{item.icon}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[color:var(--color-foreground)]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[color:var(--color-gray-600)] dark:text-[color:var(--color-gray-300)]">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[color:var(--color-gray-200)] bg-gradient-to-tr from-[color:var(--color-brand-600)] to-[color:var(--color-brand-500)] p-[1px] dark:border-[color:var(--color-gray-800)]">
        <div className="rounded-2xl bg-white p-8 dark:bg-[color:var(--color-brand-950)]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">
                Ready to explore Doozl AI?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[color:var(--color-gray-600)] dark:text-[color:var(--color-gray-300)]">
                Discover tools, pricing, and our approach to building helpful
                AI.
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
                className="inline-flex items-center justify-center rounded-lg border border-[color:var(--color-gray-300)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--color-foreground)] transition hover:bg-[color:var(--color-gray-100)] dark:border-[color:var(--color-gray-700)] dark:bg-transparent dark:hover:bg-[color:var(--color-brand-900)]/40"
              >
                See Pricing
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-[color:var(--color-gray-300)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--color-foreground)] transition hover:bg-[color:var(--color-gray-100)] dark:border-[color:var(--color-gray-700)] dark:bg-transparent dark:hover:bg-[color:var(--color-brand-900)]/40"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
