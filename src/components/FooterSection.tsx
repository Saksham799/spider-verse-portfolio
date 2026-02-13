import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-comic text-xl text-primary">
            SPIDER<span className="text-accent">DEV</span>
          </div>

          <div className="flex gap-6">
            {[
              { icon: <Github size={20} />, href: "#" },
              { icon: <Twitter size={20} />, href: "#" },
              { icon: <Linkedin size={20} />, href: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 border-2 border-border rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-muted-foreground text-sm font-body">
            © 2026 Spider-Dev. All dimensions reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;