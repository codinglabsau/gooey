import { ref } from 'vue'

type ContentType = {
  title: string,
  description: string
}

type ActionTextType = {
  cancel?: string,
  finish?: string,
}

type ConfirmType = {
  content: ContentType,
  actionText?: ActionTextType
  cancel?: () => void,
  finish?: () => void,
}

type ConfirmContext = {
  content: ContentType,
  actionText?: ActionTextType
}

const isOpen = ref(false)
const confirmConfiguration = ref<ConfirmType | null>(null)
const confirmContext = ref<ConfirmContext | null>(null)

const show = (confirmConfig: ConfirmType) => {
  confirmConfiguration.value = confirmConfig
  confirmContext.value = {
    content: confirmConfig.content,
    actionText: confirmConfig.actionText
  }
  open()
}

const close = () => {
  isOpen.value = false
}

const open = () => {
  isOpen.value = true
}

const cancel = () => {
  if (confirmConfiguration.value?.cancel) {
    confirmConfiguration.value.cancel()
  } else {
    close()
  }
}

const finish = () => {
  if (confirmConfiguration.value?.finish) {
    confirmConfiguration.value.finish()
  } else {
    close()
  }
}

function useConfirm() {
  return {
    show: (config: ConfirmType) => show(config),
    confirmContext,
    isOpen,
    close,
    cancel,
    finish,
  }
}

export {
  useConfirm
}
