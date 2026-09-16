import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Award,
  Sparkles,
  Bot,
  Terminal,
  Cpu,
  Layers,
  Code2,
  ExternalLink,
  Zap,
  Brain,
  ShieldCheck,
} from 'lucide-react';
import './Home.css';

interface HomeProps {
  onOpenAI: () => void;
  onOpenCertModal: (certId: number) => void;
}

const PHRASES = [
  'Building Autonomous AI Agents & Neural Systems...',
  'Architecting Full-Stack Scalable Applications...',
  'Certified in Oracle AI & AWS Cloud Infrastructure...',
  'B.Tech AIML Student @ Parul University (2024-2028)...',
];

const Home: React.FC<HomeProps> = ({ onOpenAI, onOpenCertModal }) => {
  // Terminal typewriter effect
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Interactive AI Playground state
  const [playgroundInput, setPlaygroundInput] = useState('Build an intelligent agent that analyzes market sentiment.');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    tokens: number;
    sentiment: string;
    modelSuggestion: string;
    pipeline: string[];
  } | null>(null);

  useEffect(() => {
    const handleType = () => {
      const fullText = PHRASES[currentPhraseIdx];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentPhraseIdx((prev) => (prev + 1) % PHRASES.length);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 30 : 65);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIdx]);

  // Handle playground simulate
  const handleSimulateAI = () => {
    if (!playgroundInput.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      const words = playgroundInput.trim().split(/\s+/).length;
      setAnalysisResult({
        tokens: Math.round(words * 1.35),
        sentiment: playgroundInput.toLowerCase().includes('agent') || playgroundInput.toLowerCase().includes('intelligent') ? 'Complex Agentic Query' : 'Standard Prompt Task',
        modelSuggestion: 'Gemini 1.5 Pro / GPT-4o with Tool-Calling & Vector RAG',
        pipeline: ['Token Embeddings', 'Vector Search (FAISS/Pinecone)', 'LLM Agent Reasoning', 'Action Dispatcher'],
      });
      setIsAnalyzing(false);
    }, 500);
  };

  const featuredProjects = [
    {
      id: 8,
      title: 'FarmX - AI Agri Marketplace',
      tag: 'AI-Driven Demand Forecasting & Marketplace',
      category: 'Python / FastAPI / Scikit-Learn / React',
      desc: 'Smart agritech platform empowering farmers with AI-driven crop demand forecasting, direct commercial buyer trading, Razorpay payments, and Google Maps tracking.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=740&q=80',
      live: 'https://farm-x-pied.vercel.app/',
      github: 'https://github.com/Gopal03-suri/FarmX',
      badge: 'Flagship AI Project',
    },
    {
      id: 5,
      title: 'RoomSetu Platform',
      tag: 'AI-Enabled Accommodation Platform',
      category: 'Full-Stack / React / Node',
      desc: 'Smart platform that helps students & professionals find affordable rooms and compatible roommates with role-based dashboards.',
      image: 'https://img.freepik.com/premium-psd/real-estate-hotel-booking-web-banner-social-media-facebook-cover-template_169307-2534.jpg?w=740',
      github: 'https://github.com/Gopal03-suri/RoomSetu',
      badge: 'Featured Project',
    },
    {
      id: 7,
      title: 'TaskFlow Pro',
      tag: 'Kanban Agile Management',
      category: 'Django / Python / Web',
      desc: 'Collaborative Kanban board workflow engine enabling teams to organize tasks, track sprints, and visualize productivity bottlenecks.',
      image: 'https://img.freepik.com/premium-vector/tasks-landing-page-design-website-banner-vector-template-task-management-workflow-checklist-planning_453374-331.jpg?w=826',
      github: 'https://github.com/Gopal03-suri/TaskFlow',
      badge: 'Workflow Engine',
    },
    {
      id: 1,
      title: 'ATM Request System',
      tag: 'Banking Core Engine',
      category: 'Java / OOP / Security',
      desc: 'Secure transaction processing engine handling authentication, encrypted balance transactions, and account management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center',
      live: 'https://gopal974.github.io/ATM-system/',
      github: 'https://github.com/gopal974/ATM-system',
      badge: 'Live Demo',
    },
  ];

  return (
    <div className="home-view">
      {/* Background Ambient Orbs */}
      <div className="ambient-glow-orb orb-cyan"></div>
      <div className="ambient-glow-orb orb-purple"></div>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Col: Pitch & Identity */}
            <motion.div
              className="hero-intro"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="status-pill-row">
                <span className="cyber-badge emerald">
                  <span className="pulse-dot"></span> AVAILABLE FOR AI & FULL-STACK ROLES
                </span>
                <span className="cyber-badge purple">
                  <Brain size={14} /> AI/ML '28 @ PARUL UNIV
                </span>
              </div>

              <h1 className="hero-main-title">
                Engineering <br />
                <span className="gradient-text">Intelligent AI Systems</span> <br />
                & Modern Web Apps.
              </h1>

              {/* Terminal Subtitle */}
              <div className="hero-terminal-box">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span className="terminal-title">gopal@neural-core:~</span>
                </div>
                <div className="terminal-content font-mono">
                  <span className="terminal-prompt">$</span>{' '}
                  <span className="terminal-typed-text">{currentText}</span>
                  <span className="terminal-cursor">|</span>
                </div>
              </div>

              <p className="hero-description">
                Hi! I am <strong className="highlight-white">Gopal Kumar Purbey</strong>, a dedicated Computer Science student specializing in Artificial Intelligence & Machine Learning. I combine theoretical machine learning fundamentals with modern full-stack web engineering to build high-performance, real-world digital solutions.
              </p>

              {/* Action Buttons */}
              <div className="hero-action-buttons">
                <Link to="/projects" className="btn-cyber-primary">
                  Explore Projects <ArrowRight size={18} />
                </Link>
                <a
                  href={process.env.PUBLIC_URL + '/Resume Gopal.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-secondary"
                >
                  <Download size={18} /> Get Resume
                </a>
                <button onClick={onOpenAI} className="btn-cyber-accent">
                  <Bot size={18} /> Ask Gopal-AI
                </button>
              </div>

              {/* Verified Social Matrix */}
              <div className="hero-social-strip">
                <span className="social-label font-mono">CONNECT:</span>
                <div className="social-icon-links">
                  <a href="https://github.com/Gopal03-suri" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/gopal-kumar-purbey-ba7550314" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://x.com/Gopal76328206" target="_blank" rel="noopener noreferrer" title="Twitter/X">
                    <Twitter size={20} />
                  </a>
                  <a href="mailto:gopalpurbey708@gmail.com" title="Email">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Col: 3D Hologram Avatar Card */}
            <motion.div
              className="hero-avatar-wrapper"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="avatar-3d-card">
                {/* Glowing Aura Ring */}
                <div className="avatar-glow-ring"></div>

                {/* Profile Image Frame */}
                <div className="avatar-frame">
                  <img
                    src={process.env.PUBLIC_URL + '/gopal.jpg'}
                    alt="Gopal Kumar Purbey"
                    className="avatar-photo"
                  />
                  <div className="avatar-overlay-gradient"></div>
                </div>

                {/* Floating Hologram Badges */}
                <motion.div
                  className="holo-badge holo-top-right"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Award size={18} className="holo-icon oracle" />
                  <div>
                    <span className="holo-title">Oracle AI Certified</span>
                    <span className="holo-sub">Foundation Associate '25</span>
                  </div>
                </motion.div>

                <motion.div
                  className="holo-badge holo-bottom-left"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <Cpu size={18} className="holo-icon aws" />
                  <div>
                    <span className="holo-title">AWS Academy Graduate</span>
                    <span className="holo-sub">20+ Hrs Cloud Training</span>
                  </div>
                </motion.div>

                <motion.div
                  className="holo-badge holo-bottom-right"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <Zap size={18} className="holo-icon gemini" />
                  <div>
                    <span className="holo-title">GenAI & Agent Dev</span>
                    <span className="holo-sub">PyTorch • LangChain</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METRICS & CAPABILITIES BENTO */}
      <section className="section metrics-section">
        <div className="container">
          <div className="metrics-bento-grid">
            <motion.div
              className="metric-card cyber-card"
              whileHover={{ y: -5 }}
            >
              <div className="metric-icon-box">
                <Award size={26} className="text-cyan" />
              </div>
              <div className="metric-val">15+</div>
              <div className="metric-title">Verified Certifications</div>
              <p className="metric-desc">Oracle Cloud, AWS Academy, Google Gemini, IIT Summits & AICTE.</p>
            </motion.div>

            <motion.div
              className="metric-card cyber-card"
              whileHover={{ y: -5 }}
            >
              <div className="metric-icon-box">
                <Code2 size={26} className="text-purple" />
              </div>
              <div className="metric-val">7+</div>
              <div className="metric-title">Engineered Projects</div>
              <p className="metric-desc">Production web apps, AI tools, task boards & transactional systems.</p>
            </motion.div>

            <motion.div
              className="metric-card cyber-card"
              whileHover={{ y: -5 }}
            >
              <div className="metric-icon-box">
                <Brain size={26} className="text-emerald" />
              </div>
              <div className="metric-val">B.Tech AIML</div>
              <div className="metric-title">Parul University ('24-'28)</div>
              <p className="metric-desc">Specialized curriculum in Machine Learning, Deep Neural Nets & Algorithms.</p>
            </motion.div>

            <motion.div
              className="metric-card cyber-card"
              whileHover={{ y: -5 }}
            >
              <div className="metric-icon-box">
                <ShieldCheck size={26} className="text-amber" />
              </div>
              <div className="metric-val">100%</div>
              <div className="metric-title">Commitment & Drive</div>
              <p className="metric-desc">Passionate about cutting-edge tech, hackathons, and continuous growth.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE AI NEURAL PLAYGROUND (Unique Shocking Feature) */}
      <section className="section ai-playground-section">
        <div className="container">
          <div className="playground-container cyber-card">
            <div className="playground-header">
              <div className="playground-title-area">
                <span className="cyber-badge">
                  <Sparkles size={14} /> LIVE INTERACTIVE AI PIPELINE
                </span>
                <h2>Test Gopal's AI Agent Pipeline Visualizer</h2>
                <p>
                  Type any task prompt below to see how an AI Agent system analyzes tokens, chooses LLM architectures, and generates an execution plan.
                </p>
              </div>
            </div>

            <div className="playground-interactive-grid">
              <div className="playground-input-side">
                <label className="font-mono playground-label">ENTER PROMPT OR TASK FOR AI AGENT:</label>
                <div className="playground-textarea-wrap">
                  <textarea
                    value={playgroundInput}
                    onChange={(e) => setPlaygroundInput(e.target.value)}
                    rows={3}
                    className="playground-textarea"
                    placeholder="E.g., Design a real-time room matching recommendation model with sentiment evaluation..."
                  />
                  <button
                    onClick={handleSimulateAI}
                    disabled={isAnalyzing}
                    className="btn-cyber-primary playground-run-btn"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="spinner" style={{ width: 18, height: 18 }}></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Zap size={16} /> Run Pipeline Analysis
                      </>
                    )}
                  </button>
                </div>

                <div className="playground-quick-prompts">
                  <span className="font-mono">Quick Try:</span>
                  <button
                    onClick={() => setPlaygroundInput('Autonomous resume screening agent using vector embeddings.')}
                  >
                    Resume Screener Agent
                  </button>
                  <button
                    onClick={() => setPlaygroundInput('Predict student exam scores using multi-variable regression.')}
                  >
                    ML Score Predictor
                  </button>
                </div>
              </div>

              <div className="playground-output-side font-mono">
                <div className="output-console-header">
                  <Terminal size={14} />
                  <span>NEURAL PIPELINE TELEMETRY</span>
                </div>

                {analysisResult ? (
                  <div className="output-results">
                    <div className="telemetry-row">
                      <span className="telemetry-key">Estimated Tokens:</span>
                      <span className="telemetry-val text-cyan">{analysisResult.tokens} tokens</span>
                    </div>
                    <div className="telemetry-row">
                      <span className="telemetry-key">Task Classification:</span>
                      <span className="telemetry-val text-emerald">{analysisResult.sentiment}</span>
                    </div>
                    <div className="telemetry-row">
                      <span className="telemetry-key">Recommended Stack:</span>
                      <span className="telemetry-val text-purple">{analysisResult.modelSuggestion}</span>
                    </div>
                    <div className="pipeline-steps-wrap">
                      <span className="telemetry-key">Agentic Workflow:</span>
                      <div className="pipeline-steps">
                        {analysisResult.pipeline.map((step, idx) => (
                          <div key={idx} className="pipeline-step-item">
                            <span className="step-num">{idx + 1}</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="output-idle-msg">
                    <Bot size={36} className="idle-bot" />
                    <p>Click "Run Pipeline Analysis" to simulate telemetry execution.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SHOWCASE */}
      <section className="section projects-preview-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="cyber-badge purple">
              <Layers size={14} /> PORTFOLIO SPOTLIGHT
            </span>
            <h2>Featured Engineering Work</h2>
            <p>A selection of full-stack platforms and software applications built by Gopal.</p>
          </div>

          <div className="featured-projects-grid">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="featured-proj-card cyber-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="proj-card-img-wrap">
                  <img src={project.image} alt={project.title} />
                  <span className="proj-card-badge">{project.badge}</span>
                </div>
                <div className="proj-card-body">
                  <span className="proj-category font-mono">{project.category}</span>
                  <h3 className="proj-title">{project.title}</h3>
                  <p className="proj-desc">{project.desc}</p>
                  <div className="proj-card-actions">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-cyber-primary btn-sm">
                        <ExternalLink size={15} /> Live App
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-cyber-secondary btn-sm">
                        <Github size={15} /> Repo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="view-all-projects-cta">
            <Link to="/projects" className="btn-cyber-primary">
              View All 7+ Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* VERIFIED CREDENTIALS STRIP */}
      <section className="section certs-strip-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="cyber-badge emerald">
              <Award size={14} /> VERIFIED BY INDUSTRY LEADERS
            </span>
            <h2>Top Certifications & Summits</h2>
            <p>Credentials accredited by Oracle, AWS, Google, and premier institutes.</p>
          </div>

          <div className="credentials-reel-grid">
            <div className="cred-badge-card cyber-card" onClick={() => onOpenCertModal(1)}>
              <div className="cred-icon-wrap oracle-glow">☁️</div>
              <h4>Oracle Cloud AI 2025</h4>
              <p>AI Foundation Associate Certified</p>
              <span className="cred-action-link">View Certificate & Badge →</span>
            </div>

            <div className="cred-badge-card cyber-card" onClick={() => onOpenCertModal(2)}>
              <div className="cred-icon-wrap aws-glow">⚡</div>
              <h4>AWS Academy Graduate</h4>
              <p>Cloud Foundation (20+ Hours)</p>
              <span className="cred-action-link">View Certificate & Badge →</span>
            </div>

            <div className="cred-badge-card cyber-card" onClick={() => onOpenCertModal(13)}>
              <div className="cred-icon-wrap ai-glow">🤖</div>
              <h4>Generative AI Workshop</h4>
              <p>Parul University CSE Dept.</p>
              <span className="cred-action-link">View Certificate →</span>
            </div>

            <div className="cred-badge-card cyber-card" onClick={() => onOpenCertModal(14)}>
              <div className="cred-icon-wrap iit-glow">🚀</div>
              <h4>AICTE IndiaAI Pre-Summit</h4>
              <p>Ministry of Education & IndiaAI</p>
              <span className="cred-action-link">View Certificate →</span>
            </div>
          </div>

          <div className="view-all-certs-cta">
            <Link to="/certifications" className="btn-cyber-secondary">
              Browse All 15+ Certifications <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
