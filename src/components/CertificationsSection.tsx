import { motion } from "framer-motion";
import { Award, BookOpen, Target, TrendingUp } from "lucide-react";

const certifications = [
  { name: "CompTIA Security+", status: "Completed", type: "cert" },
  { name: "CompTIA Network+", status: "Completed", type: "cert" },
  { name: "CompTIA A+", status: "Completed", type: "cert" },
  { name: "CySA+ (CompTIA)", status: "In Progress", type: "cert" },
  { name: "GIAC GSEC", status: "Planned", type: "cert" },
  { name: "OSCP", status: "Roadmap", type: "cert" },
];

const learning = [
  { name: "TryHackMe", detail: "Active — offensive & defensive paths", type: "platform" },
  { name: "Hack The Box", detail: "Active — penetration testing labs", type: "platform" },
  { name: "LetsDefend", detail: "SOC analyst simulation & detection practice", type: "platform" },
  { name: "SANS Reading Room", detail: "Ongoing threat research & whitepapers", type: "resource" },
  { name: "Home Lab", detail: "Continuous build — AD, Splunk, Kali, DFIR tools", type: "platform" },
  { name: "Python for Security", detail: "Automation, scripting, tool development", type: "skill" },
];

const statusColors: Record<string, string> = {
  "Completed": "text-cyber-green bg-cyber-green/10 border-cyber-green/20",
  "In Progress": "text-cyber-amber bg-cyber-amber/10 border-cyber-amber/20",
  "Planned": "text-primary bg-primary/10 border-primary/20",
  "Roadmap": "text-muted-foreground bg-secondary border-border",
};

const CertificationsSection = () => (
  <section id="certifications" className="py-24 relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-primary font-heading text-sm tracking-widest mb-3">08 // GROWTH</p>
        <h2 className="section-title mb-4">Certifications & Learning</h2>
        <p className="section-subtitle">
          Continuous investment in validated skills and hands-on practice.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="font-heading font-semibold text-foreground">Certifications</h3>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
              >
                <span className="text-sm text-foreground/90">{cert.name}</span>
                <span className={`text-[10px] font-heading px-2 py-0.5 rounded-full border ${statusColors[cert.status]}`}>
                  {cert.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="font-heading font-semibold text-foreground">Active Learning</h3>
          </div>
          <div className="space-y-3">
            {learning.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="py-2 border-b border-border/30 last:border-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/90">{item.name}</span>
                  <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CertificationsSection;
