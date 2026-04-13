import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";

const CONTACT_PROVIDER = (import.meta.env.VITE_CONTACT_PROVIDER ?? "auto").toLowerCase();
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "916235743500";
const CONTACT_EMAIL = "anjalisunil200@gmail.com";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const submitWithEmailJs = async () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("EmailJS config is missing. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY.");
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      },
      { publicKey }
    );
  };

  const openMailToFallback = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Anjali,\n\n${formData.message}\n\nFrom:\nName: ${formData.name}\nEmail: ${formData.email}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const getConfiguredProvider = () => {
    if (CONTACT_PROVIDER === "emailjs" || CONTACT_PROVIDER === "formspree" || CONTACT_PROVIDER === "web3forms") {
      return CONTACT_PROVIDER;
    }

    if (
      import.meta.env.VITE_EMAILJS_SERVICE_ID &&
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      return "emailjs";
    }

    if (import.meta.env.VITE_FORMSPREE_FORM_ID) {
      return "formspree";
    }

    if (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY) {
      return "web3forms";
    }

    return "mailto";
  };

  const submitWithFormspree = async () => {
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

    if (!formId) {
      throw new Error("Formspree config is missing. Set VITE_FORMSPREE_FORM_ID.");
    }

    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (!response.ok) {
      throw new Error("Formspree request failed.");
    }
  };

  const submitWithWeb3Forms = async () => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      throw new Error("Web3Forms config is missing. Set VITE_WEB3FORMS_ACCESS_KEY.");
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Portfolio Contact from ${formData.name}`,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const result = await response.json();
    if (!response.ok || !result.success) {
      throw new Error("Web3Forms request failed.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    try {
      const provider = getConfiguredProvider();

      if (provider === "emailjs") {
        await submitWithEmailJs();
      } else if (provider === "formspree") {
        await submitWithFormspree();
      } else if (provider === "web3forms") {
        await submitWithWeb3Forms();
      } else {
        openMailToFallback();
      }

      setStatus({
        type: "success",
        message:
          provider === "mailto"
            ? "Email app opened. Please send the prefilled email to complete your message."
            : "Message sent successfully. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong while sending your message.";
      setStatus({
        type: "error",
        message: `${message} You can still use the Email or WhatsApp buttons above.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium font-heading tracking-wider uppercase">Contact</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <span className="text-foreground group-hover:text-primary transition-colors">{CONTACT_EMAIL}</span>
              </a>
              <a href="tel:6235743500" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={18} />
                </div>
                <span className="text-foreground group-hover:text-primary transition-colors">6235743500</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={18} />
                </div>
                <span className="text-foreground">Kerala, India</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/anjali-sunil-a189a0218"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/anjalisunil23"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
              >
                View GitHub
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Anjali%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20connect.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-border text-sm font-medium flex items-center gap-2 hover:border-primary/50 hover:text-primary transition-colors"
              >
                <MessageCircle size={16} />
                Chat now
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 text-foreground placeholder:text-muted-foreground transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 text-foreground placeholder:text-muted-foreground transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 text-foreground placeholder:text-muted-foreground transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-heading font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
            </button>
            {status && (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status.message}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
