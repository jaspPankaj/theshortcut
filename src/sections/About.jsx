import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { number: "482", label: "Pages of Wisdom" },
    { number: "#1", label: "Analysis & Strategy" },
    { number: "30", label: "Forbes Under 30" },
    { number: "100M+", label: "Campaign Views" },
  ];

  // Animation Variants
  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <div className="mainContainer border-t border-accent/10">
      <div className="insideContainer bookGrid">
        
        {/* Left Side: Content Reveal */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-6"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-accent" />
            <span className="text-accent text-[0.7rem] font-bold tracking-[0.4em] uppercase">
              The Book
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="font-['Playfair_Display'] text-5xl md:text-7xl text-primary leading-[1.1] font-black"
          >
            There are no <br />
            <span className="italic text-accent">shortcuts</span> in life. <br />
            <span className="text-highlight font-light">Except for this.</span>
          </motion.h2>

          <motion.div 
            variants={fadeInUp} 
            className="w-24 h-[1px] bg-accent/40 my-4" 
          />

          <div className="space-y-6 max-w-xl text-foreground/90 font-['Cormorant_Garamond'] text-lg md:text-xl leading-relaxed">
            <motion.p variants={fadeInUp}>
              <strong className="text-primary font-bold">Founding a company is the hardest thing you'll ever do.</strong> But it's infinitely easier than leaving your dreams unpursued. Something compels you to dive into the piranha-infested waters.
            </motion.p>
            
            <motion.p variants={fadeInUp}>
              Dylan Trussell knows what it's like to make <span className="text-accent italic">millions one year</span> and be <span className="text-accent italic">millions in debt the next</span>. Everything he learned is here in 482 pages.
            </motion.p>

            <motion.p variants={fadeInUp}>
              Discover how to convert your blood, sweat, and nightmares into <strong className="text-primary uppercase tracking-wider">sweet, hard cash</strong>.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Side: Animated Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, borderColor: "var(--color-accent)" }}
              className="group p-8 md:p-12 border border-accent/10 bg-secondary/30 backdrop-blur-sm transition-colors duration-500 flex flex-col justify-center items-center text-center"
            >
              <div className="font-['Playfair_Display'] text-4xl md:text-6xl text-accent font-black mb-2 group-hover:scale-110 transition-transform duration-500">
                {stat.number}
              </div>
              <div className="text-foreground text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.3em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default About;