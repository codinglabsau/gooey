import { toast } from "vue-sonner"

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
    info: (message: string) => {
      toast.info("FYI", {
        description: message,
      })
    },

    success: (message: string) => {
      toast.success("Success", {
        description: message,
      })
    },

    warning: (message: string) => {
      toast.warning("Warning", {
        description: message,
      })
    },

    error: (errors: ErrorBag, objectFormat: ObjectFormat = "value") => {
      toast.error("Oh snap! Some errors were encountered.", {
        description: formatErrorMessage(errors, objectFormat),
      })
    },
  }
}

export { useFlasher }
