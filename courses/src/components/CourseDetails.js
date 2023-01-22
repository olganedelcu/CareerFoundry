import React, { useState, useEffect } from "react";

const CourseDetails = (props) => {
  const { courseDetails } = props;
  const [location, setLocation] = useState(null);
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    // Fetch the user's location using the ipstack API
    fetch(
      "https://api.ipstack.com/check?access_key=d14b88f838f8340e10d91b2d900b8dbb"
    )
      .then((response) => response.json())
      .then((data) => {
        setLocation(data);
        // Determine the appropriate currency to use based on the user's location
        if (data.country_code === "US") {
          setCurrency("USD");
        } else {
          setCurrency("EUR");
        }
      });
  }, []);

  return (
    <>
      {courseDetails && (
        <div>
          <h4>Course Details</h4>
          <p>{courseDetails.description}</p>
          <div>
            <div>Next Start Dates: </div>
            {courseDetails.start_dates.map((date) => (
              <small> / {date}</small>
            ))}
          </div>
          <div>
            {courseDetails.prices.map((price) => (
              <p key={price.id}>
                €{price.amount} {currency}
              </p>
            ))}
          </div>
          {/* <p>{courseDetails.prices}</p> */}
        </div>
      )}
    </>
  );
};

export default CourseDetails;
