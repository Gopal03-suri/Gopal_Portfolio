import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Sparkles, Terminal, Code2 } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  onOpenAI: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenAI }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cyber-footer">
      <div className="container">
        {/* Top Pre-Footer Callout */}
        <div className="footer-cta-card">
          <div className="cta-left">
            <span className="cyber-badge emerald">
              <span className="pulse-dot"></span> OPEN FOR OPPORTUNITIES
            </span>
            <h2>Let’s engineer the next breakthrough in AI & Software.</h2>
            <p>
              Seeking AI/ML internships, Full-Stack engineering roles, and innovative collaborative ventures.
            </p>
          </div>
          <div className="cta-right">
            <Link to="/contact" className="btn-cyber-primary">
              Initialize Project <ArrowUpRight size={18} />
            </Link>
            <button onClick={onOpenAI} className="btn-cyber-secondary">
              <Sparkles size={16} /> Chat With Gopal-AI
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="logo-badge">
                <Code2 size={20} />
              </div>
              <span className="logo-title">Gopal Kumar Purbey</span>
            </div>
            <p className="brand-bio">
              AI/ML Engineering Student at Parul University ('28) & Full-Stack Developer specializing in Generative AI, Agentic Workflows, and scalable modern web applications.
            </p>
            <div className="system-status-indicator">
              <Terminal size={14} className="terminal-icon" />
              <span>SYSTEM: ONLINE // OCI AI CERTIFIED</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="footer-links-col">
            <h4>EXPLORE</h4>
            <ul>
              <li><Link to="/">Home Console</Link></li>
              <li><Link to="/about">AI Journey & Bio</Link></li>
              <li><Link to="/projects">Project Showcase</Link></li>
              <li><Link to="/skills">Skills & Stack</Link></li>
              <li><Link to="/certifications">Verified Credentials</Link></li>
            </ul>
          </div>

          {/* Featured Projects */}
          <div className="footer-links-col">
            <h4>HIGHLIGHTS</h4>
            <ul>
              <li><a href="https://github.com/Gopal03-suri/FarmX" target="_blank" rel="noopener noreferrer">FarmX AI Marketplace</a></li>
              <li><a href="https://github.com/Gopal03-suri/RoomSetu" target="_blank" rel="noopener noreferrer">RoomSetu Platform</a></li>
              <li><a href="https://github.com/Gopal03-suri/TaskFlow" target="_blank" rel="noopener noreferrer">TaskFlow Pro Kanban</a></li>
              <li><a href="https://github.com/Gopal03-suri/Event_management" target="_blank" rel="noopener noreferrer">Vibecheck Events</a></li>
              <li><a href="https://gopal974.github.io/ATM-system/" target="_blank" rel="noopener noreferrer">ATM Request Engine</a></li>
            </ul>
          </div>

          {/* Social Network */}
          <div className="footer-links-col">
            <h4>CONNECT</h4>
            <div className="footer-social-matrix">
              <a href="https://github.com/Gopal03-suri" target="_blank" rel="noopener noreferrer" className="social-pill github">
                <Github size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/gopal-kumar-purbey-ba7550314" target="_blank" rel="noopener noreferrer" className="social-pill linkedin">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://x.com/Gopal76328206" target="_blank" rel="noopener noreferrer" className="social-pill twitter">
                <Twitter size={16} /> Twitter / X
              </a>
              <a href="mailto:gopalpurbey708@gmail.com" className="social-pill email">
                <Mail size={16} /> Email Direct
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {currentYear} Gopal Kumar Purbey. Built with React 18, TypeScript & Framer Motion.</p>
          <div className="footer-tagline">
            <span>Designed for the Future of AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;