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
  it('should render the main display', () => {
    cy.get('[id=shakemon-main-display-component]').should('exist');
  })
  it('should render and use the search filter', () => {
    cy.get('[id=shakemon-search-filter-component]').should('exist')
    const searchFilter = cy.get('[id=shakemon-search-filter]')
    searchFilter.should('exist');
    searchFilter
      .type('charizard')
      .should('have.value', 'charizard')
  })
  it('should render a pokemon display after successful result', () => {
    cy.get('[id=shakemon-pokemon-display-component]').should('not.exist');
  })
})
