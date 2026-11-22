import { t } from "../../../i18n/index.js";
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Users,
  Award,
} from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import campusImg1 from "../../../assets/images/hr.png";
import "./ServicesIntro.css";

export default function ServicesIntro() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className={`services-intro-section ${isVisible ? "intro--visible" : ""}`}
    >
      <div className="container">
        <div className="services-intro-grid">
          <div className="intro-text-col">
            <h2 className="intro-title">
               {t("نلهم العقول ونبني الكفاءات")} <span className="intro-accent">  {t("للأفراد والمؤسسات")} </span>
            </h2>

            <p className="intro-desc">
               {t("في مركز المأمون الدولي، لا نكتفي بتقديم الدورات التعليمية التقليدية، بل نوفر منظومة خدمات متطورة تشمل تصميم المناهج حسب الطلب، تدريب فرق العمل المؤسسية، والاستشارات المهنية المجانية، مدعومة بأحدث الورش التدريبية وشهادات معتمدة توثق تميزك في سوق العمل.")} </p>

            <div className="intro-highlights-grid">
              <div className="intro-highlight-item">
                <div className="highlight-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong> {t("مرونة كاملة في التصميم")} </strong>
                  <p> {t("تفصيل البرامج والمناهج وفق احتياجات المتدرب أو الشركة.")} </p>
                </div>
              </div>

              <div className="intro-highlight-item">
                <div className="highlight-icon">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <strong> {t("اعتمادات رسمية ودولية")} </strong>
                  <p> {t("شهادات معترف بها تفتح لك آفاق التوظيف والعمل المباشر.")} </p>
                </div>
              </div>

              <div className="intro-highlight-item">
                <div className="highlight-icon">
                  <Zap size={18} />
                </div>
                <div>
                  <strong> {t("تجهيز عملي تطبيقي 100%")} </strong>
                  <p> {t("مختبرات وقاعات مجهزة بأحدث المعدات والأجهزة الاحترافية.")} </p>
                </div>
              </div>
            </div>
          </div>

          <div className="intro-visual-col">
            <div className="intro-visual-stack">
              <div className="visual-frame visual-frame-main">
                <img
                  src={campusImg1}
                  alt={t("بيئة التدريب في مركز المأمون")}
                  className="intro-img"
                />
                <div className="visual-overlay" />
              </div>

              {/* <div className="visual-frame visual-frame-sub">
                <img
                  src={campusImg2}
                  alt="قاعات ورش العمل"
                  className="intro-img"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
