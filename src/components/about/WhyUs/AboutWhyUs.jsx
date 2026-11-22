import { t } from "../../../i18n/index.js";
import {
  Award,
  Wrench,
  GraduationCap,
  Clock,
  Briefcase,
  BookOpenCheck,
  CheckCircle,
} from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./AboutWhyUs.css";

const features = [
  {
    icon: Award,
    title: t("شهادات مهنية معتمدة"),
    desc: t("شهادات تدريب موثقة ومعترف بها تعزز سيرتك الذاتية وتفتح لك آفاق التوظيف في كبرى المؤسسات."),
  },
  {
    icon: Wrench,
    title: t("تدريب عملي تطبيقي 100%"),
    desc: t("ورش ومختبرات تقنية مجهزة بالكامل لتطبيق المهارات يدوياً وبناء خبرة ميدانية حقيقية من اليوم الأول."),
  },
  {
    icon: GraduationCap,
    title: t("كوادر تدريبية ذات خبرة واسعة"),
    desc: t("نخبة من المدربين المعتمدين والممارسين في تخصصاتهم يقدمون إرشاداً فردياً ومباشراً لكل متدرب."),
  },
  {
    icon: BookOpenCheck,
    title: t("مناهج تدريبية عصرية"),
    desc: t("برامج مصممة خصيصاً لمواكبة متطلبات سوق العمل المتسارعة وأحدث التطورات المهنية والتكنولوجية."),
  },
  {
    icon: Clock,
    title: t("أوقات تدريب مرنة ومناسبة"),
    desc: t("فترات تدريبية صباحية ومسائية تناسب الطلاب والموظفين وأصحاب المشاغل الحياتية."),
  },
  {
    icon: Briefcase,
    title: t("دعم التوظيف وريادة الأعمال"),
    desc: t("استشارات مهنية وتوجيه لبدء مشروعك الخاص أو الانخراط في فرص العمل المتاحة لدى شركائنا."),
  },
];

export default function AboutWhyUs() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className={`why-us-section section ${isVisible ? "why-us--visible" : ""}`}
    >
      <div className="container">
        <div className="why-us-header">
          <span className="section-tag">
            <CheckCircle size={15} style={{ verticalAlign: "middle", marginInlineEnd: 6 }} />
             {t("لماذا نحن؟")} </span>
          <h2 className="section-title">
             {t("أسباب تجعل مركز المأمون")} <span className="section-title-accent">  {t("خيارك الأفضل في التدريب والتميز")} </span>
          </h2>
          <p className="why-us-subtitle">
             {t("نقدم تجربة تعليمية متكاملة تجمع بين الجودة، الخبرة، والتطبيق العملي لضمان نجاحك المهني.")} </p>
        </div>

        <div className="why-us-grid">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="why-us-card"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="why-us-icon-wrapper">
                  <Icon size={26} />
                </div>
                <div className="why-us-card-content">
                  <h3 className="why-us-card-title">{feat.title}</h3>
                  <p className="why-us-card-desc">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

