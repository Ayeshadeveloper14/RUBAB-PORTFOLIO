import React from "react";
import { Sparkles, CheckCircle2, Smile } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 bg-[#F5F3FF]/40 border-t border-purple-100 relative overflow-hidden">
      {/* Soft Background Accent Glows */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#7C3AED]/5 rounded-full blur-[90px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#EC4899]/5 rounded-full blur-[100px] pointer-events-none select-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading with reduced margin */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-sora font-semibold text-[#7C3AED] tracking-widest uppercase block mb-1.5">ABOUT RUBAB</span>
          <h2 className="text-2xl sm:text-3xl font-poppins font-black tracking-tight text-[#1E293B]">
            Behind The Growth Frameworks
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mx-auto mt-3 rounded-full" />
        </div>

        {/* Story & Biography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Biography Text (Column size 7) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg sm:text-xl font-sora font-bold text-[#1E293B] flex items-center gap-2 leading-snug">
              Turning web visitors into loyal brand advocates <Smile className="w-5 h-5 text-amber-500 fill-amber-500/10" />
            </h3>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Hello, I'm Rubab. Over the past 6+ years, my professional career has revolved around a simple, elegant challenge: <span className="text-[#7C3AED] font-semibold">How do we buy a customer for less than the lifetime value they provide to your brand?</span> I started as a junior PPC analyst, learning the mathematical intricacies of search metrics, quality scores, and conversion values.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              That analytical foundation evolved into a Senior Growth role at leading agencies, where I managed high-ticket ad budgets and directed premium creative production. I discovered that campaigns succeed when data-driven precision is paired with genuine consumer psychology and lightning-fast user interfaces.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Today, as an independent marketing consultant, I partner directly with selected E-commerce brands and lead-generation companies worldwide. I intentionally reject boilerplate checklists, offering direct communication, strict micro-testing, and complete, uncompromised integrity.
            </p>

            {/* Quick Profile Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left">
              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 font-sans">
                  <strong className="text-[#1E293B] block font-sora mb-0.5 font-bold">Location & Remote Work:</strong>
                  Available for global remote engagements (aligned to your team timeline)
                </p>
              </div>
              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 font-sans">
                  <strong className="text-[#1E293B] block font-sora mb-0.5 font-bold">Platform Integrations:</strong>
                  Expert in Shopify, WordPress, Webflow, GA4, and HubSpot flows
                </p>
              </div>
            </div>

          </div>

          {/* Core Operating Commitments (Column size 5) */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-md border border-purple-100 rounded-2xl p-5 lg:p-6 space-y-4 shadow-sm relative overflow-hidden">
            {/* Ambient accent background drop */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#7C3AED]/5 rounded-full blur-xl pointer-events-none" />
            <h4 className="text-xs font-sora font-bold text-[#EC4899] tracking-wider uppercase mb-1 text-left">MY CORE COMMITMENTS</h4>
            
            {[
              {
                title: "Mathematical Accuracy",
                desc: "I base campaign scaling decisions on actual CPA, MER, and Profit Margins, never on vanity platform metrics like impressions."
              },
              {
                title: "Radical Creative Testing",
                desc: "We perform heavy, structured creative testing, evaluating different consumer angles with robust direct benefit-driven stories."
              },
              {
                title: "Complete Transparency",
                desc: "Your ad accounts belong entirely to you. I maintain absolute openness with zero hidden margins or direct markup."
              }
            ].map((val, idx) => (
              <div key={idx} className="space-y-1 pb-3 border-b border-purple-50 last:border-0 last:pb-0 text-left">
                <span className="text-xs sm:text-sm font-sora font-bold text-[#1E293B] flex items-center gap-1.5">
                  <span className="text-xs font-mono font-black text-[#7C3AED]">0{idx + 1}.</span>
                  {val.title}
                </span>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">{val.desc}</p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
