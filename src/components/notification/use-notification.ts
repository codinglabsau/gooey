import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/vue/24/outline"

import { useToast } from "@/components/toast/use-toast"

const { toast } = useToast()

export type ErrorBag = Record<string, string>
export type ObjectFormat = "key" | "value" | "both"

function useNotification() {
  return {
    info: (message: string) => {
      toast({
        icon: InformationCircleIcon,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: message,
      })
    },

    success: (message: string) => {
      toast({
        icon: CheckCircleIcon,
        iconClasses: "text-green-400",
        title: "Success",
        description: message,
      })
    },

    warning: (message: string) => {
      toast({
        icon: ExclamationCircleIcon,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: message,
      })
    },

    error: (errors: ErrorBag, objectFormat: ObjectFormat = "value") => {
      toast({
        icon: ExclamationCircleIcon,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: errors,
        objectFormat: objectFormat,
      })
    },
  }
}

export { useNotification }
