import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Users,
  Award,
} from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import campusImg1 from "../../../assets/images/training-center.png";
import campusImg2 from "../../../assets/images/aboutStory.jfif";
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
            <div className="intro-badge">
              <Sparkles size={16} />
              <span>حلول تدريبية واستشارية متكاملة</span>
            </div>

            <h2 className="intro-title">
              نلهم العقول ونبني الكفاءات
              <span className="intro-accent"> للأفراد والمؤسسات</span>
            </h2>

            <p className="intro-desc">
              في مركز المأمون الدولي، لا نكتفي بتقديم الدورات التعليمية
              التقليدية، بل نوفر منظومة خدمات متطورة تشمل تصميم المناهج حسب
              الطلب، تدريب فرق العمل المؤسسية، والاستشارات المهنية المجانية،
              مدعومة بأحدث الورش التدريبية وشهادات معتمدة توثق تميزك في سوق
              العمل.
            </p>

            <div className="intro-highlights-grid">
              <div className="intro-highlight-item">
                <div className="highlight-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>مرونة كاملة في التصميم</strong>
                  <p>تفصيل البرامج والمناهج وفق احتياجات المتدرب أو الشركة.</p>
                </div>
              </div>

              <div className="intro-highlight-item">
                <div className="highlight-icon">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <strong>اعتمادات رسمية ودولية</strong>
                  <p>شهادات معترف بها تفتح لك آفاق التوظيف والعمل المباشر.</p>
                </div>
              </div>

              <div className="intro-highlight-item">
                <div className="highlight-icon">
                  <Zap size={18} />
                </div>
                <div>
                  <strong>تجهيز عملي تطبيقي 100%</strong>
                  <p>مختبرات وقاعات مجهزة بأحدث المعدات والأجهزة الاحترافية.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="intro-visual-col">
            <div className="intro-visual-stack">
              <div className="visual-frame visual-frame-main">
                <img
                  src={campusImg1}
                  alt="بيئة التدريب في مركز المأمون"
                  className="intro-img"
                />
                <div className="visual-overlay" />
              </div>

              <div className="visual-frame visual-frame-sub">
                <img
                  src={campusImg2}
                  alt="قاعات ورش العمل"
                  className="intro-img"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="intro-floating-stat">
                <div className="floating-stat-icon">
                  <Award size={22} />
                </div>
                <div>
                  <strong>+60 عاماً</strong>
                  <span>من التميز والريادة</span>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="intro-floating-pill">
                <Users size={16} />
                <span>+25 جهة ومنظمة تثق بنا</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
