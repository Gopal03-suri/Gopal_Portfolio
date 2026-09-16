import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle2,
  Copy,
  Terminal,
  Sparkles,
  Bot,
  Zap,
} from 'lucide-react';
import './Contact.css';

interface ContactProps {
  onOpenAI: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenAI }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending transmission
    await new Promise((resolve) => setTimeout(resolve, 1400));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const contactCards = [
    {
      icon: <Mail size={22} className="text-cyan" />,
      title: 'Email Address',
      value: 'gopalpurbey708@gmail.com',
      copyValue: 'gopalpurbey708@gmail.com',
      actionLabel: 'Click to Copy Email',
      href: 'mailto:gopalpurbey708@gmail.com',
    },
    {
      icon: <Phone size={22} className="text-emerald" />,
      title: 'Mobile / WhatsApp',
      value: '+91 7827008357',
      copyValue: '+917827008357',
      actionLabel: 'Click to Copy Phone',
      href: 'tel:+917827008357',
    },
    {
      icon: <MapPin size={22} className="text-purple" />,
      title: 'Campus & Location',
      value: 'Gujarat, India (Parul University)',
      copyValue: 'Gujarat, India',
      actionLabel: 'Location Base',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={22} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gopal-kumar-purbey-ba7550314',
      handle: 'gopal-kumar-purbey',
      color: '#0077b5',
    },
    {
      icon: <Github size={22} />,
      name: 'GitHub',
      url: 'https://github.com/Gopal03-suri',
      handle: 'Gopal03-suri',
      color: '#333333',
    },
    {
      icon: <Twitter size={22} />,
      name: 'Twitter / X',
      url: 'https://x.com/Gopal76328206',
      handle: '@Gopal76328206',
      color: '#1da1f2',
    },
  ];

  return (
    <div className="contact-page page-container">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-title-wrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="cyber-badge emerald">
            <Zap size={14} /> TRANSMISSION CONSOLE
          </span>
          <h1>Get In <span className="gradient-text">Direct Touch</span></h1>
          <p>
            Whether you have an exciting AI/ML internship opportunity, a project proposal, or just want to discuss tech, I’d love to connect.
          </p>
        </motion.div>

        {/* Main 2-Col Grid */}
        <div className="contact-main-grid">
          {/* Left Column: Direct Info & Social Matrix */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Card */}
            <div className="telemetry-status-card cyber-card">
              <div className="telemetry-head">
                <span className="pulse-dot"></span>
                <span className="font-mono telemetry-status-text">DISPATCH READY // LATENCY: &lt; 24H</span>
              </div>
              <h3>Open for AI/ML Internships & Collaborations</h3>
              <p>
                Currently seeking dynamic software engineering internships, research fellowships, and freelance projects for 2025/2026.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="contact-cards-stack">
              {contactCards.map((card, idx) => (
                <div
                  key={idx}
                  className="contact-direct-card cyber-card"
                  onClick={() => copyToClipboard(card.copyValue, card.title)}
                >
                  <div className="direct-card-icon">{card.icon}</div>
                  <div className="direct-card-body">
                    <span className="direct-card-title">{card.title}</span>
                    <span className="direct-card-val">{card.value}</span>
                  </div>
                  <button
                    className="copy-btn"
                    title={card.actionLabel}
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(card.copyValue, card.title);
                    }}
                  >
                    {copiedField === card.title ? (
                      <CheckCircle2 size={16} className="text-emerald" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Social Network */}
            <div className="social-connect-card cyber-card">
              <h4>Digital Profiles</h4>
              <div className="social-connect-grid">
                {socialLinks.map((soc, sIdx) => (
                  <a
                    key={sIdx}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-connect-link"
                  >
                    <div className="soc-icon-wrap">{soc.icon}</div>
                    <div className="soc-info">
                      <span className="soc-name">{soc.name}</span>
                      <span className="soc-handle font-mono">{soc.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Assistant Banner */}
            <div className="assistant-quick-banner cyber-card" onClick={onOpenAI}>
              <div className="ai-banner-icon">
                <Bot size={24} className="text-cyan" />
              </div>
              <div className="ai-banner-text">
                <h4>Have a quick query?</h4>
                <p>Chat directly with Gopal-AI for instant answers.</p>
              </div>
              <Sparkles size={18} className="text-purple" />
            </div>
          </motion.div>

          {/* Right Column: Cyber Message Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="message-console-card cyber-card">
              <div className="console-header-bar font-mono">
                <Terminal size={14} />
                <span>SECURE_DISPATCH_PROTOCOL.exe</span>
              </div>

              <h2>Send an Encrypted Message</h2>
              <p className="console-subtitle">
                Fill out the transmission fields below to send a direct notification.
              </p>

              {submitted && (
                <motion.div
                  className="success-alert-box"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle2 size={20} className="text-emerald" />
                  <div>
                    <strong>Transmission Received!</strong>
                    <p>Thank you for reaching out. I will respond to your message promptly.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="cyber-form">
                <div className="form-row-dual">
                  <div className="cyber-input-group">
                    <label htmlFor="name" className="font-mono">YOUR NAME *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Alex Morgan"
                      className="cyber-input"
                    />
                  </div>

                  <div className="cyber-input-group">
                    <label htmlFor="email" className="font-mono">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="alex@company.com"
                      className="cyber-input"
                    />
                  </div>
                </div>

                <div className="cyber-input-group">
                  <label htmlFor="subject" className="font-mono">SUBJECT *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Project Inquiry / Internship Opportunity"
                    className="cyber-input"
                  />
                </div>

                <div className="cyber-input-group">
                  <label htmlFor="message" className="font-mono">MESSAGE TRANSMISSION *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Describe your project, team, or opportunity in detail..."
                    className="cyber-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-cyber-primary submit-full-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner" style={{ width: 18, height: 18 }}></div>
                      Dispatching Transmission...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Transmit Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;