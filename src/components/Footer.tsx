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
          { icon: Github, href: "#", label: "GitHub" },
          { icon: Linkedin, href: "#", label: "LinkedIn" },
          { icon: Mail, href: "#contact", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
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
