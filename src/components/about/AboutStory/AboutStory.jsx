import { CheckCircle2, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import campusImg from "../../../assets/images/aboutStory.jfif";
import "./AboutStory.css";

export default function AboutStory() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  const highlights = [
    {
      title: "اعتمادات رسمية ودولية",
      desc: "شهادات مهنية تؤهلك مباشرة لسوق العمل المحلي والإقليمي.",
    },
    {
      title: "تدريب عملي تطبيقي 100%",
      desc: "ورش عمل ومختبرات تضاهي بيئات العمل المهنية الحقيقية.",
    },
    {
      title: "نخبة من المدربين والخبراء",
      desc: "كوادر تدريسية ذات باع طويل وخبرة ميدانية معتمدة.",
    },
    {
      title: "ربط مباشر بمتطلبات السوق",
      desc: "محتوى تدريبي مصمّم وفق احتياجات أصحاب العمل الفعلية، مع إرشاد مهني خلال فترة التدريب.",
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
            <Building2 size={15} style={{ verticalAlign: "middle", marginLeft: 6 }} />
            تاريخنا ومسيرتنا
          </span>
          <h2 className="section-title">
            أكثر من 60 عاماً في
            <span className="section-title-accent"> بناء المهارات وصناعة المستقبل</span>
          </h2>

          <p className="about-story-lead">
            منذ انطلاقته الأولى، رسّخ <strong>مركز المأمون الدولي</strong> مكانته الرائدة كأحد أعرق
            المراكز التدريبية والمهنية، حاملاً على عاتقه رسالة تمكين الشباب وتطوير قدراتهم العملية.
          </p>

          <p className="about-story-desc">
            نحن نجمع بين الخبرة التاريخية الراسخة وأحدث الأساليب والمناهج العالمية المتطورة.
            لا نكتفي بتقديم المعلومات النظرية، بل نركز على التدريب الواقعي الذي يمنح المتدربين
            المهارة والجاهزية الكاملة لبدء مشوارهم المهني بثقة واقتدار.
          </p>

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
              alt="بيئة التدريب في مركز المأمون الدولي"
              className="story-main-img"
            />
            <div className="experience-badge">
              <div className="badge-icon">
                <Sparkles size={24} />
              </div>
              <div className="badge-text">
                <strong>+60 عاماً</strong>
                <span>من العطاء والريادة</span>
              </div>
            </div>

            <div className="quality-pill">
              <ShieldCheck size={20} />
              <span>جودة تعليمية معتمدة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

