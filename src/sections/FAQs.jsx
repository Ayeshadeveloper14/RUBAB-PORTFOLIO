/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { FAQS } from "../data";

export default function FAQs() {
  const [openId, setOpenId] = useState("f-1"); // Default first open
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All", "Onboarding", "Reporting", "Pricing", "Strategy"
  ];

  const filteredFaqs = activeCategory === "All"
    ? FAQS
    : FAQS.filter(faq => faq.category === activeCategory);

  const toggleOpen = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faqs" className="py-12 bg-[#0B1020] border-t border-slate-800 relative overflow-hidden text-[#F8FAFC]">
      {/* Background neon elements */}
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-[#7C3AED]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-sora font-semibold text-[#06B6D4] tracking-widest uppercase block mb-1.5">FAQ DESK</span>
          <h2 className="text-2xl sm:text-3xl font-poppins font-black tracking-tight text-[#F8FAFC]">
            Client Inquiries & Clarifications
          </h2>
          <p className="text-slate-350 text-xs sm:text-sm mt-3 font-sans">
            Clear, honest answers about budget requirements, custom creative deliverables, reporting trackers, and results.
          </p>

          {/* Quick FAQ Category Filters */}
          <div className="flex flex-wrap gap-1.5 justify-center mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-1.5 px-3 rounded text-[11px] font-sora font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#7C3AED]/20 border border-[#7C3AED]/50 text-cyan-300 shadow-sm"
                    : "bg-[#0B1020] border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Collapsible Accordion Group */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white/[0.04] backdrop-blur-md border transition-all duration-300 rounded-xl overflow-hidden ${
                  isOpen ? "border-[#7C3AED]/35 bg-white/[0.08] shadow-sm" : "border-slate-800/80 hover:border-slate-700"
                }`}
              >
                
                {/* Header question click bar */}
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full p-4 text-left flex justify-between items-center gap-4 focus:outline-none select-none cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#06B6D4] shrink-0" />
                    <span className="text-xs sm:text-sm font-poppins font-bold text-[#F8FAFC] hover:text-white transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1 bg-[#0B1020] border border-slate-800 rounded text-slate-400 shrink-0">
                    {isOpen ? <Minus className="w-3 h-3 text-[#7C3AED]" /> : <Plus className="w-3 h-3 text-slate-400" />}
                  </div>
                </button>

                {/* Answer body panel */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 animate-fade-in font-sans">
                    <p className="bg-[#0B1020]/50 p-3 rounded border border-slate-800/60 text-slate-350 leading-relaxed">
                      {faq.answer}
                    </p>
                    <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-slate-400 font-sora">
                      <span>SCOPE CATEGORY: {faq.category.toUpperCase()}</span>
                      <a href="#contact" className="text-[#06B6D4] hover:underline flex items-center gap-1">
                        Still unsure? Ask directly <ArrowRight className="w-3 h-3 text-[#06B6D4]" />
                      </a>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
