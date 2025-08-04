import { ref } from 'vue'

type ContentType = {
  title: string,
  description: string
}

type ActionButtonType = {
  label?: string,
  action?: () => void,
}

type AlertType = {
  content: ContentType,
  secondaryButton: ActionButtonType,
  primaryButton: ActionButtonType,
}

const isOpen = ref(false)
const content = ref<ContentType | null>(null)
const secondaryButton = ref<ActionButtonType | null>(null)
const primaryButton = ref<ActionButtonType | null>(null)

const showAlert = (alertConfig: AlertType) => {
  content.value = alertConfig.content

  secondaryButton.value = {
    label: alertConfig.secondaryButton.label,
    action: alertConfig.secondaryButton.action ?? secondaryAction
  }

  primaryButton.value = {
    label: alertConfig.primaryButton.label,
    action: alertConfig.primaryButton.action ?? primaryAction
  }

  open()
}

const close = () => {
  isOpen.value = false
}

const open = () => {
  isOpen.value = true
}

const secondaryAction = () => {
  close()
}

const primaryAction = () => {
  close()
}

function useAlert() {
  return {
    showAlert: (config: AlertType) => showAlert(config),
    content,
    isOpen,
    close,
    secondaryButton,
    primaryButton,
  }
}

export {
  useAlert
}
