import { ref } from "vue"
import type { ButtonVariants } from "@/components/button"

type ActionHandler = () => void

type ActionObject = {
  label: string | undefined
  handler: ActionHandler
}

type ActionType = ActionObject | ActionHandler | string | undefined

type ConfirmDialogType = {
  title: string
  description: string
  variant?: ButtonVariants["variant"],
  action: ActionType
  cancelAction?: ActionType
}

const isOpen = ref(false)
const title = ref("")
const description = ref("")
const variant = ref<ButtonVariants['variant'] | null>(null)
const cancelButton = ref<ActionObject>({
  label: undefined,
  handler: () => {},
})
const actionButton = ref<ActionObject>({
  label: undefined,
  handler: () => {},
})

const confirmDialog = (confirmDialogConfig: ConfirmDialogType) => {
  title.value = confirmDialogConfig.title
  description.value = confirmDialogConfig.description
  variant.value = confirmDialogConfig.variant

  cancelButton.value = setAction(confirmDialogConfig.cancelAction)
  actionButton.value = setAction(confirmDialogConfig.action)

  open()
}

const setAction = (config: ActionType): ActionObject => {
  if (typeof config === "string") {
    return {
      label: config,
      handler: close,
    }
  }

  if (typeof config === "function") {
    return {
      label: undefined,
      handler: config,
    }
  }

  if (typeof config === "object" && config !== undefined) {
    return {
      label: config.label ?? undefined,
      handler: config.handler ?? close,
    }
  }

  return {
    label: undefined,
    handler: close,
  }
}

const close = () => {
  isOpen.value = false
}

const open = () => {
  isOpen.value = true
}

function useConfirmDialog() {
  return {
    confirmDialog: (confirmDialogConfig: ConfirmDialogType) => confirmDialog(confirmDialogConfig),
    title,
    description,
    variant,
    isOpen,
    close,
    cancelButton,
    actionButton,
  }
}

export { useConfirmDialog }
