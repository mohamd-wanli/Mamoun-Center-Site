import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./CoursesSection.css";
import {programs} from "../../../data/courses.js";
import CourseCard from "../../courses/CourseCard";
import CourseGrid from "../../courses/CourseGrid";


export default function CoursesSection() {
  return (
    <section className="course-section">
      <div className="course-section-header">
        <span className="course-section-subtitle">الدورات</span>
        <h2 className="course-section-title">استكشف دوراتنا </h2>
        <p className="course-section-description">
         "منهج أكاديمي شامل مُصمم لإلهام وتحدي كل متعلم."
        </p>
      </div>

      <CourseGrid programs={programs} />

      <div className="course-section-footer">
        <button className="view-all-btn">
          VIEW ALL PROGRAMS <span>&rarr;</span>
        </button>
      </div>
    </section>
  );
}
