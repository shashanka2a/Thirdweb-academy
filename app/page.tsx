"use client";

import { Navigation } from "@/components/Navigation";
import { CursorGlow } from "@/components/CursorGlow";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { HeroIllustration } from "@/components/HeroIllustration";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BentoGrid } from "@/components/BentoGrid";
import { ParallaxText } from "@/components/ParallaxText";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FloatingCard } from "@/components/FloatingCard";
import { MagneticButton } from "@/components/MagneticButton";
import { TechStack } from "@/components/TechStack";
import { NoiseTexture } from "@/components/NoiseTexture";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Globe, Users } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Signature Element: Custom Cursor Glow */}
      <CursorGlow />

      {/* Noise Texture */}
      <NoiseTexture />

      {/* Subtle Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                            linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <Navigation />

      <main className="relative">
        {/* Hero Section - Asymmetric, Bold Layout with Parallax */}
        <section ref={heroRef} className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8 relative overflow-hidden min-h-screen flex items-center">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-[1400px] mx-auto w-full"
          >
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left: Headline & CTA */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 md:space-y-10">
                {/* Headline - Bold Statement with stagger */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05]"
                  >
                    Building the
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05]"
                  >
                    Future of Web3
                  </motion.h1>
                </div>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-gray-500 max-w-xl text-sm sm:text-base leading-relaxed"
                >
                  We partner with ambitious teams to build exceptional Web3 experiences.
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  From concept to launch, we bring your vision to life.
                </motion.p>

                {/* CTAs with Magnetic Effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
                >
                  <MagneticButton className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors group shadow-lg shadow-black/10 text-sm sm:text-base">
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>
                  <MagneticButton className="text-gray-600 hover:text-gray-900 px-5 sm:px-6 py-3 sm:py-4 transition-colors font-mono border border-gray-200 rounded-full hover:border-gray-300 text-sm sm:text-base text-center">
                    View_Our_Work →
                  </MagneticButton>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-gray-200"
                >
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      <AnimatedCounter value={50} suffix="+" />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 font-mono">Projects</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      <AnimatedCounter value={120} suffix="M" prefix="$" />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 font-mono">TVL</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      <AnimatedCounter value={98} suffix="%" />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 font-mono">Satisfaction</div>
                  </div>
                </motion.div>
              </div>

              {/* Right: Custom Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="lg:col-span-5 mt-8 lg:mt-0"
              >
                <FloatingCard className="aspect-square">
                  <HeroIllustration />
                </FloatingCard>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-gray-400"
            >
              <span className="font-mono text-xs">SCROLL</span>
              <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* Bento Grid Features Section */}
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50/50 relative">
          <div className="max-w-[1400px] mx-auto">
            <ParallaxText offset={30}>
              <div className="mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-mono text-xs sm:text-sm text-gray-400 uppercase tracking-wider"
                >
                  [CAPABILITIES]
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
                >
                  Everything You Need
                  <br />
                  to Launch on Web3
                </motion.h2>
              </div>
            </ParallaxText>

            <BentoGrid />
          </div>
        </section>

        {/* Tech Stack Marquee */}
        <section className="py-0 bg-white">
          <TechStack />
        </section>

        {/* Services Section - Enhanced */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
              {/* Section Label */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32 space-y-4 sm:space-y-6 mb-8 lg:mb-0">
                  <ParallaxText offset={20}>
                    <span className="font-mono text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                      [SERVICES]
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 sm:mt-4">What We Build</h2>
                    <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base">
                      Comprehensive Web3 solutions tailored to your vision.
                      From smart contracts to full-stack dApps.
                    </p>
                  </ParallaxText>
                </div>
              </div>

              {/* Service List - Enhanced with 3D cards */}
              <div className="lg:col-span-8 space-y-0">
                {[
                  {
                    num: "01",
                    title: "Smart Contract Development",
                    desc: "Secure, audited smart contracts built for scalability and efficiency. From ERC standards to custom protocols.",
                  },
                  {
                    num: "02",
                    title: "dApp Design & Development",
                    desc: "Beautiful, intuitive interfaces that make Web3 accessible. Full-stack development with modern frameworks.",
                  },
                  {
                    num: "03",
                    title: "NFT Platform Solutions",
                    desc: "End-to-end NFT marketplaces and minting platforms. Custom drops, royalties, and marketplace integrations.",
                  },
                  {
                    num: "04",
                    title: "Token Economics & DAOs",
                    desc: "Strategic tokenomics design and DAO infrastructure. Governance systems that align incentives.",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={service.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-t border-gray-200 last:border-b group"
                  >
                    <FloatingCard className="py-6 sm:py-8 px-4 sm:px-6 -mx-4 sm:-mx-6 hover:bg-white transition-colors cursor-pointer">
                      <div className="flex items-start justify-between gap-4 sm:gap-8">
                        <div className="space-y-2 sm:space-y-3 flex-1">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <motion.span
                              className="font-mono text-xs sm:text-sm text-gray-400 group-hover:text-purple-600 transition-colors"
                              whileHover={{ scale: 1.1 }}
                            >
                              {service.num}
                            </motion.span>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{service.title}</h3>
                          </div>
                          <p className="text-gray-500 pl-0 sm:pl-12 text-sm sm:text-base">{service.desc}</p>
                        </div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors mt-1 flex-shrink-0" />
                        </motion.div>
                      </div>
                    </FloatingCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Vertical Timeline */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50/50">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
              {/* Section Header */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32 space-y-4 sm:space-y-6 mb-8 lg:mb-0">
                  <ParallaxText offset={25}>
                    <span className="font-mono text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                      [PROCESS]
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 sm:mt-4">Our Approach</h2>
                    <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base">
                      A deliberate, structured process that transforms ambitious
                      ideas into production-ready Web3 applications.
                    </p>
                    
                    {/* Process Stats */}
                    <div className="pt-6 sm:pt-8 space-y-3 sm:space-y-4 border-t border-gray-200 mt-6 sm:mt-8">
                      <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <span className="text-xs sm:text-sm text-gray-500 font-mono">8-12 Weeks Avg</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <span className="text-xs sm:text-sm text-gray-500 font-mono">Dedicated Team</span>
                      </div>
                    </div>
                  </ParallaxText>
                </div>
              </div>

              {/* Timeline */}
              <div className="lg:col-span-8">
                <ProcessTimeline />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
              <div className="lg:col-span-4 mb-8 lg:mb-0">
                <ParallaxText offset={20}>
                  <span className="font-mono text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                    [TESTIMONIALS]
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 sm:mt-4">
                    Trusted by
                    <br />
                    Leading Teams
                  </h2>
                </ParallaxText>
              </div>

              <div className="lg:col-span-8">
                <TestimonialCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Enhanced */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-black text-white relative overflow-hidden">
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          <div className="max-w-[1400px] mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-mono text-xs sm:text-sm text-gray-400 border border-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  LET'S_COLLABORATE
                </span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto px-4">
                Ready to Build the Next Generation of Web3?
              </h2>
              
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-4">
                Let's discuss your project and explore how we can bring your
                Web3 vision to life. Book a free 30-minute strategy call.
              </p>

              <div className="flex items-center justify-center gap-4 pt-2 sm:pt-4">
                <MagneticButton className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2 group shadow-2xl shadow-white/20 text-sm sm:text-base">
                  <span>Book a Strategy Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </div>
            </motion.div>

            {/* Footer */}
            <div className="pt-12 sm:pt-16 md:pt-24 mt-12 sm:mt-16 md:mt-24 border-t border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                <motion.span
                  className="font-mono"
                  whileHover={{ color: "#fff" }}
                >
                  thirdweb.academy © 2025
                </motion.span>
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 font-mono flex-wrap justify-center">
                  <motion.a
                    href="#"
                    className="hover:text-white transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    Twitter
                  </motion.a>
                  <motion.a
                    href="#"
                    className="hover:text-white transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="#"
                    className="hover:text-white transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    Discord
                  </motion.a>
                  <motion.a
                    href="#"
                    className="hover:text-white transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    LinkedIn
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

