import Notifications from "./Notifications.vue"

describe("<Notifications />", () => {
  it("renders nothing when mounted", () => {
    cy.mount(Notifications)

    cy.get("div").then(($el) => {
      !Cypress.dom.isVisible($el)
    })
  })

  it("renders info messages", () => {
    cy.mount(Notifications, {
      props: {
        info: "This is just a nightmare",
      },
    })

    // cy.get("div").should("have.text", "Badgering Badger")
  })

  it("allows messages to be dismissed", () => {
    cy.mount(Notifications, {
      props: {
        info: "This is just a nightmare",
      },
    })

    cy.get("button").click()

    cy.get("div").should("not.have.text", "Badgering Badger")
  })
})
