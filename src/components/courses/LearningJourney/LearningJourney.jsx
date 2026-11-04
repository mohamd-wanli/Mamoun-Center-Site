import { Compass, Hammer, Trophy, Briefcase, Sparkles } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./LearningJourney.css";

const steps = [
  {
    step: "01",
    icon: Compass,
    title: "اختيار المسار والاستشارة المجانية",
    desc: "جلسة إرشاد وتوجيه مع مستشارينا لتحديد البرنامج الأنسب لشغفك وخلفيتك وأهدافك المهنية.",
  },
  {
    step: "02",
    icon: Hammer,
    title: "تدريب تطبيقي مكثف في الورش",
    desc: "ممارسة عملية مباشرة خطوة بخطوة تحت إشراف نخبة من كبار المدربين والمحترفين في المهنة.",
  },
  {
    step: "03",
    icon: Trophy,
    title: "تنفيذ مشروع التخرج المتكامل",
    desc: "إنجاز أعمال حقيقية تثبت إتقانك لكافة المحاور، لتكون نواة قوية لمعرض أعمالك (Portfolio).",
  },
  {
    step: "04",
    icon: Briefcase,
    title: "الشهادة المعتمدة وسوق العمل",
    desc: "استلام شهادتك المهنية الموثقة والانطلاق بثقة إلى التوظيف المباشر أو تأسيس مشروعك الخاص.",
  },
];

export default function LearningJourney() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className={`learning-journey-section section ${
        isVisible ? "journey--visible" : ""
      }`}
    >
      <div className="container">
        <div className="journey-header">
          <span className="section-tag">
            <Sparkles size={15} style={{ verticalAlign: "middle", marginLeft: 6 }} />
            مسار التعلم والإنجاز
          </span>
          <h2 className="section-title">
            كيف تبني مستقبلك المهني
            <span className="section-title-accent"> في 4 خطوات واضحة؟</span>
          </h2>
          <p className="journey-subtitle">
            منهجية تدريبية متكاملة مصممة لنقلك من مرحلة الشغف إلى الاحتراف والإنتاجية الكاملة.
          </p>
        </div>

        <div className="journey-steps-grid">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="journey-step-card"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className="step-card-top">
                  <span className="step-number">{item.step}</span>
                  <div className="step-icon-wrap">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

