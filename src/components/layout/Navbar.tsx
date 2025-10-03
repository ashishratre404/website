"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";
import { useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  useEffect(() => {
    // Force light theme on load
    if (typeof document !== "undefined") {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

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
              src="/DoozlDark.png"
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
            {/* Theme toggle removed for light-only theme */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
