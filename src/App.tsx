import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NeuralCanvas from './components/NeuralCanvas';
import AIAssistantModal from './components/AIAssistantModal';
import CertificateModal, { CertificateItem } from './components/CertificateModal';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import { Bot, Sparkles } from 'lucide-react';
import './App.css';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// All Certificate Records Map for modal lookup
const allCertificatesMap: Record<number, CertificateItem> = {
  1: {
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
  2: {
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
  3: {
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
  13: {
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
  14: {
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
};

function AppContent() {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const handleOpenCertById = (id: number) => {
    if (allCertificatesMap[id]) {
      setSelectedCert(allCertificatesMap[id]);
    }
  };

  return (
    <div className="app-wrapper">
      <ScrollToTop />
      {/* Interactive Background Neural Canvas */}
      <NeuralCanvas />

      {/* Floating Cyber Navbar */}
      <Navbar onOpenAI={() => setIsAIModalOpen(true)} />

      {/* Main Routed Content */}
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenAI={() => setIsAIModalOpen(true)}
                onOpenCertModal={handleOpenCertById}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route
            path="/certifications"
            element={
              <Certifications
                onSelectCertificate={(cert) => setSelectedCert(cert)}
              />
            }
          />
          <Route
            path="/contact"
            element={<Contact onOpenAI={() => setIsAIModalOpen(true)} />}
          />
        </Routes>
      </main>

      {/* Futuristic Footer */}
      <Footer onOpenAI={() => setIsAIModalOpen(true)} />

      {/* Global Floating AI Assistant Trigger Button */}
      <button
        className="floating-ai-agent-trigger"
        onClick={() => setIsAIModalOpen(true)}
        aria-label="Launch Gopal-AI Agent"
      >
        <div className="agent-trigger-inner">
          <Bot size={24} className="agent-trigger-bot" />
          <span className="agent-trigger-pulse"></span>
        </div>
        <span className="agent-trigger-tooltip font-mono">
          <Sparkles size={12} /> Talk with Gopal-AI
        </span>
      </button>

      {/* AI Assistant Modal */}
      <AIAssistantModal
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
      />

      {/* Certificate Image Preview Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;