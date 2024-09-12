import { type Messages, useToast } from "@/components/toast/use-toast"
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/vue/24/outline"

const { toast } = useToast()

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

    error: (
      messages: Messages,
      showErrorKeys: boolean = false,
      showErrorValues: boolean = true
    ) => {
      toast({
        icon: ExclamationCircleIcon,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        //   messages: Object.entries(messages)
        //     .map((value: string, key: string) => {
        //       if (showErrorKeys && showErrorValues) {
        //         return [key, `${key}: ${value}`]
        //       }
        //
        //       if (showErrorKeys) {
        //         return [key, key]
        //       }
        //
        //       return [key, value]
        //     })
      })
    },
  }
}

export { useNotification }
