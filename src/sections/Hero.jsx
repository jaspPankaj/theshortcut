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
              Order Book Now
            </a>
            <a href="#contact" className="border border-accent/30 text-primary px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] hover:border-accent transition-all">
              Connect With Us
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive 3D Book */}
<motion.div
  initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
  animate={{ opacity: 1, scale: 1, rotateY: -15 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
  whileHover={{ rotateY: 0, scale: 1.02 }}
  className="relative hidden lg:block"
  style={{ perspective: "1500px" }}
>
  {/* Subtle Glow behind the book */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 blur-[120px] rounded-full select-none pointer-events-none" />
  
  {/* Book Container Wrapper */}
  <div 
    className="w-[400px] h-[580px] bg-secondary border border-accent/20 relative shadow-[50px_50px_100px_rgba(0,0,0,0.4)] overflow-visible p-2 flex flex-col justify-between"
    style={{ transformStyle: "preserve-3d" }}
  >
    
    {/* FIXED POSITIONING: Placed accurately on the TOP-LEFT corner */}
    <motion.div 
      initial={{ scale: 0, rotate: 20 }}
      animate={{ scale: 1, rotate: -12 }} // Inverted tilt to balance visually with the left margin
      transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1, rotate: -5, y: -5 }}
      className="absolute bottom-0 left-0 z-30 cursor-pointer pointer-events-auto"
      style={{ 
        transformStyle: "preserve-3d", 
        transform: "translateZ(50px)" // Pushes layout forward along the Z-axis
      }}
    >
      {/* Animated Ring Gradient Border */}
      <div className="relative w-32 h-32 rounded-full bg-secondary/40 backdrop-blur-md p-[1px] overflow-hidden flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-accent/20 group/badge">
        
        {/* Infinite Rotation Aura inside border */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_40%,var(--tw-gradient-to)_80%,transparent_100%)] from-transparent to-accent opacity-40 group-hover/badge:opacity-100 transition-opacity duration-500 animate-[spin_6s_linear_infinite]" />
        
        {/* Inner Matte Core */}
        <div className="w-full h-full rounded-full bg-secondary/90 flex flex-col items-center justify-center text-center p-2 z-10">
          <span className="text-[0.7rem] tracking-[0.25em] font-bold text-accent uppercase mb-0.5">
            Amazon
          </span>
          <h6 className="font-['Playfair_Display'] font-black text-primary text-[0.75rem] leading-none tracking-wide uppercase">
            Best
          </h6>
          <h6 className="font-['Playfair_Display'] font-black text-primary text-[0.75rem] leading-none tracking-wide uppercase mt-0.5">
            Seller
          </h6>
          
          {/* Decorative minimal divider */}
          <div className="w-4 h-[1px] bg-accent/30 mt-1.5" />
        </div>
      </div>
    </motion.div>

    {/* The Book Artwork Image Canvas */}
    <img 
      src={book} 
      alt="The Shortcut By Dylan" 
      className="w-full h-full object-cover select-none pointer-events-none" 
      style={{ transform: "translateZ(0px)" }}
    />
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default Hero;