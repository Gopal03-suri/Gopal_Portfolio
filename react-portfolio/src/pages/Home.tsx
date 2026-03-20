import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Award,
} from "lucide-react";
import "./Home.css";

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="home">
      {/* HERO SECTION */}

      <motion.section
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            {/* IMAGE */}

            <motion.div className="hero-image" variants={itemVariants}>
              <img src={process.env.PUBLIC_URL + "/gopal.jpg"} alt="Gopal Kumar Purbey" />
              <div className="image-glow"></div>
            </motion.div>

            {/* TEXT */}

            <motion.div className="hero-text" variants={itemVariants}>
              <h1>
                Hi, I'm{" "}
                <span className="gradient-text">Gopal Kumar Purbey</span>
              </h1>

              <h2>Full Stack Developer • AI Agent Developer</h2>

              <p>
                I'm a Computer Science student passionate about building modern
                web applications, AI tools, and scalable software solutions.
                I enjoy turning complex problems into simple, beautiful, and
                intuitive digital experiences.
              </p>

              {/* BUTTONS */}

              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View My Work <ArrowRight size={20} />
                </Link>

                <a href={process.env.PUBLIC_URL + "/Resume Gopal.pdf"} className="btn btn-secondary">
                  <Download size={20} /> Download Resume
                </a>

                <Link to="/certifications" className="btn btn-accent">
                  <Award size={20} /> Certifications
                </Link>
              </div>

              {/* SOCIAL */}

              <div className="social-links">
                <a
                  href="https://github.com/gopal974"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/gopal-kumar-purbey-ba7550314cd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>

                <a
                  href="https://www.credly.com/users/gopal-purvey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Award size={24} />
                </a>

                <a href="mailto:gopal@example.com">
                  <Mail size={24} />
                </a>
              </div>

              {/* CREDLY BADGES */}

            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* QUICK STATS */}

      <motion.section
        className="quick-stats section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>6+</h3>
              <p>Projects Built</p>
            </div>

            <div className="stat-card">
              <h3>8+</h3>
              <p>Certifications</p>
            </div>

            <div className="stat-card">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat-card">
              <h3>2+</h3>
              <p>Years of Learning</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA SECTION */}

      <motion.section
        className="cta-section section section-alt"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2>Let's Build Something Amazing</h2>

          <p>
            I'm always open to collaboration, internships, and exciting tech
            opportunities.
          </p>

          <div className="cta-center">
            <Link to="/contact" className="btn btn-primary">
              Contact Me <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
