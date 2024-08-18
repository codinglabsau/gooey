<script setup lang="ts">
import { useToast, Toaster } from "@/components/ui/toast"
import { watch } from "vue"
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/vue/24/outline"

const props = withDefaults(
  defineProps<{
    info?: string
    success?: string
    warning?: string
    errors?: Record<string, string>
    showErrorKeys?: boolean
  }>(),
  {
    showErrorKeys: false,
  }
)

const { toast } = useToast()

watch(
  () => props.info,
  (newVal) => {
    if (newVal) {
      toast({
        icon: InformationCircleIcon,
        title: "FYI",
        iconClasses: "text-blue-400",
        description: props.info,
      })
    }
  },
  {
    immediate: true,
  }
)

watch(
  () => props.success,
  (newVal) => {
    if (newVal) {
      toast({
        icon: CheckCircleIcon,
        title: "Success",
        iconClasses: "text-green-400",
        description: props.success,
      })
    }
  },
  { immediate: true }
)

watch(
  () => props.warning,
  (newVal) => {
    if (newVal) {
      toast({
        icon: ExclamationCircleIcon,
        title: "Warning",
        iconClasses: "text-orange-400",
        description: props.warning,
      })
    }
  },
  { immediate: true }
)

watch(
  () => props.errors,
  () => {
    if (Object.keys(props.errors!).length > 0) {
      toast({
        icon: ExclamationCircleIcon,
        title: "Oh snap! Some errors were encountered.",
        iconClasses: "text-red-400",
        messages: props.showErrorKeys ? Object.keys(props.errors!) : Object.values(props.errors!),
      })
    }
  }
)
</script>

<script lang="ts">
export default { name: "Notifications" }
</script>

<template>
  <Toaster />
</template>
