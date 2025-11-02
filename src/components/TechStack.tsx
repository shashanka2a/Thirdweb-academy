"use client";

import { motion } from "motion/react";

const technologies = [
  { name: "Solidity", category: "Smart Contracts" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Hardhat", category: "Development" },
  { name: "Ethers.js", category: "Web3 Library" },
  { name: "IPFS", category: "Storage" },
  { name: "The Graph", category: "Indexing" },
  { name: "Tailwind", category: "Styling" },
];

export function TechStack() {
  return (
    <div className="py-16 border-y border-gray-200 overflow-hidden">
      <div className="relative">
        {/* Scrolling container */}
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate the array to create infinite scroll effect */}
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 px-6 py-3 border border-gray-200 rounded-full bg-white/50 backdrop-blur-sm"
              whileHover={{ scale: 1.1, borderColor: "#8B5CF6" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-gray-900 whitespace-nowrap">{tech.name}</span>
                <span className="text-xs text-gray-400 font-mono">/{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
