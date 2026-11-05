import { Calendar, Flag, History } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./Milestones.css";

const milestones = [
  {
    year: "1968",
    title: "انطلاق الرؤية والتأسيس",
    desc: "تأسيس مركز المأمون ليكون من أوائل الصروح التعليمية المهنية المتخصصة في تأهيل الكوادر الوطنية وصقل المهارات الحرفية.",
  },
  {
    year: "1985",
    title: "التوسع وإضافة التخصصات الحرفية",
    desc: "افتتاح أقسام الخياطة وتصميم الأزياء والحلاقة الاحترافية، وتجهيز أحدث الورش التدريبية النموذجية آنذاك.",
  },
  {
    year: "2005",
    title: "مواكبة التكنولوجيا والبرامج التقنية",
    desc: "إدراج تخصصات صيانة الأجهزة الذكية والتقنيات الحديثة تلبيةً لاحتياجات التحول الرقمي وسوق العمل المتجدد.",
  },
  {
    year: "2018",
    title: "الاعتمادات الدولية وتطوير المناهج",
    desc: "حصول مركز المأمون على اعتمادات إضافية وتحديث شامل لجميع الحقائب التدريبية لتتوافق مع معايير الجودة العالمية.",
  },
  {
    year: "اليوم",
    title: "صرح تدريبي رائد لأكثر من 1500 متدرب سنوياً",
    desc: "نواصل المسيرة بثقة لتمكين آلاف الخريجين سنوياً ودعمهم في بناء مشاريعهم الخاصة والانخراط بسوق العمل.",
  },
];

export default function Milestones() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className={`milestones-section section ${isVisible ? "milestones--visible" : ""
        }`}
    >
      <div className="container">
        <div className="milestones-header">
          <span className="section-tag">
            <History size={15} style={{ verticalAlign: "middle", marginLeft: 6 }} />
            مسيرة التطور
          </span>
          <h2 className="section-title">
            محطات مضيئة
            <span className="section-title-accent"> في تاريخ مركز المأمون</span>
          </h2>
          <p className="milestones-subtitle">
            رحلة ممتدة من الإتقان والعمل الدؤوب، شكّلت علامة فارقة في مسيرة التعليم المهني
            والتقني.
          </p>
        </div>

        <div className="milestones-timeline">
          <div className="timeline-center-line" />

          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`timeline-item ${isEven ? "timeline-item-right" : "timeline-item-left"}`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className="timeline-dot">
                  <Flag size={14} />
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <span className="timeline-year">
                      <Calendar size={14} style={{ verticalAlign: "middle", marginLeft: 4 }} />
                      {item.year}
                    </span>
                  </div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

