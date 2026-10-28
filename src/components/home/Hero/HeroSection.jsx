import { Link } from "react-router-dom";
import { Play, Award, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import "./HeroSection.css";
import heroImage from "../../../assets/images/training-center2.png";
import hero from "../../../assets/images/mid.png";
import FloatingParticles from "../../common/FloatingParticles";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${isLoaded ? "hero--loaded" : ""}`}>
      {/* Floating particles like cherry blossoms */}
      <FloatingParticles count={15} color="rgba(215, 166, 55, 0.5)" />

      {/* Full-bleed hero visual that covers the hero like mockup */}
      <div className="hero__visual" aria-hidden="true">
        <img
          src={hero}
          alt="مركز المأمون الدولي للتدريب"
          className="hero__visual-img"
        />
        <div className="hero__visual-fade" />
      </div>

      {/* Decorative floating shapes */}
      <div className="hero-float hero-float--1" aria-hidden="true" />
      <div className="hero-float hero-float--2" aria-hidden="true" />
      <div className="hero-float hero-float--3" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-title-reveal">
            <h1>
              <span className="hero-title-line hero-title-line--1">
                نُلهم العقول.
              </span>
              <br />
              <span className="hero-title-line hero-title-line--2 hero-accent">
                نصنع المستقبل.
              </span>
            </h1>
          </div>

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
