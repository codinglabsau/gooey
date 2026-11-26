import { toast, type ExternalToast } from "vue-sonner"

export type ErrorBag = Record<string, string>
export type ObjectFormat = "key" | "value" | "both"

export const flasherTypes = ["info", "success", "warning", "error"] as const

export type FlasherType = (typeof flasherTypes)[number]

/** A server-shaped toast, e.g. flashed from Laravel with the gooey `Toast` class. */
export interface FlashToast {
  /** Shown once per id, so receiving the same toast again can't replay it. */
  id?: string | number | null
  type?: FlasherType | "default"
  title?: string
  description?: string
  duration?: number
}

const titles: Record<FlasherType, string> = {
  info: "FYI",
  success: "Success",
  warning: "Warning",
  error: "Oh snap! Some errors were encountered.",
}

// Keys already shown this page session, shared across Flasher instances.
const shown = new Set<string>()

/** True the first time a key is seen; false on every replay. */
export function claimFlash(key: string): boolean {
  if (shown.has(key)) {
    return false
  }

  shown.add(key)

  return true
}

function formatErrorMessage(errors: ErrorBag, objectFormat: ObjectFormat): string {
  return Object.entries(errors)
    .map(([key, value]) => {
      if (objectFormat === "key") return key
      if (objectFormat === "both") return `${key}: ${value}`
      return value
    })
    .join("\n")
}

export function show(
  type: FlasherType,
  message: string,
  data: ExternalToast & { title?: string } = {},
) {
  const { title, ...options } = data

  return toast[type](title ?? titles[type], {
    description: message,
    ...options,
  })
}

function useFlasher() {
  return {
    info: (message: string, data?: ExternalToast) => show("info", message, data),

    success: (message: string, data?: ExternalToast) => show("success", message, data),

    warning: (message: string, data?: ExternalToast) => show("warning", message, data),

    error: (errors: ErrorBag, objectFormat: ObjectFormat = "value", data?: ExternalToast) =>
      show("error", formatErrorMessage(errors, objectFormat), data),

    flash: (heading: string, data?: ExternalToast) => toast(heading, data),
  }
}

export { useFlasher }
