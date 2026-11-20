/**
 * Every exported component mounts without erroring.
 *
 * This replaces the 58 showcase-page visits that were the only coverage most
 * components had: loading a docs page that happens to contain a component is a
 * weak proxy for the component rendering. Mounting it directly is stronger and
 * about two orders of magnitude cheaper.
 *
 * Components are discovered from the public barrel, so a new export is covered
 * automatically rather than relying on someone remembering to add a test.
 *
 * Errors are collected through Vue's own errorHandler rather than caught around
 * `render`. reka-ui reports a missing injection by throwing asynchronously, so a
 * version of this built on `expect(...).not.toThrow()` reported 352 passes
 * against 136 unhandled rejections, and a version built on window listeners
 * attributed each error to whichever component mounted next.
 */
import { expect, test } from "vitest"
import { cleanup, render } from "vitest-browser-vue"
import * as gooey from "@/index"
import { COMPOSITIONS, NEEDS_PARENT } from "./mount-cases"

type AnyComponent = Record<string, unknown>

const isComponent = (value: unknown): value is AnyComponent =>
  typeof value === "object" &&
  value !== null &&
  ("render" in value || "setup" in value || "__name" in value || "template" in value)

const components = Object.entries(gooey)
  .filter(([, value]) => isComponent(value))
  .sort(([a], [b]) => a.localeCompare(b))

const mount = (component: unknown, props: object, slots: object) => {
  const errors: string[] = []

  try {
    render(component as never, {
      props,
      slots,
      global: {
        config: {
          errorHandler: (error: unknown) => errors.push(String((error as Error)?.message ?? error)),
        },
      },
    })
  } catch (error) {
    errors.push(String((error as Error)?.message ?? error))
  } finally {
    cleanup()
  }

  return errors
}

test("the barrel exports components to mount", () => {
  expect(components.length).toBeGreaterThan(50)
})

for (const [name, component] of components) {
  const parent = NEEDS_PARENT[name]

  test(`${name} mounts`, { skip: Boolean(parent) }, () => {
    const { props = {}, slots = {} } = COMPOSITIONS[name] ?? {}

    expect(mount(component, props, slots), `${name} errored while mounting`).toEqual([])
  })
}
