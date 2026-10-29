import { Link } from "react-router-dom";
import "./CoursesSection.css";
import { programs } from "../../../data/courses.js";
import CourseGrid from "../../courses/CourseGrid";
import useScrollReveal from "../../../hooks/useScrollReveal";

export default function CoursesSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.12 });

  return (
    <section
      ref={sectionRef}
      className={`course-section ${isVisible ? "courses--visible" : ""}`}
    >
      <div className="container">
        <div className="course-section-header">
          <div className="course-badge-wrap">
            <span className="course-section-subtitle">
              البرامج والدورات • ACADEMICS
            </span>
          </div>

          <h2 className="course-section-title">
            استكشف دوراتنا <span>التدريبية</span>
          </h2>

          <div className="course-title-divider">
            <span className="divider-line" />
            <span className="divider-dot" />
            <span className="divider-line" />
          </div>

          <p className="course-section-description">
            مناهج أكاديمية وتطبيقية شاملة صُممت بعناية فائقة لتلهم وتصقل مهارات كل متدرب، وتفتح آفاقاً واسعة للتميز والريادة في سوق العمل.
          </p>
        </div>

        <CourseGrid programs={programs} />

        <div className="course-section-footer">
          <Link to="/courses" className="view-all-btn">
            <span>عرض جميع البرامج التدريبية</span>
            <span className="btn-arrow">&larr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
