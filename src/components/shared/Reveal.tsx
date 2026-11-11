"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  as?: "div" | "li" | "article";
};

/** Скролл кезінде жұмсақ пайда болу. prefers-reduced-motion кезінде тек opacity қалады. */
export function Reveal({ children, className, delay = 0, y = 28, x = 0, scale = 1, as = "div" }: Props) {
  const Comp = as === "li" ? m.li : as === "article" ? m.article : m.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
