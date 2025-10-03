"use client";

import { HOME_FEATURES } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-[color:var(--color-gray-200)] bg-gradient-to-b from-[color:var(--color-brand-50)] to-white p-10 md:p-16 shadow-[0_24px_60px_-20px_rgba(17,24,39,0.15)] ring-1 ring-inset ring-white/60">
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
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-lg backdrop-blur-sm"
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-green-500"
            />
            Doozl AI — Where problems meet AI solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 text-balance text-4xl font-semibold leading-tight md:text-6xl bg-gradient-to-b from-[color:var(--color-brand-900)] to-[color:var(--color-brand-700)] bg-clip-text text-transparent"
          >
            Build practical AI tools that solve real problems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-7 text-[color:var(--color-gray-600)] md:text-xl md:leading-8"
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
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-indigo-500/50 transition-all duration-300 hover:shadow-indigo-600/60"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Tools
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center justify-center rounded-xl border-1 border-gray-300 bg-white/80 px-8 py-4 text-base font-semibold text-gray-700 backdrop-blur-sm transition-all hover:border-indigo-300 hover:bg-white"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Decorative background */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(67,56,202,0.12),transparent_35%)]"
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
            className="relative overflow-hidden rounded-2xl border border-[color:var(--color-gray-200)] bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--color-brand-100)] text-xl">
              <span>{item.icon}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[color:var(--color-foreground)]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[color:var(--color-gray-600)]">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[color:var(--color-gray-200)] bg-gradient-to-tr from-[color:var(--color-brand-600)] to-[color:var(--color-brand-500)] p-[1px]">
        <div className="rounded-2xl bg-white p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">
                Ready to explore Doozl AI?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[color:var(--color-gray-600)]">
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
                className="inline-flex items-center justify-center rounded-lg border border-[color:var(--color-gray-300)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--color-foreground)] transition hover:bg-[color:var(--color-gray-100)]"
              >
                See Pricing
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-[color:var(--color-gray-300)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--color-foreground)] transition hover:bg-[color:var(--color-gray-100)]"
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
