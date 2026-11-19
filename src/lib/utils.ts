import type { Updater } from "@tanstack/vue-table"
import type { Ref } from "vue"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value = typeof updaterOrValue === "function" ? updaterOrValue(ref.value) : updaterOrValue
}

/** Coerces a numeric model value for NumberField; empty strings and non-numeric values become undefined. */
export function toNumberOrUndefined(value: unknown): number | undefined {
  if (value === null || value === undefined || value === "") {
    return undefined
  }

  const number = Number(value)

  return Number.isNaN(number) ? undefined : number
}
