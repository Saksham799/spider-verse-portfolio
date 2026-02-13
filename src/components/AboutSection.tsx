import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Globe } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const panels = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "THE ORIGIN",
      text: "Bitten by the coding bug at age 15, I discovered my powers for building web applications that swing across the digital multiverse.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "THE POWER",
      text: "With great frameworks comes great responsibility. I wield React, TypeScript, and Node.js to craft experiences that stick.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "THE MISSION",
      text: "Every universe needs a hero. I build accessible, performant web apps that make the internet a better place for everyone.",
    },
  ];

  return (
    <section id="about" className="py-24 relative halftone" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="caption-box text-sm">ORIGIN STORY</span>
          <h2 className="font-comic text-5xl md:text-6xl mt-4 text-foreground">
            WHO IS <span className="text-primary">SPIDER-DEV</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.title}
              initial={{ y: 60, opacity: 0, rotate: i % 2 === 0 ? -2 : 2 }}
              animate={isInView ? { y: 0, opacity: 1, rotate: i % 2 === 0 ? -1 : 1 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="comic-panel bg-card p-8 hover:scale-[1.02] transition-transform"
            >
              <div className="relative z-10">
                <div className="text-primary mb-4">{panel.icon}</div>
                <h3 className="font-comic text-2xl text-foreground mb-3">{panel.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-body">{panel.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;