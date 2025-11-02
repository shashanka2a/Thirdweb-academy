"use client";

import { motion } from "motion/react";
import { Code2, Palette, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Smart Contracts",
    description: "Audited, gas-optimized contracts",
    gradient: "from-purple-500/10 to-purple-600/10",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Scalable component libraries",
    gradient: "from-pink-500/10 to-pink-600/10",
    span: "md:col-span-1",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Comprehensive audits",
    gradient: "from-cyan-500/10 to-cyan-600/10",
    span: "md:col-span-1",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast execution",
    gradient: "from-violet-500/10 to-violet-600/10",
    span: "md:col-span-2",
  },
];

export function BentoGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-4 auto-rows-[200px]">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${feature.span} group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 hover:border-gray-300 transition-all`}
          >
            {/* Gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-4 right-4 w-20 h-20 border border-gray-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
