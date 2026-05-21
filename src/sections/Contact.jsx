import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", objective: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="mainContainer border-t border-accent/10 relative overflow-hidden">
      {/* Dynamic Background Text honoring 'The Shortcut' */}
      <div className="absolute left-[5%] bottom-[5%] text-[22vw] font-black text-secondary/10 select-none pointer-events-none tracking-tighter">
        BYPASS
      </div>

      <div className="insideContainer bookGrid">
        {/* Left Side: Strategic Book Channels */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-8 z-10"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-accent" />
            <span className="text-accent text-[0.7rem] font-bold tracking-[0.4em] uppercase">
              Direct Protocol
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-['Playfair_Display'] text-5xl md:text-7xl text-primary leading-[1.1] font-black"
          >
            Skip the <br />
            <span className="italic text-accent">Bureaucracy.</span> <br />
            <span className="text-highlight font-light">Get straight answers.</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-24 h-[1px] bg-accent/40 my-2"
          />

          <motion.p
            variants={fadeInUp}
            className="text-foreground/90 font-['Cormorant_Garamond'] text-lg md:text-xl max-w-md leading-relaxed italic"
          >
            "If you are applying the frameworks from 'The Shortcut' to your startup, pitching a high-value partnership, or requesting Dylan for private counsel, use this line. No fillers."
          </motion.p>

          {/* Book Specific Directory */}
          <motion.div variants={fadeInUp} className="space-y-6 pt-4">
            <div>
              <h4 className="text-[0.65rem] uppercase tracking-[0.3em] text-accent font-bold mb-1">
                Founders & Case Studies
              </h4>
              <p className="font-['DM_Sans'] text-sm text-primary/80">
                frameworks@culpritpress.com
              </p>
            </div>

            <div>
              <h4 className="text-[0.65rem] uppercase tracking-[0.3em] text-accent font-bold mb-1">
                Keynotes & Book Tour Booking
              </h4>
              <p className="font-['DM_Sans'] text-sm text-primary/80">
                booking@dylantrussell.com
              </p>
            </div>

            <div>
              <h4 className="text-[0.65rem] uppercase tracking-[0.3em] text-accent font-bold mb-1">
                Corporate Bulk Distribution
              </h4>
              <p className="font-['Cormorant_Garamond'] text-sm text-foreground/70 italic">
                Orders above 50+ copies automatically qualify for digital workshops.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: High-Fidelity Strategic Intake Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-secondary/30 backdrop-blur-xl p-8 md:p-12 border border-accent/10 rounded-sm relative z-10"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-20"
            >
              <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent mb-6">
                →
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl text-primary mb-2">
                Shortcut Engaged
              </h3>
              <p className="text-foreground/60 text-sm font-['Cormorant_Garamond'] italic max-w-xs">
                Your dossier has safely circumvented the traditional queue. Expect transmission feedback if your objective aligns.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-[0.6rem] uppercase tracking-[0.3em] text-accent font-bold">
                  Identity / Company Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your Name or Enterprise"
                  className="w-full bg-background/20 border border-accent/20 px-4 py-4 text-sm text-primary outline-none focus:border-accent transition-all placeholder:text-foreground/20 font-['DM_Sans']"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[0.6rem] uppercase tracking-[0.3em] text-accent font-bold">
                  Communication Endpoint
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="w-full bg-background/20 border border-accent/20 px-4 py-4 text-sm text-primary outline-none focus:border-accent transition-all placeholder:text-foreground/20 font-['DM_Sans']"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[0.6rem] uppercase tracking-[0.3em] text-accent font-bold">
                  Primary Objective
                </label>
                <select
                  value={formState.objective}
                  onChange={(e) => setFormState({ ...formState, objective: e.target.value })}
                  className="w-full bg-secondary/80 border border-accent/20 px-4 py-4 text-sm text-primary/80 outline-none focus:border-accent transition-all font-['DM_Sans'] custom-select"
                >
                  <option value="" disabled>Select your acceleration target...</option>
                  <option value="press">Media, Interview, or Review Copy</option>
                  <option value="bulk">Bulk Corporate Orders (50+ copies)</option>
                  <option value="consulting">Private Venture Consulting</option>
                  <option value="success">Sharing a 'Shortcut' Success Story</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[0.6rem] uppercase tracking-[0.3em] text-accent font-bold">
                  The Brief
                </label>
                <textarea
                  rows="3"
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Keep it concise. What are we building or bypassing?"
                  className="w-full bg-background/20 border border-accent/20 px-4 py-4 text-sm text-primary outline-none focus:border-accent transition-all placeholder:text-foreground/20 font-['DM_Sans'] resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-secondary py-5 text-[0.75rem] font-black uppercase tracking-[0.2em] hover:bg-highlight transition-colors duration-500 shadow-xl shadow-black/10 cursor-none"
              >
                Initiate Contact
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;