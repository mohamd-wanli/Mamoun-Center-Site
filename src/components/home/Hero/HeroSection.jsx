import { t } from "../../../i18n/index.js";
import { Link } from "../../../i18n/navigation.jsx";
import { Play, Award, ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import "./HeroSection.css";
import hero from "../../../assets/images/hrco.png";
import FloatingParticles from "../../common/FloatingParticles";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${isLoaded ? "hero--loaded" : ""}`}>
      <div className="hero__visual" aria-hidden="true">
        <img
          src={hero}
          alt={t("مركز المأمون الدولي للتدريب والتأهيل")}
          className="hero__visual-img"
        />
        <div className="hero__overlay-scrim" />
        <div className="hero__overlay-bottom" />
      </div>

      <FloatingParticles count={20} color="rgba(215, 166, 55, 0.6)" />

      <div className="hero-glow hero-glow--blue" aria-hidden="true" />
      <div className="hero-glow hero-glow--gold" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-text">
          {/* Eyebrow badge */}
          {/* <div className="hero-pill">
            <Sparkles size={14} className="hero-pill-icon" />
            <span>مركز المأمون الدولي للتدريب والتأهيل</span>
            <span className="hero-pill-dot" />
            <span className="hero-pill-highlight">منذ 1960</span>
          </div> */}

          {/* Main title with high-contrast glowing typography */}
          <div className="hero-title-reveal">
            <h1>
              <span className="hero-title-line hero-title-line--1">
                 {t("نُلهم العقول،")} </span>
              <br />
              <span className="hero-title-line hero-title-line--2 hero-title-gradient">
                 {t("نصنع المستقبل.")} </span>
            </h1>
          </div>

          <p className="hero-description">
             {t("بيئة تدريبية رائدة تجمع بين التقنيات المتطورة والخبرة العملية العريقة، لنُمكّنك من اكتساب المهارات الاحترافية وصناعة مستقبلك في سوق العمل بثقة واقتدار.")} </p>

          <div className="hero-actions">
            <Link to="/courses" className="button button-primary">
              <span> {t("اكتشف برامجنا التدريبية")} </span>
              <ArrowLeft size={16} strokeWidth={2.4} />
            </Link>
            <Link to="/contact" className="button button-glass">
              <span className="button-icon-play">
                <Play size={14} fill="currentColor" />
              </span>
              <span> {t("تواصل معنا")} </span>
            </Link>
          </div>

          {/* Quick trust highlights with frosted glass chips */}
          <div className="hero-highlights">
            <div className="hero-highlight-item">
              <CheckCircle2 size={15} className="hero-highlight-icon" />
              <span> {t("شهادات معتمدة دولياً")} </span>
            </div>
            <div className="hero-highlight-item">
              <CheckCircle2 size={15} className="hero-highlight-icon" />
              <span> {t("مدربون وخبراء معتمدون")} </span>
            </div>
            <div className="hero-highlight-item">
              <CheckCircle2 size={15} className="hero-highlight-icon" />
              <span> {t("تطبيق عملي 100%")} </span>
            </div>
          </div>
        </div>

        <div className="hero-badge-wrap">
          <div className="hero-badge">
            <span className="hero-badge-icon">
              <Award size={26} strokeWidth={2} />
            </span>
            <span className="hero-badge-text">
              <strong> {t("إرث من التميز والريادة")} </strong>
              <small> {t("أكثر من 60 عاماً من بناء الكفاءات")} </small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
