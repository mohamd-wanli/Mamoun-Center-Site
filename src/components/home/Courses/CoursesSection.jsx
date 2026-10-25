import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./CoursesSection.css";

export default function CoursesSection() {
  return (
    <section className="courses-section section">
      <div className="container">
        <div className="courses-header">
          <span className="section-tag">البرامج الأكاديمية • ACADEMICS</span>
          <h2 className="section-title">
            اكتشف برامجنا التعليمية
            <span className="section-title-accent"> Discover Our Programs</span>
          </h2>
          <p className="courses-subtitle">
            مناهج تدريبية وتعليمية شاملة مصممة بعناية لإلهام وتطوير قدرات كل متدرب
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((item) => (
            <div className="program-card" key={item.id}>
              <div className="program-card-img-wrap">
                <img src={item.img} alt={item.title} className="program-card-img" />
              </div>
              <div className="program-card-body">
                <h3 className="program-title">{item.title}</h3>
                <span className="program-subtitle-tag">{item.subtitle}</span>
                <p className="program-desc">{item.desc}</p>
                <Link to={item.path} className="program-link">
                  <span>{item.linkText}</span>
                  <ArrowLeft size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="courses-footer-action">
          <Link to="/courses" className="view-all-btn">
            <span>عرض جميع البرامج • VIEW ALL PROGRAMS</span>
            <ArrowLeft size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
