import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Code2,
  Brain,
  Cpu,
  Sparkles,
  Zap,
  CheckCircle2,
  Terminal,
  Download,
  ArrowRight,
  Shield,
  Layers,
  Compass,
} from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const educationTimeline = [
    {
      degree: 'B.Tech in Computer Science Engineering (Artificial Intelligence & Machine Learning)',
      institution: 'Parul University, Gujarat',
      year: '2024 - 2028',
      status: 'Current Pursuing',
      highlight: 'Specialization in Machine Learning, Deep Learning, Algorithm Design & AI Agent Architectures.',
      icon: <Brain size={22} className="text-cyan" />,
    },
    {
      degree: 'Senior Secondary Education (Class XII - PCM)',
      institution: 'Mount Carmel English School',
      year: '2022 - 2024',
      status: 'Completed',
      highlight: 'Strong foundation in Advanced Mathematics, Physics, and Computer Fundamentals.',
      icon: <GraduationCap size={22} className="text-purple" />,
    },
    {
      degree: 'Secondary School Certificate (Class X)',
      institution: 'Delhi Public School',
      year: '2020 - 2022',
      status: 'Completed',
      highlight: 'Excellence in mathematics, scientific reasoning, and analytical problem solving.',
      icon: <CheckCircle2 size={22} className="text-emerald" />,
    },
  ];

  const pillars = [
    {
      title: 'Autonomous AI Agents',
      desc: 'Developing multi-agent workflows, prompt chains, LLM tool integration, and domain-specific AI automation.',
      icon: <Cpu size={24} className="text-cyan" />,
    },
    {
      title: 'Deep Learning & ML Fundamentals',
      desc: 'Hands-on exploration of Neural Networks, PyTorch models, NLP tokenization, and predictive analytics.',
      icon: <Brain size={24} className="text-purple" />,
    },
    {
      title: 'Enterprise Full-Stack Architecture',
      desc: 'Crafting responsive React/TypeScript interfaces backed by robust Node.js, Express & Django API systems.',
      icon: <Code2 size={24} className="text-emerald" />,
    },
    {
      title: 'Cloud & Infrastructure',
      desc: 'Oracle Cloud (OCI AI Certified) and AWS Cloud Foundation knowledge for resilient, scalable deployments.',
      icon: <Layers size={24} className="text-amber" />,
    },
  ];

  const values = [
    {
      title: '01. Relentless Curiosity',
      text: 'Technology moves fast, especially in AI. I continuously study cutting-edge research, attend premier summits, and build hands-on prototypes.',
    },
    {
      title: '02. Engineering Excellence',
      text: 'Clean architecture, type safety, modular code, and high responsiveness are non-negotiable standards for every line of code I write.',
    },
    {
      title: '03. User-Centric Impact',
      text: 'The best AI and software systems solve tangible, real-world friction for real humans in an intuitive, frictionless manner.',
    },
  ];

  return (
    <div className="about-page page-container">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-title-wrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="cyber-badge purple">
            <Compass size={14} /> BIOGRAPHY & VISION
          </span>
          <h1>Engineering Behind <span className="gradient-text">The Neural Core</span></h1>
          <p>
            Bridging the gap between cutting-edge Artificial Intelligence research and intuitive modern software experiences.
          </p>
        </motion.div>

        {/* Bio Bento Section */}
        <motion.div
          className="about-bio-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Narrative Card */}
          <motion.div className="bio-narrative-card cyber-card" variants={itemVariants}>
            <div className="card-terminal-tag font-mono">
              <Terminal size={14} /> <span>GOPAL_KUMAR_PROFILE.json</span>
            </div>

            <h2>Hello, World! I am Gopal.</h2>
            <p>
              I am an AI/ML Computer Science student at <strong>Parul University</strong> with a deep passion for constructing intelligent software systems. My fascination with computing began with dismantling how logic flows through systems, which quickly evolved into building end-to-end full-stack applications and experimenting with neural network architectures.
            </p>
            <p>
              Today, I specialize in combining <strong>Generative AI & Agentic Workflows</strong> with modern web frameworks like React, TypeScript, Python, and cloud infrastructure (Oracle Cloud & AWS). I strive to create software that doesn't just function—it thinks, scales, and creates massive value.
            </p>

            <div className="personal-meta-grid font-mono">
              <div className="meta-pill">
                <MapPin size={16} className="text-cyan" />
                <span>Gujarat, India</span>
              </div>
              <div className="meta-pill">
                <Calendar size={16} className="text-purple" />
                <span>Age: 20 Years</span>
              </div>
              <div className="meta-pill">
                <Shield size={16} className="text-emerald" />
                <span>OCI AI Certified</span>
              </div>
            </div>

            <div className="bio-action-row">
              <a
                href={process.env.PUBLIC_URL + '/Resume Gopal.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber-primary"
              >
                <Download size={16} /> Download Full Resume
              </a>
              <Link to="/contact" className="btn-cyber-secondary">
                Let's Collaborate <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Right Image Frame Card */}
          <motion.div className="bio-image-card cyber-card" variants={itemVariants}>
            <div className="about-photo-wrapper">
              <img
                src={process.env.PUBLIC_URL + '/go.jpeg'}
                alt="Gopal Kumar Purbey"
                className="about-photo"
              />
              <div className="about-photo-overlay"></div>
              <div className="photo-corner-badge">
                <Sparkles size={16} /> AI/ML Engineer
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Pillars / Research Focus Areas */}
        <section className="about-pillars-section">
          <div className="section-title-wrap">
            <span className="cyber-badge">
              <Zap size={14} /> CORE DOMAINS
            </span>
            <h2>Areas of Specialization</h2>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                className="pillar-card cyber-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="pillar-icon-box">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Academic Journey Timeline */}
        <section className="about-education-section">
          <div className="section-title-wrap">
            <span className="cyber-badge emerald">
              <GraduationCap size={14} /> ACADEMIC TIMELINE
            </span>
            <h2>Education & Milestones</h2>
          </div>

          <div className="timeline-container">
            {educationTimeline.map((item, idx) => (
              <motion.div
                key={idx}
                className="timeline-item-card cyber-card"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="timeline-head">
                  <div className="timeline-icon-wrap">{item.icon}</div>
                  <div className="timeline-head-text">
                    <span className="timeline-year font-mono">{item.year}</span>
                    <span className="timeline-status-pill">{item.status}</span>
                  </div>
                </div>

                <h3 className="timeline-degree">{item.degree}</h3>
                <h4 className="timeline-institution">{item.institution}</h4>
                <p className="timeline-highlight">{item.highlight}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Principles / Engineering Values */}
        <section className="about-values-section">
          <div className="section-title-wrap">
            <span className="cyber-badge purple">
              <Shield size={14} /> PHILOSOPHY
            </span>
            <h2>Engineering Principles</h2>
          </div>

          <div className="values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-box cyber-card">
                <h3>{val.title}</h3>
                <p>{val.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;