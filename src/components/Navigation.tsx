"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div
              className="text-gray-900 transition-opacity hover:opacity-70 flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/" className="flex items-center">
                <span className="font-bold text-base sm:text-lg">thirdweb</span>
                <span className="font-mono text-xs sm:text-sm md:text-base">.academy</span>
              </Link>
            </motion.div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#academy">Academy</NavLink>
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* CTA Button - Desktop */}
            <div className="hidden sm:flex flex-shrink-0">
              <motion.button
                onMouseEnter={() => setIsCtaHovered(true)}
                onMouseLeave={() => setIsCtaHovered(false)}
                className="relative rounded-full px-5 sm:px-6 py-2 sm:py-2.5 overflow-hidden group"
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
                <span className="relative z-10 text-white text-sm sm:text-base whitespace-nowrap">
                  Book a Strategy Call
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-900 hover:text-gray-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-3 border-t border-gray-200 mt-4">
                <NavLink href="#services" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </NavLink>
                <NavLink href="#work" onClick={() => setMobileMenuOpen(false)}>
                  Work
                </NavLink>
                <NavLink href="#process" onClick={() => setMobileMenuOpen(false)}>
                  Process
                </NavLink>
                <NavLink href="#academy" onClick={() => setMobileMenuOpen(false)}>
                  Academy
                </NavLink>
                <div className="pt-3">
                  <motion.button
                    onMouseEnter={() => setIsCtaHovered(true)}
                    onMouseLeave={() => setIsCtaHovered(false)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative w-full rounded-full px-6 py-3 overflow-hidden group"
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-black transition-opacity duration-300" />
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
                    <span className="relative z-10 text-white text-sm">
                      Book a Strategy Call
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
