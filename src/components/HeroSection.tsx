import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-heading text-5xl md:text-7xl font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Anjali</span>
              <br />
              <span className="text-gradient">Sunil</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              I craft modern, performant web applications with clean code and
              thoughtful design. Passionate about building products that make a
              difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-border text-foreground font-heading font-semibold hover:border-primary/50 hover:text-primary transition-colors"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-5 pt-4"
            >
              {[
                { icon: Github, href: "https://github.com/anjalisunil23", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/anjali-sunil-a189a0218", label: "LinkedIn" },
                { icon: Mail, href: "mailto:anjalisunil200@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+916235743500", label: "Phone" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center glow-border">
                <div className="w-64 h-64 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-heading text-6xl font-bold text-gradient">AS</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 animate-float flex items-center justify-center text-primary text-xs font-heading font-bold">
                {"</>"}
              </div>
              <div className="absolute -bottom-2 -left-6 w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 animate-float flex items-center justify-center text-primary text-xs font-heading font-bold" style={{ animationDelay: "1.5s" }}>
                JS
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-medium">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
