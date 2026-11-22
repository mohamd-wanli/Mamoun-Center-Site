import { t } from "../../i18n/index.js";
import React, { useState } from "react";
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
  ExternalLink,
} from "lucide-react";
import { coreServices } from "../../data/services";
import "./ServicesAppleBento.css";

const iconMap = {
  Sliders,
  Wrench,
  Award,
  FileText,
  Headphones,
  Building2,
};

const filterTabs = [
  { id: "all", label: t("كافة الخدمات") },
  { id: "individual", label: t("للأفراد والمهنيين") },
  { id: "corporate", label: t("للشركات والمؤسسات") },
  { id: "accredited", label: t("الاعتمادات والاستشارات") },
];

export default function ServicesAppleBento({ onSelectService }) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices = coreServices.filter((service) => {
    if (activeTab === "all") return true;
    if (activeTab === "corporate") {
      return (
        service.id === "corporate-training" ||
        service.id === "custom-programs"
      );
    }
    if (activeTab === "accredited") {
      return (
        service.id === "accredited-certificates" ||
        service.id === "free-consulting"
      );
    }
    if (activeTab === "individual") {
      return (
        service.id === "hands-on-training" ||
        service.id === "training-content" ||
        service.id === "custom-programs" ||
        service.id === "free-consulting"
      );
    }
    return true;
  });

  return (
    <section id="services-bento" className="apple-bento-section">
      <div className="container">
        {/* Section Header */}
        <div className="apple-bento-header">
          <div className="apple-mini-pill">
            <Sparkles size={13} />
            <span>PORTFOLIO & SOLUTIONS</span>
          </div>
          <h2 className="apple-bento-title">
             {t("حلول متكاملة تُبنى حول طموحك المهني.")} </h2>
          <p className="apple-bento-subtitle">
             {t("نضع بين يديك منظومة تدريبية متطورة تلبي احتياجات سوق العمل العصري، للأفراد والمؤسسات بأعلى معايير الإتقان.")} </p>

          {/* Apple Segmented Control Tabs */}
          <div className="apple-segmented-nav" role="tablist">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`apple-tab-btn ${activeTab === tab.id ? "apple-tab-btn--active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Apple Bento Grid */}
        <div className="apple-bento-grid">
          {filteredServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Award;
            const isFeatured = index === 0;

            return (
              <article
                key={service.id}
                className={`apple-bento-card ${isFeatured ? "apple-bento-card--hero" : ""}`}
                style={{
                  "--accent-color": service.themeColor || "#d7a637",
                }}
              >
                {/* Background Image with Apple Glass Gradient */}
                <div className="apple-card-backdrop">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="apple-card-img"
                    loading="lazy"
                  />
                  <div className="apple-card-overlay" />
                </div>

                {/* Card Content Area */}
                <div className="apple-card-content">
                  {/* Top Bar inside card */}
                  <div className="apple-card-topbar">
                    <span className="apple-card-tag">{service.tag}</span>
                    <div className="apple-card-icon-pill">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="apple-card-body">
                    <span className="apple-card-subtitle">{service.subtitle}</span>
                    <h3 className="apple-card-title">{service.title}</h3>
                    <p className="apple-card-desc">{service.description}</p>

                    {/* Features list (shown on all, expanded on hero) */}
                    <ul className="apple-card-features">
                      {service.features.slice(0, isFeatured ? 4 : 3).map((feat, fIdx) => (
                        <li key={fIdx}>
                          <CheckCircle2 size={16} className="apple-check-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="apple-card-bottom">
                    <button
                      type="button"
                      className="apple-card-cta"
                      onClick={() => onSelectService(service)}
                      aria-label={t("عرض تفاصيل {{value0}}", { value0: service.title })}
                    >
                      <span> {t("استكشف تفاصيل الخدمة")} </span>
                      <ArrowLeft size={16} className="apple-cta-arrow" />
                    </button>

                    <button
                      type="button"
                      className="apple-quick-action"
                      onClick={() => onSelectService(service)}
                      title={t("نظرة سريعة")}
                      aria-label={t("نظرة سريعة")}
                    >
                      <ExternalLink size={15} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
