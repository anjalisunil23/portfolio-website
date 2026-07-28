import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "PHP", "Python", "Django", "FastAPI", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    title: "Cloud, Tools & Platforms",
    skills: ["AWS", "Docker", "Git", "GitHub", "Firebase Auth", "VS Code"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Leadership",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Problem Solving",
      "Project Management",
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium font-heading tracking-wider uppercase">Skills</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + ci * 0.15 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-heading text-lg font-semibold text-primary mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
