<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { onMounted, watch } from "vue"
import { Toaster as Sonner, toast } from "vue-sonner"
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-vue-next"
import { cn } from "@/lib/utils"
import {
  claimFlash,
  flasherTypes,
  setFlasherTitles,
  show,
  useFlasher,
  type ErrorBag,
  type FlashAction,
  type FlasherOptions,
  type FlasherType,
  type FlasherTitles,
  type FlashToast,
  type ObjectFormat,
} from "./use-flasher"

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
    info?: string
    success?: string
    warning?: string
    errors?: ErrorBag
    objectFormat?: ObjectFormat
    /**
     * Identifies the flash behind info/success/warning. When set, those fire once
     * per new id instead of once per changed value, so repeating the same message
     * still toasts and replaying a seen id (e.g. history restore) does not.
     */
    flashId?: string | number | null
    toasts?: FlashToast[]
    titles?: Partial<FlasherTitles>
    /** Handles a toast action; bind as `@action`. Without it, GET actions navigate. */
    onAction?: (action: FlashAction, toast: FlashToast) => void
  }>(),
  {
    objectFormat: "value",
  },
)

const {
  info: infoNotification,
  success: successNotification,
  warning: warningNotification,
  error: errorNotification,
} = useFlasher()

// Titles are set during setup so toasts raised on mount already use them.
watch(
  () => props.titles,
  (titles) => {
    if (titles) {
      setFlasherTitles(titles)
    }
  },
  { immediate: true, deep: true },
)

function runAction(action: FlashAction, flashToast: FlashToast) {
  if (props.onAction) {
    props.onAction(action, flashToast)

    return
  }

  // Other methods need a request client (e.g. Inertia's router), so they need @action.
  if ((action.method ?? "get").toLowerCase() === "get") {
    window.location.assign(action.url)
  }
}

function showToast(flashToast: FlashToast) {
  const options: FlasherOptions = {}

  if (flashToast.duration !== undefined) {
    options.duration = flashToast.duration
  }

  if (flashToast.action) {
    const action = flashToast.action

    options.action = { label: action.label, onClick: () => runAction(action, flashToast) }
  }

  // Server data: an unknown type falls back to a plain toast rather than throwing.
  const type = flasherTypes.includes(flashToast.type as FlasherType)
    ? (flashToast.type as FlasherType)
    : "default"

  if (type === "default") {
    // A plain toast leads with its title, falling back to the description.
    toast(flashToast.title ?? flashToast.description ?? "", {
      ...options,
      description: flashToast.title ? flashToast.description : undefined,
    })

    return
  }

  show(type, flashToast.description ?? "", { ...options, title: flashToast.title })
}

function showToasts(toasts: FlashToast[] | undefined) {
  toasts?.forEach((flashToast) => {
    if (flashToast.id == null || claimFlash(`toast:${flashToast.id}`)) {
      showToast(flashToast)
    }
  })
}

function flashMessages() {
  if (props.info) {
    infoNotification(props.info)
  }

  if (props.success) {
    successNotification(props.success)
  }

  if (props.warning) {
    warningNotification(props.warning)
  }
}

function flashErrors(errors: ErrorBag | undefined) {
  if (errors !== undefined && Object.keys(errors).length > 0) {
    errorNotification(errors, props.objectFormat)
  }
}

// Fire on mount, not via `immediate`: an immediate watch runs during setup —
// before the child <Sonner> Toaster has subscribed to the toast store — so any
// toast raised then is dropped. onMounted runs after the Toaster is mounted.
onMounted(() => {
  if (props.flashId == null || claimFlash(`flash:${props.flashId}`)) {
    flashMessages()
  }

  flashErrors(props.errors)
  showToasts(props.toasts)
})

watch(
  () => props.flashId,
  (id) => {
    if (id != null && claimFlash(`flash:${id}`)) {
      flashMessages()
    }
  },
)

// Without a flashId, each message fires when its value changes.
watch(
  () => props.info,
  (newVal) => {
    if (props.flashId == null && newVal) {
      infoNotification(newVal)
    }
  },
)

watch(
  () => props.success,
  (newVal) => {
    if (props.flashId == null && newVal) {
      successNotification(newVal)
    }
  },
)

watch(
  () => props.warning,
  (newVal) => {
    if (props.flashId == null && newVal) {
      warningNotification(newVal)
    }
  },
)

// Errors are validation state, not flash: each new bag fires, regardless of flashId.
watch(() => props.errors, flashErrors)

// Each new array fires; items with an id fire once per id.
watch(() => props.toasts, showToasts)
</script>

<template>
  <Sonner
    :class="cn('toaster group', props.class)"
    :toast-options="{
      classes: {
        toast:
          'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
        description: 'group-[.toast]:text-muted-foreground group-[.toast]:whitespace-pre-line',
        actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
        cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
      },
    }"
  >
    <template #success-icon>
      <CircleCheckIcon class="size-4 text-success" />
    </template>

    <template #info-icon>
      <InfoIcon class="size-4 text-primary" />
    </template>

    <template #warning-icon>
      <TriangleAlertIcon class="size-4 text-warning" />
    </template>

    <template #error-icon>
      <OctagonXIcon class="size-4 text-destructive" />
    </template>

    <template #loading-icon>
      <div>
        <Loader2Icon class="size-4 animate-spin" />
      </div>
    </template>

    <template #close-icon>
      <XIcon class="size-4" />
    </template>
  </Sonner>
</template>
