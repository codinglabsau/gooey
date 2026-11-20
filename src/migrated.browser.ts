/**
 * Option F probe: three existing Cypress interaction specs, rewritten as
 * component tests, to find out what a full migration would actually cost and
 * whether the harder interactions survive it.
 *
 * simple-select is the one that matters — reka-ui renders its listbox through a
 * portal, which is the case most likely to behave differently outside a real
 * page.
 */
import { ref } from "vue"
import { expect, test } from "vitest"
import { page } from "vitest/browser"
import { render } from "vitest-browser-vue"
import { Heading } from "@/components/heading"
import { Email } from "@/components/email"
import { SimpleSelect, type SelectOption } from "@/components/simple-select"

// --- heading.spec.ts ---------------------------------------------------------

test("heading defaults to h2", async () => {
  render(Heading, { slots: { default: "Title" } })
  await expect.element(page.getByRole("heading", { level: 2 })).toBeVisible()
})

test("heading honours the as prop", async () => {
  render(Heading, { props: { as: "h1" }, slots: { default: "Title" } })
  await expect.element(page.getByRole("heading", { level: 1 })).toBeVisible()
})

// --- email.spec.ts -----------------------------------------------------------

test("email carries its input attributes", async () => {
  render(Email)
  const input = page.getByRole("textbox")

  await expect.element(input).toHaveAttribute("type", "email")
  await expect.element(input).toHaveAttribute("inputmode", "email")
  await expect.element(input).toHaveAttribute("autocomplete", "email")
})

test("email updates its v-model on input", async () => {
  const model = ref("")
  render({
    components: { Email },
    setup: () => ({ model }),
    template: `<Email v-model="model" />`,
  })

  await page.getByRole("textbox").fill("ada@example.com")
  expect(model.value).toBe("ada@example.com")
})

// --- simple-select.spec.ts ---------------------------------------------------

const countries: SelectOption[] = [
  { value: "au", label: "Australia" },
  { value: "nz", label: "New Zealand" },
  { value: "uk", label: "United Kingdom" },
  { value: "pending", label: "Pending", disabled: true },
]

const renderSelect = (model = ref<string | undefined>(undefined)) => {
  render({
    components: { SimpleSelect },
    setup: () => ({ model, countries }),
    template: `<SimpleSelect v-model="model" :options="countries" placeholder="Select a country" />`,
  })
  return model
}

test("simple-select shows its placeholder", async () => {
  renderSelect()
  await expect.element(page.getByText("Select a country")).toBeVisible()
})

test("simple-select opens and lists its options", async () => {
  renderSelect()
  await page.getByRole("combobox").click()

  await expect.element(page.getByRole("listbox")).toBeVisible()
  expect(page.getByRole("option").elements()).toHaveLength(4)
  await expect.element(page.getByRole("option", { name: "Australia" })).toBeVisible()
})

test("simple-select selects an option and updates the model", async () => {
  const model = renderSelect()
  await page.getByRole("combobox").click()
  await page.getByRole("option", { name: "Australia" }).click()

  expect(model.value).toBe("au")
})

test("simple-select marks disabled options", async () => {
  renderSelect()
  await page.getByRole("combobox").click()

  await expect
    .element(page.getByRole("option", { name: "Pending" }))
    .toHaveAttribute("data-disabled")
})
