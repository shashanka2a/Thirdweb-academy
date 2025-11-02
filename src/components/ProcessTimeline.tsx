"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
  deliverables: string[];
}

function ProcessStep({ number, title, description, index, deliverables }: ProcessStepProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative pl-20 pb-24 border-l-2 border-gray-200/50 last:pb-0 last:border-l-0 group"
    >
      {/* Animated line reveal */}
      {isInView && index < 3 && (
        <motion.div
          className="absolute left-0 top-14 w-0.5 bg-gradient-to-b from-purple-500 to-transparent"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      )}

      {/* Number Badge with glow */}
      <motion.div
        className="absolute left-0 top-0 -translate-x-1/2 w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <motion.span
          className="font-mono text-white"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: index * 0.15 }}
        >
          {number}
        </motion.span>
        
        {/* Glow effect */}
        {isInView && (
          <motion.div
            className="absolute inset-0 rounded-full bg-purple-500/30"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.5, opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Content Card */}
      <motion.div
        className="bg-white border border-gray-200 rounded-2xl p-6 group-hover:border-gray-300 group-hover:shadow-lg transition-all"
        whileHover={{ x: 5 }}
      >
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-500">{description}</p>
          
          {/* Deliverables */}
          <div className="pt-4 border-t border-gray-100 space-y-2">
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="font-mono">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Connecting dot at bottom */}
      {index < 3 && (
        <motion.div
          className="absolute left-0 bottom-6 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-300 border-2 border-white"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.8 }}
        />
      )}
    </motion.div>
  );
}

export function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into your project goals, target audience, and competitive landscape to craft a winning strategy. This phase defines the technical architecture and design direction.",
      deliverables: [
        "Technical_Architecture",
        "Project_Roadmap",
        "Risk_Assessment",
      ],
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "Our designers create pixel-perfect interfaces that balance aesthetics with usability and Web3 functionality. We prototype interactions to ensure seamless user experience.",
      deliverables: [
        "Design_System",
        "Interactive_Prototype",
        "User_Flows",
      ],
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "We build robust, secure applications using best practices. Smart contracts are audited, code is reviewed, and thorough testing ensures reliability before launch.",
      deliverables: [
        "Smart_Contracts",
        "Frontend_dApp",
        "Security_Audit",
      ],
    },
    {
      number: "04",
      title: "Launch & Support",
      description:
        "We ensure a smooth launch with deployment strategies tailored to your needs. Ongoing support and optimization keep your project thriving in the Web3 ecosystem.",
      deliverables: [
        "Mainnet_Deployment",
        "Documentation",
        "Ongoing_Support",
      ],
    },
  ];

  return (
    <div className="space-y-0">
      {steps.map((step, index) => (
        <ProcessStep key={step.number} {...step} index={index} />
      ))}
    </div>
  );
}
