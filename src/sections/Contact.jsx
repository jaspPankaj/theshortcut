import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", challenge: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: "success", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xqejjprk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formState.name,
          Email: formState.email,
          Phone: formState.phone,
          "90-Day Challenge Target": formState.challenge
        })
      });

      if (response.ok) {
        // Clear the input fields completely
        setFormState({ name: "", email: "", phone: "", challenge: "" });
        
        // Trigger Premium Success Notification
        setNotification({
          show: true,
          type: "success",
          message: "Challenge Locked. T-90 Days transmission protocol engaged."
        });
      } else {
        throw new Error("Transmission failed");
      }
    } catch (error) {
      // Trigger Premium Error Notification
      setNotification({
        show: true,
        type: "error",
        message: "Secure uplink interrupted. Please check your data stream."
      });
    } finally {
      setIsSubmitting(false);

      // Auto-dismiss the toast notification safely after exactly 3 seconds
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }));
      }, 3000);
    }
  };

  return (
    <div className="mainContainer border-t border-accent/10 relative overflow-hidden">
      {/* Toast Notification Assembly */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-4 bg-secondary/90 backdrop-blur-xl border border-accent/20 px-6 py-4 rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.3)] max-w-sm"
          >
            {/* Syncing the pulse light theme to look cohesive */}
            <div className="relative flex h-2 w-2 items-center justify-center shrink-0">
              <motion.span 
                animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute inline-flex h-full w-full rounded-full ${notification.type === 'success' ? 'bg-accent/60' : 'bg-red-500/60'}`}
              />
              <span className={`relative inline-flex h-2 w-2 rounded-full ${notification.type === 'success' ? 'bg-accent' : 'bg-red-500'}`} />
            </div>
            
            <p className="font-['DM_Sans'] text-xs uppercase tracking-[0.15em] text-primary leading-relaxed">
              {notification.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Kinetic Text honoring Chapter 6 */}
      <div className="absolute -left-[5%] top-1/4 text-[14vw] uppercase font-black text-secondary/5 select-none pointer-events-none tracking-tighter">
        NO RAGRETS
      </div>

      <div className="insideContainer bookGrid">
        {/* Left Side: The 90-Day Manifest Manifesto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-8 z-10"
        >
          {/* Eyebrow with Attention-Grabbing Pulse */}
          <div className="inline-flex items-center gap-3">
            <div className="relative flex h-2 w-2 items-center justify-center">
              <motion.span 
                animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inline-flex h-full w-full rounded-full bg-accent/60"
              />
              <motion.span 
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(195,199,137,0.9)]"
              />
            </div>
            <span className="text-accent text-[0.7rem] font-bold tracking-[0.4em] uppercase">
              The 90-Day Regret Test
            </span>
          </div>

          <motion.h2 className="font-['Playfair_Display'] text-3xl md:text-5xl text-primary leading-[1.1] font-black">
            Lock In Your Course Correction. <br />
            <span className="italic text-accent">I'll Check Back In 3 Months.</span>
          </motion.h2>

          <div className="w-24 h-[1px] bg-accent/40 my-2" />

          <p className="text-foreground/90 font-['Cormorant_Garamond'] text-lg md:text-xl max-w-md leading-relaxed italic">
            "Write down what it is you would change right now... that shot in the dark you would take or that long overdue course correction. Act immediately because in three months, I’m going to drop into your inbox and ask you face-to-face how it went."
          </p>

          <div className="space-y-4 pt-2 font-['DM_Sans'] text-xs text-primary/70">
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold">01 /</span>
              <p>Filter the choice through your 80-year-old self. Will you regret staying safe?</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold">02 /</span>
              <p>Your timeline starts today. Your challenge payload is securely transmitted straight to Formspree processing channels.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: High-Fidelity Intake Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-secondary/30 backdrop-blur-xl p-8 md:p-12 border border-accent/10 rounded-sm relative z-10"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-[0.6rem] uppercase tracking-[0.3em] text-accent font-bold">
                Your Identity
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="First and last name"
                className="w-full bg-background/20 border border-accent/20 px-4 py-3.5 text-sm text-primary outline-none focus:border-accent transition-all placeholder:text-foreground/20 font-['DM_Sans']"
              />
            </div>

            <div className="space-y-2">
                <label className="block text-[0.6rem] uppercase tracking-[0.3em] text-accent font-bold">
                  Email Endpoint
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="w-full bg-background/20 border border-accent/20 px-4 py-3.5 text-sm text-primary outline-none focus:border-accent transition-all placeholder:text-foreground/20 font-['DM_Sans']"
                />
              </div>

            <div className="space-y-2">
              <label className="block text-[0.6rem] uppercase tracking-[0.3em] text-accent font-bold">
                Your Overdue Course Correction / Shot in the dark
              </label>
              <textarea
                rows="4"
                required
                value={formState.challenge}
                onChange={(e) => setFormState({ ...formState, challenge: e.target.value })}
                placeholder="What company are you launching? What relationship are you ending? What truth are you finally declaring? Be devastatingly honest."
                className="w-full bg-background/20 border border-accent/20 px-4 py-4 text-sm text-primary outline-none focus:border-accent transition-all placeholder:text-foreground/20 font-['DM_Sans'] resize-none leading-relaxed"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
              className="w-full bg-accent text-secondary py-4 text-[0.75rem] font-black uppercase tracking-[0.2em] hover:bg-highlight transition-colors duration-500 shadow-xl shadow-black/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Transmitting..." : "Accept Challenge & Start 90-Day Clock"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;