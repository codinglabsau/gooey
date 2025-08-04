import { ref } from 'vue'

type ActionObject = {
  label: string | undefined,
  handler: () => void,
}

type ActionHandler = () => void

type ActionType = ActionObject | ActionHandler | string | undefined

type AlertType = {
  title: string,
  description: string
  action: ActionType,
  cancelAction: ActionType,
}

const isOpen = ref(false)
const title = ref('')
const description = ref('')
const cancelAction = ref<ActionObject | null>(null)
const actionButton = ref<ActionObject | null>(null)

const confirmDialog = (alertConfig: AlertType) => {
  title.value = alertConfig.title
  description.value = alertConfig.description

  cancelAction.value = setAction(alertConfig.cancelAction)
  actionButton.value = setAction(alertConfig.action)

  open()
}

const setAction = (config: ActionType): ActionObject => {
  if (typeof config === 'string') {
    return {
      label: config,
      handler: close,
    }
  }

  if (typeof config === 'function') {
    return {
      label: undefined,
      handler: config,
    }
  }

  if (typeof config === 'object' && config !== undefined) {
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
    confirmDialog: (config: AlertType) => confirmDialog(config),
    title,
    description,
    isOpen,
    close,
    cancelAction,
    actionButton,
  }
}

export {
  useConfirmDialog
}
