import { useState } from "react";
import { Link } from "react-router-dom";
import "./CoursesSection.css";
import { programs, courseCategories } from "../../../data/courses.js";
import CourseGrid from "../../courses/CourseGrid";
import useScrollReveal from "../../../hooks/useScrollReveal";

export default function CoursesSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0 });
  const [category, setCategory] = useState("all");
  const matchingPrograms = programs.filter((program) => category === "all" || program.categoryId === category);
  const visiblePrograms = matchingPrograms.slice(0, 4);

  return (
    <section
      ref={sectionRef}
      className={`course-section ${isVisible ? "courses--visible" : ""}`}
    >
      <div className="container">
        <div className="course-section-header">
          <div className="course-badge-wrap">
            <span className="course-section-subtitle">البرامج والدورات</span>
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
            مناهج أكاديمية وتطبيقية شاملة صُممت بعناية فائقة لتلهم وتصقل مهارات
            كل متدرب، وتفتح آفاقاً واسعة للتميز والريادة في سوق العمل.
          </p>
        </div>

        <div className="home-course-filters" role="group" aria-label="تصفية الدورات حسب التخصص">
          {courseCategories.map((item) => (
            <button key={item.id} type="button" aria-pressed={category === item.id}
              aria-controls="home-course-results" onClick={() => setCategory(item.id)}>
              {item.id === "all" ? "مختارات من الدورات" : item.label}
            </button>
          ))}
        </div>
        <div id="home-course-results">
          <p className="home-course-count" role="status">عرض {visiblePrograms.length} من {matchingPrograms.length} دورة</p>
          <CourseGrid programs={visiblePrograms} />
        </div>

        <div className="course-section-footer">
          <Link to="/courses" className="view-all-btn">
            <span>عرض جميع البرامج التدريبية</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
