import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, Calendar, Building, CheckCircle2 } from 'lucide-react';
import './CertificateModal.css';

export interface CertificateItem {
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

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="cert-modal-overlay" onClick={onClose}>
        <motion.div
          className="cert-modal-card"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button className="cert-modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>

          <div className="cert-modal-body">
            {/* Certificate Preview Image */}
            <div className="cert-preview-col">
              {certificate.certificateUrl ? (
                <div className="cert-image-frame">
                  <img
                    src={certificate.certificateUrl}
                    alt={certificate.title}
                    className="cert-main-img"
                    onError={(e) => {
                      // Fallback if image not found
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="cert-watermark-overlay">
                    <CheckCircle2 size={18} className="verified-icon" />
                    <span>Verified Credential</span>
                  </div>
                </div>
              ) : (
                <div className="cert-image-placeholder">
                  <Award size={64} className="placeholder-icon" />
                  <p>Verified Credential Record</p>
                </div>
              )}

              {certificate.badgeUrl && (
                <div className="cert-badge-preview">
                  <img src={certificate.badgeUrl} alt="Credential Badge" />
                  <span>Official Issuer Badge</span>
                </div>
              )}
            </div>

            {/* Certificate Details */}
            <div className="cert-details-col">
              <div className="cert-modal-badge">
                <span className="cert-category-tag">{certificate.category.toUpperCase()}</span>
                <span className="cert-verified-pill">
                  <CheckCircle2 size={13} /> Verified
                </span>
              </div>

              <h2 className="cert-modal-title">{certificate.title}</h2>

              <div className="cert-modal-meta">
                <div className="meta-row">
                  <Building size={16} className="meta-icon" />
                  <span className="meta-label">Issuer:</span>
                  <span className="meta-value">{certificate.issuer}</span>
                </div>
                <div className="meta-row">
                  <Calendar size={16} className="meta-icon" />
                  <span className="meta-label">Date:</span>
                  <span className="meta-value">{certificate.date}</span>
                </div>
              </div>

              <p className="cert-modal-desc">{certificate.description}</p>

              <div className="cert-skills-wrap">
                <h4>Acquired Competencies & Topics:</h4>
                <div className="cert-skills-tags">
                  {certificate.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="cert-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cert-modal-actions">
                {certificate.certificateUrl && (
                  <a
                    href={certificate.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber-primary"
                  >
                    <ExternalLink size={16} /> Open Full Document
                  </a>
                )}
                {certificate.badgeUrl && (
                  <a
                    href={certificate.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber-secondary"
                  >
                    <Award size={16} /> View Badge
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
