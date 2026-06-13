/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { Sparkles, ArrowRight, TrendingUp } from "lucide-react";

export default function MarketingCalculator() {
  const [budget, setBudget] = useState(2500);
  const [industry, setIndustry] = useState("ecommerce");
  const [useRubabStrategy, setUseRubabStrategy] = useState(true);

  // Industry-specific constants
  const benchmarkData = useMemo(() => {
    switch (industry) {
      case "realestate":
        return {
          cpc: 2.10,
          convRate: 2.2, // Lead capture
          orderValue: 5000, // Client commission value
          rubabCpc: 1.25,
          rubabConvRate: 5.5,
        };
      case "saas":
        return {
          cpc: 3.50,
          convRate: 1.8, // Trial signups
          orderValue: 120, // Monthly user LTV
          rubabCpc: 2.20,
          rubabConvRate: 4.2,
        };
      case "services":
        return {
          cpc: 1.80,
          convRate: 3.0,
          orderValue: 800,
          rubabCpc: 1.10,
          rubabConvRate: 6.8,
        };
      case "ecommerce":
      default:
        return {
          cpc: 0.85,
          convRate: 1.5, // Purchase conv rate
          orderValue: 65,
          rubabCpc: 0.55,
          rubabConvRate: 3.8,
        };
    }
  }, [industry]);

  const metrics = useMemo(() => {
    const selectedCpc = useRubabStrategy ? benchmarkData.rubabCpc : benchmarkData.cpc;
    const selectedConvRate = useRubabStrategy ? benchmarkData.rubabConvRate : benchmarkData.convRate;
    
    const estimatedClicks = Math.floor(budget / selectedCpc);
    const estimatedConversions = Math.floor(estimatedClicks * (selectedConvRate / 100));
    const grossRevenue = estimatedConversions * benchmarkData.orderValue;
    const netProfit = grossRevenue - budget;
    const roas = Number((grossRevenue / budget).toFixed(2));
    const costPerConversion = Number((budget / (estimatedConversions || 1)).toFixed(2));

    return {
      clicks: estimatedClicks,
      conversions: estimatedConversions,
      revenue: grossRevenue,
      profit: netProfit,
      roas: isNaN(roas) ? 0 : roas,
      cpc: selectedCpc,
      cr: selectedConvRate,
      costPerConv: costPerConversion
    };
  }, [budget, benchmarkData, useRubabStrategy]);

  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-slate-800 rounded-2xl p-5 lg:p-6 relative overflow-hidden transition-all duration-300 hover:border-[#7C3AED]/30 shadow-md">
      {/* Decorative gradient light */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#06B6D4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#06B6D4]">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-sora font-semibold text-[#06B6D4] tracking-widest uppercase block">ROI PROJECTION TOOL</span>
          <h3 className="text-lg font-poppins font-black text-[#F8FAFC]">Ad Campaign ROI Estimator</h3>
        </div>
      </div>

      <p className="text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed font-sans">
        Toggle the model settings below to simulate your ad campaign performance. Compare market benchmarks with <span className="text-white font-semibold font-sora">Rubab's optimized conversion strategies</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left Inputs side */}
        <div className="space-y-4">
          {/* Industry selection */}
          <div>
            <label className="block text-[10px] font-sora font-semibold text-slate-400 tracking-wider uppercase mb-2">
              Sector / Business Model:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "ecommerce", label: "🎒 E-commerce" },
                { id: "realestate", label: "🏡 Real Estate" },
                { id: "saas", label: "💻 SaaS Product" },
                { id: "services", label: "🤝 Local Services" }
              ].map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setIndustry(ind.id)}
                  className={`py-1.5 px-3.5 rounded text-xs font-semibold border transition-all text-left font-sora cursor-pointer ${
                    industry === ind.id
                      ? "bg-[#7C3AED]/15 border-[#7C3AED]/60 text-cyan-300 shadow-md"
                      : "bg-[#0B1020] border-slate-800 hover:border-slate-700 text-slate-350"
                  }`}
                >
                  {ind.label}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-[10px] font-sora font-semibold text-slate-400 tracking-wider uppercase">
                Monthly Ad Budget:
              </label>
              <span className="text-base font-poppins font-black text-[#06B6D4]">
                ${budget.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="25000"
              step="500"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full accent-[#7C3AED] bg-[#0B1020] h-1 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
              <span>$1,000</span>
              <span>$10,000</span>
              <span>$25,000</span>
            </div>
          </div>

          {/* Strategy Toggle */}
          <div className="p-3 rounded-lg bg-[#0B1020]/60 border border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="strategy-toggle"
                  checked={useRubabStrategy}
                  onChange={(e) => setUseRubabStrategy(e.target.checked)}
                  className="w-4 h-4 text-[#7C3AED] border-[#7C3AED]/30 rounded focus:ring-[#7C3AED] bg-[#0B1020]"
                />
                <label htmlFor="strategy-toggle" className="text-xs font-sora font-semibold text-[#F8FAFC] cursor-pointer flex items-center gap-1 selection:bg-transparent">
                  Rubab's Growth Strategy <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400 animate-pulse" />
                </label>
              </div>
              <span className="text-[9px] font-mono font-medium py-0.5 px-2 bg-amber-400/10 text-amber-300 border border-amber-500/20 rounded-full">
                {useRubabStrategy ? "OPTIMIZED" : "STANDARD"}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed font-sans">
              {useRubabStrategy 
                ? "Simulates lower average Cost-Per-Click (CPC) using custom bidding layers, higher ad authority, and optimized copy layouts leading to +150% more conversions."
                : "Simulates average raw platform baseline specs (unoptimized landing pages, basic copy, and standard automated targeting structures)."}
            </p>
          </div>
        </div>

        {/* Right Outputs panel */}
        <div className="bg-[#0B1020]/60 rounded-xl border border-slate-800 p-4 space-y-3">
          <span className="text-[9px] font-sora font-semibold text-slate-500 tracking-widest uppercase block">PREDICTED METRICS</span>
          
          <div className="grid grid-cols-2 gap-2">
            {/* Click value */}
            <div className="p-2 bg-[#0B1020] border border-slate-800 rounded">
              <span className="text-[9px] font-mono text-slate-400 block">CPC (Ad Spend)</span>
              <span className="text-xs font-mono font-bold text-[#F8FAFC]">${metrics.cpc.toFixed(2)}</span>
            </div>
            {/* Conv rate */}
            <div className="p-2 bg-[#0B1020] border border-slate-800 rounded">
              <span className="text-[9px] font-mono text-slate-400 block">Conversion Rate</span>
              <span className="text-xs font-mono font-bold text-[#F8FAFC]">{metrics.cr}%</span>
            </div>
          </div>

          <div className="p-3 bg-[#7C3AED]/5 border border-[#7C3AED]/10 rounded flex items-center justify-between">
            <div>
              <span className="text-[9px] font-sora font-semibold text-slate-400 block">Expected conversions</span>
              <span className="text-xl font-poppins font-black text-[#06B6D4]">{metrics.conversions}</span>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-sora font-semibold text-slate-400 block">Cost Per Acq. (CPA)</span>
              <span className="text-sm font-poppins font-black text-[#F8FAFC]">${metrics.costPerConv}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-xs font-sora font-semibold text-slate-400">Total pipeline proceeds:</span>
              <span className="text-base font-mono text-emerald-400 font-bold">${metrics.revenue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-sora font-semibold text-slate-400">Estimated ROAS:</span>
              <span className="text-xl font-poppins font-black text-amber-400 tracking-tight">{metrics.roas}x</span>
            </div>
          </div>

          {useRubabStrategy && (
            <div className="p-2.5 bg-emerald-500/5 border border-emerald-500/10 rounded text-xs text-emerald-400/90 leading-normal flex gap-2 font-sans">
              <div className="p-0.5 mt-0.5 rounded bg-emerald-500/10 text-emerald-400 inline-block h-fit shrink-0">
                <TrendingUp className="w-3 h-3" />
              </div>
              <p className="text-[11px]">
                By target and landing page CRO, Rubab secures up to{" "}
                <span className="font-bold text-emerald-300">
                  {((metrics.revenue / Math.max(1, (budget * (benchmarkData.convRate / benchmarkData.cpc) * benchmarkData.orderValue / budget))) * 100 - 100).toFixed(0)}%
                </span>{" "}
                more revenue for the exact same budget!
              </p>
            </div>
          )}

          <a
            href="#contact"
            className="w-full py-2.5 px-3 rounded font-sora font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-all text-white bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:from-[#A855F7] hover:to-[#7C3AED] hover:shadow-md hover:shadow-[#7C3AED]/15 active:scale-98"
          >
            Claim Your Scaling Strategy Call <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
