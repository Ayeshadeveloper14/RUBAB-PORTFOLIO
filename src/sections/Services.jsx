/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  Facebook, 
  Search, 
  Instagram, 
  Globe, 
  Check, 
  ArrowUpRight
} from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";

export default function Services() {
  const activeServices = [
    {
      id: "instagram-smm",
      title: "Social Media Marketing",
      description: "Organic aesthetic content planning, reels curation, caption copywriting, and community growth outreach that builds deep-rooted consumer trust.",
      benefits: [
        "Aesthetic monthly feed concepts",
        "Short-form video script concepts",
        "Strategic tag & local SEO mapping",
        "Proactive target-audience engagement"
      ],
      icon: <Instagram className="w-5 h-5 text-[#EC4899]" />,
      accent: "bg-pink-50 border-pink-100 text-[#EC4899]",
      price: "$450 / mo"
    },
    {
      id: "fb-ads",
      title: "Facebook & Meta Ads",
      description: "Hyper-targeted paid acquisition frameworks. Complete custom events, Conversions API (CAPI) configuration, copywriting, and constant budget scaling.",
      benefits: [
        "Lookalike & custom audience stacks",
        "Dynamic Product catalog overlays",
        "A/B creative & copy group tests",
        "Conversion API (CAPI) bypass setup"
      ],
      icon: <Facebook className="w-5 h-5 text-[#7C3AED]" />,
      accent: "bg-purple-50 border-purple-100 text-[#7C3AED]",
      price: "$500 / mo"
    },
    {
      id: "google-ads",
      title: "Google PPC Search Ads",
      description: "Capturing high-intent buyers exactly when they search for your solutions. Specialized in Quality Score improvements and negative keyword pruning.",
      benefits: [
        "Long-tail commercial intent query mapping",
        "Precision negative match optimization",
        "Performance Max (PMax) campaigns",
        "Search, Display, & Google Merchant setup"
      ],
      icon: <Search className="w-5 h-5 text-[#0066cc]" />,
      accent: "bg-blue-50 border-blue-100 text-[#0066cc]",
      price: "$600 / mo"
    },
    {
      id: "seo-optimization",
      title: "Search Engine Optimization (SEO)",
      description: "Dominating organic search results. Systematic technical site health audits, on-page content alignment, and backlink authority roadmaps.",
      benefits: [
        "Technical audit & Core Web Vitals diagnostic",
        "Competitor keyword opportunity maps",
        "On-page URL and meta tag styling",
        "High-influence backlink acquisition plans"
      ],
      icon: <Globe className="w-5 h-5 text-[#0D9488]" />,
      accent: "bg-teal-50 border-teal-100 text-[#0D9488]",
      price: "$700 / mo"
    }
  ];

  return (
    <section id="services" className="py-12 bg-[#FFFFFF] relative overflow-hidden">
      {/* Decorative bottom lavender blur */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#F5F3FF]/30 to-transparent pointer-events-none select-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-duration-300">
        
        {/* Section Heading with scroll reveal */}
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-sora font-semibold text-[#7C3AED] tracking-widest uppercase block mb-1.5">GROWTH CAPABILITIES</span>
            <h2 className="text-2xl sm:text-3xl font-poppins font-black tracking-tight text-[#1E293B]">
              Acquisition & Scalability Services
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mx-auto mt-3 rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm mt-3 font-sans">
              Meticulously structured frameworks engineered for modern brands that require predictable customer streams. No bloated templates, just direct bottom-line impact.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid with staggered revealing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {activeServices.map((srv, idx) => (
            <ScrollReveal 
              key={srv.id} 
              variant="fade-up" 
              delay={idx * 0.1}
              className="flex"
            >
              <div
                className="group bg-white border border-purple-100/70 hover:border-[#7C3AED]/35 rounded-2xl p-5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-sm w-full"
              >
                <div>
                  {/* Header Icon & Pricing Info */}
                  <div className="flex justify-between items-start mb-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-2.5 rounded-xl border ${srv.accent} bg-white transition-all`}
                    >
                      {srv.icon}
                    </motion.div>
                    <div className="text-right">
                      <span className="text-[8px] font-sora font-semibold text-slate-400 block tracking-wider uppercase">Starts at</span>
                      <span className="text-xs font-mono font-bold text-[#1E293B]">{srv.price}</span>
                    </div>
                  </div>

                  {/* Service Meta */}
                  <h3 className="text-sm sm:text-base font-poppins font-bold text-[#1E293B] group-hover:text-[#7C3AED] transition-colors">
                    {srv.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-sans mt-2">
                    {srv.description}
                  </p>

                  {/* Benefits List */}
                  <div className="mt-5">
                    <span className="text-[8px] font-sora font-bold text-[#EC4899] uppercase tracking-widest block mb-2">WHAT'S INCLUDED:</span>
                    <ul className="space-y-2">
                      {srv.benefits.map((benefit, bIdx) => (
                        <motion.li 
                          initial={{ opacity: 0, x: -5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (idx * 0.1) + (bIdx * 0.05), duration: 0.3 }}
                          key={bIdx} 
                          className="flex gap-2 items-start text-[11px] text-slate-600 leading-normal font-sans"
                        >
                          <Check className="w-3.5 h-3.5 text-[#7C3AED] mt-0.5 shrink-0" />
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 mt-5 border-t border-purple-50">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="w-full py-2 rounded-lg border border-purple-100 group-hover:border-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white font-sora font-semibold text-xs text-center text-slate-500 flex items-center justify-center gap-1.5 transition-all bg-white shadow-sm cursor-pointer"
                  >
                    Request Strategy <ArrowUpRight className="w-3.5 h-3.5 text-slate-450 group-hover:text-white" />
                  </motion.a>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
