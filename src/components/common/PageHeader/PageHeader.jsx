import { t } from "../../../i18n/index.js";
import { Link } from "../../../i18n/navigation.jsx";
import { ChevronLeft } from "lucide-react";
import FloatingParticles from "../FloatingParticles";
import "./PageHeader.css";

export default function PageHeader({
  tag = "",
  title = "",
  subtitle = "",
  breadcrumbs = [],
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-overlay" />
      <FloatingParticles count={14} color="rgba(215, 166, 55, 0.35)" />

      <div className="container page-hero-container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="page-hero-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-item">
               {t("الرئيسية")} </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="breadcrumb-wrapper">
                <ChevronLeft size={14} className="breadcrumb-separator" />
                {crumb.path ? (
                  <Link to={crumb.path} className="breadcrumb-item">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="breadcrumb-item breadcrumb-current">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {tag && <div className="page-hero-tag">{tag}</div>}

        <h1 className="page-hero-title">{title}</h1>

        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>

      <div className="page-hero-bottom-accent" />
    </section>
  );
}
