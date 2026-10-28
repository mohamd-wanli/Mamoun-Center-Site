import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Header.css";

const navLinks = [
  { label: "الرئيسية", path: "/" },
  { label: "عن المركز", path: "/about" },
  { label: "الدورات", path: "/courses", hasDropdown: true },
  { label: "خدماتنا", path: "/services" },
  { label: "أعمال المتدربين", path: "/student-work" },
  { label: "اتصل بنا", path: "/contact" },
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
          aria-label="مركز المأمون الدولي - الرئيسية"
          onClick={closeMenu}
          className="brand"
        >
          <span className="brand-mark">
            {/* <GraduationCap size={32} strokeWidth={1.7} /> */}
            <img src="/mic.png" />
          </span>
          <span className="brand-text">
            <span className="brand-name">مركز المأمون الدولي</span>

            <span className="brand-subtitle">للتدريب والتأهيل</span>
          </span>
        </Link>
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
        <nav
          id="main-navigation"
          className={`main-nav ${isMenuOpen ? "main-nav--open" : ""}`}
          aria-label="التنقل الرئيسي"
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
                {link.hasDropdown && (
                  <ChevronDown size={14} className="main-nav-chevron" />
                )}
              </NavLink>
            ))}
          </div>

          <Link to="/courses" className="header-cta" onClick={closeMenu}>
            استكشف الدورات
          </Link>
        </nav>
      </div>
    </header>
  );
}
