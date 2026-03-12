import type { Component, InjectionKey, Plugin } from "vue"

export interface GooeyOptions {
  link?: Component | string
}

export const GOOEY_LINK_KEY: InjectionKey<Component | string> = Symbol("gooey-link")

export const gooey: Plugin<GooeyOptions[]> = {
  install(app, options = {}) {
    app.provide(GOOEY_LINK_KEY, options.link ?? "a")
  },
}
