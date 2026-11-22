import { t } from "../../../i18n/index.js";
import { Target, Eye, Gem, Award, CheckCircle } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./VisionMission.css";

const cards = [
  {
    icon: Target,
    badge: "MISSION",
    title: t("رسالتنا"),
    desc: t("تمكين الشباب والباحثين عن التميز المهني من خلال برامج تدريبية تطبيقية عالية الجودة، متوافقة مع أحدث المعايير الدولية ومتطلبات سوق العمل الفعلي."),
    points: [
      t("تطوير المهارات العملية الميدانية"),
      t("تقديم بيئة تدريبية تفاعلية وحديثة"),
      t("تأهيل الخريجين لريادة الأعمال والوظائف المرموقة"),
    ],
  },
  {
    icon: Eye,
    badge: "VISION",
    title: t("رؤيتنا"),
    desc: t("أن نكون المركز التدريبي والمهني الأول والرائد في المنطقة، والنموذج الأكثر إلهاماً وتأثيراً في صقل الكفاءات المهنية وبناء أجيال تصنع الفارق."),
    points: [
      t("الريادة في الابتكار والتدريب المهني"),
      t("شراكات استراتيجية مع كبرى المؤسسات"),
      t("معيار للجودة والاحترافية التعليمية"),
    ],
  },
  {
    icon: Gem,
    badge: "VALUES",
    title: t("قيمنا الجوهرية"),
    desc: t("مبادئ راسخة تحكم كل ما نقدمه من برامج وخدمات لضمان أقصى درجات النزاهة والإتقان لجميع المتدربين والشركاء."),
    points: [
      t("الإتقان والجودة في كل التفاصيل"),
      t("النزاهة والشفافية التامة"),
      t("الشغف بالابتكار والتعليم المستمر"),
    ],
  },
];

export default function VisionMission() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className={`vm-section section ${isVisible ? "vm--visible" : ""}`}
    >
      <div className="container">
        <div className="vm-header text-center">
          <span className="section-tag">
            <Award size={15} style={{ verticalAlign: "middle", marginInlineEnd: 6 }} />
             {t("البوصلة والتوجه")} </span>
          <h2 className="section-title">
             {t("رؤيتنا ورسالتنا")} <span className="section-title-accent">  {t("نحو ريادة التعليم والتدريب")} </span>
          </h2>
          <p className="vm-header-desc">
             {t("نرتكز على منظومة قيم تعليمية راسخة تهدف إلى تمكين كل متدرب وتجهيزه ليكون ركيزة نجاح في مجاله التخصصي.")} </p>
        </div>

        <div className="vm-grid">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="vm-card"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="vm-card-top">
                  <div className="vm-icon-box">
                    <Icon size={28} />
                  </div>
                  <span className="vm-badge">{item.badge}</span>
                </div>

                <h3 className="vm-title">{item.title}</h3>
                <p className="vm-desc">{item.desc}</p>

                <div className="vm-divider" />

                <ul className="vm-points">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle size={15} className="vm-point-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

