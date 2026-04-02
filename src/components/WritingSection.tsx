import { motion } from "framer-motion";
import { FileText, Search, Tag } from "lucide-react";
import { useState } from "react";

const articles = [
  {
    title: "Building a Detection Engineering Workflow from Scratch",
    type: "Write-Up",
    tags: ["Detection Engineering", "SIEM", "MITRE ATT&CK"],
    excerpt: "How I structured a repeatable process for developing, testing, and deploying SIEM detection rules in a home lab environment.",
  },
  {
    title: "Vulnerability Management: Process Over Tools",
    type: "Article",
    tags: ["Vulnerability Management", "Process", "Risk"],
    excerpt: "Why a disciplined vulnerability management process matters more than the scanning platform you choose.",
  },
  {
    title: "Home Lab Architecture for Security Practitioners",
    type: "Guide",
    tags: ["Home Lab", "Infrastructure", "Learning"],
    excerpt: "A practical guide to designing a segmented home lab for offensive and defensive security practice.",
  },
  {
    title: "Automating Security Reports with Python",
    type: "Tutorial",
    tags: ["Python", "Automation", "Reporting"],
    excerpt: "Using Python to automate vulnerability scan report generation and distribution to stakeholders.",
  },
  {
    title: "OSINT Methodology: A Structured Approach",
    type: "Research",
    tags: ["OSINT", "Reconnaissance", "Methodology"],
    excerpt: "Documenting a repeatable methodology for open-source intelligence gathering in security investigations.",
  },
  {
    title: "Incident Response Playbook Design Principles",
    type: "Guide",
    tags: ["Incident Response", "Playbooks", "DFIR"],
    excerpt: "Key principles for designing incident response playbooks that are clear, actionable, and maintainable.",
  },
];

const allTags = [...new Set(articles.flatMap((a) => a.tags))];

const WritingSection = () => {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = articles.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTag = !selectedTag || a.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

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
          <p className="text-primary font-heading text-sm tracking-widest mb-3">09 // KNOWLEDGE</p>
          <h2 className="section-title mb-4">Writing & Research</h2>
          <p className="section-subtitle">
            Technical write-ups, guides, and research that document what I learn and build.
          </p>
        </motion.div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-secondary border border-border rounded pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 text-xs font-heading rounded transition-all ${!selectedTag ? "bg-primary/20 text-primary border border-primary/30" : "bg-secondary text-muted-foreground border border-transparent"}`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1 text-xs font-heading rounded transition-all ${selectedTag === tag ? "bg-primary/20 text-primary border border-primary/30" : "bg-secondary text-muted-foreground border border-transparent"}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="glass-card p-5 card-hover cursor-pointer group"
            >
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-heading text-primary bg-primary/10 px-2 py-0.5 rounded">{article.type}</span>
              </div>
              <h3 className="font-heading font-semibold text-sm text-foreground mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{article.excerpt}</p>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-[10px] text-primary/60">#{tag.replace(/\s+/g, '')}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
