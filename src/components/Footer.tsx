import { Shield, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-12 relative">
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          <span className="font-heading text-sm text-foreground">
            Daniel Elizondo
          </span>
          <span className="text-muted-foreground text-sm">·</span>
          <span className="text-muted-foreground text-sm">
            Information Security Engineer
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#about" className="text-xs text-muted-foreground hover:text-primary transition-colors font-heading">About</a>
          <a href="#projects" className="text-xs text-muted-foreground hover:text-primary transition-colors font-heading">Projects</a>
          <a href="#experience" className="text-xs text-muted-foreground hover:text-primary transition-colors font-heading">Experience</a>
          <a href="#contact" className="text-xs text-muted-foreground hover:text-primary transition-colors font-heading">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:daniel@example.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Daniel Elizondo. Built with precision and purpose.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
