"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "thirdweb.academy transformed our vision into a production-ready dApp in just 8 weeks. Their technical expertise in smart contracts is unmatched.",
    author: "Sarah Chen",
    role: "Founder, MetaVerse Studios",
    company: "MetaVerse Studios",
  },
  {
    quote: "Working with this team felt like having an in-house Web3 department. They understood our needs and delivered beyond expectations.",
    author: "Marcus Rodriguez",
    role: "CTO, DeFi Protocol",
    company: "DeFi Protocol",
  },
  {
    quote: "The attention to detail in both design and development is exceptional. Our NFT marketplace has processed over $2M in transactions.",
    author: "Elena Kovač",
    role: "CEO, ArtChain",
    company: "ArtChain",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="space-y-6"
          >
            <p className="text-gray-900 text-xl leading-relaxed">
              "{testimonials[current].quote}"
            </p>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-gray-900">{testimonials[current].author}</p>
              <p className="text-sm text-gray-500 font-mono">
                {testimonials[current].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === current ? "w-8 bg-gray-900" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
