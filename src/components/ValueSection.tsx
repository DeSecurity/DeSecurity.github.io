import { motion } from "framer-motion";
import {
  Shield, Bug, Server, BarChart3, Cog, FileCheck,
  AlertTriangle, Crosshair, Layout, Users,
} from "lucide-react";

const values = [
  { icon: Bug, title: "Vulnerability Management", desc: "Identify, prioritize, and coordinate remediation of vulnerabilities across infrastructure to reduce organizational attack surface." },
  { icon: Server, title: "Infrastructure Hardening", desc: "Apply CIS benchmarks, secure configurations, and defense-in-depth strategies to servers, endpoints, and network devices." },
  { icon: BarChart3, title: "Risk Reduction", desc: "Translate technical findings into business risk context, enabling leadership to make informed security investment decisions." },
  { icon: Shield, title: "Security Operations", desc: "Strengthen SOC workflows, tune detection rules, reduce alert fatigue, and improve mean time to detect and respond." },
  { icon: Cog, title: "Security Automation", desc: "Build scripts and workflows that automate repetitive security tasks—scanning, reporting, enrichment, and remediation tracking." },
  { icon: FileCheck, title: "Audit & Compliance Support", desc: "Support compliance frameworks by documenting controls, generating evidence, and ensuring security practices align with policy." },
  { icon: AlertTriangle, title: "Incident Readiness", desc: "Develop and test incident response procedures, playbooks, and communication plans to ensure rapid, coordinated response." },
  { icon: Crosshair, title: "Threat-Informed Defense", desc: "Map defenses to real adversary TTPs using MITRE ATT&CK, ensuring detection and prevention controls address actual threats." },
  { icon: Layout, title: "Security Architecture Support", desc: "Contribute to security architecture reviews, ensuring new systems and integrations meet security requirements from design through deployment." },
  { icon: Users, title: "Cross-Functional Communication", desc: "Bridge the gap between security teams, IT operations, development, and leadership with clear, actionable communication." },
];

const ValueSection = () => (
  <section id="value" className="py-24 relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-primary font-heading text-sm tracking-widest mb-3">02 // VALUE</p>
        <h2 className="section-title mb-4">Security Outcomes I Deliver</h2>
        <p className="section-subtitle">
          Technical depth translated into measurable business impact and risk reduction.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {values.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card p-6 card-hover group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ValueSection;
