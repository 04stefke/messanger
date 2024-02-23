describe('template spec', () => {

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
