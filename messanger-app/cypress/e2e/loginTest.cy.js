describe('template spec', () => {

  it('renders the login title', () => {
    cy.visit('http://localhost:5173/login')

    cy.get("[data-testid='login-title'")
      .should("exist")
      .should("have.text", "My Chat")
  })

  it('renders the login inform', () => {
    cy.visit('http://localhost:5173/login')

    cy.get("[data-testid='login-h3'")
      .should("exist")
      .should("have.text", "Login")
  })

})