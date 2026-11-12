import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, CheckCircle, MessageCircle, ArrowLeft, Sparkles, PhoneCall } from "lucide-react";
import "./ServicesAppleModal.css";

export default function ServicesAppleModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `مرحباً، أود الاستفسار والحصول على مزيد من التفاصيل حول خدمة: ${service.title}`
  );

  return (
    <div
      className="apple-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="apple-modal-title"
      onClick={onClose}
    >
      <div
        className="apple-modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          "--modal-accent": service.themeColor || "#d7a637",
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          className="apple-modal-close"
          onClick={onClose}
          aria-label="إغلاق النافذة"
        >
          <X size={18} />
        </button>

        {/* Modal Hero Visual */}
        <div className="apple-modal-hero">
          <img
            src={service.image}
            alt={service.title}
            className="apple-modal-img"
          />
          <div className="apple-modal-hero-overlay" />
          <div className="apple-modal-hero-meta">
            <span className="apple-modal-badge">
              <Sparkles size={13} />
              {service.tag}
            </span>
            <span className="apple-modal-sub">{service.subtitle}</span>
            <h2 id="apple-modal-title" className="apple-modal-title">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="apple-modal-body">
          <div className="apple-modal-section">
            <h4 className="apple-modal-sec-title">نبذة تفصيلية عن الخدمة</h4>
            <p className="apple-modal-text">{service.description}</p>
          </div>

          <div className="apple-modal-section">
            <h4 className="apple-modal-sec-title">أبرز المزايا والمخرجات</h4>
            <div className="apple-modal-features">
              {service.features.map((feature, idx) => (
                <div key={idx} className="apple-modal-feature-item">
                  <div className="apple-modal-check">
                    <CheckCircle size={18} />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="apple-modal-footer">
            <Link
              to="/contact"
              className="apple-modal-primary-btn"
              onClick={onClose}
            >
              <span>طلب الخدمة / التسجيل</span>
              <ArrowLeft size={16} />
            </Link>

            <a
              href={`https://wa.me/963931682500?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-modal-wa-btn"
            >
              <MessageCircle size={18} />
              <span>استفسار فوري عبر واتساب</span>
            </a>

            <a href="tel:0112212226" className="apple-modal-call-btn">
              <PhoneCall size={17} />
              <span>اتصال مباشر</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
