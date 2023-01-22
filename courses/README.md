## About Section

This project aims to fetch data from an API and display it to the user using a React.js app. 

Tools and Technologies:
- HTML/CSS/JavaScript
- GIT Version Control
- GitHub
- Accessibility
- Testing

To organize the project, we have a `src` folder that contains all the source code. Inside the src folder, there are the components folder that holds all the UI components of the application. We have divided the UI into three components, following the Single Responsibility principle:

- CoursesPage: This component is responsible for displaying the courses and handling the fetching of data from the API.
- CourseSelector: This component is responsible for displaying the list of courses and allowing the user to select a course.
- CourseDetails: This component is responsible for displaying the details of a selected course.


Improvements:

Separate the data file, creating a dedicated file for data management, to keep the state and data management out of the components.
Work more on the style of the website, by creating a .css file for all our components and applying the style for all of them(following the style of our website).
Testing: I would have done an integration test on our website using Cypress to test that our course Component is working as planned. And unit-testing for each component.
SEO practices: using Lighthouse on Google to improve performance and Best Practices as we can see in the image below.

<img src="/Users/olga/Desktop/CareerFoundry/CareerFoundry/courses/media/Screenshot 2023-01-22 at 20.10.30.png" alt="image description">



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.