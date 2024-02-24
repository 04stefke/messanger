const authUser = require('../fixtures/authCredentials');

Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://localhost:5173/login')
    cy.get("[data-testid='login-email-input']").should('be.visible').type(email)
    cy.get("[data-testid='login-password-input']").should('be.visible').type(password)
    cy.get("[data-testid='login-btn']").click()
    cy.get("[data-testid='dropdown-button']").click()
    cy.get("[data-testid='available-users']").first().click()
    
})



describe('displays the users photo and name', () => {
  beforeEach(() => {
    const {email, password} = authUser
    cy.login(email, password)
  })
  it('renders the chat-title', () => {
    cy.get("[data-testid='chat-title']").should('have.text', "Stefan's Chat")
  })
  it('renders the username of the user', () => {
    cy.get("[data-testid='navbar-username']").should('be.visible')
  })
  it('renders the username of the user', () => {
    cy.get("[data-testid='navbar-photo']").should('be.visible')
  })
})