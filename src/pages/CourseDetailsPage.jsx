import { t } from "../i18n/index.js";
import { useState } from "react";
import { useParams, Link, Navigate } from "../i18n/navigation.jsx";
import {
  Clock,
  Award,
  Layers,
  Star,
  CheckCircle2,
  Calendar,
  ChevronDown,
  ArrowRight,
  PhoneCall,
  Send,
  CheckCircle,
  Briefcase,
  Sparkles,
  Users,
} from "lucide-react";
import PageHeader from "../components/common/PageHeader/PageHeader";
import { programs } from "../data/courses";
import "./CourseDetailsPage.css";

export default function CourseDetailsPage() {
  const { slug } = useParams();

  // Find course by slug
  const program = programs.find((p) => p.slug === slug);

  const [activeUnit, setActiveUnit] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    notes: "",
  });
  const [enrollStatus, setEnrollStatus] = useState("idle");

  if (!program) {
    return <Navigate to="/courses" replace />;
  }

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    setEnrollStatus("submitting");
    setTimeout(() => {
      setEnrollStatus("success");
      setFormData({ name: "", phone: "", notes: "" });
      setTimeout(() => setEnrollStatus("idle"), 6000);
    }, 800);
  };

  // Other related courses
  const relatedPrograms = programs
    .filter((p) => p.id !== program.id)
    .slice(0, 3);

  return (
    <div className="course-details-page">
      {/* Dynamic Header */}
      <PageHeader
        tag={t("برنامج تدريبي معتمد • {{value0}}", { value0: program.categoryLabel })}
        title={program.title}
        subtitle={program.subtitle}
        breadcrumbs={[
          { label: t("الدورات والبرامج"), path: "/courses" },
          { label: program.title },
        ]}
      />

      <div className="container details-container">
        <div className="details-main-grid">
          {/* Main Content Column */}
          <div className="details-content-col">
            {/* Overview Card */}
            <div className="details-card">
              <h2 className="details-section-title">
                <Sparkles size={20} className="title-icon" />
                 {t("نظرة عامة عن البرنامج")} </h2>
              <p className="details-overview-text">{program.description}</p>

              {/* Fast Feature Chips */}
              <div className="details-feature-chips">
                <div className="details-chip">
                  <Clock size={16} className="chip-ico" />
                  <div>
                    <span className="chip-lbl"> {t("المدة التدريبية")} </span>
                    <strong>{program.duration}</strong>
                  </div>
                </div>

                <div className="details-chip">
                  <Layers size={16} className="chip-ico" />
                  <div>
                    <span className="chip-lbl"> {t("الساعات المعتمدة")} </span>
                    <strong>{program.hours}</strong>
                  </div>
                </div>

                <div className="details-chip">
                  <Award size={16} className="chip-ico" />
                  <div>
                    <span className="chip-lbl"> {t("طبيعة التدريب")} </span>
                    <strong>{program.practicalPercentage}</strong>
                  </div>
                </div>

                <div className="details-chip">
                  <Users size={16} className="chip-ico" />
                  <div>
                    <span className="chip-lbl"> {t("المستوى")} </span>
                    <strong>{program.level}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* What you will learn */}
            {program.highlights && (
              <div className="details-card">
                <h2 className="details-section-title">
                  <CheckCircle2 size={20} className="title-icon" />
                   {t("ماذا ستكتسب وتتقن في هذه الدورة؟")} </h2>
                <div className="details-learn-grid">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="learn-item">
                      <div className="learn-check">
                        <CheckCircle2 size={18} />
                      </div>
                      <p>{h}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Syllabus Modules Accordion */}
            {program.syllabus && (
              <div className="details-card">
                <h2 className="details-section-title">
                  <Calendar size={20} className="title-icon" />
                   {t("المنهاج التدريبي والمحاور التفصيلية")} </h2>
                <p className="syllabus-intro">
                   {t("خطة تدريبية متكاملة مقسمة إلى محاور تدرجية تنقلك من المفاهيم الأساسية إلى أسرار الاحتراف المهني:")} </p>

                <div className="syllabus-accordion">
                  {program.syllabus.map((module, idx) => {
                    const isOpen = activeUnit === idx;
                    return (
                      <div
                        key={idx}
                        className={`syllabus-module ${isOpen ? "module--open" : ""}`}
                      >
                        <button
                          type="button"
                          className="module-header-btn"
                          onClick={() => setActiveUnit(isOpen ? -1 : idx)}
                        >
                          <div className="module-title-group">
                            <span className="module-badge">{module.unit}</span>
                            <span className="module-name">{module.title}</span>
                          </div>
                          <ChevronDown
                            size={18}
                            className={`module-chevron ${isOpen ? "rotate" : ""}`}
                          />
                        </button>

                        {isOpen && (
                          <div className="module-body">
                            <ul className="module-topics-list">
                              {module.topics.map((topic, tIdx) => (
                                <li key={tIdx}>
                                  <span className="topic-dot" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* {program.careerOpportunities && (
              <div className="details-card">
                <h2 className="details-section-title">
                  <Briefcase size={20} className="title-icon" />
                  مجالات العمل والتوظيف بعد التخرج
                </h2>
                <div className="career-cards-grid">
                  {program.careerOpportunities.map((career, i) => (
                    <div key={i} className="career-pill-item">
                      <div className="career-icon-box">✓</div>
                      <span>{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            )} */}
          </div>

          <aside className="details-sidebar-col">
            {/* Enrollment Action Card */}
            <div className="sidebar-sticky-card">
              <div className="sidebar-media-box">
                <img
                  src={program.image}
                  alt={program.title}
                  className="sidebar-img"
                />
                <span className="sidebar-cert-badge">
                  <Award size={14} /> {program.certificate}
                </span>
              </div>

              <div className="sidebar-card-body">
                <div className="sidebar-rating-strip">
                  <Star size={16} className="star-filled" />
                  <strong>{program.rating}</strong>
                  <span>({program.reviewsCount}  {t("تقييم متدرب)")} </span>
                </div>

                <div className="sidebar-divider" />

                <h3 className="sidebar-enroll-title">
                   {t("حجز مقعد في هذه الدورة")} </h3>
                <p className="sidebar-enroll-sub">
                   {t("المقاعد محدودة لضمان أعلى مستويات التدريب العملي الفردي.")} </p>

                {enrollStatus === "success" && (
                  <div className="details-enroll-success">
                    <CheckCircle size={20} />
                    <span> {t("تم تسجيل طلبك بنجاح! سنتواصل معك للتأكيد.")} </span>
                  </div>
                )}

                <form onSubmit={handleEnrollSubmit} className="sidebar-enroll-form">
                  <input
                    type="text"
                    required
                    placeholder={t("الاسم الكامل")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="sidebar-input"
                  />
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    placeholder={t("رقم الهاتف أو الواتساب")}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="sidebar-input"
                  />
                  <textarea
                    rows="2"
                    placeholder={t("ملاحظات أو التوقيت المفضل (اختياري)...")}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="sidebar-input sidebar-textarea"
                  />

                  <button
                    type="submit"
                    disabled={enrollStatus === "submitting"}
                    className="sidebar-submit-btn"
                  >
                    <span>
                      {enrollStatus === "submitting"
                        ? t("جارٍ الحجز...")
                        : t("حجز المقعد الآن")}
                    </span>
                    <Send size={16} />
                  </button>
                </form>

                <div className="sidebar-whatsapp-row">
                  <span> {t("أو تواصل فورياً عبر واتساب:")} </span>
                  <a
                    href={`https://wa.me/963966382224?text=${encodeURIComponent(
                      t("مرحباً، أود الاستفسار والتسجيل في دورة: {{value0}}", { value0: program.title })
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sidebar-whatsapp-btn"
                  >
                     {t("محادثة واتساب مباشرة")} </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Programs Section */}
        {relatedPrograms.length > 0 && (
          <div className="related-courses-section">
            <div className="related-header">
              <h3 className="related-title"> {t("برامج تدريبية أخرى قد تهمك")} </h3>
              <Link to="/courses" className="view-all-link">
                 {t("عرض جميع البرامج ←")} </Link>
            </div>

            <div className="related-grid">
              {relatedPrograms.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="related-course-card"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="related-img"
                  />
                  <div className="related-card-content">
                    <span className="related-category">{item.categoryLabel}</span>
                    <h4 className="related-card-title">{item.title}</h4>
                    <span className="related-duration">
                      <Clock size={12} /> {item.duration}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
