import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-heading text-lg font-bold text-gradient">AS.</span>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Anjali Sunil. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/anjalisunil23", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/anjali-sunil-a189a0218", label: "LinkedIn" },
          { icon: Mail, href: "mailto:anjalisunil200@gmail.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
