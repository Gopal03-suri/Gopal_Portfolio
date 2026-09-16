import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User, Terminal, ArrowRight } from 'lucide-react';
import './AIAssistantModal.css';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  chips?: string[];
  timestamp: string;
}

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistantModal: React.FC<AIAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "⚡ **Greetings! I am Gopal-AI (Neural Agent v2.5).**\nI'm trained on Gopal's entire portfolio, engineering skills, AI/ML projects, and industry certifications. How can I assist you today?",
      chips: [
        '🚀 Tell me about Gopal’s AI & ML work',
        '🏆 What certifications does he hold?',
        '💻 Show top projects (RoomSetu, TaskFlow)',
        '📬 How can I contact or hire Gopal?',
      ],
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // AI Response generation logic
    setTimeout(() => {
      const response = generateAIResponse(query);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: response.text,
          chips: response.chips,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  const generateAIResponse = (query: string): { text: string; chips?: string[] } => {
    const q = query.toLowerCase();

    if (q.includes('ai') || q.includes('ml') || q.includes('machine learning') || q.includes('agent')) {
      return {
        text: `🤖 **AI/ML & Agent Development Background:**\n• **Degree:** B.Tech in CSE (AI & Machine Learning) @ Parul University (2024-2028).\n• **Specializations:** Generative AI, AI Agents, Neural Networks, Computer Vision, Prompt Engineering.\n• **Credentials:** Oracle Cloud 2025 AI Foundation Associate, Google Gemini AI Workshop, AICTE IndiaAI Pre-Summit 2026, Parul Univ GenAI Workshop.\n• **Toolkit:** Python, PyTorch, Scikit-Learn, LangChain, REST APIs, Cloud AI Services.`,
        chips: ['🏆 View Oracle & AWS Certifications', '💼 Check out projects', '📬 Contact Gopal'],
      };
    }

    if (q.includes('certif') || q.includes('badge') || q.includes('oracle') || q.includes('aws')) {
      return {
        text: `🏆 **Key Industry Certifications & Achievements:**\n1. **Oracle Cloud Infrastructure 2025 AI Foundation Associate** (Verified with Badge)\n2. **AWS Academy Graduate** (20+ hrs Cloud Foundation & Badge)\n3. **AWS DevOps Meets AI** Seminar & Workshop\n4. **Google Gemini AI Workshop**\n5. **AICTE HEIs Engagement AI Pre-Summit 2026**\n6. **eDC Blueprint 6.0 – IIT Delhi** Unstop Fest\n7. **IIT Kharagpur** Tech Conference\n8. **PU DAO Polkadot Web3 Bootcamp**\n\nAll certificates have verified high-res scans in the **Certifications** tab!`,
        chips: ['🚀 What are his top projects?', '📄 Download Resume', '📬 Contact Info'],
      };
    }

    if (q.includes('project') || q.includes('farmx') || q.includes('bank') || q.includes('roomsetu') || q.includes('taskflow') || q.includes('vibecheck') || q.includes('atm')) {
      return {
        text: `💻 **Flagship Projects by Gopal:**\n• **FarmX:** AI-driven agricultural marketplace ([Live Demo](https://farm-x-pied.vercel.app/)) with Scikit-Learn demand forecasting, Razorpay checkout & Google Maps tracking.\n• **Banking Support Agent:** Conversational AI agent for automated financial customer query resolution built with Python & Jupyter workflows.\n• **RoomSetu:** Smart platform for finding rooms & roommates with dedicated tenant, owner & admin dashboards.\n• **TaskFlow Pro:** Django & Kanban-based agile task management workflow system.\n• **Vibecheck:** Next-gen campus event discovery and registration portal.\n• **ATM Request System:** Full Java & OOP transaction processing system with live demo.\n• **Dermaco Hospital Portal:** Healthcare appointment & patient registry system.\n\nYou can explore live repos on his GitHub (*@Gopal03-suri*)!`,
        chips: ['⚙️ View Skills & Stack', '🏆 View Certifications', '📬 Send Gopal an Email'],
      };
    }

    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('internship')) {
      return {
        text: `📬 **Ready to Connect!**\n• **Email:** [gopalpurbey708@gmail.com](mailto:gopalpurbey708@gmail.com)\n• **Phone:** +91 7827008357\n• **LinkedIn:** linkedin.com/in/gopal-kumar-purbey-ba7550314\n• **GitHub:** github.com/Gopal03-suri\n• **Location:** Gujarat, India\n\n⚡ Gopal is actively open to AI/ML internships, full-stack roles, and freelance collaborations. Response time is typically < 24 hours!`,
        chips: ['🚀 AI & ML Capabilities', '📄 Download Resume', '💻 View Projects'],
      };
    }

    if (q.includes('skill') || q.includes('stack') || q.includes('tech') || q.includes('python') || q.includes('react')) {
      return {
        text: `⚡ **Technical Ecosystem:**\n• **Languages:** Python, Java, JavaScript, TypeScript, C, SQL, Swift\n• **AI/ML:** PyTorch, Scikit-Learn, Gemini API, NLP, LangChain, Prompt Engineering\n• **Web / Full-Stack:** React, TypeScript, Node.js, Express, Django, HTML5/CSS3\n• **Cloud & DevOps:** Oracle Cloud (OCI AI), AWS Cloud, Docker, Git/GitHub, REST APIs\n• **Databases:** MySQL, MongoDB, Firebase`,
        chips: ['🏆 Check Certifications', '💻 Top Projects', '📬 Contact Gopal'],
      };
    }

    return {
      text: `✨ I understand you are interested in "${query}".\nGopal is a high-drive **AI/ML Engineering Student** (Parul University) and **Full Stack Developer** with certified expertise in Oracle AI, AWS Cloud, and modern software architectures.\n\nWhat specific detail would you like to explore?`,
      chips: [
        '🚀 Tell me about Gopal’s AI & ML work',
        '🏆 View Certifications',
        '💻 Explore Projects',
        '📬 Get Contact Details',
      ],
    };
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="ai-modal-overlay" onClick={onClose}>
          <motion.div
            className="ai-modal-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="ai-modal-header">
              <div className="ai-header-info">
                <div className="ai-avatar-pulse">
                  <Bot size={22} className="ai-avatar-icon" />
                  <span className="live-status-dot"></span>
                </div>
                <div>
                  <div className="ai-modal-title">
                    Gopal-AI <span className="ai-version-pill">NEURAL AGENT v2.5</span>
                  </div>
                  <div className="ai-modal-subtitle">
                    Intelligent Assistant • Trained on Gopal's Experience
                  </div>
                </div>
              </div>
              <button className="ai-close-btn" onClick={onClose} aria-label="Close Assistant">
                <X size={20} />
              </button>
            </div>

            {/* Terminal Status Strip */}
            <div className="ai-terminal-strip">
              <Terminal size={13} />
              <span>MODEL: AIML-AGENT // LATENCY: 12ms // STATUS: ONLINE</span>
            </div>

            {/* Chat Body */}
            <div className="ai-modal-body">
              {messages.map((msg) => (
                <div key={msg.id} className={`ai-chat-bubble-wrap ${msg.sender}`}>
                  <div className="ai-bubble-sender-icon">
                    {msg.sender === 'ai' ? <Sparkles size={16} /> : <User size={16} />}
                  </div>
                  <div className="ai-bubble-content">
                    <div className="ai-bubble-text">
                      {msg.text.split('\n').map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                    {msg.chips && msg.chips.length > 0 && (
                      <div className="ai-chips-container">
                        {msg.chips.map((chip, cIdx) => (
                          <button
                            key={cIdx}
                            className="ai-chip-btn"
                            onClick={() => handleSendMessage(chip)}
                          >
                            <span>{chip}</span>
                            <ArrowRight size={13} />
                          </button>
                        ))}
                      </div>
                    )}
                    <span className="ai-msg-time">{msg.timestamp}</span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="ai-chat-bubble-wrap ai">
                  <div className="ai-bubble-sender-icon">
                    <Sparkles size={16} />
                  </div>
                  <div className="ai-bubble-content">
                    <div className="ai-typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <div className="ai-modal-footer">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="ai-input-form"
              >
                <input
                  type="text"
                  placeholder="Ask anything about Gopal's AI skills, projects, certifications..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="ai-chat-input"
                />
                <button
                  type="submit"
                  className="ai-send-btn"
                  disabled={!inputValue.trim()}
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AIAssistantModal;
