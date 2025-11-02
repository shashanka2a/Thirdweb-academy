"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface RevealCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function RevealCard({ children, className = "", delay = 0 }: RevealCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [50, 0, 0, -50]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
