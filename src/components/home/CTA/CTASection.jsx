import { Award, Headphones, CheckCircle2 } from "lucide-react";
import "./CTASection.css";
import studentsImg from "../../../assets/images/cta.jfif";

const features = [
  {
    icon: Award,
    title: "شهادات مهنية معتمدة",
    desc: "برامج تدريبية متوافقة مع متطلبات سوق العمل لضمان جاهزيتك وتفوقك المهني.",
  },
  {
    icon: Headphones,
    title: "إرشاد وتوجيه تدريبي مستمر",
    desc: "متابعة وإشراف مباشر من نخبة من الخبراء والمدربين المتخصصين طوال فترة البرنامج.",
  },
  {
    icon: CheckCircle2,
    title: "تدريب عملي تطبيقي 100%",
    desc: "ورش وقاعات مجهزة بأحدث الأدوات والتقنيات لمحاكاة بيئة العمل الفعلية خطوة بخطوة.",
  },
];

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
          <span className="section-tag">التسجيل والقبول </span>
          <h2 className="section-title">
            ابدأ رحلتك نحو
            <span className="section-title-accent"> مستقبل واعد ومشرق</span>
          </h2>
          <p className="cta-description">
            انضم إلى مجتمعنا التدريبي المتميز حيث نضع بين يديك كل ما تحتاجه من خبرات وإمكانيات للانطلاق بقوة وثقة في مسارك المهني.
          </p>

          {/* Descriptive highlights replacing the two buttons */}
          <div className="cta-features-list">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div className="cta-feature-item" key={idx}>
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
              💡 <strong>باب التسجيل مفتوح لجميع الدورات:</strong> يمكنك زيارة المركز في دمشق - جسر فكتوريا أو الاستفسار المباشر عبر الهاتف لمعرفة المواعيد وحجز مقعدك.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

