import type { Component } from "vue"

export type Meta = {
  layout: Component
  shadcn?: boolean | string
  modified?: boolean
}

export type ComponentProp = {
  name: string
  default?: string | boolean | null
  type: string | Array<string>
  description: string
}
