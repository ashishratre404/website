"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type AnimatedInViewProps = PropsWithChildren<{
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}>;

export default function AnimatedInView({
  children,
  delay = 0,
  y = 12,
  duration = 0.5,
  className,
  as = "div",
}: AnimatedInViewProps) {
  const M = motion[as as "div"] as typeof motion.div;
  return (
    <M
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </M>
  );
}
