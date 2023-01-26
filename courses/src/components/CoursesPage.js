import React, { useState, useEffect } from "react";
import "./CoursesList.css";
import CourseSelector from "./CourseSelector.js";
import CourseDetails from "./CourseDetails.js";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    fetch("https://private-e05942-courses22.apiary-mock.com/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      fetch(
        `https://private-e05942-courses22.apiary-mock.com/courses/${selectedCourse.slug}`
      )
        .then((res) => res.json())
        .then((data) => setCourseDetails(data));
    }
  }, [selectedCourse]);

  const handleSelect = (course) => {
    setSelectedCourse(course);
  };
  return (
    <>
      <div className="title">
        <h1>Courses</h1>
      </div>
      {selectedCourse == null && (
        <CourseSelector courses={courses} handleSelect={handleSelect} />
      )}
      <CourseDetails courseDetails={courseDetails} />
    </>
  );
};

export default CoursesPage;
