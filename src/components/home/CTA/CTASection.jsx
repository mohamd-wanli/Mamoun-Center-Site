import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./CTASection.css";
import studentsImg from "../../../assets/images/training-center.png";

export default function CTASection() {
  return (
    <section className="cta-section section">
      <div className="container cta-container">
        {/* Left media */}
        <div className="cta-image-col">
          <div className="cta-image-frame">
            <img
              src={studentsImg}
              alt="طلاب مركز المأمون الدولي"
              className="cta-image"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="cta-content-col">
          <span className="section-tag">التسجيل والقبول • ADMISSIONS</span>
          <h2 className="section-title">
            ابدأ رحلتك نحو
            <span className="section-title-accent"> مستقبل واعد ومشرق</span>
          </h2>
          <p className="cta-description">
            انضم إلى مجتمعنا التدريبي المتميز حيث ستحصل على كافة سبل الدعم والخبرة التطبيقية لتكتسب مهارات مهنية حقيقية تحقق بها أهدافك وطموحاتك.
          </p>

          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn-gold">
              <span>قدم طلبك الآن • APPLY NOW</span>
              <ArrowLeft size={16} />
            </Link>

            <Link to="/contact" className="cta-btn-outline">
              <Calendar size={18} />
              <span>احجز جولة تعريفية • SCHEDULE A TOUR</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
