import React from "react";
import { motion } from "framer-motion";

const chapters = [
  { num: "01", title: "Find Your Passion", desc: "Uncover what drives you and transform that energy into a viable brand concept worth building." },
  { num: "02", title: "Design to Sell", desc: "Learn how to create products that don't just look good — they move off shelves and into people's lives." },
  { num: "03", title: "Market Like a Pro", desc: "Master brand storytelling that generates hundreds of millions of views across every platform." },
  { num: "04", title: "Raise the Money", desc: "Navigate funding rounds, investor psychology, and pitch decks that actually close deals." },
  { num: "05", title: "Survive the Fire", desc: "Dylan went from millions in profit to millions in debt. Here's how to navigate the inevitable disasters." },
  { num: "06", title: "Your Exit Strategy", desc: "Build toward an exit from day one. Convert years of grind into a life-changing outcome." },
];

const Chapters = () => {
  // Animation Variants
  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="chapters" className="relative bg-background py-24 px-8 md:px-16 border-t border-accent/10">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 bg-accent" />
          <span className="text-accent text-[0.7rem] font-bold tracking-[0.4em] uppercase">
            Inside the Book
          </span>
          <span className="h-[1px] w-8 bg-accent" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-['Playfair_Display'] text-5xl md:text-7xl text-primary leading-tight font-black"
        >
          Your complete <br />
          roadmap to <span className="italic text-accent">success</span>
        </motion.h2>
      </div>

      {/* Chapters Grid */}
      <motion.div 
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {chapters.map((chapter, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -15, 
              backgroundColor: "var(--color-secondary)",
              borderColor: "var(--color-accent)"
            }}
            className="group relative p-10 border border-accent/10 bg-secondary/20 backdrop-blur-md flex flex-col transition-all duration-500 cursor-pointer overflow-hidden"
          >
            {/* Number background decoration */}
            <div className="absolute -right-4 -top-4 text-9xl font-black text-accent/5 pointer-events-none group-hover:text-accent/10 transition-colors">
              {chapter.num}
            </div>

            <div className="flex justify-between items-start mb-12 relative z-10">
              <span className="text-accent font-['Playfair_Display'] text-2xl font-bold">
                {chapter.num}
              </span>
              <span className="text-accent text-xl transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
                ↗
              </span>
            </div>

            <h3 className="text-primary font-['Playfair_Display'] text-2xl font-bold mb-4 relative z-10 group-hover:text-highlight transition-colors">
              {chapter.title}
            </h3>

            <p className="text-foreground/70 font-['DM_Sans'] text-sm leading-relaxed relative z-10 group-hover:text-primary transition-colors">
              {chapter.desc}
            </p>

            {/* Bottom Accent line that grows on hover */}
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-accent"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Chapters;