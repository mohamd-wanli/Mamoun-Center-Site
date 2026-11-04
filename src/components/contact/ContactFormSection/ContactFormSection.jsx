import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  BookOpen,
  MessageSquare,
  Send,
  CheckCircle,
  MapPin,
  Clock,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import { programs } from "../../../data/courses";
import "./ContactFormSection.css";

export default function ContactFormSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        course: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 6000);
    }, 900);
  };

  return (
    <section
      ref={sectionRef}
      className={`contact-main-section section ${
        isVisible ? "contact-main--visible" : ""
      }`}
    >
      <div className="container contact-main-grid">
      
        <div className="contact-form-container">
          <div className="contact-form-header">
            <span className="section-tag">
              <Sparkles
                size={14}
                style={{ verticalAlign: "middle", marginLeft: 6 }}
              />
              نموذج الاستفسار والتسجيل
            </span>
            <h2 className="section-title">
              أرسل لنا استفسارك
              <span className="section-title-accent"> وسنتواصل معك فوراً</span>
            </h2>
            <p className="contact-form-intro">
              هل لديك سؤال حول دورة معينة أو ترغب في استشارة مهنية؟ املأ
              البيانات أدناه وسيقوم مستشارنا التعليمي بالرد عليك خلال ساعات
              العمل.
            </p>
          </div>

          {status === "success" && (
            <div className="contact-alert-success">
              <CheckCircle size={22} className="alert-icon" />
              <div>
                <strong>تم استلام رسالتك بنجاح!</strong>
                <p>
                  شكراً لتواصلك معنا، سيقوم فريق المأمون بالرد عليك في أقرب وقت.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
           
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  الاسم الكامل <span className="required">*</span>
                </label>
                <div className="input-wrap">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="مثال: أحمد محمد"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  رقم الهاتف أو الواتساب <span className="required">*</span>
                </label>
                <div className="input-wrap">
                  <Phone size={18} className="input-icon" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    dir="ltr"
                    placeholder="+963 9XX XXX XXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
           
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  البريد الإلكتروني <span className="optional">(اختياري)</span>
                </label>
                <div className="input-wrap">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="course" className="form-label">
                  الدورة أو المجال المطلوب
                </label>
                <div className="input-wrap">
                  <BookOpen size={18} className="input-icon" />
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="form-input form-select"
                  >
                    <option value="">اختر الدورة التدريبية...</option>
                    {programs.map((prog) => (
                      <option key={prog.id} value={prog.title}>
                        {prog.title} ({prog.subtitle})
                      </option>
                    ))}
                    <option value="استفسار عام">
                      استفسار عام / خدمات أخرى
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                نص الرسالة أو الاستفسار <span className="required">*</span>
              </label>
              <div className="input-wrap textarea-wrap">
                <MessageSquare size={18} className="input-icon textarea-icon" />
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="اكتب هنا تفاصيل استفسارك أو الوقت المفضل لديك للاتصال..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                />
              </div>
            </div>

        
            <button
              type="submit"
              disabled={status === "submitting"}
              className={`contact-submit-btn ${
                status === "submitting" ? "btn--submitting" : ""
              }`}
            >
              <span>
                {status === "submitting" ? "جارٍ الإرسال..." : "إرسال الرسالة"}
              </span>
              <Send size={18} className="btn-icon" />
            </button>
          </form>
        </div>

     
        <div className="contact-sidebar">
        
          <div className="contact-sidebar-card">
            <h3 className="sidebar-card-title">
              <Clock size={20} className="card-title-icon" />
              أوقات الاستقبال والتسجيل
            </h3>
            <ul className="hours-list">
              <li className="hours-item">
                <span className="days">من السبت إلى الخميس:</span>
                <span className="time">9:00 صباحاً – 8:00 مساءً</span>
              </li>
              <li className="hours-item hours-item-off">
                <span className="days">يوم الجمعة:</span>
                <span className="time">عطلة أسبوعية</span>
              </li>
            </ul>
            <p className="hours-note">
              * قسم التسجيل مفتوح طوال أيام الأسبوع لاستقبال المتدربين والإجابة
              على كافة الاستفسارات.
            </p>
          </div>

          {/* Map Preview */}
          <div className="contact-sidebar-card map-card" id="map-section">
            <div className="map-card-header">
              <MapPin size={20} className="card-title-icon" />
              <div>
                <h4 className="map-location-title">موقع المعهد في دمشق</h4>
                <p className="map-location-sub">
                  دمشق - جسر فكتوريا - بناء المأمون الدولي
                </p>
              </div>
            </div>

            <div className="map-embed-frame">
              <iframe
                title="موقع مركز المأمون الدولي"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.6853683833215!2d36.2941198!3d33.5137233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e05a8f4c3bbf%3A0x6b7724212953258c!2z2KzYs9ixINmB2YPYqtmI2LHZitin2Iwg2K_Zhdi02YLYjCDYs9mI2LHZitin!5e0!3m2!1sar!2s!4v1700000000000!5m2!1sar!2s"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/pNzGkQCfprZDgSXT6"
              target="_blank"
              rel="noopener noreferrer"
              className="open-map-link"
            >
              فتح في خرائط Google
              <span className="arrow-left">←</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
