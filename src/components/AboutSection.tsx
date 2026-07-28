import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
    { icon: Palette, title: "UI/UX Focus", desc: "Designing intuitive user experiences" },
    { icon: Zap, title: "Performance", desc: "Optimizing for speed and efficiency" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary text-sm font-medium font-heading tracking-wider uppercase">About Me</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
            Crafting Digital <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a passionate full stack web developer who loves turning ideas into
            elegant, functional applications. I have hands-on experience in the
            development and deployment of placement software solutions and enjoy
            building practical, scalable products for education and business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:glow-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
