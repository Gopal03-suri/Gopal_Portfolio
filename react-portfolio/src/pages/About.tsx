import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Code, Heart } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering Artificial Intelligence & Machine Learning",
      institution: "Parul University",
      year: "2024 - 2028",
      description: "Currently pursuing Bachelor's degree with focus on software development and computer science fundamentals."
    },
    {
      degree: "12th Grade",
      institution: "Mount Carmel English School",
      year: "2022 - 2024",
      description: "Completed higher secondary education with excellent academic performance."
    },
    {
      degree: "10th Grade",
      institution: "Delhi Public School",
      year: "2020 - 2022",
      description: "Completed secondary education with strong foundation in mathematics and science."
    }
  ];

  const interests = [
    "Full Stack Development",
    "AI Agents",
    "iOS Development",
    "Cloud Computing",
    "Machine Learning",
    "Open Source",
    "Design Thinking"
  ];

  return (
    <div className="about page-container">
      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="about-header" variants={itemVariants}>
          <h1>About <span className="gradient-text">Me</span></h1>
          <p className="about-subtitle">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-main" variants={itemVariants}>
            <div className="about-text">
              <h2>Hello! I'm Gopal Kumar Purbey</h2>
              <p>
                I'm a passionate Computer Science student currently pursuing my B.Tech at Parul University. 
                My journey in technology began with curiosity about how things work, and it has evolved 
                into a deep passion for creating innovative solutions that make a difference.
              </p>
              <p>
                I specialize in full-stack development and iOS development, with experience in multiple 
                programming languages including Java, Python, and C. I'm particularly interested in 
                cloud computing and modern web technologies.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, participating in 
                hackathons, or working on personal projects that challenge my skills and creativity.
              </p>

              <div className="personal-info">
                <div className="info-item">
                  <MapPin size={20} />
                  <span>Gujarat, India</span>
                </div>
                <div className="info-item">
                  <Calendar size={20} />
                  <span>Age: 20</span>
                </div>
                <div className="info-item">
                  <Code size={20} />
                  <span>2+ Years of Learning</span>
                </div>
              </div>
            </div>

            <motion.div 
              className="about-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/go.jpeg" alt="Gopal Kumar Purbey" />
              <div className="image-overlay">
                <Heart className="heart-icon" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="education-section" variants={itemVariants}>
            <h2>
              <GraduationCap className="section-icon" />
              Education
            </h2>
            <div className="education-timeline">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>{edu.degree}</h3>
                    <h4>{edu.institution}</h4>
                    <span className="timeline-year">{edu.year}</span>
                    <p>{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="interests-section" variants={itemVariants}>
            <h2>Interests & Passions</h2>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <motion.div 
                  key={index}
                  className="interest-card"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {interest}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="values-section" variants={itemVariants}>
            <h2>My Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>Always seeking creative solutions to complex problems</p>
              </div>
              <div className="value-card">
                <h3>Learning</h3>
                <p>Committed to continuous growth and skill development</p>
              </div>
              <div className="value-card">
                <h3>Quality</h3>
                <p>Delivering excellence in every project I undertake</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;