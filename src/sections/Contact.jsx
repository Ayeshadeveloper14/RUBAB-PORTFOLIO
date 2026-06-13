/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  Sparkles, 
  CheckCircle,
  Inbox,
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Meta Ads & Paid Social");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorStatus, setErrorStatus] = useState("");
  const [sandboxPreview, setSandboxPreview] = useState("");
  const [inquiries, setInquiries] = useState([]);

  // On mount, load test context from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("rubab_portfolio_inquiries");
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    } else {
      // Seed an initial demo inquiry to make the space look alive and active
      const seed = [
        {
          id: "demo-1",
          name: "Sophia Martinez",
          email: "sophia@modestboutique.com",
          phone: "+1 (555) 349-2041",
          service: "Meta Ads & Paid Social",
          message: "We want to replicate the Sovereign Modest results. We have a solid CPA but need help building local Conversions API structures.",
          timestamp: "Just now (Sample Demo)"
        }
      ];
      localStorage.setItem("rubab_portfolio_inquiries", JSON.stringify(seed));
      setInquiries(seed);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorStatus("");
    setSandboxPreview("");

    // client-side checks
    if (!name.trim()) {
      setErrorStatus("Please enter your full name.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorStatus("Please enter a valid business email address.");
      return;
    }
    const phoneClean = phone.trim();
    if (phoneClean.length < 6) {
      setErrorStatus("Please enter a valid telephone/WhatsApp number (at least 6 digits).");
      return;
    }
    if (!message.trim() || message.trim().length < 5) {
      setErrorStatus("Please share a detailed roadmap message (at least 5 characters).");
      return;
    }

    try {
      setIsSending(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: name,
          email,
          phone: phoneClean,
          service,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not successfully deliver the proposal.");
      }

      // Log successful inquiry in localStorage
      const newInquiry = {
        id: "inq-" + Date.now(),
        name,
        email,
        phone: phoneClean,
        service,
        message,
        timestamp: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        })
      };

      const updated = [newInquiry, ...inquiries];
      setInquiries(updated);
      localStorage.setItem("rubab_portfolio_inquiries", JSON.stringify(updated));

      setSubmitted(true);
      if (data.sandbox && data.previewUrl) {
        setSandboxPreview(data.previewUrl);
      }

      // Reset form states
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // Auto clear success message after 15 seconds
      setTimeout(() => {
        setSubmitted(false);
        setSandboxPreview("");
      }, 15000);

    } catch (err) {
      console.error(err);
      setErrorStatus(err.message || "A network connection error prevented sending your proposal. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const clearRecords = () => {
    localStorage.removeItem("rubab_portfolio_inquiries");
    setInquiries([]);
  };

  return (
    <section id="contact" className="py-12 bg-[#FFFFFF] relative overflow-hidden text-[#1E293B]">
      {/* Decorative localized soft ambient glows */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-50/70 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-pink-50/60 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Header segment centered with optimized spacing */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-2xl mb-8 text-center mx-auto">
            <span className="text-xs font-sora font-semibold text-[#7C3AED] tracking-widest uppercase block mb-1.5">INQUIRY DESK</span>
            <h2 className="text-2xl sm:text-3xl font-poppins font-black tracking-tight text-[#1E293B] leading-tight">
              Schedule a Performance Audit & Plan
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mt-3 rounded-full mx-auto" />
            <p className="text-slate-500 text-xs sm:text-sm mt-3 font-sans font-medium">
              We will review your pixel tracking logs, website speed structures, and ongoing creative variations on our Zoom discovery session. No obligations.
            </p>
          </div>
        </ScrollReveal>

        {/* Compact Horizontal Quick-Contact Row */}
        <div className="max-w-[850px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          {/* Email Card */}
          <ScrollReveal variant="fade-up" delay={0.1}>
            <a
              href="mailto:arubab887@gmail.com"
              className="p-3 bg-white/70 border border-purple-100 rounded-xl flex items-center gap-3 hover:border-[#7C3AED]/30 hover:bg-white transition-all group shadow-sm premium-lift h-full"
            >
              <div className="p-2 bg-purple-50 border border-purple-100/30 text-[#7C3AED] group-hover:bg-[#7C3AED]/10 rounded-lg transition-all group-hover:rotate-6">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left animate-duration-300">
                <span className="text-[9px] font-sora font-semibold text-slate-400 block pb-0.5">EMAIL</span>
                <span className="text-xs font-poppins font-bold text-[#1E293B] group-hover:text-[#7C3AED] transition-colors break-all">arubab887@gmail.com</span>
              </div>
            </a>
          </ScrollReveal>

          {/* Phone Card */}
          <ScrollReveal variant="fade-up" delay={0.15}>
            <a
              href="tel:+923298102474"
              className="p-3 bg-white/70 border border-purple-100 rounded-xl flex items-center gap-3 hover:border-[#7C3AED]/30 hover:bg-white transition-all group shadow-sm premium-lift h-full"
            >
              <div className="p-2 bg-purple-50 border border-purple-100/30 text-[#7C3AED] group-hover:bg-[#7C3AED]/10 rounded-lg transition-all group-hover:rotate-6">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[9px] font-sora font-semibold text-slate-400 block pb-0.5">TELEPHONE</span>
                <span className="text-xs font-poppins font-bold text-[#1E293B] group-hover:text-[#7C3AED] transition-colors">+92 (329) 810-2474</span>
              </div>
            </a>
          </ScrollReveal>

          {/* Live WhatsApp Card */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <a
              href="https://wa.me/923298102474?text=Hello%20Rubab%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-emerald-500/[0.03] border border-emerald-500/15 hover:border-emerald-500/30 rounded-xl flex items-center gap-3 transition-all group shadow-sm premium-lift h-full"
            >
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg group-hover:scale-110 transition-transform">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="flex-1 flex justify-between items-center pr-1 text-left">
                <div>
                  <span className="text-[9px] font-sora font-semibold text-emerald-600 block pb-0.5">WHATSAPP CHAT</span>
                  <span className="text-xs font-poppins font-bold text-[#1E293B] group-hover:text-emerald-600 transition-colors">Launch Live Chat</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </div>
            </a>
          </ScrollReveal>
        </div>

        {/* Center-aligned, reduced width contact form column + inbox history */}
        <div className="max-w-[520px] mx-auto space-y-6">
          
          {/* Glassmorphism Ad Proposals Form */}
          <ScrollReveal variant="zoom-in" delay={0.25}>
            <div className="bg-white/70 backdrop-blur-md border border-purple-100/85 rounded-2xl p-5 sm:p-6 relative shadow-md">
              
              {/* Banner top with smaller padding */}
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-purple-50">
                <div className="p-1.5 bg-[#7C3AED]/5 text-[#7C3AED] rounded-lg border border-purple-100 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-poppins font-bold text-[#1E293B]">Send Campaign Proposal</h3>
                  <span className="text-[9px] font-mono text-slate-400 block uppercase tracking-wider font-semibold">I respond within 12 hours with a custom competitor analysis draft.</span>
                </div>
              </div>

              {/* Submission Successful or Error notification system */}
              <AnimatePresence mode="wait">
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-xs text-slate-700 leading-relaxed space-y-1.5 mb-5 font-sans text-left"
                  >
                    <p className="font-bold flex items-center gap-1.5 text-emerald-800 text-[12px]">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Inquiry successfully received and delivered directly to Rubab!
                    </p>
                    <p className="text-slate-600 text-[11px]">
                      I'm preparing a customized competitor breakdown. I will write back to you shortly at the provided email address.
                    </p>
                    {sandboxPreview && (
                      <div className="pt-2 mt-2 border-t border-emerald-500/10 text-[10px] text-slate-500">
                        <span className="font-bold text-emerald-700">💡 Nodemailer Sandbox Mode Active:</span>
                        <p className="mt-0.5">A development SMTP test email was generated safely in this container sandbox. Preview the sent mail payload live:</p>
                        <a 
                          href={sandboxPreview} 
                          target="_blank"
                          rel="noreferrer" 
                          className="inline-flex items-center gap-1 mt-1 font-mono text-emerald-600 hover:underline font-bold bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 text-[9px]"
                        >
                          Open Sandbox Email Preview <ArrowUpRight className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    )}
                  </motion.div>
                )}

                {errorStatus && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 bg-rose-500/5 border border-rose-500/20 rounded-xl text-[11px] text-rose-700 leading-relaxed space-y-1 mb-5 font-sans text-left"
                  >
                    <p className="font-bold flex items-center gap-1.5 text-rose-800">
                      ⚠️ Submission Verification Check
                    </p>
                    <p>{errorStatus}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email in stacked compact or simple grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      id="fullName"
                      disabled={isSending}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder=" "
                      className="peer w-full bg-[#F5F3FF]/30 border border-purple-100 rounded-lg py-2.5 px-3 pt-4.5 text-xs font-sans text-[#1E293B] focus:outline-none focus:border-[#7C3AED] focus:bg-white focus:ring-4 focus:ring-[#7C3AED]/5 transition-all disabled:opacity-50"
                    />
                    <label 
                      htmlFor="fullName"
                      className="absolute left-3 top-4 scale-100 origin-left text-[9px] font-sora font-semibold text-slate-400 tracking-wider uppercase pointer-events-none transition-all duration-300 peer-focus:top-1 peer-focus:scale-85 peer-focus:text-[#7C3AED] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4"
                    >
                      Your Full Name *
                    </label>
                  </div>

                  {/* Business Email */}
                  <div className="relative group">
                    <input
                      type="email"
                      required
                      id="businessEmail"
                      disabled={isSending}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder=" "
                      className="peer w-full bg-[#F5F3FF]/30 border border-purple-100 rounded-lg py-2.5 px-3 pt-4.5 text-xs font-sans text-[#1E293B] focus:outline-none focus:border-[#7C3AED] focus:bg-white focus:ring-4 focus:ring-[#7C3AED]/5 transition-all disabled:opacity-50"
                    />
                    <label 
                      htmlFor="businessEmail"
                      className="absolute left-3 top-4 scale-100 origin-left text-[9px] font-sora font-semibold text-slate-400 tracking-wider uppercase pointer-events-none transition-all duration-300 peer-focus:top-1 peer-focus:scale-85 peer-focus:text-[#7C3AED] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4"
                    >
                      Business Email *
                    </label>
                  </div>
                </div>

                {/* Telephone Input */}
                <div className="relative group">
                  <div className="absolute left-3 top-3.5 text-slate-400 transition-colors group-focus-within:text-[#7C3AED]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="tel"
                    required
                    id="phoneNumber"
                    disabled={isSending}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder=" "
                    className="peer w-full bg-[#F5F3FF]/30 border border-purple-100 rounded-lg py-2.5 pl-9 pr-3 pt-4.5 text-xs font-sans text-[#1E293B] focus:outline-none focus:border-[#7C3AED] focus:bg-white focus:ring-4 focus:ring-[#7C3AED]/5 transition-all disabled:opacity-50"
                  />
                  <label 
                    htmlFor="phoneNumber"
                    className="absolute left-9 top-4.5 scale-100 origin-left text-[9px] font-sora font-semibold text-slate-400 tracking-wider uppercase pointer-events-none transition-all duration-300 peer-focus:top-1 peer-focus:scale-85 peer-focus:text-[#7C3AED] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4.5"
                  >
                    Phone / WhatsApp Number *
                  </label>
                </div>

                {/* Strategic Target Service */}
                <div className="space-y-1 text-left">
                  <label className="block text-[9px] font-sora font-bold text-slate-400 tracking-wider uppercase">
                    Strategic Target Service Needed *
                  </label>
                  <select
                    value={service}
                    disabled={isSending}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#F5F3FF]/40 border border-purple-100 rounded-lg py-2 px-3 text-xs font-sora text-slate-600 focus:outline-none focus:border-[#7C3AED] focus:bg-white focus:ring-4 focus:ring-[#7C3AED]/5 transition-all cursor-pointer font-bold disabled:opacity-50"
                  >
                    <option value="Meta Ads & Paid Social font-bold">Meta Ads & Paid Social</option>
                    <option value="Google Searches & PPC">Google Searches & PPC</option>
                    <option value="Instagram Content Growth">Instagram Content Growth</option>
                    <option value="SEO Technical Optimizations">SEO Technical Optimizations</option>
                    <option value="Lead Magnet Funnels">Lead Magnet Funnels</option>
                    <option value="Custom 1-On-1 Growth Consulting">Custom 1-On-1 Growth Consulting</option>
                  </select>
                </div>

                {/* Message text details */}
                <div className="relative group">
                  <textarea
                    id="roadblocks"
                    required
                    rows={3}
                    disabled={isSending}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder=" "
                    className="peer w-full bg-[#F5F3FF]/30 border border-purple-100 rounded-lg py-2 px-3 pt-4.5 text-xs font-sans text-[#1E293B] focus:outline-none focus:border-[#7C3AED] focus:bg-white focus:ring-4 focus:ring-[#7C3AED]/5 transition-all resize-none leading-relaxed disabled:opacity-50"
                  />
                  <label 
                    htmlFor="roadblocks"
                    className="absolute left-3 top-3.5 scale-100 origin-left text-[9px] font-sora font-semibold text-slate-400 tracking-wider uppercase pointer-events-none transition-all duration-300 peer-focus:top-1 peer-focus:scale-85 peer-focus:text-[#7C3AED] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3.5"
                  >
                    Message & Current Roadblocks *
                  </label>
                </div>

                {/* Submit Action Button */}
                <motion.button
                  whileHover={!isSending ? { scale: 1.01 } : {}}
                  whileTap={!isSending ? { scale: 0.99 } : {}}
                  disabled={isSending}
                  type="submit"
                  className={`w-full py-3 rounded-full font-sora font-semibold text-xs text-white bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:from-[#EC4899] hover:to-[#7C3AED] hover:shadow-md hover:shadow-[#7C3AED]/10 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm ${isSending ? "opacity-75 cursor-not-allowed" : ""}`}
                >
                  {isSending ? (
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Proposal...
                    </span>
                  ) : (
                    <>Send Message & Proposal <Send className="w-3.5 h-3.5 ml-1 animate-pulse" /></>
                  )}
                </motion.button>

              </form>

            </div>
          </ScrollReveal>

          {/* Collapsible/Compact Live submissions tracker */}
          <ScrollReveal variant="fade-up" delay={0.3}>
            <div className="bg-white/80 border border-purple-100/70 rounded-2xl p-4 space-y-3 shadow-sm text-left">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Inbox className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span className="text-[10px] font-sora font-bold tracking-widest uppercase text-slate-600">Inbox Tracker ({inquiries.length})</span>
                </div>
                {inquiries.length > 1 && (
                  <button
                    onClick={clearRecords}
                    className="text-[9px] font-mono text-rose-500 hover:text-rose-600 hover:underline cursor-pointer font-bold transition-all"
                  >
                    CLEAR ALL
                  </button>
                )}
              </div>

              {/* Submissions items (Compact) */}
              <motion.div layout className="space-y-2.5 max-h-36 overflow-y-auto pr-1">
                <AnimatePresence mode="popLayout">
                  {inquiries.length === 0 ? (
                    <motion.p 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       className="text-[10px] text-slate-400 italic text-center py-4 bg-[#F5F3FF]/30 rounded-lg border border-purple-50"
                    >
                      No submitted inquiries recorded in local state storage.
                    </motion.p>
                  ) : (
                    inquiries.map((inq) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        key={inq.id}
                        className="p-2.5 bg-white border border-purple-100 rounded-lg space-y-1 hover:border-[#7C3AED]/20 transition-colors text-left"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[11px] font-poppins font-bold text-[#1E293B]">{inq.name}</span>
                          <span className="text-[8px] font-mono text-slate-400">{inq.timestamp}</span>
                        </div>
                        <div className="text-[9px] text-slate-500 leading-normal font-sans">
                          <div className="text-[#7C3AED] flex gap-1 items-center font-semibold">
                            <span>📞 {inq.phone || "No phone"}</span> • <span className="text-slate-600">{inq.service}</span>
                          </div>
                          <p className="text-slate-600 mt-0.5 truncate italic">"{inq.message}"</p>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
