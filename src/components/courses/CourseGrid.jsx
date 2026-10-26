import React from "react";
import CourseCard from "./CourseCard";

const CourseGrid = ({ programs }) => {
  return (
    <div className="course-grid">
      {programs.map((program, index) => (
        <CourseCard
          key={program.id || index}
          image={program.image}
          title={program.title}
          description={program.description}
          linkText={program.linkText}
          path={program.path}
        />
      ))}
    </div>
  );
};

export default CourseGrid;
