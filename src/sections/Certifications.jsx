/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "../data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 bg-[#0B1020] relative overflow-hidden text-[#F8FAFC]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-[#7C3AED]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with reduced margin */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-sora font-semibold text-[#06B6D4] tracking-widest uppercase block mb-1.5">TRUST & CREDENTIALS</span>
          <h2 className="text-2xl sm:text-3xl font-poppins font-black tracking-tight text-[#F8FAFC]">
            Industry Certifications
          </h2>
          <div className="w-12 h-1 bg-[#7C3AED] mx-auto mt-3 rounded-full" />
        </div>

        {/* Certifications grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.08] border border-slate-800 hover:border-[#7C3AED]/30 rounded-xl p-5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group shadow-sm"
            >
              {/* Top highlight line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#7C3AED]/0 group-hover:bg-[#7C3AED]/35 transition-colors duration-300" />
              
              <div className="space-y-3">
                {/* Header Badge */}
                <div className="flex justify-between items-start">
                  <div className={`py-1 px-2.5 rounded text-[9px] uppercase font-sora font-semibold tracking-wider border ${cert.badgeColor}`}>
                    {cert.issuer} Certified
                  </div>
                  <span className="text-xs font-mono text-slate-400">{cert.year}</span>
                </div>

                <div className="space-y-1 pt-1">
                  <h3 className="text-sm sm:text-base font-poppins font-bold text-[#F8FAFC] group-hover:text-white transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono">
                    Authority: {cert.issuer} Global Training
                  </p>
                </div>
              </div>

              {/* Verified Credential footer */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                  <span className="text-[9px] font-mono text-slate-400">
                    ID: <span className="font-semibold text-slate-350">{cert.credentialId || "VERIFIED"}</span>
                  </span>
                </div>
                <div className="text-[8px] font-mono py-0.5 px-1.5 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 uppercase tracking-widest font-bold">
                  ACTIVE
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Platform Trust Info */}
        <div className="mt-8 bg-white/[0.04] backdrop-blur-md border border-slate-800 p-5 rounded-xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm">
          <div className="p-2.5 bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#06B6D4] rounded-full">
            <Award className="w-5 h-5 fill-[#7C3AED]/10" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-poppins font-bold text-[#F8FAFC]">Looking for live verification proof links?</h4>
            <p className="text-[11px] text-slate-350 leading-relaxed mt-1 font-sans">
              My major certifications are directly linked to my Meta blueprint profiles and Google partner registry. I provide live credential verification links directly on our inquiry confirmation page.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
