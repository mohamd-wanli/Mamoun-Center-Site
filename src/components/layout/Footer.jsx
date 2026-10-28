import { MapPin, Phone, Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-grid">
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">
              <span className="footer-brand-logo">
                <img src="/mic.png" alt="شعار المركز" />
              </span>
              <div className="footer-brand-text">
                <h3>مركز المأمون الدولي</h3>
                <span>BRIGHT FUTURE INTERNATIONAL</span>
              </div>
            </div>
            <p className="footer-tagline">
              نلهم العقول، نصنع المستقبل. بيئة تدريبية وتعليمية متكاملة تهدف إلى
              تنمية المهارات الأكاديمية والمهنية.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/MamounInternationalCenter"
                aria-label="Facebook"
                className="social-icon"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/micmamoun/"
                aria-label="Instagram"
                className="social-icon"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/Mamoun.center1"
                aria-label="Facebook"
                className="social-icon"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">روابط سريعة </h4>
            <ul className="footer-links">
              <li>
                <Link to="/">الرئيسية (Home)</Link>
              </li>
              <li>
                <Link to="/about">عن المركز (About Us)</Link>
              </li>
              <li>
                <Link to="/courses">البرامج والدورات (Academics)</Link>
              </li>
              <li>
                <Link to="/services">خدماتنا (Campus Life)</Link>
              </li>
              <li>
                <Link to="/student-work">أعمال الطلاب (Events)</Link>
              </li>
              <li>
                <Link to="/contact">اتصل بنا (Contact Us)</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">المصادر • RESOURCES</h4>
            <ul className="footer-links">
              <li>
                <Link to="/student-work">بوابة المتدرب (Portal)</Link>
              </li>
              <li>
                <Link to="/contact">تسجيل الدخول (Login)</Link>
              </li>
              <li>
                <Link to="/courses">التقويم التدريبي (Calendar)</Link>
              </li>
              <li>
                <Link to="/about">السياسات والشروط (Policies)</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">تواصل معنا • CONTACT US</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>دمشق - جسر فكتوريا - مبنى المأمون</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span dir="ltr"> Tel :221226 - 2245987</span>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>دمشق - الحلبوني - مبنى المأمون</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span dir="ltr"> Tel :2242499 - 2251366</span>
              </li>

              <li>
                <Mail size={18} className="contact-icon" />
                <span>info@mamouncom.com</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="footer-col">
            <h4 className="footer-col-title">النشرة البريدية • NEWSLETTER</h4>
            <p className="footer-newsletter-desc">
              ابقَ على اطلاع بأحدث البرامج والأنشطة والفعاليات.
            </p>
            <form
              className="footer-newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني..."
                required
              />
              <button type="submit" aria-label="اشترك">
                <ArrowLeft size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © 2026 Bright Future International / مركز المأمون الدولي. جميع
            الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
