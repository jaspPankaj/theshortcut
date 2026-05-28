import React from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  // Scroll handler to redirect smoothly if preferred
  const handleReturn = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen w-full bg-background relative flex items-center justify-center px-6 md:px-16 overflow-hidden selection:bg-accent selection:text-secondary">
      
      {/* Massive Cosmic/Kinetic Background Text */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-secondary/30 select-none pointer-events-none tracking-tighter leading-none z-0">
        404
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center relative z-10">
        
        {/* Left Column: Stark Visual Identity & Large Number Accent */}
        <div className="md:col-span-5 flex flex-col space-y-6 border-b md:border-b-0 md:border-r border-accent/10 pb-8 md:pb-0 md:pr-12">
          <div className="inline-flex items-center gap-3">
            {/* Attention-Grabbing Glowing Status Light */}
            <div className="relative flex h-2 w-2 items-center justify-center">
              <motion.span 
                animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inline-flex h-full w-full rounded-full bg-red-500/60"
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </div>
            <span className="text-accent text-[0.7rem] font-bold tracking-[0.4em] uppercase font-['DM_Sans']">
              Route Interrupted
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Playfair_Display'] text-5xl md:text-7xl text-primary font-black leading-none"
          >
            Lost Your <br />
            <span className="italic text-accent">Footing?</span>
          </motion.h1>

          <p className="text-foreground/40 font-['DM_Sans'] text-xs uppercase tracking-[0.2em]">
            The layout configuration at this endpoint does not exist.
          </p>
        </div>

        {/* Right Column: Book Philosphy Quote & Correction Action */}
        <div className="md:col-span-7 space-y-8 md:pl-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {/* High-Fidelity Editorial Quote block */}
            <p className="text-primary/90 font-['Cormorant_Garamond'] text-xl md:text-2xl italic leading-relaxed">
              "Most paths are just beautifully decorated loops designed to keep you walking in circles. Recognizing a dead end early isn’t a failure—it is the exact moment your shortcut begins."
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-6 h-[1px] bg-accent/40" />
              <span className="font-['DM_Sans'] text-[0.65rem] tracking-[0.3em] uppercase text-accent font-bold">
                The Shortcut / Editorial Strategy
              </span>
            </div>
          </motion.div>

          {/* Action Interface */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-4"
          >
            <motion.button
              onClick={handleReturn}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-6 bg-secondary text-primary border border-accent/20 px-8 py-4 text-[0.75rem] font-black uppercase tracking-[0.25em] bg-gradient-to-r hover:border-accent transition-colors duration-300 shadow-xl"
            >
              <span>Return to Home Page</span>
              <span className="text-accent text-sm transition-transform group-hover:translate-x-1">→</span>
            </motion.button>
          </motion.div>
        </div>

      </div>

      {/* Decorative Bottom Typography */}
      <div className="absolute bottom-8 left-8 md:left-16 text-[0.6rem] uppercase tracking-[0.3em] text-foreground/20 font-['DM_Sans']">
        © Culprit Press / Data Stream Reset
      </div>
    </div>
  );
};

export default NotFound;