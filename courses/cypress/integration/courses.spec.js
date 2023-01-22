import { mount } from '@testing-library/react';
import CoursesPage from 'path/to/component';


const mockData = [{ id: 1, name: 'Test Course' }];
cy.server();
cy.route({
  method: 'GET',
  url: 'https://private-e05942-courses22.apiary-mock.com/courses',
  status: 200,
  response: mockData,
});

const wrapper = mount(<CoursesPage />);
cy.get('[data-cy=link-character-card-1]').click();
cy.get('[data-cy=selected-course-title]').should('contain', 'Test Course');
