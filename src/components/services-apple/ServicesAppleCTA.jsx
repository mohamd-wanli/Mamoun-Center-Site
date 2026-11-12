import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Phone, Sparkles, Check } from "lucide-react";
import "./ServicesAppleCTA.css";

export default function ServicesAppleCTA() {
  const whatsappUrl = `https://wa.me/963931682500?text=${encodeURIComponent(
    "مرحباً مركز المأمون الدولي، أود حجز جلسة استشارة مجانية للاستفسار عن الدورات والخدمات المتاحة."
  )}`;

  return (
    <section className="apple-cta-section">
      <div className="container">
        <div className="apple-cta-banner">
          {/* Ambient Lighting Glow */}
          <div className="apple-cta-glow" aria-hidden="true" />

          <div className="apple-cta-inner">
            <div className="apple-cta-badge">
              <Sparkles size={14} />
              <span>ابدأ خطوتك القادمة اليوم</span>
            </div>

            <h2 className="apple-cta-title">
              جاهز لتجربة تدريبية تنقلك <br />
              <span className="apple-cta-gradient">إلى مستوى الاحتراف الحقيقي؟</span>
            </h2>

            <p className="apple-cta-desc">
              فريقنا التدريبي والاستشاري جاهز لمساعدتك في تحديد المسار الأنسب لطموحاتك أو تصميم
              البرنامج المثالي لكوادر شركتك. احجز جلستك المجانية الآن.
            </p>

            {/* Quick Guarantees */}
            <div className="apple-cta-perks">
              <div className="apple-cta-perk">
                <Check size={16} className="apple-cta-perk-check" />
                <span>جلسة توجيه مجانية بالكامل</span>
              </div>
              <div className="apple-cta-perk">
                <Check size={16} className="apple-cta-perk-check" />
                <span>تسهيلات ودفعات ميسرة</span>
              </div>
              <div className="apple-cta-perk">
                <Check size={16} className="apple-cta-perk-check" />
                <span>اعتماد رسمي وموثق</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="apple-cta-actions">
              <Link to="/contact" className="apple-cta-btn-primary">
                <span>تواصل معنا واحجز مقعدك</span>
                <ArrowLeft size={17} />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-cta-btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>محادثة فورية عبر واتساب</span>
              </a>

              <a href="tel:0112212226" className="apple-cta-btn-call">
                <Phone size={16} />
                <span>011-2212226</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
