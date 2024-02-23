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

describe('should show the input container', () => {
  beforeEach(() => {
    const {email, password} = authUser
    cy.login(email, password)
  })

  it('should display the message inputted ', () => {
    cy.get('input[placeholder="Type something..."').should('exist').type('hello, this is a message')
    cy.get("[data-testid='chat-input-send-btn']").should('be.visible')

    cy.get('[data-testid="message-container"]').last().should('exist').should('be.visible')
    cy.get('input[placeholder="Type something..."').should('exist')
  })

  it('should display the file uploaded ', () => {
    cy.get("[data-testid='input-file-upload']").selectFile('src/assets/testing-img.jpg')
    // cy.get("[data-testid='chat-input-send-btn']").should('be.visible').click()

    cy.get("[data-testid='chat-image']").should('be.visible')
  })
})