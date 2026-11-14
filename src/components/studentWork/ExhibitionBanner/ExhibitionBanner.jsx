import { Link } from "react-router-dom";
import { Calendar, Users, Award, Sparkles, ArrowLeft } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./ExhibitionBanner.css";

export default function ExhibitionBanner() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className={`exhibition-section ${isVisible ? "exhibition--visible" : ""}`}
    >
      <div className="container">
        <div className="exhibition-card">
          <div className="exhibition-overlay" />

          <div className="exhibition-content">
            <span className="exhibition-badge">
              <Sparkles size={16} />
              <span>معارض التخرج والتوظيف السنوية</span>
            </span>

            <h2 className="exhibition-title">
              نحتفل بإنجازات متدربينا
              <span className="exhibition-title-accent"> ونربطهم مباشرة بسوق العمل</span>
            </h2>

            <p className="exhibition-desc">
              ينظم مركز المأمون الدولي معارض سنوية لعرض مشاريع تخرج الطلاب بحضور نخبة
              من أصحاب الشركات، مراكز الصيانة، ودور الأزياء والتجميل، مما يفتح آفاق
              التوظيف الفوري وتوقيع عقود العمل قبل التخرج.
            </p>

            <div className="exhibition-stats-row">
              <div className="ex-stat">
                <Users size={20} className="ex-stat-ico" />
                <div>
                  <strong>+300 شركة وصالون</strong>
                  <span>حضروا معارضنا السنوية</span>
                </div>
              </div>

              <div className="ex-stat">
                <Award size={20} className="ex-stat-ico" />
                <div>
                  <strong>عقود توظيف مباشرة</strong>
                  <span>تُوقع خلال أيام المعرض</span>
                </div>
              </div>

              <div className="ex-stat">
                <Calendar size={20} className="ex-stat-ico" />
                <div>
                  <strong>معارض دورية مستمرة</strong>
                  <span>لكل تخصص ودفعة تدريبية</span>
                </div>
              </div>
            </div>

            <div className="exhibition-actions">
              <Link to="/courses" className="exhibition-primary-btn">
                <span>سجل الآن لتكون خريجنا القادم</span>
                <ArrowLeft size={16} />
              </Link>
              <Link to="/contact" className="exhibition-secondary-btn">
                <span>احجز مقعدك واستفسر فورياً</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
