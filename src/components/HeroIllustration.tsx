"use client";

import { motion } from "motion/react";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background gradient orbs */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.15" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Animated background blobs */}
        <motion.circle
          cx="120"
          cy="120"
          r="80"
          fill="url(#grad1)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.circle
          cx="280"
          cy="280"
          r="100"
          fill="url(#grad2)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />

        {/* Geometric shapes - Blockchain inspired */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Central hexagon */}
          <motion.path
            d="M200 140 L240 160 L240 200 L200 220 L160 200 L160 160 Z"
            stroke="#000"
            strokeWidth="2"
            fill="white"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 180px" }}
          />
        </motion.g>

        {/* Orbiting nodes */}
        <motion.g>
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const radius = 100;
            const cx = 200 + radius * Math.cos((angle * Math.PI) / 180);
            const cy = 200 + radius * Math.sin((angle * Math.PI) / 180);
            
            return (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                r="6"
                fill="#000"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1], opacity: [0, 1, 0.6] }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            );
          })}
        </motion.g>

        {/* Connecting lines */}
        <motion.g stroke="#E5E7EB" strokeWidth="1" opacity="0.4">
          <motion.line
            x1="160"
            y1="160"
            x2="120"
            y2="120"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.line
            x1="240"
            y1="200"
            x2="280"
            y2="240"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.line
            x1="200"
            y1="140"
            x2="200"
            y2="80"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.g>

        {/* Floating cubes */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="300"
            y="100"
            width="30"
            height="30"
            stroke="#000"
            strokeWidth="2"
            fill="white"
            transform="rotate(45 315 115)"
          />
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 4, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle
            cx="80"
            cy="300"
            r="20"
            stroke="#000"
            strokeWidth="2"
            fill="white"
          />
        </motion.g>

        {/* Scan line effect */}
        <motion.line
          x1="0"
          y1="0"
          x2="400"
          y2="0"
          stroke="#8B5CF6"
          strokeWidth="2"
          opacity="0.3"
          initial={{ y: 0 }}
          animate={{ y: 400 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}
