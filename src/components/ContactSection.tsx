import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder
    alert("Message sent to the Spider-Verse! 🕸️");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-card relative halftone" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="caption-box text-sm">INCOMING TRANSMISSION</span>
          <h2 className="font-comic text-5xl md:text-6xl mt-4 text-foreground">
            SEND A <span className="text-primary">SIGNAL</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="speech-bubble max-w-sm">
              <p className="text-lg">Hey! Need a web-slinging developer? Let's connect across the multiverse!</p>
            </div>

            <div className="space-y-6 mt-8">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "spider.dev@multiverse.com" },
                { icon: <MapPin className="w-5 h-5" />, label: "Earth-616, New York" },
                { icon: <Phone className="w-5 h-5" />, label: "+1 (555) SPIDER" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -30, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 text-muted-foreground"
                >
                  <span className="text-primary">{item.icon}</span>
                  <span className="font-body">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ x: 60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="comic-panel bg-background p-8 space-y-6"
          >
            <div className="relative z-10 space-y-6">
              {[
                { name: "name" as const, label: "YOUR ALIAS", type: "text", placeholder: "Miles Morales" },
                { name: "email" as const, label: "COMM CHANNEL", type: "email", placeholder: "miles@spiderverse.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="font-comic text-sm text-muted-foreground mb-2 block">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    className="w-full bg-muted border-2 border-border px-4 py-3 text-foreground font-body rounded-sm focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="font-comic text-sm text-muted-foreground mb-2 block">YOUR MESSAGE</label>
                <textarea
                  placeholder="I need a hero for my next project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-muted border-2 border-border px-4 py-3 text-foreground font-body rounded-sm focus:border-primary focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-4 bg-gradient-spidey text-primary-foreground font-comic text-xl rounded-sm flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
              >
                <Send size={20} />
                LAUNCH SIGNAL
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;