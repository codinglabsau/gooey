describe("template spec", () => {
  const content = {
    first: { title: "First", content: "First content" },
    second: { title: "Second", content: "Second content" },
    third: { title: "Third", content: "Third content" },
  }

  it("renders basic content from array", () => {
    cy.visit("/components/accordion")

    cy.get('[data-cy="contentBasic"] .accordion-trigger').each((titleElement, index) => {
      cy.wrap(titleElement).should("have.text", content[Object.keys(content)[index]].title)
    })

    cy.get('[data-cy="contentBasic"] .accordion-content').should("not.be.visible")

    cy.get('[data-cy="contentBasic"] .accordion-trigger').first().click({ force: true }) // use force if needed
    cy.get('[data-cy="contentBasic"] .accordion-content')
      .first()
      .should("be.visible")
      .and("have.text", content.first.content)
  })

  it("renders custom content ", () => {
    cy.visit("/components/accordion")

    cy.get('[data-cy="contentCustom"] .accordion-trigger').each((titleElement, index) => {
      if (index === 1) {
        cy.wrap(titleElement).should("have.text", ` Custom title for ${content.second.title}`)
      } else {
        cy.wrap(titleElement).should("have.text", content[Object.keys(content)[index]].title)
      }
    })

    cy.get('[data-cy="contentCustom"] .accordion-content').should("not.be.visible")

    cy.get('[data-cy="contentCustom"] .accordion-trigger').eq(1).click()

    cy.get('[data-cy="contentCustom"] .accordion-content').eq(1).should("be.visible")

    cy.get('[data-cy="contentCustom"] .accordion-content img')
      .should("have.attr", "src", "/logo.svg")
      .and("be.visible")
  })
})
