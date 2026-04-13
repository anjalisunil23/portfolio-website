import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-featured online store with cart, checkout, and payment integration built with React and Node.js.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Task Management App",
    desc: "Collaborative project management tool with real-time updates, drag & drop, and team features.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
  },
  {
    title: "Portfolio Dashboard",
    desc: "Interactive analytics dashboard with data visualization, charts, and responsive design.",
    tags: ["React", "D3.js", "Tailwind", "REST API"],
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
              {/* Placeholder visual */}
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
                <a href="#" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all" aria-label="View code">
                  <Github size={18} />
                </a>
                <a href="#" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all" aria-label="Live demo">
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
