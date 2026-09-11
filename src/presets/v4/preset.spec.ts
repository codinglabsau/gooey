/**
 * Guards the v4 preset's `@theme inline` colors.
 *
 * With a plain `@theme`, every `--color-*` resolves its `hsl(var(--token))` once
 * at `:root`, so a `.dark` class applied anywhere below the root flips the raw
 * triples but leaves the colors on their light values.
 */
describe("v4 preset dark tokens", () => {
  const probe = (dark: "html" | "body" | null) => {
    cy.visit("/components/card")

    cy.document().then((doc) => {
      doc.documentElement.classList.remove("dark")
      doc.body.classList.remove("dark")

      if (dark) {
        doc.querySelector(dark)!.classList.add("dark")
      }

      const element = doc.createElement("div")
      element.id = "token-probe"
      element.className = "bg-card text-card-foreground"
      doc.body.appendChild(element)
    })

    return cy.get("#token-probe")
  }

  it("resolves light colors with no dark class", () => {
    probe(null)
      .should("have.css", "background-color", "rgb(255, 255, 255)")
      .and("have.css", "color", "rgb(2, 8, 23)")
  })

  it("resolves dark colors when dark is on the root", () => {
    probe("html")
      .should("have.css", "background-color", "rgb(2, 8, 23)")
      .and("have.css", "color", "rgb(248, 250, 252)")
  })

  it("resolves dark colors when dark is scoped below the root", () => {
    probe("body")
      .should("have.css", "background-color", "rgb(2, 8, 23)")
      .and("have.css", "color", "rgb(248, 250, 252)")
  })
})
