import { motion } from "framer-motion";
import { Target, Download, FolderOpen, ArrowRight } from "lucide-react";

const strengths = [
  "Vulnerability Management & Remediation",
  "SIEM & Detection Engineering",
  "Infrastructure Hardening",
  "Security Automation (Python/PowerShell)",
  "Incident Response & DFIR Awareness",
  "Threat-Informed Defense (MITRE ATT&CK)",
  "Cross-Functional Communication",
  "Security Operations & SOC Support",
];

const targetRoles = [
  "Information Security Engineer",
  "Security Engineer",
  "Cybersecurity Engineer",
  "Vulnerability Management Analyst",
  "Detection Engineer",
  "Security Operations Engineer",
  "Infrastructure Security Engineer",
  "Purple Team Engineer",
];

const HireMeSection = () => (
  <section className="py-24 relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-primary font-heading text-sm tracking-widest mb-3">10 // HIRE</p>
        <h2 className="section-title mb-4">Why Hire Daniel</h2>
        <p className="section-subtitle">
          A recruiter-ready snapshot of what I bring to your security team.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card glow-border p-6 lg:col-span-2"
        >
          <h3 className="font-heading font-semibold text-foreground mb-4">Professional Summary</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Information Security Engineer with hands-on experience across vulnerability management,
            security operations, infrastructure hardening, and detection engineering. I combine technical
            depth with structured problem-solving to reduce organizational risk and improve security posture.
            I build tools, write detections, coordinate remediation, and communicate security outcomes
            to both technical and non-technical stakeholders. I'm looking for a role where I can contribute
            to a security engineering team, solve meaningful problems, and continue growing as a practitioner.
          </p>

          <h4 className="font-heading text-primary text-xs mb-3">KEY STRENGTHS</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {strengths.map((s) => (
              <div key={s} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="text-primary text-[8px]">▸</span>
                {s}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-heading text-sm font-medium rounded hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all">
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/30 text-primary font-heading text-sm rounded hover:bg-primary/10 transition-all">
              <FolderOpen className="w-4 h-4" /> View Portfolio
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-muted-foreground font-heading text-sm rounded hover:text-foreground hover:border-primary/30 transition-all">
              Contact Me <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Target Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5 text-primary" />
            <h3 className="font-heading font-semibold text-foreground">Target Roles</h3>
          </div>
          <div className="space-y-2">
            {targetRoles.map((role) => (
              <div key={role} className="flex items-center gap-2 py-1.5 text-sm text-foreground/80 border-b border-border/20 last:border-0">
                <span className="text-primary text-[8px]">▸</span>
                {role}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HireMeSection;
