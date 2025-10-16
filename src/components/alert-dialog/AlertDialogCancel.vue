<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue"
import { AlertDialogCancel, type AlertDialogCancelProps } from "radix-vue"
import { cn } from "@/lib/utils"
import { type ButtonVariants, buttonVariants } from "@/components/button"

const props = withDefaults(
  defineProps<
    AlertDialogCancelProps & {
    class?: HTMLAttributes["class"]
    variant?: ButtonVariants["variant"]
  }
  >(), {
    variant: "outline"
  }
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AlertDialogCancel
    v-bind="delegatedProps"
    :class="cn(buttonVariants({ variant }), 'mt-2 sm:mt-0', props.class)"
  >
    <slot />
  </AlertDialogCancel>
</template>
