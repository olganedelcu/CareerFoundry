import React from "react";

const CourseDetails = (props) => {
  const { courseDetails } = props;

  return (
    <>
      {courseDetails && (
        <div>
          <h4>Course Details</h4>
          <p>{courseDetails.description}</p>
          <div>
            {courseDetails.start_dates.map((date) => (
              <p>{date}</p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
