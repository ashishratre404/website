"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Initialize from localStorage or system preference
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem("theme") as "light" | "dark" | null)
        : null;
    let initial: "light" | "dark" = "light";
    if (stored) {
      initial = stored;
    } else if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      initial = "dark";
    }
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="sticky top-0 z-40 w-full border-b border-foreground/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold text-lg tracking-tight">
            <Image
              src={theme === "dark" ? "/DoozlAI.png" : "/DoozlDark.png"}
              alt="Doozle AI"
              width={100}
              height={100}
            />
          </Link>

          <div className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    "text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" +
                    (isActive ? " text-foreground" : "")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors " +
                (theme === "dark"
                  ? "bg-gray-800 text-gray-100 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200")
              }
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
