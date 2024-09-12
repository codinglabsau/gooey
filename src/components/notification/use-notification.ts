import { type Toast, type Message, useToast } from "@/components/toast/use-toast"
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
    error: (message: Message, showErrorKeys: boolean = false) => {
      toast({
        icon: ExclamationCircleIcon,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        messages: showErrorKeys ? Object.keys(message!) : Object.values(message!),
      })
    },
  }
}

export { useNotification }
