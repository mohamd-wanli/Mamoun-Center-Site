import React from "react";
import { Wrench, Users, Award, Zap } from "lucide-react";
import "./ServicesAppleExperience.css";

const pillars = [
  {
    icon: Wrench,
    number: "01",
    title: "معدات ومختبرات بمستوى صناعي",
    desc: "ورش عمل حقيقية تحاكي كبرى الشركات ومراكز الصيانة المتقدمة ومشاغل التصميم، لتدريب اليد على أدق المعدات الحديثة.",
  },
  {
    icon: Users,
    number: "02",
    title: "مدربون ممارسون وخبراء سوق",
    desc: "لا نكتفي بالنظريات؛ كادرنا التدريبي يضم نخبة من الحرفيين والمهندسين الذين يمارسون المهنة وينقلون أسرارها وخبرتها الميدانية.",
  },
  {
    icon: Zap,
    number: "03",
    title: "تركيز بنسبة 95% على التطبيق العملي",
    desc: "كل متدرب يمسك المعدات بنفسه، يفكك، يركب، يصمم، ويصلح الأعطال الواقعية لضمان امتلاك الثقة الكاملة قبل التخرج.",
  },
  {
    icon: Award,
    number: "04",
    title: "اعتمادات مهنية موثقة محلياً ودولياً",
    desc: "شهادات رسمية تثبت الجدارة وتتيح لك تصديقها من الوزارات والجهات الدبلوماسية، مما يفتح آفاق العمل داخل وخارج القطر.",
  },
];

export default function ServicesAppleExperience() {
  return (
    <section className="apple-experience-section">
      <div className="container">
        {/* Apple Centered Eyebrow & Title */}
        <div className="apple-exp-header">
          <span className="apple-exp-tag">معايير التميز الاحترافي</span>
          <h2 className="apple-exp-title">لماذا تُعد تجربة التدريب في المأمون استثنائية؟</h2>
          <p className="apple-exp-sub">
            أربعة ركائز متكاملة تضمن تحويل رغبتك بالتعلم إلى مهارة احترافية رصينة يطلبها سوق العمل.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="apple-exp-grid">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="apple-exp-card">
                <div className="apple-exp-card-top">
                  <span className="apple-exp-card-num">{item.number}</span>
                  <div className="apple-exp-card-icon">
                    <Icon size={22} />
                  </div>
                </div>
                <h3 className="apple-exp-card-title">{item.title}</h3>
                <p className="apple-exp-card-desc">{item.desc}</p>
                <div className="apple-exp-card-indicator" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
