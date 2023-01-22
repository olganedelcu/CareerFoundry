import React from "react";

const CourseSelector = (props) => {
  const { courses, handleSelect } = props;

  return (
    <div className="course">
      {courses.map((course) => (
        <div
          className="course-div"
          key={course.id}
          onClick={() => handleSelect(course)}
        >
          <div className="course-title">{course.title}</div>
        </div>
      ))}
    </div>
  );
};

export default CourseSelector;
