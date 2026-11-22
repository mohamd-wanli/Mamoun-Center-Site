import { t } from "../../../i18n/index.js";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./ContactCards.css";

const contactMethods = [
  {
    icon: Phone,
    title: t("الاتصال الهاتفي المباشر"),
    subtitle: t("فريق الاستقبال مستعد للإجابة على جميع استفساراتكم"),
    primaryAction: "+0112245987",
    href: "tel:0112245987",
    badge: t("متاح خلال أوقات الدوام"),
  },
  {
    icon: MessageCircle,
    title: t("محادثة واتساب سريعة"),
    subtitle: t("تواصل مع قسم التسجيل والاستفسارات الفورية"),
    primaryAction: t("راسلنا على واتساب"),
    href: "https://wa.me/963966382224",
    target: "_blank",
    badge: t("رد فوري"),
    isAccent: true,
  },
  {
    icon: Mail,
    title: t("البريد الإلكتروني"),
    subtitle: t("للاستفسارات الرسمية، الشراكات والشهادات"),
    primaryAction: "info@mamouncom.com",
    href: "mailto:info@mamouncom.com",
    badge: t("دعم رسمي"),
  },
  {
    icon: MapPin,
    title: t("زيارة مقر المركز"),
    subtitle: t("دمشق - بالقرب من جسر فكتوريا، مجمع المأمون"),
    primaryAction: t("عرض على الخريطة"),
    href: "#map-section",
    badge: t("السبت - الخميس"),
  },
];

export default function ContactCards() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className={`contact-cards-section ${isVisible ? "cards--visible" : ""}`}
    >
      <div className="container">
        <div className="contact-cards-grid">
          {contactMethods.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                target={item.target || "_self"}
                rel={item.target ? "noopener noreferrer" : undefined}
                className={`contact-card ${item.isAccent ? "contact-card--accent" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="contact-card-top">
                  <div className="contact-card-icon">
                    <Icon size={26} />
                  </div>
                  <span className="contact-card-badge">{item.badge}</span>
                </div>

                <h3 className="contact-card-title">{item.title}</h3>
                <p className="contact-card-subtitle">{item.subtitle}</p>

                <div className="contact-card-action">
                  <span>{item.primaryAction}</span>
                  <span className="contact-card-arrow">←</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
