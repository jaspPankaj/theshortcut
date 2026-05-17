import React, { memo, useRef } from "react";
import { motion } from "framer-motion";

const ECOSYSTEM_REGISTRY = [
  {
    id: "photos",
    label: "Visual Artifacts",
    title: "The Book Blueprint",
    desc: "Access the hidden photography, original manuscript mood boards, and raw behind-the-scenes assets behind the production of The Shortcut.",
    ctaText: "Download PDF ↓",
    href: "https://myshortcut.co/pdf",
    analyticsId: "download_pdf_blueprint",
  },
  {
    id: "change",
    label: "Interactive Paradigm",
    title: "What would you change?",
    desc: "If you could fast-forward past the traditional timeline and rewrite one critical operational framework in your life today, what would it be? Join the open collective.",
    ctaText: "Post on Facebook",
    href: "https://www.facebook.com/profile.php?id=61582151117079",
    analyticsId: "facebook_community_post",
  },
  {
    id: "substack",
    label: "Deep Intel Briefings",
    title: "The Trussell Ledger",
    desc: "Unfiltered micro-essays covering systemic macro trends, investor negotiation strategies, and defensive post-exit wealth protection vectors.",
    ctaText: "Subscribe on Substack",
    href: "https://substack.com/@dylantrussell",
    analyticsId: "substack_intel_subscribe",
  },
];

const SMOOTH_EASTING = [0.16, 1, 0.3, 1];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: SMOOTH_EASTING },
  },
};

const HubCard = memo(({ item }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { currentTarget, clientX, clientY } = e;
    const bounds = currentTarget.getBoundingClientRect();
    const x = clientX - bounds.left;
    const y = clientY - bounds.top;
    
    const normalizedX = (x / bounds.width) - 0.5;
    const normalizedY = (y / bounds.height) - 0.5;
    
    const maxRotationX = -8; 
    const maxRotationY = 8;  

    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
    currentTarget.style.setProperty("--rotate-x", `${normalizedY * maxRotationX}deg`);
    currentTarget.style.setProperty("--rotate-y", `${normalizedX * maxRotationY}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rotate-x", "0deg");
    cardRef.current.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col justify-between p-8 md:p-10 min-h-[460px] bg-secondary/10 border border-accent/10 backdrop-blur-md transition-all duration-500 ease-[0.16,1,0.3,1] overflow-hidden select-none cursor-none"
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))",
      }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(195, 199, 137, 0.06), transparent 80%)`,
        }}
      />

      {/* Text Containment - Fixed template string perspective */}
      <div 
        className="space-y-4 relative z-10 pointer-events-none transition-transform duration-500 ease-[0.16,1,0.3,1]"
        style={{ transform: "translateZ(30px)" }}
      >
        <span className="text-accent font-['DM_Sans'] text-[0.6rem] font-bold tracking-[0.35em] uppercase block opacity-70">
          {item.label}
        </span>
        <h3 className="text-primary font-['Playfair_Display'] text-2xl font-bold leading-tight group-hover:text-highlight transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-foreground/70 font-['DM_Sans'] text-sm leading-relaxed font-light tracking-wide">
          {item.desc}
        </p>
      </div>

      {/* Button Action Block - Fixed exact text wrapper container sizes */}
      <div 
        className="pt-8 relative z-10"
        style={{ transform: "translateZ(40px)" }}
      >
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics={item.analyticsId}
          className="inline-flex items-center text-[0.7rem] uppercase tracking-[0.35em] font-black text-accent group-hover:text-primary transition-colors duration-500 gap-3 py-1"
        >
          {/* FIXED: Scaled h-5 wrapper with full tracking overflow clip */}
          <span className="relative overflow-hidden h-5 flex flex-col justify-start">
            <span className="flex flex-col transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-5">
              <span className="h-5 flex items-center leading-none whitespace-nowrap">{item.ctaText}</span>
              <span className="h-5 flex items-center text-primary italic font-medium leading-none whitespace-nowrap">{item.ctaText}</span>
            </span>
            <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-primary group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out" />
          </span>
          
          <span className="transform translate-x-0 transition-transform duration-300 group-hover:translate-x-1.5 text-xs font-light leading-none">
            →
          </span>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out" />
    </motion.div>
  );
});

HubCard.displayName = "HubCard";

const ActionHub = () => {
  return (
    /* FIXED: Changed border-t to a clear pt-32 to offset the fixed navbar height */
    <div  className="mainContainer bg-secondary  border-t border-accent/5">
      <motion.div 
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-120px" }}
        className="insideContainer"
      >
        
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-accent opacity-50" />
            <span className="text-accent text-[0.65rem] font-bold tracking-[0.45em] uppercase">
              Ecosystem Touchpoints
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-primary leading-[1.05] tracking-tight">
            Extend your <br />
            analytical <span className="italic text-accent font-medium">periphery</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ECOSYSTEM_REGISTRY.map((item) => (
            <HubCard key={item.id} item={item} />
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default memo(ActionHub);