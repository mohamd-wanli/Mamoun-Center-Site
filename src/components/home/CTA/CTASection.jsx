import { t } from "../../../i18n/index.js";
import { Award, Headphones, CheckCircle2 } from "lucide-react";
import "./CTASection.css";
import studentsImg from "../../../assets/images/cta.jfif";
import useScrollReveal from "../../../hooks/useScrollReveal";

const features = [
  {
    icon: Award,
    title: t("شهادات مهنية معتمدة"),
    desc: t("برامج تدريبية متوافقة مع متطلبات سوق العمل لضمان جاهزيتك وتفوقك المهني."),
  },
  {
    icon: Headphones,
    title: t("إرشاد وتوجيه تدريبي مستمر"),
    desc: t("متابعة وإشراف مباشر من نخبة من الخبراء والمدربين المتخصصين طوال فترة البرنامج."),
  },
  {
    icon: CheckCircle2,
    title: t("تدريب عملي تطبيقي 100%"),
    desc: t("ورش وقاعات مجهزة بأحدث الأدوات والتقنيات لمحاكاة بيئة العمل الفعلية خطوة بخطوة."),
  },
];

export default function CTASection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className={`cta-section section ${isVisible ? "cta--visible" : ""}`}
    >
      <div className="container cta-container">
        <div className="cta-image-col">
          <div className="cta-image-frame">
            <img
              src={studentsImg}
              alt={t("طلاب مركز المأمون الدولي")}
              className="cta-image"
            />
          </div>
        </div>

        <div className="cta-content-col">
          <span className="section-tag"> {t("التسجيل والقبول • ADMISSIONS")} </span>
          <h2 className="section-title">
             {t("ابدأ رحلتك نحو")} <span className="section-title-accent">  {t("مستقبل واعد ومشرق")} </span>
          </h2>
          <p className="cta-description">
             {t("انضم إلى مجتمعنا التدريبي المتميز حيث نضع بين يديك كل ما تحتاجه من خبرات وإمكانيات للانطلاق بقوة وثقة في مسارك المهني.")} </p>

          <div className="cta-features-list">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  className="cta-feature-item"
                  key={idx}
                  style={{ transitionDelay: `${0.25 + idx * 0.14}s` }}
                >
                  <div className="cta-feature-icon">
                    <Icon size={22} />
                  </div>
                  <div className="cta-feature-text">
                    <h4 className="cta-feature-title">{item.title}</h4>
                    <p className="cta-feature-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cta-info-badge">
            <p>
              💡 <strong> {t("باب التسجيل مفتوح لجميع الدورات:")} </strong>  {t("يمكنك زيارة المركز في دمشق - جسر فكتوريا أو الاستفسار المباشر عبر الهاتف لمعرفة المواعيد وحجز مقعدك.")} </p>
          </div>
        </div>
      </div>
    </section>
  );
}
