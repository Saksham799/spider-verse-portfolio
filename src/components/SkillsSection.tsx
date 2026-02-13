import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React / Next.js", level: 95, color: "bg-primary" },
  { name: "TypeScript", level: 90, color: "bg-secondary" },
  { name: "Node.js", level: 85, color: "bg-accent" },
  { name: "CSS / Tailwind", level: 92, color: "bg-spidey-cyan" },
  { name: "Python", level: 78, color: "bg-spidey-yellow" },
  { name: "Database / SQL", level: 82, color: "bg-spidey-pink" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-right"
        >
          <span className="caption-box text-sm">SPIDER-SENSE ACTIVATED</span>
          <h2 className="font-comic text-5xl md:text-6xl mt-4 text-foreground">
            SUPER <span className="text-accent">POWERS</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ x: i % 2 === 0 ? -80 : 80, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-comic text-lg text-foreground">{skill.name}</span>
                <span className="font-marker text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-4 bg-muted rounded-sm overflow-hidden comic-panel border-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: "easeOut" }}
                  className={`h-full ${skill.color} relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating comic elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-20 right-10 hidden lg:block"
        >
          <div className="speech-bubble text-lg">
            THWIP! 🕸️
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;