import { t } from "../../../i18n/index.js";
import { Link } from "../../../i18n/navigation.jsx";
import {
  Award,
  Star,
  CheckCircle2,
  ArrowLeft,
  Eye,
  Sparkles,
  Layers,
} from "lucide-react";
import "./CoursesCatalog.css";

export default function CoursesCatalog({ programs, onQuickView }) {
  if (!programs || programs.length === 0) {
    return (
      <div className="courses-empty-state">
        <Sparkles size={40} className="empty-icon" />
        <h3> {t("لم يتم العثور على برامج مطابقة")} </h3>
        <p> {t("جرب تغيير كلمات البحث أو اختيار تخصص آخر لعرض الدورات المتاحة.")} </p>
      </div>
    );
  }

  return (
    <div className="courses-catalog-grid">
      {programs.map((program, index) => {
        return (
          <article
            key={program.id || program.slug}
            className="program-card"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="program-media">
              <img
                src={program.image}
                alt={program.title}
                className="program-img"
                loading="lazy"
              />
              <div className="program-img-overlay" />

              <div className="program-badges-top">
                <span className="program-cat-badge">
                  {program.categoryLabel}
                </span>
                {program.badge && (
                  <span className="program-ribbon-badge">{program.badge}</span>
                )}
              </div>

              <button
                type="button"
                className="quick-view-hover-btn"
                onClick={() => onQuickView(program)}
                aria-label={t("نظرة سريعة على الدورة")}
              >
                <Eye size={16} />
                <span> {t("نظرة سريعة")} </span>
              </button>
            </div>

            <div className="program-body">
              <div className="program-header-row">
                <div className="program-rating">
                  <Star size={15} className="star-filled" />
                  <strong>{program.rating}</strong>
                  <span>({program.reviewsCount}  {t("تقييم)")} </span>
                </div>
                <span className="program-level-pill">{program.level}</span>
              </div>

              <h3 className="program-title">
                <Link to={program.path}>{program.title}</Link>
              </h3>
              <span className="program-subtitle">{program.subtitle}</span>

              <p className="program-desc">{program.description}</p>

              <div className="program-meta-chips">
                <div className="meta-chip">
                  {/* <Clock size={14} className="chip-icon" />
                  <span>{program.duration}</span> */}
                </div>
                <div className="meta-chip">
                  <Layers size={14} className="chip-icon" />
                  <span>{program.hours}</span>
                </div>
                <div className="meta-chip">
                  <Award size={14} className="chip-icon" />
                  <span> {t("شهادة معتمدة")} </span>
                </div>
              </div>

              {program.highlights && program.highlights.length > 0 && (
                <ul className="program-key-points">
                  {program.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={15} className="point-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="program-actions">
                <Link to={program.path} className="program-main-btn">
                  <span> {t("تفاصيل المنهاج")} </span>
                  <ArrowLeft size={16} className="btn-arrow" />
                </Link>
                <Link
                  to="/contact"
                  className="program-enroll-btn"
                  title={t("سجل أو احجز مقعدك")}
                >
                   {t("حجز مقعد")} </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
