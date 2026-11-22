import { t } from "../../../i18n/index.js";
import {
  Sliders,
  Wrench,
  Award,
  FileText,
  Headphones,
  Building2,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Link } from "../../../i18n/navigation.jsx";
import { coreServices } from "../../../data/services";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./ServicesGrid.css";

const iconMap = {
  Sliders,
  Wrench,
  Award,
  FileText,
  Headphones,
  Building2,
};

export default function ServicesGrid() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className={`services-grid-section section ${
        isVisible ? "services--visible" : ""
      }`}
    >
      <div className="container">
        <div className="services-section-header">
          <span className="section-tag">
            {/* <Sparkles size={15} style={{ verticalAlign: "middle", marginInlineEnd: 6 }} /> */}
             {t("ماذا نقدم في مركز المأمون؟")} </span>
          <h2 className="section-title">
             {t("خدمات تدريبية متخصصة")} <span className="section-title-accent">  {t("مدعومة بأحدث الورش والمختبرات")} </span>
          </h2>
          <p className="services-header-desc">
             {t("حلول متكاملة تغطي كافة مراحل التعلم والتطوير، من التوجيه والاستشارة وحتى منح الشهادة المعتمدة والانطلاق نحو سوق العمل.")} </p>
        </div>

        <div className="services-cards-grid">
          {coreServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Award;
            return (
              <div
                key={service.id}
                className="service-card"
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  "--service-accent": service.themeColor || "#d7a637",
                }}
              >
                <div className="service-media-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-img"
                    loading="lazy"
                  />
                  <div className="service-media-overlay" />
                  <span className="service-tag-badge">{service.tag}</span>
                </div>

                <div className="service-icon-anchor">
                  
                </div>

                <div className="service-card-body">
                  <h3 className="service-title">{service.title}</h3>
                  <span className="service-subtitle">{service.subtitle}</span>

                  <p className="service-desc">{service.description}</p>

                  <div className="service-features-divider" />

                  <ul className="service-features-list">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle2 size={16} className="feature-check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-footer">
                    <Link to="/contact" className="service-action-btn">
                      <span> {t("طلب الخدمة")} </span>
                      <ArrowLeft size={16} className="btn-arrow" />
                    </Link>

                    <a
                      href={`https://wa.me/963944000111?text=${encodeURIComponent(
                        t("مرحباً، أود الاستفسار عن خدمة: {{value0}}", { value0: service.title })
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-whatsapp-btn"
                      title={t("استفسار فوري عبر واتساب")}
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
