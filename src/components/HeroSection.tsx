import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, FileText, Mail } from "lucide-react";

const titles = [
  "Information Security Engineer",
  "Cybersecurity Specialist",
  "Threat Detection & Response",
  "Vulnerability Management",
  "Infrastructure Security",
  "Security Operations & DFIR",
];

const keywords = [
  "Threat Intelligence", "SIEM & EDR", "Incident Response", "Purple Team",
  "Network Security", "Cloud Security", "Security Automation", "OSINT",
  "Digital Forensics", "Hardening", "Detection Engineering", "Risk Reduction",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scan-line" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
            <span className="text-xs font-heading text-primary tracking-wide">
              Open to Opportunities
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Daniel</span>{" "}
            <span className="glow-text">Elizondo</span>
          </h1>

          {/* Animated title rotator */}
          <div className="h-10 md:h-12 relative overflow-hidden mb-6">
            <motion.p
              key={titleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-heading font-medium text-primary/80 tracking-wide"
            >
              {titles[titleIndex]}
            </motion.p>
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed font-body">
            I build, harden, assess, and improve secure systems across infrastructure,
            vulnerability management, operations, and applied cybersecurity.
          </p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground font-heading text-sm font-medium rounded hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-primary/30 text-primary font-heading text-sm font-medium rounded hover:bg-primary/10 transition-all">
              Contact Me
            </a>
            <a href="#" className="px-4 py-3 border border-border text-muted-foreground font-heading text-sm rounded hover:text-foreground hover:border-primary/30 transition-all flex items-center gap-2">
              <FileText className="w-4 h-4" /> Resume
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-border text-muted-foreground rounded hover:text-foreground hover:border-primary/30 transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-border text-muted-foreground rounded hover:text-foreground hover:border-primary/30 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Keyword strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto"
          >
            {keywords.map((kw) => (
              <span key={kw} className="cyber-chip">{kw}</span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
