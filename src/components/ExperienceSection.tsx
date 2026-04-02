import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "Information Security Engineer",
    company: "Current Organization",
    period: "2023 – Present",
    focus: "Vulnerability Management · Security Operations · Detection Engineering",
    responsibilities: [
      "Lead vulnerability management program including scanning, prioritization, and remediation coordination",
      "Develop and tune SIEM detection rules mapped to MITRE ATT&CK framework",
      "Conduct security assessments and infrastructure hardening across Windows and Linux environments",
      "Build security automation scripts for scanning, reporting, and alert enrichment",
      "Support incident response procedures and post-incident analysis",
    ],
    impact: "Reduced critical vulnerability remediation time by 40%. Improved detection coverage for priority ATT&CK techniques.",
    domains: ["Vulnerability Management", "SIEM", "Detection Engineering", "Incident Response", "Security Automation"],
  },
  {
    role: "Systems & Network Administrator",
    company: "Previous Organization",
    period: "2020 – 2023",
    focus: "Infrastructure Administration · Network Security · Security Operations Support",
    responsibilities: [
      "Managed Windows Server and Active Directory environments for 500+ users",
      "Implemented network security controls including firewall management, VPN, and segmentation",
      "Deployed endpoint protection and monitoring solutions",
      "Supported compliance audits with documentation and evidence gathering",
      "Automated routine administration tasks with PowerShell and Bash scripting",
    ],
    impact: "Strengthened network security posture through segmentation and access control improvements. Reduced manual administration overhead through scripting automation.",
    domains: ["Active Directory", "Network Security", "Endpoint Protection", "Compliance Support", "PowerShell"],
  },
  {
    role: "IT Support Specialist",
    company: "Earlier Career",
    period: "2018 – 2020",
    focus: "Technical Support · Troubleshooting · Infrastructure Foundation",
    responsibilities: [
      "Provided technical support across hardware, software, and networking issues",
      "Managed user accounts, permissions, and access control in Active Directory",
      "Supported server and network infrastructure maintenance",
      "Documented technical procedures and knowledge base articles",
    ],
    impact: "Built the foundational technical skills and troubleshooting discipline that inform security engineering work today.",
    domains: ["Technical Support", "Active Directory", "Networking", "Documentation"],
  },
];

const ExperienceSection = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-heading text-sm tracking-widest mb-3">07 // CAREER</p>
          <h2 className="section-title mb-4">Experience</h2>
          <p className="section-subtitle">
            Progressive growth from infrastructure administration to security engineering.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const isExpanded = expanded === i;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-2.5 md:left-6.5 top-6 w-3 h-3 rounded-full border-2 ${i === 0 ? "bg-primary border-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]" : "bg-background border-primary/40"}`} />

                  <div className="glass-card overflow-hidden">
                    <button
                      onClick={() => setExpanded(isExpanded ? null : i)}
                      className="w-full p-6 text-left flex justify-between items-start group"
                    >
                      <div>
                        <p className="text-xs font-heading text-primary mb-1">{exp.period}</p>
                        <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                        <p className="text-xs text-muted-foreground mt-1 font-heading">{exp.focus}</p>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform mt-1 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-4 text-sm">
                        <ul className="space-y-2">
                          {exp.responsibilities.map((r, ri) => (
                            <li key={ri} className="flex gap-2 text-foreground/80">
                              <span className="text-primary mt-1.5 text-[8px]">▸</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                        <div>
                          <p className="font-heading text-primary text-xs mb-1">IMPACT</p>
                          <p className="text-foreground/80">{exp.impact}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.domains.map((d) => (
                            <span key={d} className="cyber-chip text-[10px]">{d}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
