import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Bizmapia",
    desc: "A comprehensive local business directory and services platform with taxi booking, categorized listings for restaurants, hospitals, education, weddings, and more. Features a mobile app on Google Play.",
    tags: ["React", "Full Stack", "Business Directory", "Mobile App"],
    live: "https://www.bizmapia.com",
  },
  {
    title: "Employee Panel",
    desc: "An employee management panel built with React and Vite, featuring authentication, dashboard, and team management. Modern UI with role-based access control.",
    tags: ["React", "Vite", "Authentication", "Dashboard"],
    live: "https://employee-panel-react-vite2025.vercel.app",
  },
  {
    title: "PetCare Tracker",
    desc: "A pet care management application for tracking pet health, appointments, and daily care routines. Built to help pet owners stay organized.",
    tags: ["React", "TypeScript", "Pet Management"],
    github: "https://github.com/anjalisunil23/petcare-tracker",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium font-heading tracking-wider uppercase">Projects</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:glow-border flex flex-col"
            >
              <div className="w-full h-40 rounded-xl bg-secondary mb-5 flex items-center justify-center overflow-hidden">
                <span className="font-heading text-2xl font-bold text-muted-foreground/30 group-hover:text-primary/30 transition-colors">
                  {project.title.split(" ").map(w => w[0]).join("")}
                </span>
              </div>

              <h3 className="font-heading text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all" aria-label="View code">
                    <Github size={18} />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all" aria-label="Live demo">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
