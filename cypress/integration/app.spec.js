/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('App', () => {
  it('should navigate to page', () => {
    // Start from the index page
    cy.visit('/');
    cy.url().should('include', '/');
  })
  it('should render a header', () => {
    cy.get('[id=shakemon-header]').should('exist');
  })
})
