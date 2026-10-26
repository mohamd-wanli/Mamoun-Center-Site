import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({
  image,
  title,
  description,
  linkText = "استكشف الدورة",
  path = "/courses",
}) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-card-image" />
      <div className="course-card-content">
        <h3 className="course-card-title">{title}</h3>
        <p className="course-card-description">{description}</p>
        <Link to={path} className="course-card-link">
          <span>{linkText}</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
