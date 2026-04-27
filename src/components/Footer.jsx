import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top handler for the magnetic button
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-secondary pt-24 pb-10 px-8 md:px-16 overflow-hidden border-t border-accent/10">
      {/* Decorative Background Text */}
      <div className="absolute left-[-5%] bottom-[-2%] text-[15vw] font-black text-background/10 select-none pointer-events-none tracking-tighter">
        SHORTCUT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Bio (4/12) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-['Playfair_Display'] font-black text-primary"
            >
              The Shortcut<span className="text-accent">.</span>
            </motion.div>
            <p className="text-foreground/60 text-lg font-['Cormorant_Garamond'] max-w-sm leading-relaxed italic">
              "The definitive roadmap for those who refuse to wait for permission to build something great."
            </p>
            
            {/* Social Links with hover animation */}
            <div className="flex gap-6">
              {['Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ y: -3, color: "var(--color-accent)" }}
                  className="text-[0.65rem] uppercase tracking-[0.2em] text-foreground/40 font-bold"
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (3/12) */}
          <div className="lg:col-span-3 space-y-8">
            <h5 className="text-accent uppercase tracking-[0.3em] text-[0.7rem] font-bold">Navigation</h5>
            <ul className="space-y-4">
              {['Home', 'About Book', 'Inside Chapters', 'Meet Dylan'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-primary/70 hover:text-accent transition-colors text-sm font-['DM_Sans'] tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter Module (4/12) */}
          <div className="lg:col-span-4 bg-background/30 backdrop-blur-xl p-8 border border-accent/10 rounded-sm">
            <h5 className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-4">
              Join the Editorial List
            </h5>
            <p className="text-foreground/60 text-xs mb-6 leading-relaxed">
              Get raw strategies on branding and startup exits twice a month.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-secondary/50 border border-accent/20 px-4 py-3 text-sm text-primary outline-none focus:border-accent transition-all placeholder:text-foreground/20"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-accent text-xs font-bold hover:translate-x-1 transition-transform">
                GO →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Meta & Back to Top */}
        <div className="pt-12 border-t border-accent/5 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col gap-2">
            <div className="text-[0.6rem] uppercase tracking-[0.3em] text-foreground/30">
              © {currentYear} Culprit Press & Dylan Trussell
            </div>
            <div className="flex gap-4 text-[0.55rem] uppercase tracking-[0.1em] text-foreground/20">
              <a href="#" className="hover:text-accent">Privacy</a>
              <span>/</span>
              <a href="#" className="hover:text-accent">Terms</a>
              <span>/</span>
              <a href="#" className="hover:text-accent">Cookies</a>
            </div>
          </div>

          {/* Magnetic-style Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center group-hover:border-accent transition-colors">
              <span className="text-accent text-sm group-hover:-translate-y-1 transition-transform">↑</span>
            </div>
            <span className="text-[0.55rem] uppercase tracking-[0.3em] text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Top
            </span>
          </motion.button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;