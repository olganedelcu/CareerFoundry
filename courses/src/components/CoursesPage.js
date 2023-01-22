import React, { useState, useEffect } from "react";
import './CoursesPage.css'

const CoursesPage = () => {
  const [courses, setCourses] = useState([]); // initial value is an empty object

  useEffect(() => {
    fetch("https://private-e05942-courses22.apiary-mock.com/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="course-div">
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <div className="course-title" key={course.id}>
            {course.title}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
