import React, { useState, useEffect } from "react";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]); // initial value is an empty object

  useEffect(() => {
    fetch("https://private-e05942-courses22.apiary-mock.com/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  
  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <h1 key={course.id}>
            {course.title}
          </h1>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
