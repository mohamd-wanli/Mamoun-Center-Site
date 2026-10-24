import { Link } from "react-router-dom";
import { Play, Award } from "lucide-react";
import "./HeroSection.css";
import heroImage from "../../../assets/images/training-center2.png";

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>
                        نُلهم العقول.
                        <br />
                        <span className="hero-accent">نصنع المستقبل.</span>
                    </h1>

                    <p className="hero-description">
                        بيئة تدريبية محفزة يتعلم فيها المتدربون وينمون
                        ويزدهرون ليصبحوا قادة الغد في سوق العمل.
                    </p>
                    <div className="hero-actions">
                        <Link to="/courses" className="button">
                            اكتشف برامجنا
                        </Link>
                        <Link to="/contact" className="button button-outline">
                            <Play size={15} fill="currentColor" />
                            تواصل معنا
                        </Link>
                    </div>
                </div>
                <div className="hero-media">
                    <img
                        className="hero-img"
                        src={heroImage}
                        alt="متدربون في مركز المأمون الدولي"
                    />
                    <div className="hero-badge">
                        <span className="hero-badge-icon">
                            <Award size={26} strokeWidth={1.8} />
                        </span>
                        <span className="hero-badge-text">
                            <strong>إرث من التميز</strong>
                            <small>منذ عام 1960 </small>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
