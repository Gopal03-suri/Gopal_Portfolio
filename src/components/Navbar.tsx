import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Bot, Sparkles, Code2 } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  onOpenAI: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAI }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About & Journey' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'AI & Skills' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className={`cyber-navbar-wrap ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand" onClick={() => setIsOpen(false)}>
          <div className="brand-icon-box">
            <Code2 size={20} className="brand-symbol" />
            <span className="brand-dot"></span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Gopal<span className="highlight">.ai</span></span>
            <span className="brand-role">AI/ML ENGINEER</span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="nav-desktop-links">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    className="nav-active-pill"
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="nav-right-actions">
          {/* AI Assistant Quick Trigger */}
          <button
            onClick={onOpenAI}
            className="ai-trigger-btn"
            title="Launch Gopal-AI Agent"
            aria-label="Open AI Assistant"
          >
            <Bot size={16} className="bot-icon" />
            <span className="ai-trigger-text">Gopal-AI</span>
            <span className="ai-status-pulse"></span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-btn"
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-links-list">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                  {location.pathname === item.path && <Sparkles size={16} />}
                </Link>
              ))}

              <button
                className="btn-cyber-primary mobile-ai-btn"
                onClick={() => {
                  setIsOpen(false);
                  onOpenAI();
                }}
              >
                <Bot size={18} /> Launch Gopal-AI Assistant
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;