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
          <span>MIC PRO SOLUTIONS • منظومة التدريب المتقدم</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="apple-hero-title">
          خدمات تدريبية صُممت <br />
          <span className="apple-hero-title--gradient">لتصنع فارقاً حقيقياً في مسيرتك.</span>
        </h1>

        {/* Lead Subtitle */}
        <p className="apple-hero-subtitle">
          نجمع بين الورش المجهزة بأحدث التقنيات، الحقائب التدريبية المخصصة، والشهادات المهنية المعتمدة
          دولياً لنمنحك وللمؤسسات تجربة تأهيل استثنائية ترتقي لأعلى المعايير العالمية.
        </p>

        {/* Action Buttons */}
        <div className="apple-hero-actions">
          <button
            type="button"
            className="apple-btn-primary"
            onClick={() => onScrollToSection?.("services-bento")}
          >
            <span>استكشف كافة الخدمات</span>
            <ArrowDown size={17} />
          </button>

          <button
            type="button"
            className="apple-btn-secondary"
            onClick={() => onScrollToSection?.("branches-section")}
          >
            زيارة فروع المركز
          </button>
        </div>

        {/* Apple-style Metric Capsules */}
        <div className="apple-hero-metrics">
          <div className="apple-metric-card">
            <div className="apple-metric-icon-wrap">
              <ShieldCheck size={20} />
            </div>
            <div className="apple-metric-info">
              <span className="apple-metric-value">+30 عاماً</span>
              <span className="apple-metric-label">من الريادة والاعتماد المهني</span>
            </div>
          </div>

          <div className="apple-metric-card">
            <div className="apple-metric-icon-wrap">
              <Cpu size={20} />
            </div>
            <div className="apple-metric-info">
              <span className="apple-metric-value">100% تطبيقي</span>
              <span className="apple-metric-label">مختبرات وورش عمل واقعية</span>
            </div>
          </div>

          <div className="apple-metric-card">
            <div className="apple-metric-icon-wrap">
              <Award size={20} />
            </div>
            <div className="apple-metric-info">
              <span className="apple-metric-value">شهادات دولية</span>
              <span className="apple-metric-label">مصدقة وقابلة للاعتماد الخارجي</span>
            </div>
          </div>

          <div className="apple-metric-card">
            <div className="apple-metric-icon-wrap">
              <Users size={20} />
            </div>
            <div className="apple-metric-info">
              <span className="apple-metric-value">+25 جهة</span>
              <span className="apple-metric-label">شراكات مع منظمات ومؤسسات</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
