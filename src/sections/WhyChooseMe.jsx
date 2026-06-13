/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  Target, 
  BarChart2, 
  CheckSquare, 
  Sparkles, 
  AlertTriangle,
  Lightbulb,
  XCircle
} from "lucide-react";

export default function WhyChooseMe() {
  const values = [
    {
      title: "Funnel & CRO Centricity",
      desc: "Typical agencies just set up ads and blame your website for bad sales. I perform landing page audits, speed optimizations, and copywriting updates to ensure visitors actually buy.",
      icon: <Target className="w-5 h-5 text-[#06B6D4]" />
    },
    {
      title: "UGC / Creative Design Briefs",
      desc: "Great targeting won't save average creatives. I draft exact copy scripts, visual flowboards, and aesthetic guidelines to help your team record high-retention content.",
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Real-time Looker Studio Reporting",
      desc: "Forget manual monthly PDF sheets colored by mock metrics. I construct custom live dashboards measuring CPA, ROAS, and net purchase profits directly pullable. 100% transparency.",
      icon: <BarChart2 className="w-5 h-5 text-[#06B6D4]" />
    },
    {
      title: "Direct Specialist Collaboration",
      desc: "You won't get passed down to a junior Account Manager. I personally log in, edit, review, and test your budgets. You get direct senior engineering focus on your business.",
      icon: <Sparkles className="w-5 h-5 text-[#7C3AED]" />
    }
  ];

  return (
    <section className="py-12 bg-[#0B1020] relative overflow-hidden text-[#F8FAFC]">
      {/* Visual background element */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-[#7C3AED]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-duration-300">
        
        {/* Core Double Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left copy column (Size 5) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-4">
            <span className="text-xs font-sora font-semibold text-[#06B6D4] tracking-widest uppercase block mb-1.5">COMPETITIVE EDGE</span>
            <h2 className="text-2xl sm:text-3xl font-poppins font-black tracking-tight text-[#F8FAFC] leading-tight">
              Why Elite Brands Bypass Traditional Agencies
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
              Traditional digital marketing agencies are slow, expensive, and bloated with account managers who don't know how to run a pixel. I operate differently.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-slate-800 space-y-3 shadow-md">
              <span className="text-[9px] font-sora font-bold text-rose-400 tracking-widest uppercase flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                AGENCY VS. INDEPENDENT SPECIALIST
              </span>
              <div className="space-y-2 text-xs text-slate-300 font-sans">
                <p className="flex items-start gap-1.5 text-rose-500/85">
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
                  <span><strong>Agencies:</strong> High retainer markups, static templates, junior execution, zero landing page optimization.</span>
                </p>
                <p className="flex items-start gap-1.5 text-[#06B6D4]">
                  <CheckSquare className="w-4 h-4 shrink-0 mt-0.5 text-[#06B6D4]" />
                  <span><strong>Rubab:</strong> Custom performance-driven grids, direct Slack channel with owner, creative storyboard briefs, complete CRO and page-conversion design.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Cards grid column (Size 7) */}
          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md border border-slate-800 hover:border-[#7C3AED]/30 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="p-2.5 bg-[#0B1020] rounded-lg border border-slate-800 w-fit mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-sm font-poppins font-bold text-[#F8FAFC] mb-1.5 leading-tight">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-350 leading-relaxed font-sans">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
