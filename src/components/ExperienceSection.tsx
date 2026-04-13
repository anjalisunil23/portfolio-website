import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "We Promote Business Solution",
    role: "Project Lead",
    period: "2024 – 2025",
    description:
      "Led project teams and managed end-to-end delivery of client web applications. Coordinated between design, development, and QA to ensure timely releases and quality standards.",
    highlights: ["Team Leadership", "Project Management", "Client Communication", "Code Reviews"],
  },
  {
    company: "VK Semantics",
    role: "Software Developer",
    period: "2023 – 2024",
    description:
      "Developed and maintained full stack web applications using modern frameworks. Collaborated with cross-functional teams to deliver scalable and performant solutions.",
    highlights: ["React", "Node.js", "REST APIs", "Database Design"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium font-heading tracking-wider uppercase">
            Experience
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Work <span className="text-gradient">History</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:glow-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Briefcase className="text-primary" size={16} />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold">{exp.role}</h3>
                        <p className="text-primary text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
