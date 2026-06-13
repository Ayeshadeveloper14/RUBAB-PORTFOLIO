/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  Instagram, 
  Facebook, 
  Search, 
  Globe, 
  Palette, 
  Code, 
  BarChart3, 
  Sparkles 
} from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";

const SKILLS_LIST = [
  {
    name: "Social Media SMM",
    percentage: 95,
    icon: <Instagram className="w-5 h-5 text-[#EC4899]" />,
    gradient: "from-[#EC4899] to-[#F43F5E]",
    colorTheme: "pink",
    badge: "Organic Growth",
  },
  {
    name: "Facebook Ads",
    percentage: 98,
    icon: <Facebook className="w-5 h-5 text-[#7C3AED]" />,
    gradient: "from-[#7C3AED] to-[#A855F7]",
    colorTheme: "purple",
    badge: "Paid Social",
  },
  {
    name: "Google Ads",
    percentage: 90,
    icon: <Search className="w-5 h-5 text-[#0066cc]" />,
    gradient: "from-blue-500 to-[#06B6D4]",
    colorTheme: "blue",
    badge: "PPC Engine",
  },
  {
    name: "SEO Engine",
    percentage: 88,
    icon: <Globe className="w-5 h-5 text-[#0D9488]" />,
    gradient: "from-teal-500 to-[#06B6D4]",
    colorTheme: "teal",
    badge: "Technical SEO",
  },
  {
    name: "Canva Pro",
    percentage: 92,
    icon: <Palette className="w-5 h-5 text-[#D97706]" />,
    gradient: "from-amber-500 to-rose-500",
    colorTheme: "amber",
    badge: "Aesthetics",
  },
  {
    name: "WordPress",
    percentage: 85,
    icon: <Code className="w-5 h-5 text-indigo-600" />,
    gradient: "from-[#7C3AED] to-blue-500",
    colorTheme: "indigo",
    badge: "Web Layouts",
  },
  {
    name: "Analytics GA4",
    percentage: 94,
    icon: <BarChart3 className="w-5 h-5 text-orange-600" />,
    gradient: "from-orange-500 to-[#EC4899]",
    colorTheme: "orange",
    badge: "Funnel Auditing",
  },
  {
    name: "Content Strategy",
    percentage: 96,
    icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
    gradient: "from-emerald-500 to-[#7C3AED]",
    colorTheme: "emerald",
    badge: "Copywriting",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-[#F5F3FF]/20 border-t border-purple-100 relative overflow-hidden">
      {/* Gentle localized gradient blooms behind the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-100/30 rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 relative z-10 w-full text-center">
        
        {/* Compact Center Header Segment */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-xl mx-auto mb-8 text-center">
            <span className="text-xs font-sora font-semibold text-[#7C3AED] tracking-widest uppercase block mb-1.5">Capabilities Desk</span>
            <h2 className="text-2xl sm:text-3xl font-poppins font-black tracking-tight text-[#1E293B]">
              Core Toolstack & Skills
            </h2>
            <div className="w-10 h-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mt-2.5 rounded-full mx-auto" />
          </div>
        </ScrollReveal>

        {/* 2 Rows offset of 4 columns grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {SKILLS_LIST.map((skill, index) => (
            <ScrollReveal 
              key={skill.name}
              variant="fade-up"
              delay={index * 0.05}
            >
              {/* Premium hover-lift card container with glass aesthetic and subtle gradient border */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative p-[1px] rounded-2.5xl transition-all duration-300"
              >
                {/* Accent glow behind active card on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-100 via-transparent to-pink-100 rounded-2.5xl opacity-80 group-hover:bg-gradient-to-r group-hover:from-[#7C3AED]/35 group-hover:to-[#EC4899]/35 group-hover:scale-[1.01] blur-[1px] transition-all duration-500" />

                {/* Inner glassmorphism panel */}
                <div className="relative bg-white/75 backdrop-blur-xl rounded-[19px] p-4 flex items-center justify-between border border-white/50 shadow-sm group-hover:bg-white/90 group-hover:shadow-md transition-all duration-300 overflow-hidden h-[82px]">
                  
                  {/* Miniature decorative floating background blur behind the icon */}
                  <div className={`absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-r ${skill.gradient} opacity-[0.03] group-hover:opacity-[0.08] blur-sm transition-all duration-500`} />

                  {/* Left Side: Icon & Meta */}
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="p-2.5 bg-purple-50/50 border border-purple-100/30 rounded-xl group-hover:scale-108 group-hover:rotate-3 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-[13px] font-poppins font-bold text-[#1E293B] group-hover:text-[#7C3AED] transition-colors leading-normal">
                        {skill.name}
                      </h3>
                      <span className="text-[9px] font-mono text-slate-450 uppercase tracking-widest font-semibold block mt-0.5">
                        {skill.badge}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Skill Percentage Badge */}
                  <div className="text-right shrink-0 relative z-10">
                    <div className="flex items-baseline justify-end">
                      <span className="text-sm font-poppins font-black text-[#1E293B]">
                        {skill.percentage}
                      </span>
                      <span className="text-[10px] font-bold text-[#7C3AED] ml-0.5">%</span>
                    </div>
                    
                    {/* Tiny visual progress capsule under percentage */}
                    <div className="w-8 h-[3px] bg-purple-100 rounded-full overflow-hidden mt-1 ml-auto">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.gradient}`}
                      />
                    </div>
                  </div>

                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Elegant Micro Trust Label */}
        <ScrollReveal variant="fade-up" delay={0.4}>
          <p className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-widest mt-7 text-center">
            🔒 Fully verified client references available upon request
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
