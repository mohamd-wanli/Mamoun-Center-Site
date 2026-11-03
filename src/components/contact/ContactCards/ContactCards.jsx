import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./ContactCards.css";

const contactMethods = [
  {
    icon: Phone,
    title: "الاتصال الهاتفي المباشر",
    subtitle: "فريق الاستقبال مستعد للإجابة على جميع استفساراتكم",
    primaryAction: "+0112245987",
    href: "tel:0112245987",
    badge: "متاح خلال أوقات الدوام",
  },
  {
    icon: MessageCircle,
    title: "محادثة واتساب سريعة",
    subtitle: "تواصل مع قسم التسجيل والاستفسارات الفورية",
    primaryAction: "راسلنا على واتساب",
    href: "https://wa.me/963966382224",
    target: "_blank",
    badge: "رد فوري",
    isAccent: true,
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    subtitle: "للاستفسارات الرسمية، الشراكات والشهادات",
    primaryAction: "info@mamouncom.com",
    href: "mailto:info@mamouncom.com",
    badge: "دعم رسمي",
  },
  {
    icon: MapPin,
    title: "زيارة مقر المركز",
    subtitle: "دمشق - بالقرب من جسر فكتوريا، مجمع المأمون",
    primaryAction: "عرض على الخريطة",
    href: "#map-section",
    badge: "السبت - الخميس",
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
