import { Link } from "react-router-dom";
import { Play, Award, ArrowLeft } from "lucide-react";
import "./HeroSection.css";
import heroImage from "../../../assets/images/training-center2.png";
import heroImage2 from "/images/center-training.jpg";
export default function HeroSection() {
  return (
    <section className="hero">
      {/* Decorative background shapes matching mockup */}
      {/* <div className="hero-shape hero-shape--blue" aria-hidden="true" />
            <div className="hero-shape hero-shape--cream" aria-hidden="true" /> */}

      {/* Full-bleed hero visual that covers the hero like mockup */}
      <div className="hero__visual" aria-hidden="true">
        <img
          src={heroImage}
          alt="مركز المأمون الدولي للتدريب"
          className="hero__visual-img"
        />
        <div className="hero__visual-fade" />
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            نُلهم العقول.
            <br />
            <span className="hero-accent">نصنع المستقبل.</span>
          </h1>

          <p className="hero-description">
            بيئة تدريبية محفزة يتعلم فيها المتدربون وينمون ويزدهرون ليصبحوا قادة
            الغد في سوق العمل.
          </p>

          <div className="hero-actions">
            <Link to="/courses" className="button button-primary">
              <span>اكتشف برامجنا</span>
              <ArrowLeft size={16} strokeWidth={2.2} />
            </Link>
            <Link to="/contact" className="button button-outline">
              <span className="button-icon-play">
                <Play size={14} fill="currentColor" />
              </span>
              <span>تواصل معنا</span>
            </Link>
          </div>
        </div>

        <div className="hero-badge-wrap">
          <div className="hero-badge">
            <span className="hero-badge-icon">
              <Award size={26} strokeWidth={1.9} />
            </span>
            <span className="hero-badge-text">
              <strong>إرث من التميز</strong>
              <small>منذ عام 1960</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
