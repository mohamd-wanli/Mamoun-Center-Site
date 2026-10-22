import "./HeroSection.css";

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <p className="hero-eyebrow">
                        مركز المأمون الدولي
                    </p>
                    <h1>
                        طور مهاراتك
                        <br />
                        اصنع مستقبلك
                    </h1>

                    <p className="hero-description">
                        اكتشف برامجنا التدريبية وابدأ رحلتك
                        نحو تطوير مهاراتك وتحقيق أهدافك المهنية
                    </p>
                    <div className="hero-actions">
                        <a href="/courses" className="button">اسكتشف دوراتنا </a>
                        <a href="/contact" className=" button button-outline">تواصل معنا </a>
                    </div>
                </div>
                <div className="hero-img">
                    <img src="/src/assets/images/training-center.png"
                        alt="متدربون في مركز التدريب  " />
                </div>
            </div>


        </section>
    )
}