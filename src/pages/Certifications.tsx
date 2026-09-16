import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  ExternalLink,
  Calendar,
  Building,
  CheckCircle2,
  Shield,
  Eye,
} from 'lucide-react';
import { CertificateItem } from '../components/CertificateModal';
import './Certifications.css';

interface CertificationsProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

const Certifications: React.FC<CertificationsProps> = ({ onSelectCertificate }) => {
  const [filter, setFilter] = useState('all');

  const certificates: CertificateItem[] = [
    {
      id: 1,
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundation Associate',
      issuer: 'Oracle University',
      date: '2025',
      description:
        'Official OCI AI certification validating proficiency in Artificial Intelligence core concepts, machine learning workloads, natural language processing, and Oracle Cloud AI services.',
      certificateUrl: process.env.PUBLIC_URL + '/oracle-certi.jpg',
      badgeUrl: process.env.PUBLIC_URL + '/orbad.jpeg',
      icon: '☁️',
      category: 'cloud',
      skills: ['Oracle Cloud Infrastructure (OCI)', 'AI Foundation', 'Machine Learning Services', 'Cloud Architecture'],
    },
    {
      id: 2,
      title: 'AWS Academy Graduate - Cloud Foundation',
      issuer: 'AWS Academy',
      date: '2025',
      description:
        'Successfully completed comprehensive 20-hour AWS Cloud Foundation curriculum covering cloud computing, compute, networking, security, storage, and architecture principles.',
      certificateUrl: process.env.PUBLIC_URL + '/aws-20hrs.jpg',
      badgeUrl: process.env.PUBLIC_URL + '/badge-aws.jpg',
      icon: '⚡',
      category: 'cloud',
      skills: ['Amazon Web Services (AWS)', 'Cloud Computing', 'IAM Security', 'S3 / EC2 Architecture'],
    },
    {
      id: 13,
      title: 'Generative Artificial Intelligence Workshop',
      issuer: 'Parul University - Department of CSE',
      date: 'Jan – Mar 2026',
      description:
        'Hands-on technical workshop delving into deep Generative AI paradigms, Transformer architectures, prompt engineering, and real-world implementation pipelines.',
      certificateUrl: process.env.PUBLIC_URL + '/gen.jpeg',
      icon: '🤖',
      category: 'ai',
      skills: ['Generative AI', 'Transformers', 'Prompt Engineering', 'PyTorch / LLMs'],
    },
    {
      id: 14,
      title: 'AICTE HEIs Engagement AI Pre-Summit',
      issuer: 'AICTE & Ministry of Education',
      date: 'Feb 2026',
      description:
        'Selected participant in the national AI Pre-Summit shaping strategic vision and deployment frameworks for the IndiaAI Mission and Higher Education Institutes.',
      certificateUrl: process.env.PUBLIC_URL + '/ai.jpeg',
      icon: '🚀',
      category: 'summit',
      skills: ['IndiaAI Mission', 'National AI Policy', 'Emerging Tech Ecosystem', 'Innovation'],
    },
    {
      id: 3,
      title: 'AWS DevOps Meets AI',
      issuer: 'AWS Community',
      date: '2025',
      description:
        'Advanced masterclass exploring the intersection of DevOps CI/CD pipelines, MLOps, automated testing, and cloud infrastructure with AI tooling.',
      certificateUrl: process.env.PUBLIC_URL + '/aws.jpeg',
      icon: '⚙️',
      category: 'cloud',
      skills: ['DevOps', 'MLOps', 'AWS', 'Automated Pipelines'],
    },
    {
      id: 15,
      title: 'eDC Blueprint 6.0 – Unstop Fest',
      issuer: 'IIT Delhi & Unstop',
      date: '2025',
      description:
        'Recognized participant in the eDC Blueprint startup and entrepreneurship fest organized by Indian Institute of Technology Delhi.',
      certificateUrl: process.env.PUBLIC_URL + '/iit_delhi.jpeg',
      icon: '🏛️',
      category: 'academic',
      skills: ['IIT Delhi', 'Innovation', 'Startup Ecosystem', 'Design Thinking'],
    },
    {
      id: 12,
      title: 'IIT Kharagpur Technology Conference',
      issuer: 'Indian Institute of Technology Kharagpur',
      date: '2026',
      description:
        'Attended premier technology summit featuring breakthroughs in computing, data engineering, and modern computational models.',
      certificateUrl: process.env.PUBLIC_URL + '/iit.jpeg',
      icon: '🎯',
      category: 'academic',
      skills: ['Research', 'Advanced Computer Science', 'Technical Innovation'],
    },
    {
      id: 11,
      title: 'Google Gemini AI Workshop',
      issuer: 'Google Developer Community',
      date: '2025',
      description:
        'Intensive hands-on training exploring Google Gemini multimodal AI models, API integration, and function calling workflows.',
      certificateUrl: process.env.PUBLIC_URL + '/gemini.jpeg',
      icon: '✨',
      category: 'ai',
      skills: ['Google Gemini', 'Multimodal AI', 'Function Calling', 'API Integration'],
    },
    {
      id: 4,
      title: 'PU DAO Hack Tour - Polkadot BootCamp',
      issuer: 'PU DAO & Polkadot',
      date: '2025',
      description:
        'Two-day intensive Web3 and smart contract bootcamp held at Parul University exploring decentralized protocols and blockchain architecture.',
      certificateUrl: process.env.PUBLIC_URL + '/hacktour.jpg',
      icon: '⛓️',
      category: 'hackathon',
      skills: ['Polkadot', 'Web3', 'Decentralized Systems', 'Hackathon'],
    },
    {
      id: 8,
      title: 'Deloitte Technology Consulting Workshop',
      issuer: 'Deloitte',
      date: '2025',
      description:
        'Participated in enterprise technology consulting simulation focusing on enterprise IT strategy, digital transformation, and modern solution architecture.',
      certificateUrl: process.env.PUBLIC_URL + '/deloit3.jpeg',
      icon: '💼',
      category: 'consulting',
      skills: ['Deloitte Consulting', 'Digital Transformation', 'Enterprise Systems'],
    },
    {
      id: 10,
      title: 'Deloitte Digital Innovation Program',
      issuer: 'Deloitte Digital',
      date: '2025',
      description:
        'Digital innovation masterclass analyzing emerging enterprise technologies and agile solution delivery methodologies.',
      certificateUrl: process.env.PUBLIC_URL + '/delotie.jpeg',
      icon: '💡',
      category: 'consulting',
      skills: ['Digital Strategy', 'Emerging Tech', 'Enterprise Solutions'],
    },
    {
      id: 9,
      title: 'Vadodara Tech Summit',
      issuer: 'Tech Community Gujarat',
      date: '2025',
      description:
        'Attended regional technology summit exploring future tech trends, enterprise software, and industry networking.',
      certificateUrl: process.env.PUBLIC_URL + '/vadodra.png',
      icon: '🌐',
      category: 'summit',
      skills: ['Tech Trends', 'Industry Networking', 'Software Ecosystem'],
    },
    {
      id: 7,
      title: 'Startup Bootcamp Participant',
      issuer: 'Incubation Center',
      date: '2024',
      description:
        'Participated in intensive product validation, business modeling, and tech startup incubator bootcamp.',
      certificateUrl: process.env.PUBLIC_URL + '/bootcamp.png',
      icon: '🚀',
      category: 'hackathon',
      skills: ['Entrepreneurship', 'Product Strategy', 'Incubation'],
    },
    {
      id: 5,
      title: 'SkillEcted React Application Webinar',
      issuer: 'SkillEcted',
      date: '2025',
      description:
        'Participated in hands-on frontend architecture webinar on building real-time movie search & exploration applications with React JS.',
      certificateUrl: process.env.PUBLIC_URL + '/skilltech1.jpg',
      icon: '💻',
      category: 'ai',
      skills: ['React JS', 'Component Lifecycle', 'API Fetching'],
    },
  ];

  const categories = [
    { key: 'all', label: 'All Credentials' },
    { key: 'cloud', label: '☁️ Cloud & Infrastructure' },
    { key: 'ai', label: '🤖 AI & Machine Learning' },
    { key: 'summit', label: '🚀 Summits & Conferences' },
    { key: 'academic', label: '🏛️ IITs & Academic' },
    { key: 'consulting', label: '💼 Deloitte Consulting' },
  ];

  const filteredCerts =
    filter === 'all'
      ? certificates
      : certificates.filter((c) => c.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="certs-page page-container">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-title-wrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="cyber-badge emerald">
            <Shield size={14} /> INDUSTRY VALIDATED
          </span>
          <h1>Verified <span className="gradient-text">Certifications & Summits</span></h1>
          <p>
            Official accreditations from Oracle, AWS Academy, Google, AICTE, IIT Delhi, IIT Kharagpur, and Deloitte.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <div className="certs-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`cert-filter-btn ${filter === cat.key ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certs Grid */}
        <motion.div
          className="certs-cards-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                className="cert-item-card cyber-card"
                variants={itemVariants}
                whileHover={{ y: -6 }}
                onClick={() => onSelectCertificate(cert)}
              >
                {/* Header Strip */}
                <div className="cert-card-top">
                  <div className="cert-card-icon">{cert.icon}</div>
                  <div className="cert-card-meta">
                    <span className="cert-date font-mono">
                      <Calendar size={13} /> {cert.date}
                    </span>
                    <span className="cert-issuer font-mono">
                      <Building size={13} /> {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Card Title & Desc */}
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-description">{cert.description}</p>

                {/* Skills tags */}
                <div className="cert-tags-row font-mono">
                  {cert.skills.slice(0, 3).map((sk, sIdx) => (
                    <span key={sIdx} className="cert-micro-tag">
                      {sk}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="cert-micro-tag more">+{cert.skills.length - 3}</span>
                  )}
                </div>

                {/* Footer Action */}
                <div className="cert-card-bottom">
                  <button
                    className="btn-preview-cert"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCertificate(cert);
                    }}
                  >
                    <Eye size={15} /> View High-Res Certificate
                  </button>
                  <span className="cert-verified-icon" title="Verified Credential">
                    <CheckCircle2 size={18} className="text-emerald" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Credly & Verification Callout */}
        <div className="credly-badge-callout cyber-card">
          <div className="credly-callout-left">
            <Award size={32} className="text-cyan" />
            <div>
              <h3>Verified Digital Credly Badges</h3>
              <p>Explore official digital badge records issued by Oracle & AWS on Credly.</p>
            </div>
          </div>
          <a
            href="https://www.credly.com/users/gopal-purvey"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-primary"
          >
            <ExternalLink size={16} /> Open Credly Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certifications;