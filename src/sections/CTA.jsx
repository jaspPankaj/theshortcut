import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div  className="mainContainer bg-secondary border-t border-accent/10"
    >
      {/* Background Decorative Element: A glowing aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="insideContainer centerFlex">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent text-[0.7rem] font-bold tracking-[0.4em] uppercase mb-8"
        >
          Available Now · Kindle Edition
        </motion.div>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="font-['Playfair_Display'] text-6xl md:text-8xl text-primary leading-tight font-black mb-8"
        >
          Start here. <br />
          <span className="italic text-accent">Start now.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-foreground/80 font-['Cormorant_Garamond'] text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed"
        >
          Everything you need to build, grow, and exit your brand. 
          <span className="text-primary italic"> The Shortcut</span> exists to save you years of agony.
        </motion.p>

        {/* Action Button with Magnetic Interaction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://www.amazon.com/dp/B0GL4T8FXQ"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-accent text-secondary px-12 py-5 text-[0.8rem] font-black uppercase tracking-[0.3em] hover:bg-highlight transition-all duration-300"
          >
            Get on Kindle →
          </motion.a>
        </motion.div>

        {/* Meta Details */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center items-center gap-4 text-[0.6rem] md:text-[0.7rem] text-foreground/50 uppercase tracking-[0.2em]"
        >
          <span>ISBN 978-1544551067</span>
          <span className="text-accent/30">•</span>
          <span>Culprit Press</span>
          <span className="text-accent/30">•</span>
          <span>482 Pages</span>
          <span className="text-accent/30">•</span>
          <span>March 2026</span>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;