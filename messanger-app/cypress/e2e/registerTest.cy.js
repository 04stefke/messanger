const authUser = require('../fixtures/authCredentials.json')
const registerUrl = 'http://localhost:5173/register'

describe('rendering info', () => {

  it('renders the register title', () => {
    cy.visit('http://localhost:5173/register')

    cy.get("[data-testid='register-title'")
      .should("exist")
      .should("have.text", "My Chat")
  })

  it('renders the register inform', () => {
    cy.visit('http://localhost:5173/register')

    cy.get("[data-testid='register-h3'")
      .should("exist")
      .should("have.text", "Register")
  })

})

describe('signup', () => {

  it('should signup the user and redirect it to the home page', () => {

    const {displayName, signupEmail, signupPassword} = authUser
    cy.visit(registerUrl)

    cy.get("[data-testid='register-username']").type(displayName)
    cy.get("[data-testid='register-email']").type(signupEmail)
    cy.get("[data-testid='register-password']").type(signupPassword)
    cy.get("[data-testid='register-file-upload']").selectFile('src/assets/testing-img.jpg')
    cy.get("[data-testid='register-button']").click()

    cy.get("[data-testid='logout-btn']").should('exist')
    cy.get("[data-testid='logout-btn']").click()
  })
})

describe('redirect', () => {
  it('should redirect to login page', () => {
    cy.visit(registerUrl)
    cy.get("[data-testid='register-redirect-link']").click()

    cy.get("[data-testid='login-h3']").should('exist')
      .should('have.text', 'Login')
  })
})
