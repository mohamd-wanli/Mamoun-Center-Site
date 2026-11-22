import { t } from "../../../i18n/index.js";
import {
  Users,
  Trophy,
  GraduationCap,
  Globe,
  ArrowLeft,
} from "lucide-react";
import { Link } from "../../../i18n/navigation.jsx";
import "./AboutSection.css";
import useScrollReveal from "../../../hooks/useScrollReveal";
import center from "../../../assets/images/center.png";

export default function AboutSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      className={`about-section section ${isVisible ? "about--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container about-grid">
        <div className="about-content">
          <span className="section-tag"> {t("من نحن")} </span>
          <h2 className="section-title">
             {t("التميز في التعليم والتدريب")} <span className="section-title-accent">
              {" "}
               {t("وبناء الشخصية للمستقبل")} </span>
          </h2>
          <p className="about-description">
             {t("في مركز المأمون الدولي، نؤمن بتطوير متدربين واثقين ومؤهلين وقادرين على إحداث تأثير إيجابي في سوق العمل والمجتمع عبر أحدث المناهج المعتمدة والتدريب التطبيقي.")} </p>

          <Link to="/about" className="about-btn">
            <span> {t("اعرف المزيد عنا")} </span>
            <ArrowLeft size={16} />
          </Link>

          <div className="about-quick-stats">
            <div className="quick-stat">
              <div className="quick-stat-icon">
                <Users size={20} />
              </div>
              <div className="quick-stat-info">
                <strong>+60</strong>
                <span> {t("عاماً من التميز")} </span>
              </div>
            </div>

            <div className="quick-stat">
              <div className="quick-stat-icon">
                <GraduationCap size={20} />
              </div>
              <div className="quick-stat-info">
                <strong>+1500</strong>
                <span> {t("طالب ومتدرب سنوياً")} </span>
              </div>
            </div>

            <div className="quick-stat">
              <div className="quick-stat-icon">
                <Trophy size={20} />
              </div>
              <div className="quick-stat-info">
                <strong>+25</strong>
                <span> {t("جوائز واعتمادات")} </span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-image-wrap">
          <img
            src={center}
            alt={t("حرم مركز المأمون الدولي")}
            className="about-image"
          />
        </div>

        {/* <div className="about-cards-stack">
          <div className="metric-card" style={{ transitionDelay: "0.2s" }}>
            <div className="metric-card-icon">
              <GraduationCap size={28} />
            </div>
            <div className="metric-card-content">
              <h3>+30</h3>
              <p>دبلوم مهني معتمد</p>
            </div>
          </div>

          <div className="metric-card" style={{ transitionDelay: "0.35s" }}>
            <div className="metric-card-icon">
              <GraduationCap size={28} />
            </div>
            <div className="metric-card-content">
              <h3>+30</h3>
              <p>نشاط وورشة تدريبية</p>
            </div>
          </div>

          <div className="metric-card" style={{ transitionDelay: "0.5s" }}>
            <div className="metric-card-icon">
              <Globe size={28} />
            </div>
            <div className="metric-card-content">
              <h3>+10</h3>
              <p>شراكة واعتماد دولي</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
