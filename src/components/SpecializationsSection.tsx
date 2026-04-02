import { motion } from "framer-motion";
import { useState } from "react";
import {
  ShieldCheck, Swords, Bug, Server, Radio, Eye,
  Search, Brain, Wrench, Wifi, Cloud, Cog,
} from "lucide-react";

const specializations = [
  {
    icon: ShieldCheck, title: "Cybersecurity Defense", color: "text-primary",
    summary: "Building layered defenses across endpoints, networks, and cloud infrastructure.",
    tools: ["CrowdStrike", "Microsoft Defender", "Palo Alto", "Snort", "Suricata"],
    methods: ["Defense in Depth", "Zero Trust Principles", "Least Privilege", "Network Segmentation"],
  },
  {
    icon: Swords, title: "Cybersecurity Offense", color: "text-cyber-red",
    summary: "Understanding adversary tradecraft to build better defenses through purple team thinking.",
    tools: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap", "Cobalt Strike awareness"],
    methods: ["MITRE ATT&CK Mapping", "Adversary Emulation", "Penetration Testing", "Social Engineering Awareness"],
  },
  {
    icon: Bug, title: "Vulnerability Management", color: "text-cyber-amber",
    summary: "End-to-end vulnerability lifecycle: scanning, prioritization, remediation coordination, and reporting.",
    tools: ["Tenable Nessus", "Qualys", "Rapid7", "OpenVAS", "CVSS Scoring"],
    methods: ["Risk-Based Prioritization", "Patch Management", "Remediation Tracking", "SLA Compliance"],
  },
  {
    icon: Server, title: "Infrastructure Security", color: "text-cyber-green",
    summary: "Hardening servers, endpoints, and network infrastructure against known and emerging threats.",
    tools: ["Active Directory", "Group Policy", "CIS Benchmarks", "SCCM", "Ansible"],
    methods: ["Baseline Hardening", "Configuration Management", "Asset Inventory", "Change Control"],
  },
  {
    icon: Radio, title: "Security Operations", color: "text-primary",
    summary: "SOC operations, alert triage, detection tuning, and operational security process improvement.",
    tools: ["Splunk", "Microsoft Sentinel", "QRadar", "TheHive", "SOAR Platforms"],
    methods: ["Alert Triage", "Runbook Development", "KPI Tracking", "Shift Handoff Procedures"],
  },
  {
    icon: Eye, title: "OSINT", color: "text-cyber-purple",
    summary: "Open-source intelligence gathering for threat research, reconnaissance, and investigations.",
    tools: ["Maltego", "Shodan", "SpiderFoot", "theHarvester", "Recon-ng"],
    methods: ["Passive Reconnaissance", "Domain Enumeration", "Social Media Analysis", "Dark Web Monitoring"],
  },
  {
    icon: Search, title: "DFIR", color: "text-cyber-red",
    summary: "Digital forensics and incident response: evidence collection, analysis, and post-incident review.",
    tools: ["Autopsy", "FTK", "Volatility", "Wireshark", "Velociraptor"],
    methods: ["Memory Forensics", "Disk Imaging", "Timeline Analysis", "Chain of Custody"],
  },
  {
    icon: Brain, title: "Threat Intelligence", color: "text-cyber-amber",
    summary: "Consuming and operationalizing threat intelligence to inform defensive strategy.",
    tools: ["MISP", "OpenCTI", "VirusTotal", "AlienVault OTX", "STIX/TAXII"],
    methods: ["TTP Analysis", "IOC Enrichment", "Threat Modeling", "Intelligence-Driven Detection"],
  },
  {
    icon: Wrench, title: "Security Engineering", color: "text-cyber-green",
    summary: "Designing, building, and maintaining security tools, integrations, and infrastructure.",
    tools: ["Python", "PowerShell", "Bash", "APIs", "Docker"],
    methods: ["Automation Development", "Tool Integration", "Pipeline Design", "Security as Code"],
  },
  {
    icon: Wifi, title: "Network Security", color: "text-primary",
    summary: "Securing network architectures through monitoring, segmentation, and access control.",
    tools: ["Wireshark", "Zeek", "pfSense", "Cisco", "Palo Alto"],
    methods: ["Packet Analysis", "Firewall Management", "VPN Configuration", "Network Segmentation"],
  },
  {
    icon: Cloud, title: "Cloud & Systems Security", color: "text-cyber-purple",
    summary: "Securing cloud workloads and hybrid environments across major platforms.",
    tools: ["AWS Security Hub", "Azure Security Center", "GCP Security", "Terraform", "CloudTrail"],
    methods: ["Cloud Posture Management", "IAM Review", "Workload Protection", "Logging & Monitoring"],
  },
  {
    icon: Cog, title: "Security Automation", color: "text-cyber-amber",
    summary: "Automating security workflows to improve efficiency, consistency, and response speed.",
    tools: ["Python", "PowerShell", "SOAR", "REST APIs", "Cron/Scheduled Tasks"],
    methods: ["Automated Scanning", "Alert Enrichment", "Reporting Automation", "Workflow Orchestration"],
  },
];

const SpecializationsSection = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="specializations" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-heading text-sm tracking-widest mb-3">03 // DOMAINS</p>
          <h2 className="section-title mb-4">Core Specializations</h2>
          <p className="section-subtitle">
            Deep expertise across offensive, defensive, and operational security domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specializations.map((spec, i) => {
            const Icon = spec.icon;
            const isExpanded = expanded === spec.title;
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => setExpanded(isExpanded ? null : spec.title)}
                className="glass-card p-6 card-hover cursor-pointer group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Icon className={`w-5 h-5 ${spec.color} mt-0.5 flex-shrink-0`} />
                  <h3 className="font-heading font-semibold text-sm text-foreground">{spec.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{spec.summary}</p>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 border-t border-border/50 space-y-3">
                    <div>
                      <p className="text-xs font-heading text-primary mb-1.5">Tools & Technologies</p>
                      <div className="flex flex-wrap gap-1.5">
                        {spec.tools.map((t) => (
                          <span key={t} className="cyber-chip text-[10px]">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-heading text-primary mb-1.5">Methods</p>
                      <div className="flex flex-wrap gap-1.5">
                        {spec.methods.map((m) => (
                          <span key={m} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{m}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <p className="text-xs text-muted-foreground mt-2 font-heading">
                  {isExpanded ? "Click to collapse" : "Click to expand"}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
