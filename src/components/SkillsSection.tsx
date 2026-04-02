import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    domain: "Security Tools",
    skills: ["Splunk", "Microsoft Sentinel", "CrowdStrike", "Tenable Nessus", "Qualys", "Rapid7", "Wireshark", "Snort", "Suricata", "TheHive", "MISP", "Velociraptor"],
  },
  {
    domain: "Infrastructure",
    skills: ["Active Directory", "Group Policy", "DNS/DHCP", "VMware", "Hyper-V", "Docker", "Ansible", "Terraform", "CIS Benchmarks", "SCCM"],
  },
  {
    domain: "Operating Systems",
    skills: ["Windows Server", "Windows 10/11", "Ubuntu/Debian", "CentOS/RHEL", "Kali Linux", "macOS"],
  },
  {
    domain: "Networking",
    skills: ["TCP/IP", "Firewalls", "VPN", "IDS/IPS", "Network Segmentation", "Packet Analysis", "pfSense", "Cisco IOS", "Palo Alto"],
  },
  {
    domain: "Scripting & Programming",
    skills: ["Python", "PowerShell", "Bash", "SQL", "JavaScript", "REST APIs", "Regex", "YAML/JSON"],
  },
  {
    domain: "Cloud Platforms",
    skills: ["AWS (Security Hub, CloudTrail, GuardDuty)", "Azure (Sentinel, Defender)", "GCP Security", "Cloud IAM", "Cloud Posture Management"],
  },
  {
    domain: "Incident Response & DFIR",
    skills: ["Autopsy", "FTK", "Volatility", "Memory Forensics", "Disk Imaging", "Timeline Analysis", "Log Analysis", "Malware Triage"],
  },
  {
    domain: "Offensive Security",
    skills: ["Metasploit", "Burp Suite", "Nmap", "Gobuster", "Hashcat", "John the Ripper", "OSINT Tools", "Social Engineering Awareness"],
  },
  {
    domain: "Detection & Monitoring",
    skills: ["SIEM Rule Writing", "Detection Engineering", "Alert Tuning", "MITRE ATT&CK", "Sigma Rules", "YARA Rules", "Log Correlation"],
  },
  {
    domain: "Compliance & Governance",
    skills: ["NIST CSF", "CIS Controls", "ISO 27001 Awareness", "PCI-DSS Awareness", "Risk Assessments", "Policy Documentation", "Audit Support"],
  },
  {
    domain: "Collaboration & Documentation",
    skills: ["Technical Writing", "Confluence", "Jira", "Git/GitHub", "Markdown", "Runbook Development", "Knowledge Base Management"],
  },
];

const allDomains = ["All", ...skillCategories.map((c) => c.domain)];

const SkillsSection = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = skillCategories
    .filter((c) => filter === "All" || c.domain === filter)
    .map((c) => ({
      ...c,
      skills: c.skills.filter((s) =>
        s.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((c) => c.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-heading text-sm tracking-widest mb-3">04 // CAPABILITIES</p>
          <h2 className="section-title mb-4">Technical Toolstack</h2>
          <p className="section-subtitle">
            Searchable, categorized skill matrix across security domains.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md bg-secondary border border-border rounded px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 font-body"
          />
          <div className="flex flex-wrap gap-2">
            {allDomains.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-3 py-1 text-xs font-heading rounded transition-all ${
                  filter === d
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-secondary text-muted-foreground hover:text-foreground border border-transparent"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((category, i) => (
            <motion.div
              key={category.domain}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="glass-card p-5"
            >
              <h3 className="font-heading font-semibold text-sm text-primary mb-3">{category.domain}</h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    layout
                    className="cyber-chip text-[11px]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
