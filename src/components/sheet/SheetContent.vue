<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue"
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from "radix-vue"
import { Cross2Icon } from "@radix-icons/vue"
import { type SheetVariants, sheetVariants } from "."
import { cn } from "@/lib/utils"

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes["class"]
  side?: SheetVariants["side"]
}

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

defineOptions({
  inheritAttrs: false,
})

const delegatedProps = computed(() => {
  const { class: _, side, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
    />

    <DialogContent
      :class="cn(sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <DialogClose
        class="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary"
      >
        <Cross2Icon class="h-4 w-4" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
