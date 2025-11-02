"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: -8, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -8, scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-1.5 h-1.5 rounded-full bg-gray-900"
        />
      )}
      {!isHovered && <div className="w-1.5" />}
      <span>{children}</span>
    </Link>
  );
}

export function Navigation() {
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-sm" : "bg-white/70"
      } border-b border-white/10`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div
              className="text-gray-900 transition-opacity hover:opacity-70 flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/" className="flex items-center">
                <span className="font-bold">thirdweb</span>
                <span className="font-mono">.academy</span>
              </Link>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#academy">Academy</NavLink>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <motion.button
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={() => setIsCtaHovered(false)}
              className="relative rounded-full px-6 py-2.5 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Base black background */}
              <div className="absolute inset-0 bg-black transition-opacity duration-300" />
              
              {/* Holographic gradient overlay with animation */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
                }}
                animate={isCtaHovered ? {
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Button text */}
              <span className="relative z-10 text-white">
                Book a Strategy Call
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
