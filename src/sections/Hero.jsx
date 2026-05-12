import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import book from "../assets/book.jpg";

const Hero = () => {
  const containerRef = useRef(null);

  // Smooth Parallax Scroll Physics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 250]), {
    stiffness: 100,
    damping: 30,
  });

  // Variants for staggered entrance
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    initial: { y: 80, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="mainContainer w-full flex items-center"
    >
      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ y: smoothY }}
        className="absolute left-5 right-5 top-[10%] text-[18vw]  font-black text-accent/20 select-none pointer-events-none "
      >
        SHORTCUT
      </motion.div>

      <div className="insideContainer bookGrid">
        
        {/* Left Side: Editorial Content */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col items-start"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-accent"></span>
            <p className="text-accent uppercase tracking-[0.4em] text-[0.65rem] font-bold">
              Released March 2026
            </p>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-['Playfair_Display'] text-7xl md:text-9xl text-primary leading-[0.85] mb-8"
          >
            Master the <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-accent" 
                  style={{ WebkitTextStroke: "1px var(--color-accent)" }}>
              Shortcut.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-foreground font-['Cormorant_Garamond'] text-xl md:text-2xl max-w-lg leading-relaxed mb-12 italic"
          >
            "The definitive guide to building a brand from scratch without the decades of trial and error."
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
            <a target="__blank" href="https://www.amazon.com/dp/B0GL4T8FXQ" className="bg-accent text-secondary px-10 py-4 text-[0.75rem] font-black uppercase tracking-[0.2em] hover:bg-highlight transition-colors duration-500 shadow-xl shadow-black/20">
              Get Kindle Edition
            </a>
            <a href="#" className="border border-accent/30 text-primary px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] hover:border-accent transition-all">
              See Inside
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive 3D Book */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: -15 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ rotateY: 0, scale: 1.02 }}
          className="relative perspective-[1500px] hidden lg:block"
        >
          {/* Subtle Glow behind the book */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 blur-[120px] rounded-full" />
          
          <div 
            className="w-[400px] h-[580px] bg-secondary border border-accent/20 relative shadow-[50px_50px_100px_rgba(0,0,0,0.4)] overflow-hidden group p-2 flex flex-col justify-between"
            style={{ transformStyle: "preserve-3d" }}
          >
           <img src={book} alt="The Shortcut By Dylan" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;