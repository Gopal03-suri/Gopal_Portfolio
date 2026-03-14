import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  status: 'completed' | 'coming-soon';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "ATM Request System",
      description: "Developed a comprehensive ATM management system with user authentication and transaction processing capabilities. Features include account management, balance inquiry, and secure transaction handling.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center",
      liveUrl: "https://gopal974.github.io/ATM-system/",
      githubUrl: "https://github.com/gopal974/ATM-system",
      category: "java",
      status: "completed"
    },
    {
      id: 2,
      title: "Dermaco Hospital Management System",
      description: "Comprehensive hospital management system with patient registration, appointment scheduling, and medical records management. Built with modern web technologies for optimal performance.",
      image: "https://static.vecteezy.com/system/resources/previews/004/493/179/original/hospital-building-for-healthcare-background-illustration-with-ambulance-car-doctor-patient-nurses-and-medical-clinic-exterior-vector.jpg",
      liveUrl: "https://hospital01.bytexl.live/",
      category: "web",
      status: "completed"
    },
    {
      id: 3,
      title: "Image Gallery",
      description: "A responsive image gallery project showcasing different pictures with various sections. Features smooth animations, lazy loading, and responsive design for all devices.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop&crop=center",
      liveUrl: "https://gopal974.github.io/-Code-Alpha--Image-Gallery/",
      githubUrl: "https://github.com/gopal974/-Code-Alpha--Image-Gallery",
      category: "web",
      status: "completed"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark mode, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=center",
      githubUrl: "https://github.com/gopal974/portfolio",
      category: "web",
      status: "completed"
    },
    {
      id: 5,
      title: "RoomSetu",
      description: "Roomsetu is a smart platform that helps users find affordable rooms and compatible roommates. It includes features like property listings, roommate matching, tenant management, and dashboards for tenants, owners, agents, and admins.",
      image: "https://img.freepik.com/premium-psd/real-estate-hotel-booking-web-banner-social-media-facebook-cover-template_169307-2534.jpg?w=740",
      githubUrl: "https://github.com/Gopal03-suri/RoomSetu",
      category: "web",
      status: "coming-soon"
    },
    {
      id: 6,
      title: "Vibecheck",
      description: "🚀 Vibecheck – A modern web platform for discovering and managing college events. Helps students explore events, register easily, and stay connected with campus activities.",
      image: "https://i.pinimg.com/736x/6b/f4/ab/6bf4abcadb1b279e11e1797af93d9930.jpg",
      githubUrl: "https://github.com/Gopal03-suri/Event_management",
      category: "web",
      status: "coming-soon"
    },
    {
      id: 7,
      title: "TaskFlow Pro",
      description: "TaskFlow Pro is a Django-based task management system that helps users manage projects and tasks using a Kanban board. It allows users to create tasks, track progress, and collaborate with team members in an organized way.",
      image: "https://img.freepik.com/premium-vector/tasks-landing-page-design-website-banner-vector-template-task-management-workflow-checklist-planning_453374-331.jpg?w=826",
      githubUrl: "https://github.com/Gopal03-suri/TaskFlow",
      category: "web",
      status: "coming-soon"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'java', label: 'Java Applications' },
    { key: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    <div className="projects page-container">
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>My <span className="gradient-text">Projects</span></h1>
          <p>A collection of projects that showcase my skills and passion for development</p>
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
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`status-badge ${project.status}`}>
                    {project.status === 'completed' ? 'Live' : 'Coming Soon'}
                  </span>
                </div>
                
                <p>{project.description}</p>
                
                <div className="project-footer">
                  <div className="project-actions">
                    {project.status === 'completed' ? (
                      <>
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                          >
                            <ExternalLink size={16} />
                            View Live
                          </a>
                        )}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                          >
                            <Github size={16} />
                            Code
                          </a>
                        )}
                      </>
                    ) : (
                      <button className="btn btn-disabled" disabled>
                        <Calendar size={16} />
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Interested in collaborating?</h2>
          <p>I'm always open to discussing new opportunities and interesting projects.</p>
          <a href="/contact" className="btn btn-accent">
            <Code size={20} />
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

