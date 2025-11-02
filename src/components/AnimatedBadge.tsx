"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
}

export function AnimatedBadge({ children, icon }: AnimatedBadgeProps) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 font-mono text-gray-500 border border-gray-200 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm"
      whileHover={{ scale: 1.05, borderColor: "#8B5CF6" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {icon && (
        <motion.span
          animate={{
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          {icon}
        </motion.span>
      )}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
