import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Layers,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'all' | 'ai' | 'web' | 'java' | 'django';
  categoryLabel: string;
  status: 'live' | 'in-dev';
  technologies: string[];
  highlights: string[];
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 8,
      title: 'FarmX - AI Agri Marketplace',
      tagline: 'AI-Driven Agricultural Marketplace & Demand Predictor',
      description:
        'An intelligent agritech marketplace connecting farmers directly with commercial buyers. Features product listings, cart & order management, Razorpay payment processing, Google Maps delivery tracking, and Scikit-Learn machine learning models for agricultural demand forecasting.',
      image:
        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=740&q=80',
      liveUrl: 'https://farm-x-pied.vercel.app/',
      githubUrl: 'https://github.com/Gopal03-suri/FarmX',
      category: 'ai',
      categoryLabel: 'AI & Full-Stack',
      status: 'live',
      technologies: ['Python', 'FastAPI', 'Scikit-Learn', 'React.js', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'Google Maps API'],
      highlights: [
        'AI-Driven Crop Demand Forecasting',
        'Direct Farmer-to-Buyer Marketplace',
        'Razorpay & Google Maps Live Tracking',
      ],
    },
    {
      id: 9,
      title: 'Banking Support Agent',
      tagline: 'Autonomous AI Agent for Financial Services',
      description:
        'An intelligent conversational AI support system built in Python and Jupyter to automate customer banking queries, account service routing, transaction inquiries, and financial intent classification with natural language understanding.',
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=740&q=80',
      githubUrl: 'https://github.com/Gopal03-suri/Banking_Support_Agent',
      category: 'ai',
      categoryLabel: 'AI & Jupyter Notebook',
      status: 'live',
      technologies: ['Python 3', 'Jupyter Notebook', 'NLP / LLM Workflows', 'Prompt Engineering', 'LangChain Concepts', 'Pandas'],
      highlights: [
        'Multi-turn Banking Query Resolution',
        'Financial Intent Classification',
        'Automated Customer Assistance Pipeline',
      ],
    },
    {
      id: 5,
      title: 'RoomSetu Platform',
      tagline: 'Smart Room & Roommate Discovery Ecosystem',
      description:
        'A comprehensive platform connecting students and working professionals with verified affordable rooms and compatible roommates. Features multi-role dashboards for tenants, property owners, brokers, and platform administrators with smart preference filtering.',
      image:
        'https://img.freepik.com/premium-psd/real-estate-hotel-booking-web-banner-social-media-facebook-cover-template_169307-2534.jpg?w=740',
      githubUrl: 'https://github.com/Gopal03-suri/RoomSetu',
      category: 'web',
      categoryLabel: 'Full-Stack Web',
      status: 'live',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'REST APIs'],
      highlights: ['Tenant & Owner Dashboards', 'Preference-based Matching', 'Real-time Property Listings'],
    },
    {
      id: 7,
      title: 'TaskFlow Pro',
      tagline: 'Kanban-Driven Project & Workflow Engine',
      description:
        'A robust agile management platform built with Django that empowers teams to organize complex sprint tasks using drag-and-drop Kanban boards, team collaboration channels, milestone tracking, and velocity telemetry.',
      image:
        'https://img.freepik.com/premium-vector/tasks-landing-page-design-website-banner-vector-template-task-management-workflow-checklist-planning_453374-331.jpg?w=826',
      githubUrl: 'https://github.com/Gopal03-suri/TaskFlow',
      category: 'django',
      categoryLabel: 'Python & Django',
      status: 'live',
      technologies: ['Django', 'Python 3', 'PostgreSQL', 'HTML5/CSS3', 'JavaScript', 'Bootstrap'],
      highlights: ['Agile Kanban Columns', 'Team Collaboration', 'Sprint Progress Metrics'],
    },
    {
      id: 6,
      title: 'Vibecheck Events Portal',
      tagline: 'Campus Event Discovery & Ticket Registry',
      description:
        'A high-energy campus event exploration system designed to help college students discover tech hackathons, cultural fests, and workshops, complete with smooth registrations and real-time announcements.',
      image: 'https://i.pinimg.com/736x/6b/f4/ab/6bf4abcadb1b279e11e1797af93d9930.jpg',
      githubUrl: 'https://github.com/Gopal03-suri/Event_management',
      category: 'web',
      categoryLabel: 'Web Application',
      status: 'live',
      technologies: ['JavaScript', 'HTML5', 'Modern CSS3', 'RESTful Endpoints'],
      highlights: ['Event Discovery Grid', 'Student Registrations', 'Live Notification Feed'],
    },
    {
      id: 1,
      title: 'ATM Core Transaction System',
      tagline: 'Secure Banking & Transaction Core',
      description:
        'An enterprise Java simulation for ATM transaction processing. Handles PIN-based cardholder authentication, encrypted account balance inquiry, deposit/withdrawal validation, and transaction audit trails.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center',
      liveUrl: 'https://gopal974.github.io/ATM-system/',
      githubUrl: 'https://github.com/gopal974/ATM-system',
      category: 'java',
      categoryLabel: 'Java Application',
      status: 'live',
      technologies: ['Java OOP', 'Data Structures', 'Security Logic', 'Swing / Web GUI'],
      highlights: ['Encrypted PIN Validation', 'Atomic Transactions', 'Live Demo Deployed'],
    },
    {
      id: 2,
      title: 'Dermaco Healthcare Portal',
      tagline: 'Hospital Patient & Appointment ERP',
      description:
        'A full-featured healthcare management portal designed for patient intake, doctor scheduling, electronic medical records, and bed allocation tracking for modern clinics.',
      image:
        'https://static.vecteezy.com/system/resources/previews/004/493/179/original/hospital-building-for-healthcare-background-illustration-with-ambulance-car-doctor-patient-nurses-and-medical-clinic-exterior-vector.jpg',
      liveUrl: 'https://hospital01.bytexl.live/',
      category: 'web',
      categoryLabel: 'Web System',
      status: 'live',
      technologies: ['React', 'JavaScript', 'CSS3 Modules', 'Cloud Deployment'],
      highlights: ['Doctor Scheduling', 'Patient Record Storage', 'Live Deployed Instance'],
    },
    {
      id: 3,
      title: 'Dynamic Image Gallery',
      tagline: 'High-Performance Visual Showcase',
      description:
        'A responsive, lightweight image curation portal featuring categorized filtering, smooth modal previews, lazy-loaded asset buffers, and mobile touch gestures.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop&crop=center',
      liveUrl: 'https://gopal974.github.io/-Code-Alpha--Image-Gallery/',
      githubUrl: 'https://github.com/gopal974/-Code-Alpha--Image-Gallery',
      category: 'web',
      categoryLabel: 'Frontend Engineering',
      status: 'live',
      technologies: ['HTML5', 'CSS3 Animations', 'JavaScript ES6+'],
      highlights: ['Responsive Masonry', 'Smooth Lightbox', 'Zero Dependencies'],
    },
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai', label: '🤖 AI & Machine Learning' },
    { key: 'web', label: '⚡ Full-Stack Web' },
    { key: 'django', label: '🐍 Python & Django' },
    { key: 'java', label: '☕ Java Applications' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="projects-page page-container">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-title-wrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="cyber-badge purple">
            <Layers size={14} /> ENGINEERING ARTIFACTS
          </span>
          <h1>Featured <span className="gradient-text">Projects & Systems</span></h1>
          <p>
            A showcase of production web applications, backend architectures, and intelligent software solutions.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
            >
              {cat.label}
              {activeFilter === cat.key && (
                <motion.div
                  className="filter-active-glow"
                  layoutId="activeFilterTab"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid */}
        <motion.div layout className="projects-bento-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="project-bento-card cyber-card"
              >
                {/* Image Banner */}
                <div className="project-banner-wrap">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-banner-overlay"></div>
                  <span className="project-category-badge font-mono">{project.categoryLabel}</span>
                  <span className="project-live-indicator">
                    <span className="pulse-dot"></span> Active
                  </span>
                </div>

                {/* Card Body */}
                <div className="project-card-content">
                  <h3 className="project-heading">{project.title}</h3>
                  <h4 className="project-tagline">{project.tagline}</h4>
                  <p className="project-description">{project.description}</p>

                  {/* Highlights */}
                  <div className="project-highlights-list">
                    {project.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="highlight-item">
                        <CheckCircle2 size={14} className="text-cyan" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="project-tech-tags font-mono">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-card-actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cyber-primary btn-sm"
                      >
                        <ExternalLink size={15} /> Launch Live App
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cyber-secondary btn-sm"
                      >
                        <Github size={15} /> GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Collaboration CTA */}
        <div className="projects-bottom-cta cyber-card">
          <div className="bottom-cta-text">
            <h2>Have an innovative project in mind?</h2>
            <p>
              I am open to architecting AI-powered applications, full-stack systems, or collaborating on hackathons and startup ideas.
            </p>
          </div>
          <Link to="/contact" className="btn-cyber-primary">
            Initiate Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
