import Preferences from "./Preferences";
import { t } from "../../i18n/index.js";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "../../i18n/navigation.jsx";
import { useState, useEffect, useCallback } from "react";

import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: t("الرئيسية"), path: "/" },
    { label: t("عن المركز"), path: "/about" },
    { label: t("الدورات"), path: "/courses" },
    { label: t("خدماتنا"), path: "/services" },
    { label: t("أعمال المتدربين"), path: "/student-work" },
    { label: t("اتصل بنا"), path: "/contact" },
  ];

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeMenu(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1024) closeMenu(); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [closeMenu]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <header className={`mic-header${isScrolled ? " mic-header--scrolled" : ""}`}>
      <div className="container inner-header">

        <Link
          to="/"
          className="brand"
          aria-label={t("مركز المأمون الدولي - الرئيسية")}
          onClick={closeMenu}
        >
          <span className="brand-mark">
            <img src="/mic.png" alt={t("شعار المركز")} />
          </span>
          <span className="brand-name">{t("مركز المأمون الدولي")}</span>
        </Link>

        <nav
          id="main-navigation"
          className={`main-nav${isMenuOpen ? " main-nav--open" : ""}`}
          aria-label={t("التنقل الرئيسي")}
        >
          <div className="main-nav-links">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `main-nav-link${isActive ? " main-nav-link--active" : ""}`
                }
                onClick={closeMenu}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/courses"
            className="header-cta header-cta--mobile"
            onClick={closeMenu}
          >
            {t("استكشف الدورات")}
          </Link>
        </nav>

        <div className="header-actions">
          <Preferences />

          <Link
            to="/courses"
            className="header-cta header-cta--desktop"
            onClick={closeMenu}
          >
            {t("استكشف الدورات")}
          </Link>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? t("إغلاق القائمة") : t("فتح القائمة")}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="nav-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
