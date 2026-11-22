import { t } from "../../i18n/index.js";
import React from "react";
import { Link } from "../../i18n/navigation.jsx";

const CourseCard = ({
  image,
  title,
  description,
  linkText = t("استكشف الدورة"),
  path = "/courses",
  style,
}) => {
  return (
    <div className="course-card" style={style}>
      <div className="course-card-image-wrap">
        <img src={image} alt={title} className="course-card-image" />
        <div className="course-card-overlay" />
      </div>
      <div className="course-card-content">
        <h3 className="course-card-title">{title}</h3>
        <p className="course-card-description">{description}</p>
        <Link to={path} className="course-card-link">
          <span>{linkText}</span>
          <span className="card-link-arrow">&larr;</span>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
