const authUser = require('../fixtures/authCredentials');

Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://localhost:5173/login')
    cy.get("[data-testid='login-email-input']").should('be.visible').type(email)
    cy.get("[data-testid='login-password-input']").should('be.visible').type(password)
    cy.get("[data-testid='login-btn']").click()
    cy.get("[data-testid='dropdown-button']").click()
    cy.get("[data-testid='available-users']").first().click()
})



describe('should render the chat component', () => {
  
  before(() => {
    const {email, password} = authUser
    cy.login(email, password)
  })
  it('shows the displayName', () => {
      cy.get("[data-testid='chat-displayName']").should('be.visible')
  })
})