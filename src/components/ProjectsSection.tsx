import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X, ChevronDown } from "lucide-react";

interface Project {
  name: string;
  summary: string;
  problem: string;
  role: string;
  tech: string[];
  tags: string[];
  challenge: string;
  approach: string;
  outcome: string;
  lessons: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    name: "Vulnerability Management Dashboard",
    summary: "Built an internal vulnerability tracking and prioritization system to streamline remediation workflows across teams.",
    problem: "Disconnected scanning tools and manual spreadsheet tracking created remediation delays and inconsistent reporting.",
    role: "Lead Security Engineer",
    tech: ["Python", "Tenable API", "PostgreSQL", "Grafana", "Docker"],
    tags: ["#VulnerabilityManagement", "#Automation", "#SecurityEngineering", "#RiskReduction"],
    challenge: "Multiple vulnerability scanners with no unified view, causing duplicate work and missed SLAs.",
    approach: "Designed a centralized pipeline that ingests scan data from multiple sources, deduplicates findings, applies risk-based prioritization, and tracks remediation status with team-level accountability.",
    outcome: "Reduced mean time to remediate critical vulnerabilities by 40%. Improved visibility for leadership reporting.",
    lessons: "Learned that the biggest barrier to remediation isn't detection—it's organizational coordination and clear ownership.",
    featured: true,
  },
  {
    name: "SIEM Detection Engineering Lab",
    summary: "Developed a home lab environment for writing, testing, and validating SIEM detection rules against simulated attack scenarios.",
    problem: "Detection rules deployed without testing led to high false positive rates and missed true positives.",
    role: "Security Engineer / Builder",
    tech: ["Splunk", "Atomic Red Team", "MITRE ATT&CK", "Windows Server", "Sysmon", "Linux"],
    tags: ["#DetectionEngineering", "#ThreatDetection", "#SIEM", "#PurpleTeam"],
    challenge: "No safe environment to test detection logic against real attack simulations before production deployment.",
    approach: "Built a segmented lab with attack and defense zones. Used Atomic Red Team to simulate TTPs mapped to MITRE ATT&CK. Wrote and validated Splunk detection rules with measurable detection coverage.",
    outcome: "Created a library of 30+ validated detection rules. Established a repeatable detection development workflow.",
    lessons: "Testing detections against real telemetry—not just documentation—reveals blind spots you can't find any other way.",
    featured: true,
  },
  {
    name: "OSINT Reconnaissance Framework",
    summary: "Assembled a modular OSINT toolkit for passive reconnaissance, domain enumeration, and threat intelligence gathering.",
    problem: "Ad-hoc OSINT processes were slow, inconsistent, and poorly documented.",
    role: "Security Researcher",
    tech: ["Python", "Shodan API", "SpiderFoot", "Maltego", "theHarvester", "Recon-ng"],
    tags: ["#OSINT", "#ThreatIntelligence", "#Reconnaissance", "#Automation"],
    challenge: "Needed a repeatable, documented framework for gathering intelligence across multiple data sources efficiently.",
    approach: "Built modular Python scripts that chain OSINT tools together, normalize output, and generate structured reports. Documented methodology for each reconnaissance phase.",
    outcome: "Reduced reconnaissance time by 60%. Created reusable playbooks for different investigation types.",
    lessons: "Good OSINT is about methodology and documentation, not just running tools. Structured output makes intelligence actionable.",
    featured: true,
  },
  {
    name: "Incident Response Playbook System",
    summary: "Developed structured incident response playbooks covering common attack scenarios with decision trees and escalation paths.",
    problem: "No standardized IR procedures led to inconsistent response quality and slow escalation during incidents.",
    role: "IR Process Developer",
    tech: ["Markdown", "Confluence", "TheHive", "NIST 800-61"],
    tags: ["#IncidentResponse", "#SecurityOperations", "#DFIR", "#ProcessImprovement"],
    challenge: "Incident response was dependent on individual knowledge rather than documented, repeatable processes.",
    approach: "Created playbooks for phishing, malware, unauthorized access, and data exfiltration scenarios. Each playbook includes detection triggers, containment steps, evidence collection procedures, and communication templates.",
    outcome: "Improved incident response consistency and reduced average response time. New team members onboard faster with documented procedures.",
    lessons: "The best incident response happens before the incident—through preparation, documentation, and regular tabletop exercises.",
    featured: false,
  },
  {
    name: "Infrastructure Hardening Initiative",
    summary: "Led a systematic hardening project across Windows and Linux server infrastructure using CIS benchmarks.",
    problem: "Default configurations across the server fleet created unnecessary attack surface and compliance gaps.",
    role: "Infrastructure Security Lead",
    tech: ["CIS Benchmarks", "Group Policy", "Ansible", "PowerShell", "Bash"],
    tags: ["#Hardening", "#Infrastructure", "#Compliance", "#SecureConfiguration"],
    challenge: "Legacy systems with years of configuration drift required careful hardening without breaking production services.",
    approach: "Audited current configurations against CIS Level 1 and Level 2 benchmarks. Prioritized changes by risk impact. Implemented through Group Policy for Windows and Ansible for Linux. Tested in staging before production rollout.",
    outcome: "Achieved 90%+ CIS benchmark compliance across the server fleet. Reduced unnecessary services and open ports by 45%.",
    lessons: "Hardening is a continuous process, not a one-time project. Automation and configuration management are essential for maintaining secure baselines.",
    featured: false,
  },
  {
    name: "Security Automation Pipeline",
    summary: "Built automated workflows for vulnerability scanning, alert enrichment, and security reporting.",
    problem: "Manual security processes consumed analyst time that should be spent on investigation and response.",
    role: "Security Automation Engineer",
    tech: ["Python", "PowerShell", "REST APIs", "Cron", "Docker", "Slack Webhooks"],
    tags: ["#Automation", "#SecurityEngineering", "#Scripting", "#Efficiency"],
    challenge: "Repetitive tasks like scan scheduling, report generation, and alert context gathering were done manually.",
    approach: "Identified the most time-consuming manual tasks. Built Python and PowerShell scripts to automate scanning schedules, enrich alerts with context from multiple sources, and generate formatted reports delivered via Slack and email.",
    outcome: "Saved approximately 15 hours per week of analyst time. Improved report consistency and delivery speed.",
    lessons: "Automation should augment analyst judgment, not replace it. The best automations handle the boring parts so humans can focus on the interesting ones.",
    featured: false,
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-heading text-sm tracking-widest mb-3">05 // PORTFOLIO</p>
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="section-subtitle">
            Hands-on security engineering work—from detection labs to automation pipelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card p-6 card-hover cursor-pointer group"
            >
              {project.featured && (
                <span className="inline-block text-[10px] font-heading text-cyber-green bg-cyber-green/10 border border-cyber-green/20 px-2 py-0.5 rounded mb-3">
                  FEATURED
                </span>
              )}
              <h3 className="font-heading font-semibold text-foreground mb-2">{project.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.summary}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="cyber-chip text-[10px]">{t}</span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-[10px] text-muted-foreground">+{project.tech.length - 4}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] text-primary/60">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-2 text-sm font-heading text-primary border border-primary/30 rounded hover:bg-primary/10 transition-all"
            >
              View All Projects <ChevronDown className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card glow-border p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-1">{selectedProject.name}</h3>
                    <p className="text-sm text-primary font-heading">{selectedProject.role}</p>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="text-muted-foreground hover:text-foreground">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-5 text-sm">
                  <div>
                    <h4 className="font-heading text-primary text-xs mb-1.5">CHALLENGE</h4>
                    <p className="text-foreground/80 leading-relaxed">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-primary text-xs mb-1.5">APPROACH</h4>
                    <p className="text-foreground/80 leading-relaxed">{selectedProject.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-primary text-xs mb-1.5">OUTCOME</h4>
                    <p className="text-foreground/80 leading-relaxed">{selectedProject.outcome}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-primary text-xs mb-1.5">LESSONS LEARNED</h4>
                    <p className="text-foreground/80 leading-relaxed">{selectedProject.lessons}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-primary text-xs mb-1.5">TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="cyber-chip text-[11px]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading text-primary text-xs mb-1.5">TAGS</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="text-xs text-primary/60">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
                  <a href="#" className="inline-flex items-center gap-1.5 text-xs font-heading text-primary hover:underline">
                    <Github className="w-3.5 h-3.5" /> Source Code
                  </a>
                  <a href="#" className="inline-flex items-center gap-1.5 text-xs font-heading text-primary hover:underline">
                    <ExternalLink className="w-3.5 h-3.5" /> Write-Up
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
