import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  X,
  User,
  Calendar,
  Award,
  CheckCircle,
  ArrowLeft,
  Tag,
} from "lucide-react";
import "./WorkLightboxModal.css";

export default function WorkLightboxModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="إغلاق النافذة"
        >
          <X size={20} />
        </button>

        <div className="lightbox-grid">
          <div className="lightbox-media-col">
            <img
              src={project.image}
              alt={project.title}
              className="lightbox-img"
            />
            <div className="lightbox-media-badges">
              <span className="lightbox-cat-badge">
                {project.categoryLabel}
              </span>
              <span className="lightbox-year-badge">{project.year}</span>
            </div>
          </div>

          <div className="lightbox-details-col">
            <div className="lightbox-author-box">
              <div className="lightbox-avatar">
                <User size={22} />
              </div>
              <div>
                <h4 className="author-name">{project.student}</h4>
                <span className="author-course">{project.program}</span>
              </div>
            </div>

            <h2 className="lightbox-title">{project.title}</h2>

            <div className="lightbox-desc-box">
              <h5 className="desc-title">تفاصيل المشروع والمهام المنجزة:</h5>
              <p className="desc-text">{project.description}</p>
            </div>

            {project.tags && (
              <div className="lightbox-skills-box">
                <span className="skills-lbl">
                  <Tag
                    size={14}
                    style={{ verticalAlign: "middle", marginLeft: 4 }}
                  />
                  التقنيات والأدوات المستخدمة:
                </span>
                <div className="skills-chips">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="skill-chip">
                      <CheckCircle size={13} /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="lightbox-actions-row">
              <Link
                to="/courses"
                className="lightbox-main-btn"
                onClick={onClose}
              >
                <span>استكشف الدورة التدريبية</span>
                <ArrowLeft size={16} />
              </Link>
              <Link
                to="/contact"
                className="lightbox-sub-btn"
                onClick={onClose}
              >
                <span>استفسار وتسجيل</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
