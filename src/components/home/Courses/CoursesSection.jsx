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
        <span className="course-section-subtitle">ACADEMICS</span>
        <h2 className="course-section-title">Discover Our Programs</h2>
        <p className="course-section-description">
          A comprehensive curriculum designed to inspire and challenge every
          learner.
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
