export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tools", label: "Tools" },
  { href: "/pricing", label: "Pricing" },
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
