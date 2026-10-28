import {
  Award,
  Users,
  Trophy,
  GraduationCap,
  Heart,
  Globe,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./AboutSection.css";
import campusImg from "../../../assets/images/about4.jfif";
import useScrollReveal from "../../../hooks/useScrollReveal";

export default function AboutSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      className={`about-section section ${isVisible ? "about--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container about-grid">
        {/* Left Column: Text & Stats */}
        <div className="about-content">
          <span className="section-tag">عن المركز </span>
          <h2 className="section-title">
            التميز في التعليم والتدريب
            <span className="section-title-accent">
              {" "}
              وبناء الشخصية للمستقبل
            </span>
          </h2>
          <p className="about-description">
            في مركز المأمون الدولي، نؤمن بتطوير متدربين واثقين ومؤهلين وقادرين
            على إحداث تأثير إيجابي في سوق العمل والمجتمع عبر أحدث المناهج
            المعتمدة والتدريب التطبيقي.
          </p>

          <Link to="/about" className="about-btn">
            <span>اعرف المزيد عنا </span>
            <ArrowLeft size={16} />
          </Link>

          <div className="about-quick-stats">
            <div className="quick-stat">
              <div className="quick-stat-icon">
                <Users size={20} />
              </div>
              <div className="quick-stat-info">
                <strong>+60</strong>
                <span>عاماً من التميز</span>
              </div>
            </div>

            <div className="quick-stat">
              <div className="quick-stat-icon">
                <GraduationCap size={20} />
              </div>
              <div className="quick-stat-info">
                <strong>+1500</strong>
                <span>طالب ومتدرب سنوياً</span>
              </div>
            </div>

            <div className="quick-stat">
              <div className="quick-stat-icon">
                <Trophy size={20} />
              </div>
              <div className="quick-stat-info">
                <strong>+25</strong>
                <span>جوائز واعتمادات</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column: Campus Image */}
        <div className="about-image-wrap">
          <img
            src={campusImg}
            alt="حرم مركز المأمون الدولي"
            className="about-image"
          />
        </div>

        {/* Right Column: Stat Cards Stack */}
        <div className="about-cards-stack">
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
        </div>
      </div>
    </section>
  );
}
