import React from 'react';
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Gopal Kumar</h3>
            <p>Full Stack Developer & iOS Developer passionate about creating innovative solutions.</p>
            <div className="footer-social">
              <a href="https://github.com/gopal974" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/gopal-kumar" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:gopal.kumar@example.com">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/skills">Skills</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>More</h4>
            <ul>
              <li><a href="/certifications">Certifications</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <p>Available for freelance opportunities and collaborations.</p>
            <a href="/contact" className="footer-cta">
              Let's Work Together
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} Gopal Kumar. Made with <Heart size={16} className="heart" /> and <Code size={16} /> in India.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;