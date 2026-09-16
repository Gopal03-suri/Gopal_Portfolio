import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Globe,
  Database,
  Cloud,
  Code2,
  Sparkles,
  Zap,
} from 'lucide-react';
import './Skills.css';

interface Skill {
  name: string;
  level: number;
  tags?: string;
}

interface SkillCategory {
  title: string;
  categoryKey: string;
  icon: React.ReactNode;
  accentColor: string;
  description: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories: SkillCategory[] = [
    {
      title: 'AI, Machine Learning & Agents',
      categoryKey: 'ai',
      icon: <Brain size={24} />,
      accentColor: '#00f2fe',
      description: 'Model design, Neural Networks, Agent workflows & LLM integration.',
      skills: [
        { name: 'Python (NumPy / Pandas)', level: 90, tags: 'Core ML' },
        { name: 'PyTorch & Neural Networks', level: 80, tags: 'Deep Learning' },
        { name: 'Scikit-Learn & ML Algorithms', level: 85, tags: 'Supervised/Unsupervised' },
        { name: 'Prompt Engineering & Gemini API', level: 88, tags: 'GenAI' },
        { name: 'AI Agents & LangChain Workflows', level: 78, tags: 'Agentic Systems' },
        { name: 'NLP & Computer Vision Basics', level: 75, tags: 'Perception' },
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      categoryKey: 'cloud',
      icon: <Cloud size={24} />,
      accentColor: '#4facfe',
      description: 'Certified cloud environments, API deployments & modern DevOps.',
      skills: [
        { name: 'Oracle Cloud (OCI AI Certified)', level: 85, tags: 'OCI AI 2025' },
        { name: 'AWS Cloud Foundation', level: 82, tags: 'Academy Graduate' },
        { name: 'Git & GitHub Version Control', level: 88, tags: 'DevOps' },
        { name: 'Docker & Containerization', level: 70, tags: 'Containers' },
        { name: 'Linux / Bash Scripting', level: 80, tags: 'CLI' },
      ],
    },
    {
      title: 'Full-Stack Web Engineering',
      categoryKey: 'web',
      icon: <Globe size={24} />,
      accentColor: '#a855f7',
      description: 'Modern, highly responsive frontend & robust backend microservices.',
      skills: [
        { name: 'React.js & Hooks', level: 88, tags: 'Frontend' },
        { name: 'TypeScript & JavaScript ES6+', level: 82, tags: 'Type Safe' },
        { name: 'Django & Python Web', level: 80, tags: 'Backend' },
        { name: 'Node.js & Express.js', level: 76, tags: 'REST APIs' },
        { name: 'HTML5 / CSS3 / Tailwind / Glassmorphism', level: 92, tags: 'UI/UX' },
      ],
    },
    {
      title: 'Core Computer Science & Languages',
      categoryKey: 'cs',
      icon: <Code2 size={24} />,
      accentColor: '#10b981',
      description: 'Algorithmic problem solving, object-oriented design & system foundations.',
      skills: [
        { name: 'Java (OOP & Security)', level: 85, tags: 'Enterprise Core' },
        { name: 'C Programming', level: 78, tags: 'Low Level' },
        { name: 'Data Structures & Algorithms', level: 82, tags: 'CS Theory' },
        { name: 'Object-Oriented Architecture', level: 86, tags: 'Design Patterns' },
        { name: 'RESTful API Engineering', level: 85, tags: 'Integration' },
      ],
    },
    {
      title: 'Databases & Vector Stores',
      categoryKey: 'db',
      icon: <Database size={24} />,
      accentColor: '#f59e0b',
      description: 'Relational databases, NoSQL document stores & data persistence.',
      skills: [
        { name: 'MySQL & Relational SQL', level: 82, tags: 'RDBMS' },
        { name: 'MongoDB', level: 78, tags: 'NoSQL' },
        { name: 'Firebase & Firestore', level: 75, tags: 'Cloud DB' },
        { name: 'Vector Search & Embeddings', level: 72, tags: 'AI Retrieval' },
      ],
    },
    {
      title: 'Engineering Tools & Workflows',
      categoryKey: 'tools',
      icon: <Cpu size={24} />,
      accentColor: '#ec4899',
      description: 'Development environments, API clients & prototyping toolkits.',
      skills: [
        { name: 'VS Code & JetBrains IDEs', level: 92, tags: 'Environment' },
        { name: 'Jupyter & Google Colab', level: 88, tags: 'ML Notebooks' },
        { name: 'Postman API Testing', level: 85, tags: 'Testing' },
        { name: 'Figma UI/UX Prototyping', level: 78, tags: 'Design' },
      ],
    },
  ];

  const filteredCategories =
    activeTab === 'all'
      ? categories
      : categories.filter((c) => c.categoryKey === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="skills-page page-container">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-title-wrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="cyber-badge emerald">
            <Zap size={14} /> TECH ARSENAL
          </span>
          <h1>Skills & <span className="gradient-text">Neural Ecosystem</span></h1>
          <p>
            An overview of technical competencies spanning Artificial Intelligence, Cloud Platforms, Full-Stack Development, and Systems Engineering.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="skills-tabs-bar">
          <button
            className={`skill-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Disciplines
          </button>
          <button
            className={`skill-tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            🤖 AI & Machine Learning
          </button>
          <button
            className={`skill-tab-btn ${activeTab === 'cloud' ? 'active' : ''}`}
            onClick={() => setActiveTab('cloud')}
          >
            ☁️ Cloud & DevOps
          </button>
          <button
            className={`skill-tab-btn ${activeTab === 'web' ? 'active' : ''}`}
            onClick={() => setActiveTab('web')}
          >
            ⚡ Full-Stack Web
          </button>
          <button
            className={`skill-tab-btn ${activeTab === 'cs' ? 'active' : ''}`}
            onClick={() => setActiveTab('cs')}
          >
            💻 Core CS & Java
          </button>
        </div>

        {/* Skills Bento Grid */}
        <motion.div
          className="skills-bento-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCategories.map((category, cIdx) => (
            <motion.div
              key={cIdx}
              className="skill-category-card cyber-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              style={{
                borderColor: `rgba(${
                  category.accentColor === '#00f2fe'
                    ? '0, 242, 254'
                    : category.accentColor === '#a855f7'
                    ? '168, 85, 247'
                    : category.accentColor === '#10b981'
                    ? '16, 185, 129'
                    : '79, 172, 254'
                }, 0.3)`,
              }}
            >
              {/* Category Header */}
              <div className="skill-cat-header">
                <div
                  className="skill-cat-icon"
                  style={{
                    color: category.accentColor,
                    background: `${category.accentColor}18`,
                    borderColor: `${category.accentColor}40`,
                  }}
                >
                  {category.icon}
                </div>
                <div>
                  <h3 className="skill-cat-title">{category.title}</h3>
                  <p className="skill-cat-desc">{category.description}</p>
                </div>
              </div>

              {/* Skills List with Dynamic Bars */}
              <div className="skills-meter-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-meter-row">
                    <div className="skill-meter-info">
                      <span className="skill-meter-name">{skill.name}</span>
                      <div className="skill-meter-extra">
                        {skill.tags && <span className="skill-tag-badge font-mono">{skill.tags}</span>}
                        <span className="skill-meter-percent font-mono">{skill.level}%</span>
                      </div>
                    </div>

                    <div className="skill-track-bar">
                      <motion.div
                        className="skill-fill-bar"
                        style={{
                          background: `linear-gradient(90deg, ${category.accentColor}80, ${category.accentColor})`,
                          boxShadow: `0 0 10px ${category.accentColor}60`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: sIdx * 0.08 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Continuous Learning & 2026 Roadmap */}
        <section className="learning-roadmap-section cyber-card">
          <div className="roadmap-head">
            <span className="cyber-badge purple">
              <Sparkles size={14} /> ACTIVE HORIZON
            </span>
            <h2>2026 Continuous Learning Roadmap</h2>
            <p>
              Technologies, architectures, and research papers currently in active study and implementation:
            </p>
          </div>

          <div className="roadmap-grid">
            <div className="roadmap-card">
              <div className="roadmap-icon">🤖</div>
              <h4>Advanced LLM Agent Orchestration</h4>
              <p>Studying multi-agent cooperation, AutoGen, CrewAI, and LangGraph state machines.</p>
            </div>

            <div className="roadmap-card">
              <div className="roadmap-icon">☁️</div>
              <h4>AWS Solutions Architect Associate</h4>
              <p>Advancing from Cloud Foundation to full microservices & serverless cloud infrastructure.</p>
            </div>

            <div className="roadmap-card">
              <div className="roadmap-icon">⚡</div>
              <h4>Next.js 15 & Server Components</h4>
              <p>Mastering React Server Components, Edge Runtimes, and high-velocity full-stack rendering.</p>
            </div>

            <div className="roadmap-card">
              <div className="roadmap-icon">🧠</div>
              <h4>Transformer Models from Scratch</h4>
              <p>Implementing attention mechanisms and transformer blocks using pure PyTorch tensors.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;