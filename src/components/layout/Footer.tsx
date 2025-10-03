export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-gray-200)] bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <p className="text-sm text-[color:var(--color-gray-600)]">
          © {new Date().getFullYear()} Doozl AI. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 text-sm">
          <a
            href="/about"
            className="text-[color:var(--color-gray-600)] hover:text-[color:var(--color-foreground)] transition-colors"
          >
            About
          </a>
          <a
            href="/tools"
            className="text-[color:var(--color-gray-600)] hover:text-[color:var(--color-foreground)] transition-colors"
          >
            Tools
          </a>
          <a
            href="/pricing"
            className="text-[color:var(--color-gray-600)] hover:text-[color:var(--color-foreground)] transition-colors"
          >
            Pricing
          </a>
        </nav>
      </div>
    </footer>
  );
}
