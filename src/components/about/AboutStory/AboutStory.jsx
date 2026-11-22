import { t } from "../../../i18n/index.js";
import { CheckCircle2, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import campusImg from "../../../assets/images/aboutStory.jfif";
import "./AboutStory.css";

export default function AboutStory() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  const highlights = [
    {
      title: t("اعتمادات رسمية ودولية"),
      desc: t("شهادات مهنية تؤهلك مباشرة لسوق العمل المحلي والإقليمي."),
    },
    {
      title: t("تدريب عملي تطبيقي 100%"),
      desc: t("ورش عمل ومختبرات تضاهي بيئات العمل المهنية الحقيقية."),
    },
    {
      title: t("نخبة من المدربين والخبراء"),
      desc: t("كوادر تدريسية ذات باع طويل وخبرة ميدانية معتمدة."),
    },
    {
      title: t("ربط مباشر بمتطلبات السوق"),
      desc: t("محتوى تدريبي مصمّم وفق احتياجات أصحاب العمل الفعلية، مع إرشاد مهني خلال فترة التدريب."),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`about-story-section section ${isVisible ? "about-story--visible" : ""
        }`}
    >
      <div className="container about-story-grid">
        <div className="about-story-content">
          <span className="section-tag">
            <Building2 size={15} style={{ verticalAlign: "middle", marginInlineEnd: 6 }} />
             {t("تاريخنا ومسيرتنا")} </span>
          <h2 className="section-title">
             {t("أكثر من 60 عاماً في")} <span className="section-title-accent">  {t("بناء المهارات وصناعة المستقبل")} </span>
          </h2>

          <p className="about-story-lead">
             {t("منذ انطلاقته الأولى، رسّخ")} <strong> {t("مركز المأمون الدولي")} </strong>  {t("مكانته الرائدة كأحد أعرق المراكز التدريبية والمهنية، حاملاً على عاتقه رسالة تمكين الشباب وتطوير قدراتهم العملية.")} </p>

          <p className="about-story-desc">
             {t("نحن نجمع بين الخبرة التاريخية الراسخة وأحدث الأساليب والمناهج العالمية المتطورة. لا نكتفي بتقديم المعلومات النظرية، بل نركز على التدريب الواقعي الذي يمنح المتدربين المهارة والجاهزية الكاملة لبدء مشوارهم المهني بثقة واقتدار.")} </p>

          <div className="about-story-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="story-highlight-card">
                <div className="highlight-icon-wrap">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="highlight-title">{item.title}</h4>
                  <p className="highlight-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-story-media">
          <div className="media-frame">
            <img
              src={campusImg}
              alt={t("بيئة التدريب في مركز المأمون الدولي")}
              className="story-main-img"
            />
            <div className="experience-badge">
              <div className="badge-icon">
                <Sparkles size={24} />
              </div>
              <div className="badge-text">
                <strong> {t("+60 عاماً")} </strong>
                <span> {t("من العطاء والريادة")} </span>
              </div>
            </div>

            <div className="quality-pill">
              <ShieldCheck size={20} />
              <span> {t("جودة تعليمية معتمدة")} </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

