import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Palette, Globe } from 'lucide-react';
import './Skills.css';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      color: "#667eea",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 75 },
        { name: "C", level: 70 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 70 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe size={24} />,
      color: "#764ba2",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 65 },
        { name: "Express.js", level: 60 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      color: "#ff6b6b",
      skills: [
        { name: "Swift", level: 75 },
        { name: "SwiftUI", level: 70 },
        { name: "iOS Development", level: 75 },
        { name: "React Native", level: 60 }
      ]
    },
    {
      title: "Database & Backend",
      icon: <Database size={24} />,
      color: "#4ecdc4",
      skills: [
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 65 },
        { name: "Firebase", level: 70 },
        { name: "REST APIs", level: 75 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      color: "#45b7d1",
      skills: [
        { name: "AWS", level: 70 },
        { name: "Oracle Cloud", level: 65 },
        { name: "Git", level: 80 },
        { name: "Docker", level: 60 }
      ]
    },
    {
      title: "Design & Tools",
      icon: <Palette size={24} />,
      color: "#96ceb4",
      skills: [
        { name: "Figma", level: 70 },
        { name: "Adobe XD", level: 65 },
        { name: "Photoshop", level: 60 },
        { name: "UI/UX Design", level: 75 }
      ]
    }
  ];

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
    <div className="skills page-container">
      <div className="container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>My <span className="gradient-text">Skills</span></h1>
          <p>Technologies and tools I work with to bring ideas to life</p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="category-header" style={{ borderColor: category.color }}>
                <div className="category-icon" style={{ backgroundColor: category.color }}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Continuous Learning</h2>
          <p>
            I believe in continuous learning and staying updated with the latest technologies. 
            Currently exploring advanced React patterns, cloud architecture, and machine learning 
            to expand my skill set and deliver even better solutions.
          </p>
          
          <div className="learning-goals">
            <h3>Currently Learning</h3>
            <div className="goals-grid">
              <div className="goal-item">
                <span className="goal-icon">🚀</span>
                <span>Advanced React & Next.js</span>
              </div>
              <div className="goal-item">
                <span className="goal-icon">☁️</span>
                <span>Cloud Architecture</span>
              </div>
              <div className="goal-item">
                <span className="goal-icon">🤖</span>
                <span>Machine Learning</span>
              </div>
              <div className="goal-item">
                <span className="goal-icon">📱</span>
                <span>Advanced iOS Development</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;