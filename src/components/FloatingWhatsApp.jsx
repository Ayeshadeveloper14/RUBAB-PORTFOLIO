import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Auto-show tooltip briefly after mount to capture attention, then hide
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const whatsappUrl = "https://wa.me/923298102474?text=Hello%20Rubab%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none">
      
      {/* Dynamic Action Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-3 px-4 py-2.5 bg-white border border-emerald-100 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-sora font-semibold text-slate-800 pointer-events-auto"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Chat live with Rubab on WhatsApp!</span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 ml-1 cursor-pointer"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating CTA Icon */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        whileHover={{ scale: 1.1, translateY: -2 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-emerald-500/35 transition-colors relative pointer-events-auto cursor-pointer group"
        aria-label="Contact on WhatsApp"
        id="whatsapp-floater"
      >
        {/* Pulsing ring visual backdrop */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        {/* High-quality custom SVG vector representation of WhatsApp */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.863-4.333-2.887-6.971-2.887-5.441 0-9.87 4.422-9.875 9.861-.001 1.748.461 3.454 1.339 4.962L1.93 21.061l4.717-1.238zm11.456-7.85c-.328-.163-1.94-.957-2.24-1.067-.298-.11-.516-.163-.734.163-.217.327-.84.11-.217.653 1.068-.544 1.1-.38.163-.598-.109-.218-.11-.49-.163-.6-.112-.218-.11-.43-.11-.643 0-.055-.053-.105-.125-.11-.161-.24-.26-.505-.308-.734s-.109-.598-.109-.816c0-.218.11-.327.218-.435.11-.11.218-.218.327-.327.11-.11.163-.163.245-.272.08-.109.04-.218-.02-.327-.06-.11-.516-1.254-.707-1.708-.188-.454-.374-.392-.516-.398-.135-.005-.29-.005-.445-.005-.157 0-.41.06-.624.298-.213.238-.816.797-.816 1.942 0 1.146.833 2.25 1.118 2.634.055.071 1.637 2.5 3.966 3.513.553.241.986.386 1.325.494.556.177 1.061.152 1.46.093.446-.066 1.94-.794 2.212-1.524.272-.73.272-1.356.19-1.492-.083-.136-.3-.218-.628-.381z" />
        </svg>

      </motion.a>
    </div>
  );
}
