import { t } from "../../../i18n/index.js";
import { MapPin, Phone, Clock, Compass, Sparkles } from "lucide-react";
import { branchesData } from "../../../data/services";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./BranchesSection.css";

export default function BranchesSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className={`branches-section section ${
        isVisible ? "branches--visible" : ""
      }`}
    >
      <div className="container">
        <div className="branches-header">
          <span className="section-tag">
             {t("فروعنا ومراكز التدريب")} </span>
          <h2 className="section-title">
             {t("مواقع مجهزة بأحدث الورش")} <span className="section-title-accent">  {t("في قلب العاصمة دمشق")} </span>
          </h2>
          <p className="branches-subtitle">
             {t("نوفر فرعين متخصصين لتغطية التدريب التقني والحرفي مع سهولة الوصول والمواصلات.")} </p>
        </div>

        <div className="branches-grid">
          {branchesData.map((branch) => (
            <div
              key={branch.id}
              className={`branch-card ${
                branch.isPrimary ? "branch-card--primary" : ""
              }`}
            >
              <div className="branch-media-box">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="branch-img"
                  loading="lazy"
                />
                <div className="branch-media-gradient" />
                <span className="branch-overlay-badge">
                  <MapPin size={14} />
                  {branch.name}
                </span>
                {branch.isPrimary && (
                  <span className="primary-pill"> {t("الفرع التقني الرئيسي")} </span>
                )}
              </div>

              <div className="branch-content-body">
                <p className="branch-specialty">{branch.specialty}</p>

                <div className="branch-info-box">
                  <div className="branch-info-row">
                    <MapPin size={18} className="info-icon" />
                    <span>{branch.location}</span>
                  </div>

                  <div className="branch-info-row">
                    <Clock size={18} className="info-icon" />
                    <span>{branch.hours}</span>
                  </div>
                </div>

                <div className="branch-phones-block">
                  <span className="phones-label">
                    <Phone size={15} style={{ verticalAlign: "middle", marginInlineEnd: 6 }} />
                     {t("أرقام التواصل المباشرة:")} </span>
                  <div className="phones-chips-row">
                    {branch.phones.map((phone, pIdx) => (
                      <a
                        key={pIdx}
                        href={`tel:${phone}`}
                        dir="ltr"
                        className="phone-chip"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
