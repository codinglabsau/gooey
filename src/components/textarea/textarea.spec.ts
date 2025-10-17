describe("Textarea component page", () => {
  beforeEach(() => {
    cy.visit("/components/textarea")
  })

  it("contains placeholder", () => {
    cy.get("textarea")
      .should("exist")
      .and('have.attr', 'placeholder', 'Type your message here...')
  })

  it("shows a character counter when charLimit is provided", () => {
    cy.contains("p", "/ 255").should("exist").and("contain.text", "0 / 255")
  })

  it("updates the counter as the user types", () => {
    cy.get("textarea").should("exist").type("hello")
    cy.contains("p", "/ 255").should("contain.text", "5 / 255")
  })

  it("applies red text class when the limit is exceeded", () => {
    const overLimit = "a".repeat(256)
    cy.get("textarea").type(overLimit, { delay: 0 })
    cy.contains("p", "/ 255").should("have.class", "text-red-500").and("contain.text", "256 / 255")
  })
})
