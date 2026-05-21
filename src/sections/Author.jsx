import { motion } from "framer-motion";
import { useRef } from "react";
import dylan from "../assets/DylanTrussell.png";

const Author = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const imageReveal = {
    initial: { clipPath: "inset(0 100% 0 0)" },
    whileInView: { 
      clipPath: "inset(0 0% 0 0)", 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <div className="mainContainer flex items-center">
      <div className="insideContainer bookGrid">
        
        {/* Left Side: Visual/Image with Masking Effect */}
        <motion.div 
          variants={imageReveal}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="relative group aspect-[4/5] bg-secondary overflow-hidden"
        >
          {/* Main Portrait - Replace src with Dylan's or a placeholder */}
          <img 
            src={dylan} 
            alt="Dylan Trussell"
            className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-1000"
          />
          
        </motion.div>

        {/* Right Side: Editorial Content */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-8"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-accent text-[0.7rem] font-bold tracking-[0.4em] uppercase">
              The Author
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="font-['Playfair_Display'] text-5xl md:text-7xl text-primary leading-tight font-black"
          >
            Meet <br />
            <span className="italic text-accent">Dylan Trussell.</span>
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-foreground/90 leading-relaxed italic border-l border-accent/30 pl-6"
          >
            Dylan Trussell is an entrepreneur, writer, and the founder of Culprit Underwear. From zero to multiple 8-figure exits, he’s lived the shortcut.
          </motion.p>

          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-foreground leading-relaxed font-light">
              He has built brands that disrupted industries and lectured at Harvard on the psychology of branding. <strong>The Shortcut</strong> isn't just a book; it's the distilled essence of a decade of warfare in the startup world.
            </p>
            <p className="text-foreground leading-relaxed font-light">
              He currently resides in Los Angeles, leading Culprit Press and mentoring the next generation of founders who refuse to follow the traditional, slow-moving corporate ladder.
            </p>
          </motion.div>

          {/* Credential Tags - Styled with your palette */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-4 pt-4"
          >
            {["Culprit Underwear", "Forbes 30U30", "Harvard Lecturer", "Culprit Press"].map((tag, i) => (
              <span 
                key={i} 
                className="px-4 py-2 border border-accent/20 bg-secondary/50 text-accent text-[0.6rem] tracking-[0.2em] uppercase font-bold"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Author;