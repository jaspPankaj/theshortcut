import React, { Suspense } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Components
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import InfoStrip from "../components/InfoStrip";
import Footer from "../components/Footer";
import ActionHub from "../components/ActionHub";

// Sections
import Hero from "../sections/Hero";
import About from "../sections/About";
import Chapters from "../sections/Chapters";
import Quotes from "../sections/Quotes";
import Author from "../sections/Author";
import CTA from "../sections/CTA";
import Contact from "../sections/Contact";

const Home = () => {
  // Global Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-background antialiased selection:bg-accent selection:text-secondary">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Interaction Layer */}
      <Cursor />

      {/* Navigation */}
      <Navbar />

      {/* Content Wrapper with Smooth Transitions */}
      <Suspense fallback={<PageLoader />}>
        <main className="flex flex-col">
          <section id="hero"><Hero /></section>
          
          {/* Marquee sits between Hero and Content */}
          <InfoStrip />
          
          {/* Editorial Sections */}
          <div className="relative z-10">
            <section id="about"><About /></section>
            <section id="chapters"><Chapters /></section>
            <Quotes />     
            <section id="author"><Author /></section>
            <section id="resources"><ActionHub /></section>
            <section id="contact"><Contact /></section>
          </div>

          {/* Final Conversion */}
          <section id="cta"><CTA /></section>
          
        </main>

        <Footer />
      </Suspense>
    </div>
  );
};

// Luxury Page Loader for initial mount
const PageLoader = () => (
  <div className="fixed inset-0 bg-background z-[1000] flex flex-col items-center justify-center">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-accent font-['Playfair_Display'] text-2xl italic tracking-widest"
    >
      The Shortcut
    </motion.div>
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: "100px" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="h-[1px] bg-accent mt-4"
    />
  </div>
);

export default Home;