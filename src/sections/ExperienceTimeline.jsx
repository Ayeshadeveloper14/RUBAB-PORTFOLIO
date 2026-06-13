/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Calendar } from "lucide-react";
import { EXPERIENCES } from "../data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-12 bg-[#0B1020] border-t border-slate-800 relative overflow-hidden">
      {/* Decorative vertical gradient light */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#7C3AED]/0 via-[#7C3AED]/15 to-[#7C3AED]/0 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-duration-300">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-sora font-semibold text-[#06B6D4] tracking-widest uppercase block mb-1.5">PROFESSIONAL TIMELINE</span>
          <h2 className="text-2xl sm:text-3xl font-poppins font-black tracking-tight text-[#F8FAFC]">
            Career Chronology & Tenures
          </h2>
          <div className="w-12 h-1 bg-[#7C3AED] mx-auto mt-3 rounded-full" />
        </div>

        {/* Vertical Timeline wrapper */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Actual physical centerline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Glowing center indicator dot */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0B1020] border-2 border-[#7C3AED] shadow-xl z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full animate-pulse" />
                  </div>

                  {/* Left spacer for desktop symmetry */}
                  <div className="w-full md:w-1/2 max-md:hidden" />

                  {/* Active content card (Size 1/2) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-6">
                    <div className="bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md border border-slate-800/80 hover:border-[#7C3AED]/30 p-5 rounded-xl transition-all duration-300 relative group shadow-sm">
                      
                      {/* Interactive tag type */}
                      <div className="flex justify-between items-start mb-3">
                        <span className="px-2.5 py-0.5 bg-[#0B1020] border border-slate-800 text-slate-400 text-[9px] font-sora font-semibold rounded uppercase tracking-wider">
                          {exp.type}
                        </span>
                        <div className="text-right text-[10px] font-mono text-slate-500 flex items-center gap-1 justify-end">
                          <Calendar className="w-3 h-3 text-slate-600" />
                          {exp.period}
                        </div>
                      </div>

                      <h3 className="text-base font-poppins font-bold text-[#F8FAFC] group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-[11px] font-sora text-[#06B6D4] font-medium tracking-wide mt-0.5 mb-3 italic">
                        {exp.company}
                      </p>

                      {/* Timeline points list */}
                      <ul className="space-y-1.5 mb-4 font-sans">
                        {exp.description.map((pt, pidx) => (
                           <li key={pidx} className="flex gap-2 text-xs text-slate-350 leading-relaxed">
                            <span className="text-[#7C3AED] font-mono font-bold mt-0.5 shrink-0 select-none">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Applied row */}
                      <div className="pt-3 border-t border-slate-800/80">
                        <span className="text-[8px] font-sora font-bold text-slate-500 block mb-1.5 uppercase tracking-widest">SKILLS APPLIED:</span>
                        <div className="flex flex-wrap gap-1">
                          {exp.skillsApplied.map((sk, sidx) => (
                            <span
                              key={sidx}
                              className="text-[9px] font-mono py-0.2 px-1.5 bg-[#0B1020] border border-slate-800 text-slate-400 rounded"
                            >
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
