import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "gopalpurbey708@gmail.com",
      link: "mailto:gopal.kumar@example.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 7827008357",
      link: "tel:+91XXXXXXXXX"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Gujarat, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={28} />,
      name: "GitHub",
      url: "https://github.com/Gopal03-suri",
      color: "#333"
    },
  {
  icon: <Linkedin size={28} />,
  name: "LinkedIn",
  url: "https://www.linkedin.com/in/gopal-kumar-purbey-ba7550314",
  color: "#0077b5"
},
    {
      icon: <Twitter size={28} />,
      name: "Twitter",
      url: "https://x.com/Gopal76328206",
      color: "#1da1f2"
    },
    {
      icon: <MessageCircle size={28} />,
      name: "Discord",
      url: "#",
      color: "#7289da"
    }
  ];

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

  return (
    <div className="contact page-container">
      <div className="container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Get In <span className="gradient-text">Touch</span></h1>
          <p>Let's discuss your project ideas or just say hello!</p>
        </motion.div>

        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="contact-info-section" variants={itemVariants}>
            <h2>Let's Connect</h2>
            <p>
              I'm always interested in hearing about new opportunities, 
              collaborations, or just having a chat about technology and development.
            </p>

            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="contact-info-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="info-icon">
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-section">
              <h3>Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ backgroundColor: social.color }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form-section" variants={itemVariants}>
            <div className="form-container">
              <h2>Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="availability-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="availability-card">
            <h2>Current Availability</h2>
            <div className="status-indicator">
              <div className="status-dot available"></div>
              <span>Available for new projects</span>
            </div>
            <p>
              I'm currently open to freelance opportunities, internships, and 
              collaborative projects. Let's build something amazing together!
            </p>
            <div className="response-time">
              <span>⚡ Usually responds within 24 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;