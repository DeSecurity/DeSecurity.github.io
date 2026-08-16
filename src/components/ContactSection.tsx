import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ExternalLink } from "lucide-react";
import { useState, type FormEvent } from "react";
import { LINKS } from "@/lib/links";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name} <${formData.email}>\n\n${formData.message}`,
    );

    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-primary font-heading text-sm tracking-widest mb-3">11 // CONNECT</p>
          <h2 className="section-title mb-4">Let's Connect</h2>
          <p className="section-subtitle mx-auto">
            Open to opportunities in security engineering, vulnerability management, and security operations.
            Reach out if you're hiring, collaborating, or building something interesting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6 space-y-4">
              <a href={`mailto:${LINKS.email}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">{LINKS.email}</p>
                </div>
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/daniel-elizondo-608b128a</p>
                </div>
              </a>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/DeSecurity</p>
                </div>
              </a>
            </div>

            <div className="glass-card p-6">
              <p className="text-xs font-heading text-primary mb-3">SITES & WRITING</p>
              <div className="space-y-3">
                <a href={LINKS.digitalCyberSafety} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-sm text-foreground/80 hover:text-primary transition-colors">
                  Digital Cyber Safety
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a href={LINKS.leakedIntel} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-sm text-foreground/80 hover:text-primary transition-colors">
                  Leaked Intel
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a href={LINKS.infoSecCalendar} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-sm text-foreground/80 hover:text-primary transition-colors">
                  InfoSec Calendar
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="text-foreground/80 text-sm leading-relaxed italic">
                "I'm most interested in roles where I can work on real security problems—vulnerability
                management, detection engineering, infrastructure security, and security operations.
                If your team values hands-on technical depth and continuous improvement, I'd like to talk."
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="font-heading font-semibold text-foreground mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-xs font-heading text-muted-foreground mb-1 block">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-heading text-muted-foreground mb-1 block">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs font-heading text-muted-foreground mb-1 block">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-secondary border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading text-sm font-medium rounded hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
