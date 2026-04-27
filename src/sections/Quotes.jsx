import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Quotes = () => {
  const containerRef = useRef(null);

  // Parallax effect for the background quote mark
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const quoteScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
  const quoteOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[70vh] w-full bg-background flex flex-col items-center justify-center px-8 overflow-hidden py-24"
    >
      {/* Massive Background Quotation Mark */}
      <motion.div 
        style={{ scale: quoteScale, opacity: quoteOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[60vw] font-serif text-accent leading-none">
          "
        </span>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="h-[1px] w-8 bg-accent" />
          <span className="text-accent text-[0.7rem] font-bold tracking-[0.4em] uppercase">
            The Philosophy
          </span>
          <span className="h-[1px] w-8 bg-accent" />
        </motion.div>

        {/* Main Quote Content */}
        <motion.p 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="font-['Playfair_Display'] text-3xl md:text-5xl lg:text-6xl text-primary leading-[1.3] md:leading-[1.4] italic mb-12"
        >
          "Founding a company is the hardest thing you'll ever do — but it's so much easier than{" "}
          <span className="text-accent relative inline-block">
            leaving your dreams unpursued.
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-2 left-0 h-[1px] bg-accent/40"
            />
          </span>"
        </motion.p>

        {/* Author Credit */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="text-foreground uppercase tracking-[0.3em] text-[0.7rem] md:text-[0.8rem] font-bold"
        >
          — Dylan Trussell, <span className="text-accent">The Shortcut</span>
        </motion.div>
      </div>

      {/* Decorative vertical line connecting to the next section */}
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: "100px" }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 w-[1px] bg-gradient-to-b from-accent/50 to-transparent"
      />
    </section>
  );
};

export default Quotes;