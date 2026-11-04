import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Clock,
  Award,
  CheckCircle2,
  Star,
  Layers,
  ArrowLeft,
  UserCheck,
} from "lucide-react";
import "./CourseQuickModal.css";

export default function CourseQuickModal({ program, onClose }) {
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

  if (!program) return null;

  return (
    <div className="course-modal-overlay" onClick={onClose}>
      <div
        className="course-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="إغلاق النافذة"
        >
          <X size={20} />
        </button>

        {/* Modal Header Media */}
        <div className="modal-media-banner">
          <img
            src={program.image}
            alt={program.title}
            className="modal-banner-img"
          />
          <div className="modal-banner-gradient" />
          <div className="modal-banner-badges">
            <span className="modal-category-badge">{program.categoryLabel}</span>
            {program.badge && (
              <span className="modal-accent-badge">{program.badge}</span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-scroll-body">
          <div className="modal-title-row">
            <div>
              <h2 className="modal-title">{program.title}</h2>
              <span className="modal-subtitle">{program.subtitle}</span>
            </div>
            <div className="modal-rating-box">
              <Star size={16} className="star-icon" />
              <strong>{program.rating}</strong>
              <span>({program.reviewsCount} تقييم)</span>
            </div>
          </div>

          <p className="modal-description">{program.description}</p>

          {/* Quick Metrics */}
          <div className="modal-metrics-grid">
            <div className="modal-metric">
              <Clock size={18} className="metric-icon" />
              <div>
                <strong>المدة والتدريب</strong>
                <span>{program.duration} ({program.hours})</span>
              </div>
            </div>

            <div className="modal-metric">
              <Award size={18} className="metric-icon" />
              <div>
                <strong>الشهادة الممنوحة</strong>
                <span>{program.certificate}</span>
              </div>
            </div>

            <div className="modal-metric">
              <Layers size={18} className="metric-icon" />
              <div>
                <strong>نسبة التدريب</strong>
                <span>{program.practicalPercentage}</span>
              </div>
            </div>

            <div className="modal-metric">
              <UserCheck size={18} className="metric-icon" />
              <div>
                <strong>المستوى المطلوب</strong>
                <span>{program.level}</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          {program.highlights && (
            <div className="modal-section-block">
              <h4 className="modal-section-title">أبرز المهارات التي ستتقنها:</h4>
              <ul className="modal-highlights-list">
                {program.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Syllabus brief */}
          {program.syllabus && (
            <div className="modal-section-block">
              <h4 className="modal-section-title">محاور المنهاج التدريبي:</h4>
              <div className="modal-syllabus-list">
                {program.syllabus.map((unit, i) => (
                  <div key={i} className="modal-syllabus-item">
                    <span className="unit-tag">{unit.unit}</span>
                    <span className="unit-title">{unit.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <Link
            to={program.path}
            className="modal-action-btn primary"
            onClick={onClose}
          >
            <span>التفاصيل الكاملة والمنهاج</span>
            <ArrowLeft size={16} />
          </Link>
          <Link
            to="/contact"
            className="modal-action-btn secondary"
            onClick={onClose}
          >
            <span>حجز مقعد واستفسار فوري</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

