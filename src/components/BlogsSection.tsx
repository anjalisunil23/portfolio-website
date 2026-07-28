import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, FileText } from "lucide-react";

const blogs = [
  {
    title: "Firebase with TanStack Start",
    desc: "A practical guide to using Firebase features in a TanStack Start app, covering the basics, setup flow, and a simple integration path.",
    tags: ["Firebase", "TanStack Start", "Auth", "Hosting"],
    href: "https://tanstack-start-app.anjali2027.workers.dev/blog1",
  },
];

const BlogsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blogs" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium font-heading tracking-wider uppercase">
            Blogs
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Latest <span className="text-gradient">Writing</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:glow-border flex flex-col"
            >
              <div className="w-full h-40 rounded-xl bg-secondary mb-5 flex items-center justify-center overflow-hidden">
                <FileText className="text-primary/40 group-hover:text-primary transition-colors" size={42} />
              </div>

              <h3 className="font-heading text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{blog.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={blog.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
              >
                Read blog
                <ExternalLink size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;