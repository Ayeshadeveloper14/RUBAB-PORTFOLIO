/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const slideDuration = 6000; // 6 seconds auto-slide

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToSlide = (idx) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  // Setup loop for auto-slide
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, slideDuration);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [activeIndex, isHovered]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 28 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 28 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  const currentTest = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-12 bg-[#F5F3FF]/30 border-t border-purple-100 relative overflow-hidden text-[#1E293B]">
      {/* Background aesthetics with soft pink and lavender flairs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-[#7C3AED]/5 to-[#EC4899]/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#EFF6FF] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-duration-300">
        
        {/* Section Heading with scroll reveal */}
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-sora font-semibold text-[#7C3AED] tracking-widest uppercase block mb-1.5">CLIENT WORDINGS</span>
            <h2 className="text-2xl sm:text-3xl font-poppins font-black tracking-tight text-[#1E293B]">
              Client Success Stories
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mx-auto mt-3 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Carousel Outer wrapper */}
        <div 
          className="max-w-2xl mx-auto relative px-2 sm:px-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Card viewport - smaller height */}
          <div className="relative min-h-[160px] sm:min-h-[140px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-white/90 backdrop-blur-md border border-purple-100 p-4 sm:p-5 rounded-xl flex flex-col justify-between relative shadow-sm w-full text-left"
              >
                {/* Giant Quote Icon background accent */}
                <Quote className="absolute right-4 top-4 w-10 h-10 text-[#7C3AED]/8 shrink-0 pointer-events-none select-none" />

                <div className="space-y-2">
                  {/* Rating stars row */}
                  <div className="flex gap-1">
                    {[...Array(currentTest.rating)].map((_, si) => (
                      <Star key={si} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Review Quote text - elegant, clear, and small */}
                  <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-sans font-medium italic pr-6">
                    "{currentTest.review}"
                  </p>
                </div>

                {/* Client info segment with smaller margins */}
                <div className="pt-3 mt-3 border-t border-purple-100 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                  <div className="space-y-0.5">
                    <span className="text-xs font-poppins font-bold text-[#1E293B] block">
                      {currentTest.name}
                    </span>
                    <span className="text-[10px] font-sans text-slate-500 block font-medium">
                      {currentTest.role} • <strong className="text-[#7C3AED] font-semibold">{currentTest.company}</strong>
                    </span>
                  </div>

                  <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2.5 sm:gap-1 self-stretch sm:self-auto justify-between border-t sm:border-t-0 border-purple-50 pt-1.5 sm:pt-0">
                    <span className="inline-block text-[8px] font-sora font-semibold py-0.5 px-1.5 bg-purple-50 border border-purple-100 rounded text-[#7C3AED]">
                      {currentTest.platform} Verified
                    </span>
                    <div className="text-[9px] text-slate-400 font-mono flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-slate-400" />
                      {currentTest.country}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls Left/Right Buttons */}
          <div className="flex justify-between items-center mt-4 gap-3 max-md:justify-center">
            
            {/* Prev Button */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgb(124, 58, 237)", color: "rgb(255, 255, 255)" }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white border border-purple-100 text-[#7C3AED] shadow-sm cursor-pointer hover:border-transparent transition-all flex items-center justify-center shrink-0"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4 pointer-events-none" />
            </motion.button>

            {/* Pagination indicator dots */}
            <div className="flex gap-1.5 items-center">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex 
                      ? "w-6 bg-[#7C3AED] shadow-sm" 
                      : "w-2 bg-purple-200/70 hover:bg-purple-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgb(124, 58, 237)", color: "rgb(255, 255, 255)" }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white border border-purple-100 text-[#7C3AED] shadow-sm cursor-pointer hover:border-transparent transition-all flex items-center justify-center shrink-0"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4 pointer-events-none" />
            </motion.button>

          </div>

        </div>

      </div>
    </section>
  );
}
