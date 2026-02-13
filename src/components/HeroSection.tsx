import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/75" />
      </div>

      {/* Web lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1="50%"
            y1="0"
            x2={`${10 + i * 18}%`}
            y2="100%"
            className="web-line"
          />
        ))}
      </svg>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="mb-6"
        >
          <span className="caption-box text-sm md:text-base">MEANWHILE, IN THE MULTIVERSE...</span>
        </motion.div>

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-comic text-6xl md:text-8xl lg:text-9xl mb-6 glitch-text"
          data-text="SPIDER-DEV"
        >
          <span className="text-gradient-spidey">SPIDER-DEV</span>
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-marker text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Web Developer. Code Slinger. Multiverse Defender.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-spidey text-primary-foreground font-comic text-xl rounded-sm hover:scale-105 transition-transform shadow-lg shadow-primary/30"
          >
            VIEW MISSIONS
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-foreground text-foreground font-comic text-xl rounded-sm hover:bg-foreground hover:text-background transition-all"
          >
            SEND SIGNAL
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-foreground/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;