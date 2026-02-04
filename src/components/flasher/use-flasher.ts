import { toast, type ExternalToast } from "vue-sonner"

export type ErrorBag = Record<string, string>
export type ObjectFormat = "key" | "value" | "both"

function formatErrorMessage(errors: ErrorBag, objectFormat: ObjectFormat): string {
  return Object.entries(errors)
    .map(([key, value]) => {
      if (objectFormat === "key") return key
      if (objectFormat === "both") return `${key}: ${value}`
      return value
    })
    .join("\n")
}

function useFlasher() {
  return {
    info: (message: string, data?: ExternalToast) => {
      toast.info("FYI", {
        description: message,
        ...data,
      })
    },

    flash: (heading: string, data?: ExternalToast) => {
      toast(heading, data)
    },

    success: (message: string, data?: ExternalToast) => {
      toast.success("Success", {
        description: message,
        ...data,
      })
    },

    warning: (message: string, data?: ExternalToast) => {
      toast.warning("Warning", {
        description: message,
        ...data,
      })
    },

    error: (errors: ErrorBag, objectFormat: ObjectFormat = "value", data?: ExternalToast) => {
      toast.error("Oh snap! Some errors were encountered.", {
        description: formatErrorMessage(errors, objectFormat),
        ...data,
      })
    },
  }
}

export { useFlasher }
