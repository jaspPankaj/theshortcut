import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Home", href: "#hero" },
  { title: "About Book", href: "#about" },
  { title: "Inside Chapters", href: "#chapters" },
  { title: "Meet Dylan", href: "#author" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top handler for the magnetic button
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-secondary pt-24 pb-10 px-8 md:px-16 overflow-hidden border-t border-accent/10">
      {/* Decorative Background Text */}
      <div className="absolute left-[10%] bottom-0 text-[15vw] font-black text-background/10 select-none pointer-events-none tracking-tighter">
        SHORTCUT
      </div>

      <div className="insideContainer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Bio (5/12) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-['Playfair_Display'] font-black text-primary"
            >
              The Shortcut<span className="text-accent">.</span>
            </motion.div>
            <p className="text-foreground/60 text-lg font-['Cormorant_Garamond'] max-w-sm Husband leading-relaxed italic">
              "The definitive roadmap for those who refuse to wait for permission to build something great."
            </p>
            
            {/* High-Fidelity Brand-Authentic Social Layout */}
            <div className="flex flex-wrap gap-5">
              {[
                { 
                  name: 'Facebook', 
                  url: 'https://www.facebook.com/profile.php?id=61582151117079',
                  brandColor: '#1877F2',
                  glowStyle: 'rgba(24, 119, 242, 0.35)',
                  hasGradient: false,
                  svg: <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                },
                { 
                  name: 'Substack', 
                  url: 'https://substack.com/@dylantrussell',
                  brandColor: '#FF6719',
                  glowStyle: 'rgba(255, 103, 25, 0.35)',
                  hasGradient: false,
                  svg: <path d="M22.5 4.5H1.5V6h21V4.5zm0 4.5H1.5v10.5l10.5 6 10.5-6V9zm-21 3h21v1.5h-21V12z" />
                },
                { 
                  name: 'Instagram', 
                  url: '#', 
                  brandColor: '#E1306C',
                  glowStyle: 'rgba(225, 48, 108, 0.35)',
                  hasGradient: true,
                  svg: <path fillRule="evenodd" d="M12.315 2c2.43 0 2.717.01 3.674.053 2.114.096 3.125 1.11 3.221 3.221.043.957.054 1.243.054 3.674 0 2.43-.01 2.717-.054 3.674-.096 2.114-1.11 3.125-3.221 3.221-.957.043-1.243.054-3.674.054-2.43 0-2.717-.01-3.674-.054-2.114-.096-3.125-1.11-3.221-3.221C2.01 14.717 2 14.43 2 12c0-2.43.01-2.717.054-3.674.096-2.114 1.11-3.125 3.221-3.221.957-.043 1.243-.054 3.674-.054zm0 1.802c-2.39 0-2.674.01-3.616.053-1.93.088-2.37.531-2.458 2.458-.042.942-.053 1.226-.053 3.616s.01 2.674.053 3.616c.088 1.928.521 2.37 2.458 2.458.942.042 1.226.054 3.616.054s2.674-.01 3.616-.054c1.93-.088 2.369-.521 2.458-2.458.042-.942.053-1.226.053-3.616s-.01-2.674-.053-3.616c-.088-1.93-.521-2.37-2.458-2.458-.942-.043-1.226-.053-3.616-.053zm0 3.285a4.913 4.913 0 100 9.827 4.913 4.913 0 000-9.827zm0 8.025a3.112 3.112 0 110-6.224 3.112 3.112 0 010 6.224zm4.761-8.175a1.161 1.161 0 100-2.322 1.161 1.161 0 000 2.322z" clipRule="evenodd" />
                }, 
                { 
                  name: 'LinkedIn', 
                  url: '#',
                  brandColor: '#0077B5',
                  glowStyle: 'rgba(0, 119, 181, 0.35)',
                  hasGradient: false,
                  svg: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                }   
              ].map((platform) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.name}
                  whileHover={{ 
                    y: -4,
                    scale: 1.08,
                    borderColor: platform.brandColor,
                    boxShadow: `0 10px 25px -5px ${platform.glowStyle}`,
                    backgroundColor: "rgba(var(--background-rgb), 0.05)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-10 h-10 rounded-full border border-accent/10 flex items-center justify-center text-foreground/40 bg-background/5 relative transition-all duration-300"
                  style={{
                    // Lock active colors via normal css selectors if hover applies
                    "--hover-color": platform.hasGradient ? "none" : platform.brandColor
                  }}
                >
                  <svg 
                    className="w-4 h-4 transition-all duration-300 pointer-events-none" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fill: platform.hasGradient ? "none" : "currentColor"
                    }}
                  >
                    {platform.hasGradient && (
                      <defs>
                        <linearGradient id="insta-gradient-fixed" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#fdf497" />
                          <stop offset="5%" stopColor="#fdf497" />
                          <stop offset="45%" stopColor="#fd5949" />
                          <stop offset="60%" stopColor="#d6249f" />
                          <stop offset="100%" stopColor="#285AEB" />
                        </linearGradient>
                      </defs>
                    )}
                    
                    {React.cloneElement(platform.svg, {
                      className: "group-hover:transition-colors duration-300",
                      style: {
                        fill: platform.hasGradient ? "url(#insta-gradient-fixed)" : "currentColor"
                      }
                    })}
                  </svg>
                  
                  {/* Tailwind pseudo classes targeting global custom attributes */}
                  <style>{`
                    a[aria-label="${platform.name}"]:hover {
                      color: var(--hover-color) !important;
                    }
                  `}</style>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (3/12) */}
          <div className="lg:col-span-3 space-y-8">
            <h5 className="text-accent uppercase tracking-[0.3em] text-[0.7rem] font-bold">Navigation</h5>
            <ul className="space-y-4">
              {/* FIXED: Target parameters changed from 'ite' to 'item.href' and '{item}' to '{item.title}' */}
              {navLinks.map((item) => (
                <li key={item.title}>
                  <a 
                    href={item.href} 
                    className="text-primary/70 hover:text-accent transition-colors text-sm font-['DM_Sans'] tracking-wide block"
                  >
                    {item.title}
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
            <form onSubmit={(e) => e.preventDefault()} className="relative group">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-secondary/50 border border-accent/20 px-4 py-3 text-sm text-primary outline-none focus:border-accent transition-all placeholder:text-foreground/20"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-accent text-xs font-bold hover:translate-x-1 transition-transform">
                GO →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Meta & Back to Top */}
        <div className="pt-12 border-t border-accent/5 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-[0.6rem] uppercase tracking-[0.3em] text-foreground/30">
              © {currentYear} Culprit Press & Dylan Trussell
          </div>

          <div className="text-[0.6rem] uppercase tracking-[0.3em] text-foreground/30">
              Crafted By <a href="https://ipvertex.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline transition-all">
                IP VERTEX
              </a>
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