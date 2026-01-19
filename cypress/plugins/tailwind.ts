before(() => {
  // In theory, we should be able to build tailwind styles once,
  // write to a .css file, and then import to any of the .ts
  // files, but unfortunately this approach is throwing an
  // error. As a workaround, we build tailwind styles
  // once and inject them into the component-index.
  // Note: Tailwind CDN works but does not allow
  // for configuration of anything in the theme.

  const tailwindPath = "./cypress/support/style.css"

  cy.task('readFileMaybe', tailwindPath).then((css) => {
    if (! css) {
      cy.exec("npx tailwindcss -i ./app/style.css -m").then(({ stdout }) => {
        cy.writeFile(tailwindPath, stdout)
        css = stdout
      })
    }

    if (! document.head.querySelector("#tailwind-style")) {
      const link = document.createElement("style")
      link.id = "tailwind-style"
      link.innerHTML = css

      document.head.appendChild(link)
    }
  })
})
