import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const caseStudies = [
  {
    title: "Vulnerability Management Process Redesign",
    context: "Inherited a vulnerability management program with inconsistent scanning, no prioritization framework, and remediation tracking done via email.",
    objective: "Build a structured, repeatable vulnerability management lifecycle that scales and provides leadership visibility.",
    constraints: "Limited tooling budget, multiple scanning platforms, and cross-team dependencies for remediation.",
    approach: "Audited the existing process end-to-end. Standardized scan schedules and coverage. Implemented risk-based prioritization using CVSS + asset criticality. Built a centralized tracking dashboard. Established SLA-driven remediation workflows with team-level accountability.",
    tradeoffs: "Prioritized coverage and process consistency over tooling consolidation in the first phase to deliver quick wins.",
    outcome: "Reduced open critical/high vulnerabilities by 50% in 90 days. Established repeatable monthly reporting for leadership.",
    learned: "Process discipline matters more than tooling sophistication. A mediocre scanner with a great process outperforms a great scanner with no process.",
  },
  {
    title: "Detection Engineering Workflow",
    context: "Security team was deploying SIEM rules based on vendor defaults and ad-hoc requests without testing or coverage measurement.",
    objective: "Establish a structured detection engineering lifecycle: hypothesize → develop → test → deploy → measure.",
    constraints: "No dedicated detection engineering role. Work had to fit within existing SOC analyst responsibilities.",
    approach: "Mapped existing detections to MITRE ATT&CK to identify coverage gaps. Built a home lab for safe testing with Atomic Red Team. Created a template for detection rule documentation including data sources, logic, expected true/false positive rates, and ATT&CK mapping.",
    tradeoffs: "Focused on high-value techniques (Initial Access, Lateral Movement, Privilege Escalation) rather than attempting full ATT&CK coverage.",
    outcome: "Increased validated detection coverage for priority techniques by 35%. Reduced false positive rate on new rules by implementing pre-deployment testing.",
    learned: "Detection engineering is a discipline, not a task. Treating it as an ongoing program rather than one-off rule creation changes the quality of the entire detection pipeline.",
  },
  {
    title: "Home Lab Security Architecture",
    context: "Needed a realistic environment to practice offensive and defensive techniques, test tools, and develop skills outside of production systems.",
    objective: "Design and build a segmented home lab that simulates enterprise security scenarios for continuous learning.",
    constraints: "Budget-constrained hardware. Must support simultaneous attack and defense exercises without interference.",
    approach: "Designed a multi-VLAN architecture with separate attack, defense, and monitoring segments. Deployed Active Directory, Splunk, CrowdStrike evaluation, Kali Linux, and vulnerable targets (DVWA, Metasploitable). Configured Sysmon, Windows event forwarding, and centralized logging.",
    tradeoffs: "Chose open-source and free-tier tools to maximize capability within budget constraints. Accepted lower scale for higher fidelity.",
    outcome: "Operational lab environment supporting detection development, adversary emulation, forensics practice, and tool evaluation.",
    learned: "Building infrastructure teaches you more about security than any course. Understanding how systems are built makes you better at understanding how they break.",
  },
];

const CaseStudiesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-heading text-sm tracking-widest mb-3">06 // DEEP WORK</p>
          <h2 className="section-title mb-4">Case Studies</h2>
          <p className="section-subtitle">
            How I think through complex security problems—context, constraints, tradeoffs, and outcomes.
          </p>
        </motion.div>

        <div className="space-y-4">
          {caseStudies.map((cs, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{cs.context.slice(0, 100)}...</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    {[
                      { label: "CONTEXT", value: cs.context },
                      { label: "OBJECTIVE", value: cs.objective },
                      { label: "CONSTRAINTS", value: cs.constraints },
                      { label: "APPROACH", value: cs.approach },
                      { label: "TRADEOFFS", value: cs.tradeoffs },
                      { label: "OUTCOME", value: cs.outcome },
                      { label: "WHAT I LEARNED", value: cs.learned },
                    ].map((field) => (
                      <div key={field.label} className={field.label === "APPROACH" ? "md:col-span-2" : ""}>
                        <p className="font-heading text-primary text-xs mb-1">{field.label}</p>
                        <p className="text-foreground/80 leading-relaxed">{field.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
