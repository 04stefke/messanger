const authUser = require('../fixtures/authCredentials') 
const loginUrl = 'http://localhost:5173/login'
describe('should display the login card information',() => {

  it('renders the login title', () => {
    cy.visit(loginUrl)

    cy.get("[data-testid='login-title'")
      .should("exist")
      .should("have.text", "My Chat")
  })

  it('renders the login inform', () => {
    cy.visit(loginUrl)

    cy.get("[data-testid='login-h3'")
      .should("exist")
      .should("have.text", "Login")
  })
})

describe('login functionality', () => {

  it('should login using email and password, and logout', () => {
    const {email, password} = authUser;
    cy.visit(loginUrl)

    cy.get("[data-testid='login-email-input'").type(email)
    cy.get("[data-testid='login-password-input'").type(password)

    cy.get("[data-testid='login-btn']").click()

    cy.get("[data-testid=logout-btn").should('exist')
    cy.get("[data-testid=logout-btn").click()
  })

})

describe('redirecting', () => {
  it('should redirect to to the register page', () => {
    cy.visit(loginUrl)

    cy.get("[data-testid='register-redirect']").click()

    cy.get("[data-testid='register-h3']").should('exist')
      .should('have.text', 'Register')
  })
})