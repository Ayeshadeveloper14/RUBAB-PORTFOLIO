/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ArrowUpRight, Award, Percent, TrendingUp, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function Hero() {
  const [activeSpecialty, setActiveSpecialty] = useState(null);

  // Parallax spring controls
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const floatX = useSpring(x, springConfig);
  const floatY = useSpring(y, springConfig);

  // Map translations for depth layering
  const moveBg = useTransform(floatX, [-300, 300], [-15, 15]);
  const moveHero = useTransform(floatX, [-300, 300], [-8, 8]);
  const moveBgY = useTransform(floatY, [-300, 300], [-15, 15]);
  const moveHeroY = useTransform(floatY, [-300, 300], [-8, 8]);
  const moveWidget1 = useTransform(floatX, [-300, 300], [-25, 25]);
  const moveWidget1Y = useTransform(floatY, [-300, 300], [-20, 20]);
  const moveWidget2 = useTransform(floatX, [-300, 300], [20, -20]);
  const moveWidget2Y = useTransform(floatY, [-300, 300], [15, -15]);
  const moveWidget3 = useTransform(floatX, [-300, 300], [30, -30]);
  const moveWidget3Y = useTransform(floatY, [-300, 300], [25, -25]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Stagger reveal animations templates
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] pt-24 pb-12 items-center flex overflow-hidden"
    >
      
      {/* Decorative localized soft floating glows & animated blobs */}
      <motion.div 
        style={{ x: useTransform(floatX, [-300, 300], [-25, 25]), y: useTransform(floatY, [-300, 300], [-25, 25]) }}
        className="absolute top-[18%] left-[8%] w-[270px] h-[270px] rounded-full bg-[#EC4899]/6 blur-[80px] pointer-events-none select-none" 
      />
      <motion.div 
        style={{ x: useTransform(floatX, [-300, 300], [35, -35]), y: useTransform(floatY, [-300, 300], [35, -35]) }}
        className="absolute bottom-[8%] right-[8%] w-[380px] h-[380px] rounded-full bg-[#7C3AED]/6 blur-[110px] pointer-events-none select-none" 
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left copy column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-5"
          >
            
            {/* Tagline / Micro Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-mono tracking-wide font-sora"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EC4899] fill-[#EC4899]/20" />
              RUBAB • DIGITAL MARKETING SPECIALIST
            </motion.div>
 
            {/* Premium Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-black tracking-tight text-[#1E293B] leading-[1.1]"
            >
              Elevating Brands through <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#7C3AED] bg-clip-text text-transparent bg-size-200">
                Data-Driven Marketing
              </span>{" "}
              Solutions.
            </motion.h1>

            {/* Sub-headline / Copy */}
            <motion.p 
              variants={itemVariants}
              className="text-slate-600 text-xs sm:text-sm max-w-lg font-sans leading-relaxed"
            >
              Bespoke, high-performance optimization frameworks crafted to lower customer acquisition costs, raise conversion rates, and unlock sustainable digital scaling.
            </motion.p>

            {/* Credibility Trust Bar */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 py-4 border-y border-purple-100 max-w-md"
            >
              <div className="text-left group/metric">
                <span className="block text-2xl sm:text-2.5xl font-poppins font-black text-[#7C3AED] bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent group-hover/metric:scale-105 transition-transform origin-left duration-300">$1.2M+</span>
                <span className="text-[9px] font-sora font-semibold text-slate-500 uppercase tracking-wider block mt-0.5">Ad Spend Managed</span>
              </div>
              <div className="text-left group/metric">
                <span className="block text-2xl sm:text-2.5xl font-poppins font-black text-[#7C3AED] bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent group-hover/metric:scale-105 transition-transform origin-left duration-300">8.5x</span>
                <span className="text-[9px] font-sora font-semibold text-slate-500 uppercase tracking-wider block mt-0.5">Average ROAS</span>
              </div>
              <div className="text-left group/metric">
                <span className="block text-2xl sm:text-2.5xl font-poppins font-black text-rose-500 group-hover/metric:scale-105 transition-transform origin-left duration-300">Top Rated</span>
                <span className="text-[9px] font-sora font-semibold text-slate-500 uppercase tracking-wider block mt-0.5">Elite Consultant</span>
              </div>
            </motion.div>

            {/* Call To Actions */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-6 py-3 rounded-full font-sora font-semibold text-xs text-white bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:from-[#EC4899] hover:to-[#7C3AED] transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer relative overflow-hidden"
              >
                Hire Me <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.02, backgroundColor: "rgba(124, 58, 237, 0.08)" }}
                whileTap={{ scale: 0.98 }}
                href="#portfolio"
                className="px-6 py-3 rounded-full font-sora font-semibold text-xs text-[#7C3AED] bg-[#F5F3FF] transition-all duration-300 border border-purple-200/50 flex items-center gap-1.5"
              >
                View My Work
              </motion.a>
            </motion.div>

            {/* Specialties */}
            <motion.div 
              variants={itemVariants}
              className="pt-1 flex items-center gap-2.5 text-[10px] font-mono text-slate-400"
            >
              <span className="font-bold text-[#1E293B]/60 tracking-wider">SPECIALTIES:</span>
              <div className="flex flex-wrap gap-1.5 text-slate-600 font-sora font-medium">
                {[
                  { name: "Meta Ads", hover: "hover:text-[#7C3AED]" },
                  { name: "Google PPC", hover: "hover:text-blue-600" },
                  { name: "Social SMM", hover: "hover:text-pink-600" },
                  { name: "Technical SEO", hover: "hover:text-teal-600" }
                ].map((spec, idx) => (
                  <motion.span 
                    key={idx}
                    whileHover={{ y: -1, scale: 1.03 }}
                    className={`px-2 py-0.5 bg-purple-50 rounded transition-colors cursor-default ${spec.hover}`}
                  >
                    {spec.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right graphics / Illustration with elegant floating widgets */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
            
            {/* Concentric rotating glowing ring */}
            <motion.div 
              style={{ x: moveBg, y: moveHeroY }}
              className="absolute inset-0 m-auto w-72 h-72 rounded-full border border-purple-200 bg-purple-50/10 shadow-xl pointer-events-none" 
            />
            
            <motion.div 
              style={{ x: moveHero, y: moveHeroY }}
              className="relative w-72 h-[340px] sm:w-[320px] sm:h-[400px] rounded-2xl p-2.5 bg-white/60 backdrop-blur-lg border border-purple-100 shadow-xl"
            >
              
              {/* Profile Illustration */}
              <div className="w-full h-full rounded-xl overflow-hidden relative group bg-gradient-to-b from-[#F5F3FF] to-white flex items-center justify-center">
                <img
                  src="/src/assets/images/rubab pic.png"
                  alt="Rubab - Professional Digital Marketing Specialist"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Widget 1: Top Rated Gold badge */}
              <motion.div 
                style={{ x: moveWidget1, y: moveWidget1Y }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="absolute -top-3 -left-3 bg-white/95 border border-purple-100/80 p-2.5 rounded-xl flex items-center gap-2 shadow-md cursor-default select-none group animate-duration-300"
              >
                <div className="p-1.5 bg-amber-100 rounded-lg text-amber-600 border border-amber-200">
                  <Award className="w-3.5 h-3.5 fill-amber-500/20" />
                </div>
                <div>
                  <span className="text-[8px] font-sora font-semibold text-slate-400 block tracking-wider uppercase">Reputation</span>
                  <span className="text-[10px] font-poppins font-semibold text-[#1E293B]">Top Rated Plus</span>
                </div>
              </motion.div>

              {/* Float Widget 2: ROAS metrics */}
              <motion.div 
                style={{ x: moveWidget2, y: moveWidget2Y }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="absolute -bottom-3 -right-3 bg-white/95 border border-purple-100/80 p-2.5 rounded-xl flex items-center gap-2 shadow-md cursor-default select-none group"
              >
                <div className="p-1.5 bg-purple-100 rounded-lg text-[#7C3AED] border border-[#7C3AED]/20">
                  <Percent className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[8px] font-sora font-semibold text-slate-400 block tracking-wider uppercase">Results</span>
                  <span className="text-[10px] font-poppins font-semibold text-[#1E293B]">Up to 8.5x ROAS</span>
                </div>
              </motion.div>

              {/* Float Widget 3: Live tracker */}
              <motion.div 
                style={{ x: moveWidget3, y: moveWidget3Y }}
                whileHover={{ scale: 1.05, x: 3 }}
                className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white/95 border border-purple-100/80 p-2.5 rounded-xl shadow-md flex flex-col gap-0.5 max-sm:hidden cursor-default select-none"
              >
                <span className="text-[8px] font-sora font-bold text-[#EC4899] tracking-wider uppercase flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-[#EC4899] animate-bounce" /> CAMPAIGNS ACTIVE
                </span>
                <span className="text-[10px] font-poppins font-semibold text-[#1E293B]">$98k Generated in 90d</span>
                <div className="w-20 h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-full" 
                  />
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
