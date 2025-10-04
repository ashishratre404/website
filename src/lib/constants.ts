export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tools", label: "Tools" },
  // { href: "/pricing", label: "Pricing" },
] as const;

export const HOME_FEATURES = [
  {
    title: "Problem-first approach",
    desc: "We start with real-world friction, then design AI that removes it.",
    icon: "🔎",
  },
  {
    title: "Practical automation",
    desc: "Streamline repetitive work with smart assistants that fit your flow.",
    icon: "⚙️",
  },
  {
    title: "Seamless integration",
    desc: "Tools that plug into your stack without heavy setups or lock-in.",
    icon: "🔗",
  },
] as const;

export const ABOUT_HERO = {
  eyebrow: "Our story",
  title: "We build practical AI for real teams",
  subtitle:
    "Doozl AI — Where problems meet AI solutions. We design focused tools that remove everyday friction. We believe in thoughtful automation, clear UX, and shipping value fast—without adding complexity.",
} as const;

export const ABOUT_MISSION =
  "We exist to remove everyday friction with focused AI tools. Too many ‘smart’ products are complex, slow, or hard to trust. We build simple, reliable assistants that fit the way people already work." as const;

export const ABOUT_VISION =
  "In the next decade, AI should feel invisible—practical, accessible, and safe. Doozl AI aims to make high‑quality AI available to every team, in every workflow, without heavy setup or lock‑in." as const;

export const ABOUT_VALUES = [
  {
    title: "Innovation",
    desc: "We experiment, learn fast, and ship improvements often.",
    icon: "💡",
  },
  {
    title: "Simplicity",
    desc: "Clear interfaces. Fewer steps. Better defaults.",
    icon: "✨",
  },
  {
    title: "Trust",
    desc: "Privacy‑respecting design, transparent behavior, and dependable uptime.",
    icon: "🛡️",
  },
  {
    title: "Impact",
    desc: "We measure outcomes, not demos. Real value over hype.",
    icon: "📈",
  },
  // {
  //   title: "Accessibility",
  //   desc: "Tools that are inclusive, understandable, and usable by everyone.",
  //   icon: "🌍",
  // },
] as const;

export const ABOUT_TEAM_BLURB =
  "We’re a small group of engineers, designers, and problem‑solvers who love turning practical ideas into dependable tools." as const;

export const ABOUT_STATS = [
  {
    value: "10+",
    label: "AI tools",
    desc: "Production-ready and actively maintained",
  },
  {
    value: "99.9%",
    label: "Uptime",
    desc: "Reliable infra for critical workflows",
  },
  {
    value: "<100ms",
    label: "Median latency",
    desc: "Snappy responses, sensible fallbacks",
  },
  { value: "∞", label: "Integrations", desc: "APIs and webhooks—no lock-in" },
] as const;
