/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  TrendingUp, 
  Zap, 
  Plus, 
  Minus,
  CheckCircle,
  Filter
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import ScrollReveal from "../components/ScrollReveal";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState("modest-apparel"); // Default first open

  const categories = [
    "All", "Paid Ads", "Social Media", "SEO", "Lead Gen"
  ];

  const filteredProjects = filter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  const toggleExpand = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section id="portfolio" className="py-12 bg-[#FFFFFF] relative overflow-hidden text-[#1E293B]">
      {/* Decorative Blur glows */}
      <div className="absolute top-1/3 left-1/4 w-92 h-92 bg-[#7C3AED]/5 rounded-full blur-[90px] pointer-events-none select-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-[#EC4899]/5 rounded-full blur-[110px] pointer-events-none select-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-duration-300">
        
        {/* Header content with scroll reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <ScrollReveal variant="fade-left" className="max-w-2xl text-left">
            <span className="text-xs font-sora font-semibold text-[#7C3AED] tracking-widest uppercase block mb-1.5">CONVERSION PROOFS</span>
            <h2 className="text-2xl sm:text-3xl font-poppins font-black tracking-tight text-[#1E293B] leading-tight">
              Case Studies & Campaign Results
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mt-3 rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm mt-4 font-sans font-medium">
              Real-world client accounts. Real and fully verified campaign histories representing structured split-testing, exact target optimization, and heavy scaling.
            </p>
          </ScrollReveal>

          {/* Filter Bar */}
          <ScrollReveal variant="fade-right" className="flex flex-wrap gap-2 items-center">
            <span className="text-slate-400 text-xs font-sora flex items-center gap-1.5 mr-2 max-sm:hidden">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              Filter categories:
            </span>
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`py-1.5 px-3.5 rounded-full text-xs font-mono transition-all font-sora font-bold cursor-pointer ${
                  filter === cat
                    ? "bg-[#7C3AED] text-white shadow shadow-[#7C3AED]/15"
                    : "bg-purple-50/50 text-slate-500 border border-purple-100 hover:text-[#7C3AED] hover:border-purple-200"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </ScrollReveal>
        </div>

        {/* Case Studies Container with smooth size layout animations */}
        <motion.div layout className="space-y-6 font-sans w-full">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => {
              const isExpanded = expandedProject === proj.id;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={proj.id}
                  className={`bg-white border transition-all duration-350 rounded-xl overflow-hidden shadow-sm ${
                    isExpanded ? "border-[#7C3AED] ring-4 ring-[#7C3AED]/5 bg-[#F5F3FF]/10 shadow-sm" : "border-purple-100/70 hover:border-purple-200"
                  }`}
                >
                  
                  {/* Main clickable Preview Card summary */}
                  <div
                    className="p-4 sm:p-5 cursor-pointer flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 select-none"
                    onClick={() => toggleExpand(proj.id)}
                  >
                    <div className="space-y-1.5 max-w-2xl text-left">
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[8px] font-sora font-bold tracking-widest bg-pink-50 border border-pink-100 text-[#EC4899] py-0.5 px-2 rounded-full uppercase">
                          {proj.category}
                        </span>
                        <span className="text-[8px] font-mono text-slate-450 font-semibold mt-0.5">
                          {proj.duration} • {proj.industry}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-poppins font-black text-[#1E293B] hover:text-[#7C3AED] transition-colors leading-snug">
                        {proj.title}
                      </h3>
                      
                      <p className="text-slate-500 text-xs lines-clamp-2 leading-relaxed font-sans font-medium">
                        {proj.description}
                      </p>
                    </div>

                    {/* Highlights telemetry figures */}
                    <div className="flex flex-wrap gap-3 shrink-0 max-lg:w-full lg:justify-end items-center">
                      
                      {proj.adSpend && (
                        <div className="py-2 px-3 bg-purple-50/50 border border-purple-100/50 rounded-lg leading-none text-left">
                          <span className="text-[8px] font-sora font-semibold text-slate-450 block uppercase mb-1 tracking-wider">AD SPEND</span>
                          <span className="text-xs font-mono font-bold text-slate-755">{proj.adSpend}</span>
                        </div>
                      )}

                      {proj.revenueGenerated && (
                        <div className="py-2 px-3 bg-emerald-50 border border-emerald-100 text-[#0D9488] rounded-lg leading-none text-left">
                          <span className="text-[8px] font-sora font-semibold text-emerald-600 block uppercase mb-1 tracking-wider">REVENUE RETURN</span>
                          <span className="text-xs font-mono font-bold text-[#0D9488]">{proj.revenueGenerated}</span>
                        </div>
                      )}

                      {proj.leadsGenerated && (
                        <div className="py-2 px-3 bg-teal-50 border border-teal-100 text-teal-600 rounded-lg leading-none text-left">
                          <span className="text-[8px] font-sora font-semibold text-teal-650 block uppercase mb-1 tracking-wider">LEADS GENERATED</span>
                          <span className="text-xs font-mono font-bold text-teal-700">{proj.leadsGenerated}</span>
                        </div>
                      )}

                      {proj.roas && proj.roas !== "N/A (Lead Generation)" && (
                        <div className="py-2 px-3 bg-amber-50 border border-amber-100 text-[#D97706] rounded-lg leading-none text-left">
                          <span className="text-[8px] font-sora font-semibold text-amber-600 block uppercase mb-1 tracking-wider">ATTRIB ROAS</span>
                          <span className="text-xs font-poppins font-black text-[#D97706]">{proj.roas}</span>
                        </div>
                      )}

                      {/* Expand Trigger Button with active rotating animation */}
                      <motion.button 
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        className="p-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-150 text-[#7C3AED] transition-all ml-1.5 flex items-center justify-center shrink-0 cursor-pointer"
                      >
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                          {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </motion.div>
                      </motion.button>
                    </div>

                  </div>

                  {/* Expanded Multi-dimension Deep Dive details block */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-8 border-t border-purple-100 bg-[#F5F3FF]/20 space-y-6 text-left">
                          
                          {/* Live Trend Badges row */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                            {proj.statusMetrics.map((met, mi) => (
                              <motion.div 
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: mi * 0.1, duration: 0.4 }}
                                key={mi} 
                                className="p-3 bg-white border border-purple-100 rounded-xl flex items-center justify-between shadow-sm hover:border-[#7C3AED]/30 transition-all"
                              >
                                <div>
                                  <span className="text-[9px] font-sora font-semibold text-slate-400 tracking-wider block uppercase">{met.label}</span>
                                  <span className="text-lg font-poppins font-black text-[#1E293B] mt-1 block">{met.value}</span>
                                </div>
                                <div className="p-2 rounded-lg bg-purple-50 text-[#7C3AED] border border-purple-100/20">
                                  <TrendingUp className="w-3.5 h-3.5" />
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-1">
                            {/* Challenge & Strategy (size 7) */}
                            <div className="lg:col-span-12 xl:col-span-7 space-y-4">
                              
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15 }}
                              >
                                <h4 className="text-[10px] font-sora font-bold text-rose-500 tracking-wider uppercase mb-1.5 flex items-center gap-1">
                                  <Zap className="w-3.5 h-3.5 text-[#EC4899]" />
                                  THE CHALLENGE & KEY BLOCKERS
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-rose-50/50 border border-rose-100/40 p-3.5 rounded-xl font-sans font-medium">
                                  {proj.challenge}
                                </p>
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25 }}
                              >
                                <h4 className="text-[10px] font-sora font-bold text-[#7C3AED] tracking-wider uppercase mb-2 flex items-center gap-1">
                                  <TrendingUp className="w-3.5 h-3.5" />
                                  RUBAB'S OPTIMIZED CAMPAIGN STRATEGY
                                </h4>
                                <ul className="space-y-2 font-sans font-medium text-slate-650">
                                  {proj.strategy.map((strat, si) => (
                                    <li key={si} className="flex gap-2 text-xs sm:text-sm text-slate-655 leading-relaxed">
                                      <span className="w-4 h-4 rounded-full bg-purple-100 text-[#7C3AED] border border-purple-200/50 shrink-0 flex items-center justify-center text-[10px] font-mono mt-0.5 font-bold">
                                        {si + 1}
                                      </span>
                                      <span>{strat}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>

                            </div>

                            {/* Audited Achievements checklist (size 5) */}
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 }}
                              className="lg:col-span-12 xl:col-span-5 bg-white border border-purple-100 rounded-xl p-5 space-y-4 shadow-sm"
                            >
                              <h4 className="text-[10px] font-sora font-bold text-[#7C3AED] tracking-wider uppercase flex items-center gap-1.5 border-b border-purple-50 pb-2.5">
                                <CheckCircle className="w-3.5 h-3.5 shrink-0 text-[#7C3AED]" />
                                AUDITED OFF-PLATFORM ACHIEVEMENTS
                              </h4>

                              <div className="space-y-3 font-sans text-xs">
                                {proj.results.map((res, ri) => (
                                  <div key={ri} className="flex gap-2.5 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#EC4899] mt-1.5 shrink-0" />
                                    <p className="text-slate-655 leading-relaxed font-semibold">{res}</p>
                                  </div>
                                ))}
                              </div>

                              <div className="pt-3 border-t border-purple-50 mt-3 space-y-3">
                                <p className="text-[9px] font-mono text-slate-400 leading-normal">
                                  All analytics metrics are archived securely. Full transparent client references can be verified on our brief strategy mapping call.
                                </p>
                                
                                <div className="flex justify-start">
                                  <motion.a
                                    whileHover={{ scale: 1.03, y: -1 }}
                                    whileTap={{ scale: 0.97 }}
                                    href="#contact"
                                    className="px-4 py-2 rounded-full bg-[#7C3AED] hover:bg-[#EC4899] text-white text-[11px] font-sora font-bold text-center inline-flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                                  >
                                    Replicate Strategy
                                  </motion.a>
                                </div>
                              </div>

                            </motion.div>

                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
