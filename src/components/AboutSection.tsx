import { motion } from "framer-motion";
import { useState } from "react";
import { User, Crosshair, Brain, Wrench, BookOpen } from "lucide-react";

const tabs = [
  {
    id: "story",
    label: "My Story",
    icon: User,
    content: "I came to cybersecurity through curiosity—first about how systems work, then about how they break. My background spans infrastructure administration, network security, and hands-on vulnerability management. I'm not someone who checked a box with a certification and stopped. I build home labs, break things intentionally, study adversary tradecraft, and treat every engagement as a chance to learn. Security isn't a job title for me—it's how I think about every system I touch."
  },
  {
    id: "what",
    label: "What I Do",
    icon: Crosshair,
    content: "I operate across the security lifecycle: identifying vulnerabilities, hardening infrastructure, building detection logic, coordinating remediation, supporting incident response, and improving security posture through automation and process design. I work with SIEM platforms, EDR solutions, vulnerability scanners, network monitoring tools, and scripting to reduce risk and strengthen defenses at scale."
  },
  {
    id: "think",
    label: "How I Think",
    icon: Brain,
    content: "I approach security as an engineering discipline, not a compliance exercise. Every control should map to a real threat. Every alert should be actionable. I think in terms of attack paths, blast radius, and time-to-detect. I borrow from adversary tradecraft to inform defensive strategy—purple team thinking applied to everyday operations. I prioritize what reduces risk the most, not what looks best on a slide deck."
  },
  {
    id: "building",
    label: "What I'm Building",
    icon: Wrench,
    content: "Right now I'm focused on building out detection engineering workflows, expanding my home lab with segmented attack/defense environments, and developing security automation pipelines. I'm also documenting my work through project write-ups and technical guides—because the ability to communicate security concepts clearly is just as critical as the technical execution."
  },
  {
    id: "learning",
    label: "What I'm Learning",
    icon: BookOpen,
    content: "Currently deepening my expertise in threat detection engineering, cloud security architecture, and advanced incident response. I'm studying adversary emulation frameworks, expanding my scripting capabilities with Python and PowerShell for security automation, and working toward additional certifications that validate hands-on skills over memorized theory."
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("story");
  const activeContent = tabs.find((t) => t.id === activeTab);

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-heading text-sm tracking-widest mb-3">01 // ABOUT</p>
          <h2 className="section-title mb-4">The Engineer Behind the Terminal</h2>
          <p className="section-subtitle">
            Security-minded engineer with a builder's mentality and a commitment to continuous improvement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 md:p-8"
        >
          {/* Tabs */}
          <div className="flex flex-wrap gap-1 mb-8 border-b border-border/50 pb-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-heading rounded transition-all ${
                    activeTab === tab.id
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-foreground/80 leading-relaxed text-base md:text-lg max-w-4xl"
          >
            {activeContent?.content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
