import { ref } from "vue"

type ActionHandler = () => void

type ActionObject = {
  label: string | undefined
  variant?: string
  handler: ActionHandler
}

type ActionType = ActionObject | ActionHandler | string | undefined

type AlertType = {
  title: string
  description: string
  action: ActionType
  cancelAction?: ActionType
}

const isOpen = ref(false)
const title = ref("")
const description = ref("")
const cancelButton = ref<ActionObject>({
  label: undefined,
  handler: () => {},
})
const actionButton = ref<ActionObject>({
  label: undefined,
  handler: () => {},
})

const confirmDialog = (alertConfig: AlertType) => {
  title.value = alertConfig.title
  description.value = alertConfig.description

  cancelButton.value = setAction(alertConfig.cancelAction)
  actionButton.value = setAction(alertConfig.action)

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
      variant: config.variant ?? undefined,
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
    confirmDialog: (config: AlertType) => confirmDialog(config),
    title,
    description,
    isOpen,
    close,
    cancelButton,
    actionButton,
  }
}

export { useConfirmDialog }
