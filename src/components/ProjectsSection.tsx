import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "WEB-TRACKER",
    subtitle: "Issue #001",
    desc: "A real-time analytics dashboard with dark mode and data visualization. Built with React and D3.",
    tags: ["React", "D3.js", "Node.js"],
    color: "from-spidey-red to-spidey-pink",
  },
  {
    title: "VERSE-CHAT",
    subtitle: "Issue #002",
    desc: "Multiverse messaging app with end-to-end encryption and real-time collaboration features.",
    tags: ["TypeScript", "WebSocket", "Redis"],
    color: "from-spidey-blue to-spidey-cyan",
  },
  {
    title: "SPIDER-STORE",
    subtitle: "Issue #003",
    desc: "E-commerce platform with AI-powered recommendations and seamless checkout experience.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    color: "from-spidey-pink to-accent",
  },
  {
    title: "DOC-SPINNER",
    subtitle: "Issue #004",
    desc: "Documentation generator that transforms codebases into beautiful, searchable docs.",
    tags: ["Python", "Markdown", "React"],
    color: "from-spidey-yellow to-spidey-red",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="caption-box text-sm">MISSION LOG</span>
          <h2 className="font-comic text-5xl md:text-6xl mt-4 text-foreground">
            WEB <span className="text-secondary">PORTFOLIO</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ scale: 0.8, opacity: 0, rotate: i % 2 === 0 ? -3 : 3 }}
              animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5, type: "spring" }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="comic-panel bg-card group cursor-pointer"
            >
              {/* Header strip */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-8 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-marker text-xs text-muted-foreground mb-1">{project.subtitle}</p>
                    <h3 className="font-comic text-3xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={hoveredIndex === i ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>

                <p className="text-muted-foreground mb-6 font-body leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs font-comic rounded-sm border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-2 text-sm font-comic text-primary hover:underline">
                    <ExternalLink size={14} /> LIVE DEMO
                  </button>
                  <button className="flex items-center gap-2 text-sm font-comic text-foreground hover:underline">
                    <Github size={14} /> SOURCE
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;