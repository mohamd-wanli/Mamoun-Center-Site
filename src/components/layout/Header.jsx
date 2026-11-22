import Preferences from "./Preferences";
import { t } from "../../i18n/index.js";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "../../i18n/navigation.jsx";
import { useState, useEffect } from "react";

import "./Header.css";

const navLinks = [
  { label: t("الرئيسية"), path: "/" },
  { label: t("عن المركز"), path: "/about" },
  { label: t("الدورات"), path: "/courses", hasDropdown: true },
  { label: t("خدماتنا"), path: "/services" },
  { label: t("أعمال المتدربين"), path: "/student-work" },
  { label: t("اتصل بنا"), path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`mic-header ${isScrolled ? "mic-header--scrolled" : ""}`}
    >
      <div className="container inner-header">
        <Link
          to="/"
          aria-label={t("مركز المأمون الدولي - الرئيسية")}
          onClick={closeMenu}
          className="brand"
        >
          <span className="brand-mark">
            <img src="/mic.png" alt={t("شعار المركز")} />
          </span>
          <span className="brand-text">
            <span className="brand-name"> {t("مركز المأمون الدولي")} </span>
          </span>
        </Link>

        <nav
          id="main-navigation"
          className={`main-nav ${isMenuOpen ? "main-nav--open" : ""}`}
          aria-label={t("التنقل الرئيسي")}
        >
          <div className="main-nav-links">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `main-nav-link ${isActive ? "main-nav-link--active" : ""}`
                }
                onClick={closeMenu}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span> {link.label}</span>
              </NavLink>
            ))}
          </div>

          <Link to="/courses" className="header-cta header-cta--mobile" onClick={closeMenu}>
            {t("استكشف الدورات")}
          </Link>
        </nav>

        <div className="header-actions">
          <Preferences />
          <Link to="/courses" className="header-cta header-cta--desktop" onClick={closeMenu}>
            {t("استكشف الدورات")}
          </Link>
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? t("إغلاق القائمة") : t("فتح القائمة")}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
