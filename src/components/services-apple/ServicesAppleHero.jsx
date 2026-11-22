import { t } from "../../i18n/index.js";
import React from "react";
import { Sparkles, ArrowDown, ShieldCheck, Cpu, Award, Users } from "lucide-react";
import "./ServicesAppleHero.css";

export default function ServicesAppleHero({ onScrollToSection }) {
  return (
    <section className="apple-hero-section">
      {/* Background ambient lighting */}
      <div className="apple-hero-glow apple-hero-glow--top" aria-hidden="true" />
      <div className="apple-hero-glow apple-hero-glow--accent" aria-hidden="true" />

      <div className="container apple-hero-inner">
        {/* Eyebrow Pill */}
        <div className="apple-pill-badge">
          <Sparkles size={14} className="apple-pill-icon" />
          <span> {t("MIC PRO SOLUTIONS • منظومة التدريب المتقدم")} </span>
        </div>

        {/* Main Display Headline */}
        <h1 className="apple-hero-title">
           {t("خدمات تدريبية صُممت")} <br />
          <span className="apple-hero-title--gradient"> {t("لتصنع فارقاً حقيقياً في مسيرتك.")} </span>
        </h1>

        {/* Lead Subtitle */}
        <p className="apple-hero-subtitle">
           {t("نجمع بين الورش المجهزة بأحدث التقنيات، الحقائب التدريبية المخصصة، والشهادات المهنية المعتمدة دولياً لنمنحك وللمؤسسات تجربة تأهيل استثنائية ترتقي لأعلى المعايير العالمية.")} </p>

        {/* Action Buttons */}
        <div className="apple-hero-actions">
          <button
            type="button"
            className="apple-btn-primary"
            onClick={() => onScrollToSection?.("services-bento")}
          >
            <span> {t("استكشف كافة الخدمات")} </span>
            <ArrowDown size={17} />
          </button>

          <button
            type="button"
            className="apple-btn-secondary"
            onClick={() => onScrollToSection?.("branches-section")}
          >
             {t("زيارة فروع المركز")} </button>
        </div>

        {/* Apple-style Metric Capsules */}
        <div className="apple-hero-metrics">
          <div className="apple-metric-card">
            <div className="apple-metric-icon-wrap">
              <ShieldCheck size={20} />
            </div>
            <div className="apple-metric-info">
              <span className="apple-metric-value"> {t("+30 عاماً")} </span>
              <span className="apple-metric-label"> {t("من الريادة والاعتماد المهني")} </span>
            </div>
          </div>

          <div className="apple-metric-card">
            <div className="apple-metric-icon-wrap">
              <Cpu size={20} />
            </div>
            <div className="apple-metric-info">
              <span className="apple-metric-value"> {t("100% تطبيقي")} </span>
              <span className="apple-metric-label"> {t("مختبرات وورش عمل واقعية")} </span>
            </div>
          </div>

          <div className="apple-metric-card">
            <div className="apple-metric-icon-wrap">
              <Award size={20} />
            </div>
            <div className="apple-metric-info">
              <span className="apple-metric-value"> {t("شهادات دولية")} </span>
              <span className="apple-metric-label"> {t("مصدقة وقابلة للاعتماد الخارجي")} </span>
            </div>
          </div>

          <div className="apple-metric-card">
            <div className="apple-metric-icon-wrap">
              <Users size={20} />
            </div>
            <div className="apple-metric-info">
              <span className="apple-metric-value"> {t("+25 جهة")} </span>
              <span className="apple-metric-label"> {t("شراكات مع منظمات ومؤسسات")} </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
