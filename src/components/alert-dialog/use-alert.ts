import { ref } from 'vue'

type ContentType = {
  title: string,
  description: string
}

type ActionButtonType = {
  label: string,
  action?: () => void,
}

type ConfirmType = {
  content: ContentType,
  secondaryButton: ActionButtonType,
  primaryButton: ActionButtonType,
}

const isOpen = ref(false)
const confirmConfiguration = ref<ConfirmType | null>(null)
const content = ref<ContentType | null>(null)
const secondaryButton = ref<ActionButtonType | null>(null)
const primaryButton = ref<ActionButtonType | null>(null)

const confirm = (confirmConfig: ConfirmType) => {
  confirmConfiguration.value = confirmConfig
  content.value = confirmConfig.content

  secondaryButton.value = {
    label: confirmConfig.secondaryButton.label,
    action: confirmConfig.secondaryButton.action ?? secondaryAction
  }

  primaryButton.value = {
    label: confirmConfig.primaryButton.label,
    action: confirmConfig.primaryButton.action ?? primaryAction
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
  if (confirmConfiguration.value?.secondaryButton?.action) {
    confirmConfiguration.value.secondaryButton.action()
  } else {
    close()
  }
}

const primaryAction = () => {
  if (confirmConfiguration.value?.primaryButton?.action) {
    confirmConfiguration.value.primaryButton.action()
  } else {
    close()
  }
}

function useAlert() {
  return {
    confirm: (config: ConfirmType) => confirm(config),
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
