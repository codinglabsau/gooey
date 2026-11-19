describe("template spec", () => {
  it("passes", () => {
    cy.visit("/components/chart")
  })
})

describe("chart theme colours", () => {
  it("defines the colours defaultColors() reads, in light and dark", () => {
    cy.visit("/components/chart")

    cy.document().then((doc) => {
      for (const dark of [false, true]) {
        doc.documentElement.classList.toggle("dark", dark)

        const styles = getComputedStyle(doc.documentElement)

        expect(styles.getPropertyValue("--vis-primary-color").trim()).not.to.equal("")
        expect(styles.getPropertyValue("--vis-secondary-color").trim()).not.to.equal("")
      }
    })
  })
})
