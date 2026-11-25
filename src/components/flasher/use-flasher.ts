import { reactive } from "vue"
import { toast, type ExternalToast } from "vue-sonner"

export type ErrorBag = Record<string, string>
export type ObjectFormat = "key" | "value" | "both"
export const flasherTypes = ["info", "success", "warning", "error"] as const

export type FlasherType = (typeof flasherTypes)[number]
export type FlasherTitles = Record<FlasherType, string>

/** Sonner options, plus a `title` that overrides the type's default title for one call. */
export type FlasherOptions = ExternalToast & { title?: string }

export interface FlashAction {
  label: string
  url: string
  method?: "get" | "post" | "put" | "patch" | "delete"
}

/** A server-shaped toast, e.g. shared from the session as an Inertia flash prop. */
export interface FlashToast {
  /** Shown once per id, so a re-render or history restore can't replay it. */
  id?: string | number | null
  type?: FlasherType | "default"
  title?: string
  description?: string
  duration?: number
  action?: FlashAction
}

export interface TrackMessages {
  loading: string
  /** Omit to just dismiss the loading toast and let the server's flash speak. */
  success?: string
  /** Omit to show the validation errors returned by the visit. */
  error?: string
}

/**
 * The visit callbacks track() wraps. Structural, so gooey stays free of an
 * Inertia dependency — pass real Inertia visit options and spread the result.
 */
interface TrackableVisit {
  onStart?: (...args: never[]) => unknown
  onSuccess?: (...args: never[]) => unknown
  onError?: (errors: ErrorBag) => unknown
  onFinish?: (...args: never[]) => unknown
}

export interface TrackedVisit {
  onStart: (...args: unknown[]) => unknown
  onSuccess: (...args: unknown[]) => unknown
  onError: (errors: ErrorBag) => unknown
  onFinish: (...args: unknown[]) => unknown
}

const defaultTitles: FlasherTitles = {
  info: "FYI",
  success: "Success",
  warning: "Warning",
  error: "Oh snap! Some errors were encountered.",
}

// Shared across every useFlasher() caller so titles set once on <Flasher> apply app-wide.
const titles = reactive<FlasherTitles>({ ...defaultTitles })

// Ids already shown this page session, shared across Flasher instances.
const shown = new Set<string>()

export function setFlasherTitles(overrides: Partial<FlasherTitles>) {
  Object.assign(titles, defaultTitles, overrides)
}

/** True the first time a key is seen; false on every replay. */
export function claimFlash(id: string): boolean {
  if (shown.has(id)) {
    return false
  }

  shown.add(id)

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

export function show(type: FlasherType, message: string, options: FlasherOptions = {}) {
  const { title, ...data } = options

  return toast[type](title ?? titles[type], {
    description: message,
    ...data,
  })
}

function track<T extends object = object>(messages: TrackMessages, options?: T): T & TrackedVisit {
  const visit = (options ?? {}) as TrackableVisit
  let id: string | number | undefined
  let settled = false

  const call = (callback: unknown, args: unknown[]) =>
    typeof callback === "function" ? callback(...args) : undefined

  return {
    ...(options as T),
    onStart: (...args: unknown[]) => {
      // Reused for a second visit before the first settled: don't strand its spinner.
      if (!settled && id !== undefined) {
        toast.dismiss(id)
      }

      settled = false
      id = toast.loading(messages.loading)

      return call(visit.onStart, args)
    },
    onSuccess: (...args: unknown[]) => {
      settled = true

      if (messages.success) {
        toast.success(messages.success, { id })
      } else if (id !== undefined) {
        toast.dismiss(id)
      }

      return call(visit.onSuccess, args)
    },
    onError: (errors: ErrorBag) => {
      settled = true

      toast.error(messages.error ?? titles.error, {
        id,
        description: messages.error ? undefined : formatErrorMessage(errors ?? {}, "value"),
      })

      return call(visit.onError, [errors])
    },
    onFinish: (...args: unknown[]) => {
      // Cancelled or interrupted: neither success nor error ran, so clear the spinner.
      if (!settled && id !== undefined) {
        toast.dismiss(id)
      }

      return call(visit.onFinish, args)
    },
  }
}

function useFlasher() {
  return {
    info: (message: string, data?: FlasherOptions) => show("info", message, data),

    success: (message: string, data?: FlasherOptions) => show("success", message, data),

    warning: (message: string, data?: FlasherOptions) => show("warning", message, data),

    error: (
      errors: ErrorBag | string,
      objectFormat: ObjectFormat = "value",
      data?: FlasherOptions,
    ) =>
      show(
        "error",
        typeof errors === "string" ? errors : formatErrorMessage(errors, objectFormat),
        data,
      ),

    flash: (heading: string, data?: ExternalToast) => toast(heading, data),

    track,
  }
}

export { useFlasher }
