/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUpRight, Linkedin, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F3FF]/40 border-t border-purple-100/80 py-12 text-slate-500 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Column 1: Info (Size 5) */}
          <div className="md:col-span-12 lg:col-span-5 space-y-4 text-left">
            <span className="text-xl font-poppins font-black text-[#1E293B]">
              RUBAB<span className="text-[#7C3AED] font-serif">.</span>
            </span>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed font-sans font-medium">
              Veteran digital marketing consultant specializing in Meta Ads, Google PPC campaigns, conversion rate landing designs, and SEO. Replicable strategies for global growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-purple-100 rounded-lg hover:border-[#7C3AED]/30 hover:bg-white text-slate-500 hover:text-[#7C3AED] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-purple-100 rounded-lg hover:border-[#7C3AED]/30 hover:bg-white text-slate-500 hover:text-[#7C3AED] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923298102474?text=Hello%20Rubab%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-purple-100 rounded-lg hover:border-emerald-200 hover:bg-emerald-50/50 text-slate-500 hover:text-emerald-600 transition-colors"
                aria-label="WhatsApp Live"
              >
                <MessageCircle className="w-4 h-4 text-emerald-550 fill-emerald-550/10" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (Size 4) */}
          <div className="md:col-span-6 lg:col-span-4 grid grid-cols-2 gap-4 text-left">
            <div>
              <span className="text-xs font-sora font-semibold text-slate-450 uppercase tracking-widest block mb-4">PORTFOLIO</span>
              <ul className="space-y-2 text-xs sm:text-sm font-sans font-bold">
                <li><a href="#services" className="text-slate-500 hover:text-[#7C3AED] transition-colors">Services Scope</a></li>
                <li><a href="#portfolio" className="text-slate-500 hover:text-[#7C3AED] transition-colors">Case Studies</a></li>
                <li><a href="#skills" className="text-slate-500 hover:text-[#7C3AED] transition-colors">Platform Skills</a></li>
                <li><a href="#testimonials" className="text-slate-500 hover:text-[#7C3AED] transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div>
              <span className="text-xs font-sora font-semibold text-slate-455 uppercase tracking-widest block mb-4">INQUIRIES</span>
              <ul className="space-y-2 text-xs sm:text-sm font-sans font-bold">
                <li><a href="#tools" className="text-slate-500 hover:text-[#7C3AED] transition-colors">Tools Stack</a></li>
                <li><a href="#contact" className="text-[#EC4899] hover:text-[#7C3AED] transition-colors font-bold">Request Campaign Quote</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Platform Anchors CTA (Size 3) */}
          <div className="md:col-span-6 lg:col-span-3 space-y-4 text-left">
            <span className="text-xs font-sora font-semibold text-slate-450 uppercase tracking-widest block">DIRECT OUTSOURCING</span>
            <div className="space-y-2.5">
              <a
                href="https://upwork.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 bg-white border border-purple-100/80 hover:bg-purple-50 hover:border-purple-200 rounded-xl text-slate-600 hover:text-[#1E293B] text-xs font-sora font-bold flex items-center justify-between transition-colors shadow-sm"
              >
                Upwork Freelance Profile
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a
                href="https://fiverr.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 bg-white border border-purple-100/80 hover:bg-purple-50 hover:border-purple-200 rounded-xl text-slate-600 hover:text-[#1E293B] text-xs font-sora font-bold flex items-center justify-between transition-colors shadow-sm"
              >
                Fiverr Gig Portfolio
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright details */}
        <div className="pt-8 border-t border-purple-100/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sora text-slate-400 font-bold">
          <p>© {currentYear} Rubab. All rights reserved. Secured and Audited representation.</p>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-slate-600 transition-colors">Privacy Principles</a>
            <span>•</span>
            <a href="#contact" className="hover:text-slate-600 transition-colors">Terms of Onboarding</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
