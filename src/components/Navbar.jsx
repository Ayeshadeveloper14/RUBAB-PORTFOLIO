/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFFFF]/90 backdrop-blur-md border-b border-purple-100 py-3 shadow-md/5 shadow-purple-100/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl font-poppins font-black tracking-tighter text-[#1E293B]">
              RUBAB<span className="text-[#7C3AED] font-serif">.</span>
            </span>
            <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-[10px] font-sora font-semibold tracking-wider px-2.5 py-0.5 rounded-full group-hover:bg-[#7C3AED]/20 transition-all">
              GROWTH PARTNER
            </div>
          </a>

          {/* Nav Links Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-sora font-semibold text-[#1E293B]/70 hover:text-[#7C3AED] transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7C3AED] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/923298102474?text=Hello%20Rubab%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="text-[#1E293B]/60 hover:text-[#7C3AED] transition-colors flex items-center gap-1.5 text-xs font-sora font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-500/10" />
              WhatsApp Live
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-xs font-sora font-bold bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white transition-all flex items-center gap-1.5 shadow-md active:scale-98"
            >
              Hire Rubab <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1E293B]/70 hover:text-[#7C3AED] transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bg-[#FFFFFF]/98 border-b border-purple-100 backdrop-blur-lg transition-all duration-305 ease-in-out origin-top ${
          isOpen ? "scale-y-100 opacity-100 h-auto py-6" : "scale-y-0 opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-sora font-semibold text-[#1E293B]/80 hover:text-[#7C3AED] py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-purple-50 my-4" />
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/923298102474?text=Hello%20Rubab%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl bg-purple-50 text-[#7C3AED] hover:bg-purple-100/50 transition-colors flex items-center justify-center gap-2 text-sm font-sora font-semibold border border-purple-100"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-500/10" />
              WhatsApp Live Chat
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-center text-sm font-sora font-bold hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
            >
              Hire Rubab <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
