import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Inside", href: "#chapters" },
  { title: "Author", href: "#author" },
  { title: "Get Book", href: "#cta" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-evenly px-6 py-6 border-b border-accent/20 bg-background/80 backdrop-blur-xl md:px-12 md:py-8">
      {/* Logo using your Primary color */}
      <a href="#" className="font-['Playfair_Display'] text-[1.1rem] tracking-[0.15em] text-primary uppercase no-underline">
        The Shortcut
      </a>

      {/* Desktop Links - Colors updated to Foreground/Accent */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="text-[0.75rem] tracking-[0.2em] text-foreground uppercase no-underline hover:text-accent transition-colors duration-300"
          >
            {link.title}
          </a>
        ))}
        {/* CTA Button using Accent color */}
        <a 
          href="#" 
          className="text-[0.7rem] tracking-[0.2em] uppercase border border-accent text-accent px-6 py-2.5 hover:bg-accent hover:text-secondary transition-all duration-300 no-underline"
        >
          Buy Now →
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden flex flex-col gap-1.5 z-[110]" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.span 
          animate={isOpen ? { rotate: 45, y: 8, backgroundColor: "#c3c789" } : { rotate: 0, y: 0, backgroundColor: "#f4f8f9" }}
          className="w-8 h-[1px] block"
        />
        <motion.span 
          animate={isOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: "#f4f8f9" }}
          className="w-8 h-[1px] block"
        />
        <motion.span 
          animate={isOpen ? { rotate: -45, y: -8, backgroundColor: "#c3c789" } : { rotate: 0, y: 0, backgroundColor: "#f4f8f9" }}
          className="w-8 h-[1px] block"
        />
      </button>

      {/* Mobile Menu Overlay - Using Secondary/Background tones */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen bg-secondary flex flex-col justify-center items-center z-[105]"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-['Playfair_Display'] tracking-widest text-primary hover:text-accent uppercase transition-colors"
                >
                  {link.title}
                </a>
              ))}
              <a
                href="#"
                className="mt-4 px-10 py-4 border border-accent text-accent uppercase tracking-widest hover:bg-accent hover:text-secondary transition-all"
              >
                Buy Now →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;