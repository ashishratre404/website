"use client";

import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
export default function Footer() {
  const pathname = usePathname();

  const isCurrentPath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const footerLinks = NAV_ITEMS.filter((item) => !isCurrentPath(item.href));

  return (
    <footer className="border-t border-[color:var(--color-gray-200)] bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <p className="text-sm text-[color:var(--color-gray-600)]">
          © {new Date().getFullYear()} Doozl AI. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 text-sm">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[color:var(--color-gray-600)] hover:text-[color:var(--color-foreground)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
