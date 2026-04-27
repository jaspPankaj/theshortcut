import { motion } from "framer-motion";

const stripItems = [
  "Forbes 30 Under 30",
  "★",
  "Harvard Lecturer",
  "★",
  "Culprit Press",
  "★",
  "The Shortcut",
  "★",
  "Founder of Culprit",
  "★",
];

const InfoStrip = () => {
  return (
    <div className="relative w-full bg-secondary overflow-hidden py-6 border-y border-accent/20">
      {/* The Moving Track */}
      <motion.div 
        className="flex whitespace-nowrap items-center"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 20, // Adjust speed here
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }} // Slows down or pauses on hover
      >
        {/* We duplicate the content to ensure the loop is seamless */}
        {[...Array(4)].map((_, outerIndex) => (
          <div key={outerIndex} className="flex items-center">
            {stripItems.map((item, index) => (
              <span
                key={index}
                className={`inline-block px-8 text-[0.7rem] md:text-[0.8rem] tracking-[0.4em] uppercase font-bold ${
                  item === "★" ? "text-accent" : "text-foreground"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
      
      {/* Decorative Gradient Overlays for a "Fade" effect at the edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default InfoStrip;