import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';
import './Certifications.css';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  certificateUrl?: string;
  badgeUrl?: string;
  icon: string;
  category: string;
  skills: string[];
}

const Certifications: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundation Associate",
      issuer: "Oracle University",
      date: "2025",
      description: "Completed Oracle Cloud Infrastructure certification and earned AI Foundation Associate badge from Oracle University.",
      certificateUrl: "/oracle-certi.jpg",
      badgeUrl: "/oracle-certi.jpg",
      icon: "☁️",
      category: "cloud",
      skills: ["Oracle Cloud", "AI Foundation", "Cloud Computing"]
    },
    {
      id: 2,
      title: "AWS Academy Graduate - AWS Academy Cloud Foundation",
      issuer: "AWS Academy",
      date: "2025",
      description: "Successfully completed 20 hours AWS Academy Cloud Foundation course and earned graduate certificate from AWS Academy.",
      certificateUrl: "/aws-20hrs.jpg",
      badgeUrl: "/badge-aws.jpg",
      icon: "🎆",
      category: "cloud",
      skills: ["AWS", "Cloud Foundation", "Cloud Computing"]
    },
    {
      id: 3,
      title: "AWS DevOps Meets AI",
      issuer: "AWS",
      date: "2025",
      description: "Attended comprehensive seminar on DevOps integration with AI technologies and modern development practices.",
      certificateUrl: "/aws-devops.jpg",
      icon: "⚙️",
      category: "devops",
      skills: ["DevOps", "AI", "AWS", "Modern Development"]
    },
    {
      id: 4,
      title: "PU DAO Hack Tour - Polkadot BootCamp",
      issuer: "PU DAO",
      date: "2025",
      description: "Participated in 2 days Polkadot BootCamp organized by PU DAO Hack Tour at Parul University.",
      certificateUrl: "/hacktour.jpg",
      icon: "🚀",
      category: "blockchain",
      skills: ["Blockchain", "Polkadot", "Web3", "Hackathon"]
    },
    {
      id: 5,
      title: "SkillEcted Webinar Participation",
      issuer: "SkillEcted",
      date: "2025",
      description: "Participated in webinar on 'Build a Movie Search App Using React JS – Explore, Search & Discover!' organized by SkillEcted.",
      certificateUrl: "/skilltech1.jpg",
      icon: "🎓",
      category: "web",
      skills: ["React JS", "Web Development", "JavaScript"]
    },
    {
      id: 6,
      title: "Gujarat's Largest Technical Festival",
      issuer: "Technical Festival Committee",
      date: "2024",
      description: "Participated in Gujarat's largest technical festival showcasing technical skills and innovation.",
      certificateUrl: "/GOOGLER.pdf",
      icon: "🏆",
      category: "competition",
      skills: ["Technical Skills", "Innovation", "Competition"]
    },
    {
      id: 7,
      title: "Startup Bootcamp Participant",
      issuer: "Startup Incubator",
      date: "2024",
      description: "Participated in an intensive startup bootcamp program focusing on entrepreneurship and innovation.",
      certificateUrl: "/bootcamp.png",
      icon: "🚀",
      category: "entrepreneurship",
      skills: ["Entrepreneurship", "Innovation", "Startup", "Business"]
    },
    {
      id: 8,
      title: "Deloitte Technology Consulting Workshop",
      issuer: "Deloitte",
      date: "2025",
      description: "Participated in Deloitte's technology consulting workshop focusing on digital transformation and enterprise solutions.",
      certificateUrl: "/deloit3.jpeg",
      icon: "💼",
      category: "consulting",
      skills: ["Consulting", "Digital Transformation", "Enterprise Solutions"]
    },
    {
      id: 9,
      title: "Vadodara Tech Summit",
      issuer: "Vadodara Tech Community",
      date: "2025",
      description: "Attended Vadodara Tech Summit showcasing latest trends in technology and networking with industry professionals.",
      certificateUrl: "/vadodra.png",
      icon: "🌐",
      category: "conference",
      skills: ["Technology Trends", "Networking", "Industry Insights"]
    },
    {
      id: 10,
      title: "Deloitte Digital Innovation Program",
      issuer: "Deloitte Digital",
      date: "2025",
      description: "Completed Deloitte's digital innovation program focusing on emerging technologies and digital strategy.",
      certificateUrl: "/delotie.jpeg",
      icon: "💡",
      category: "innovation",
      skills: ["Digital Innovation", "Emerging Tech", "Strategy"]
    },
    {
      id: 11,
      title: "Google Gemini AI Workshop",
      issuer: "Google",
      date: "2025",
      description: "Participated in Google's Gemini AI workshop exploring advanced AI capabilities and implementation strategies.",
      certificateUrl: "/gemini.jpeg",
      icon: "🤖",
      category: "ai",
      skills: ["Gemini AI", "Machine Learning", "Google AI"]
    },
    {
      id: 12,
      title: "IIT Technology Conference",
      issuer: "Indian Institute of Technology Kharagpur",
      date: "2026",
      description: "Attended IIT technology conference featuring cutting-edge research and innovations in computer science.",
      certificateUrl: "/iit.jpeg",
      icon: "🎯",
      category: "academic",
      skills: ["Research", "Innovation", "Computer Science"]
    },
  {
  id: 13,
  title: "Generative Artificial Intelligence Workshop",
  issuer: "Parul University - Department of CSE",
  date: "Jan–Mar 2026",
  description: "Participated in a hands-on technical workshop on Artificial Intelligence and Machine Learning focusing on Generative AI concepts and practical implementation.",
  certificateUrl: "/gen.jpeg",
  icon: "🤖",
  category: "workshop",
  skills: ["Artificial Intelligence", "Machine Learning", "Generative AI"]
  },
  {
  id: 14,
  title: "AICTE HEIs Engagement AI Pre-Summit",
  issuer: "AICTE & Ministry of Education",
  date: "6 Feb 2026",
  description: "Participated in the AI Pre-Summit event contributing to discussions shaping the vision for IndiaAI Impact Summit 2026 and the future of the IndiaAI Mission.",
  certificateUrl: "/ai.jpeg",
  icon: "🚀",
  category: "conference",
  skills: ["Artificial Intelligence", "Innovation", "IndiaAI Mission"]
  },
  {
  id: 15,
  title: "eDC Blueprint 6.0 – Unstop Holiday Fest 2025",
  issuer: "Indian Institute of Technology Delhi & Unstop",
  date: "2025",
  description: "Participated in the eDC Blueprint 6.0 event during Unstop Holiday Fest 2025, gaining insights into entrepreneurship, innovation, and startup ecosystem initiatives organized by IIT Delhi.",
  certificateUrl: "/iit_delhi.jpeg",
  icon: "🏆",
  category: "competition",
  skills: ["Entrepreneurship", "Innovation", "Startup Ecosystem"]
}

  ];

  const categories = [
    { key: 'all', label: 'All Certifications', color: '#667eea' },
    { key: 'cloud', label: 'Cloud Computing', color: '#4ecdc4' },
    { key: 'web', label: 'Web Development', color: '#ff6b6b' },
    { key: 'devops', label: 'DevOps & AI', color: '#45b7d1' },
    { key: 'blockchain', label: 'Blockchain', color: '#96ceb4' },
    { key: 'competition', label: 'Competitions', color: '#feca57' },
    { key: 'entrepreneurship', label: 'Entrepreneurship', color: '#ff9ff3' },
    { key: 'consulting', label: 'Consulting', color: '#a55eea' },
    { key: 'conference', label: 'Conferences', color: '#26de81' },
    { key: 'innovation', label: 'Innovation', color: '#fd79a8' },
    { key: 'ai', label: 'AI & ML', color: '#00b894' },
    { key: 'academic', label: 'Academic', color: '#e17055' }
  ];

  const [filter, setFilter] = React.useState('all');

  const filteredCertificates = filter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="certifications page-container">
      <div className="container">
        <motion.div 
          className="certifications-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>My <span className="gradient-text">Certifications</span></h1>
          <p>Professional certifications and achievements that validate my expertise</p>
        </motion.div>

        <motion.div 
          className="filter-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-tab ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
              style={{ 
                borderColor: category.color,
                ...(filter === category.key && { 
                  backgroundColor: category.color,
                  color: 'white'
                })
              }}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className="certificate-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="certificate-header">
                <div className="certificate-icon">
                  {certificate.icon}
                </div>
                <div className="certificate-meta">
                  <div className="certificate-date">
                    <Calendar size={16} />
                    {certificate.date}
                  </div>
                  <div className="certificate-issuer">
                    <Building size={16} />
                    {certificate.issuer}
                  </div>
                </div>
              </div>

              <div className="certificate-content">
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>

                <div className="certificate-skills">
                  {certificate.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="certificate-footer">
                <div className="certificate-actions">
                  {certificate.certificateUrl && (
                    <a 
                      href={certificate.certificateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <Award size={16} />
                      View Certificate
                    </a>
                  )}
                  {certificate.badgeUrl && (
                    <a 
                      href={certificate.badgeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <ExternalLink size={16} />
                      View Badge
                    </a>
                  )}
                </div>
              </div>

              <div className="certificate-glow"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="certifications-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Certification Journey</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Certifications Earned</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Different Categories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Hours of Training</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2024-25</div>
              <div className="stat-label">Active Learning Period</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="next-goals"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Upcoming Goals</h2>
          <div className="goals-list">
            <div className="goal-item">
              <span className="goal-icon">🎯</span>
              <span>AWS Solutions Architect Associate</span>
            </div>
            <div className="goal-item">
              <span className="goal-icon">📱</span>
              <span>Apple Developer Certification</span>
            </div>
            <div className="goal-item">
              <span className="goal-icon">🤖</span>
              <span>Google Cloud ML Engineer</span>
            </div>
            <div className="goal-item">
              <span className="goal-icon">🔒</span>
              <span>Cybersecurity Fundamentals</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;