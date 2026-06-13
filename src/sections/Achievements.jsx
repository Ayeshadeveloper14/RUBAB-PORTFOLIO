/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Achievements() {
  const stats = [
    {
      id: "stat-budget",
      label: "TOTAL AUDITED AD BUDGET MANAGED",
      value: "$1.2M+",
      description: "Allocated across Meta, Search, and Display campaigns with daily oversight.",
      accent: "text-[#7C3AED]",
      bgAccent: "bg-[#7C3AED]/10"
    },
    {
      id: "stat-clients",
      label: "BRANDS ACCOMMODATED & SCALED",
      value: "45+",
      description: "E-commerce stores, Real Estate brokerages, and SaaS products globally.",
      accent: "text-[#06B6D4]",
      bgAccent: "bg-[#06B6D4]/10"
    },
    {
      id: "stat-impressions",
      label: "TRAFFIC / TOTAL IMPRESSIONS SERVED",
      value: "15M+",
      description: "Direct targeted impressions securing organic & paid click credibility.",
      accent: "text-[#A855F7]",
      bgAccent: "bg-[#A855F7]/10"
    },
    {
      id: "stat-satisfaction",
      label: "PLATFORM JOB SUCCESS RATE",
      value: "100%",
      description: "Perfect recurring feedback from corporate leaders on elite directories.",
      accent: "text-amber-400",
      bgAccent: "bg-amber-500/10"
    }
  ];

  return (
    <section className="py-12 bg-[#0B1020] border-y border-slate-800/80 relative overflow-hidden">
      {/* Graphic effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7C3AED]/15 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#06B6D4]/15 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st) => (
            <div
              key={st.id}
              className="p-5 rounded-xl bg-white/[0.04] backdrop-blur-md border border-slate-800/80 flex flex-col justify-between transition-all duration-300 hover:border-[#7C3AED]/30 hover:bg-white/[0.08] group shadow-sm"
            >
              <div className="space-y-3">
                {/* Micro Category */}
                <span className="text-[8px] font-sora font-semibold text-slate-450 tracking-widest block uppercase">
                  {st.label}
                </span>

                <div className="flex justify-between items-baseline">
                  <span className={`text-3xl sm:text-4xl font-poppins font-black tracking-tight ${st.accent}`}>
                    {st.value}
                  </span>
                  
                  {/* Tiny arrow */}
                  <div className="p-1 rounded-md text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-normal font-sans">
                  {st.description}
                </p>
              </div>

              {/* Verified Badge */}
              <div className="pt-3 border-t border-slate-800/80 mt-3 flex items-center gap-1.5 text-[9px] font-mono text-slate-400">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                VERIFIED BY AUDITED LOGS
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
