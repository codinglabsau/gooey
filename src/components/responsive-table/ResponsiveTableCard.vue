<script setup lang="ts">
import { useHapticFeedback } from "@/composables/useHapticFeedback"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-vue-next"
import type { HTMLAttributes } from "vue"
import { ref } from "vue"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  clickable?: boolean
}>()

const emit = defineEmits<{
  (e: "click"): void
  (e: "swipe-left"): void
  (e: "swipe-right"): void
}>()

const { light, medium } = useHapticFeedback()

const cardRef = ref<HTMLElement | null>(null)
const startX = ref(0)
const currentX = ref(0)
const isSwiping = ref(false)
const swipeThreshold = 80
const hasTriggeredHaptic = ref(false)

const handleTouchStart = (e: TouchEvent) => {
  startX.value = e.touches[0].clientX
  currentX.value = 0
  isSwiping.value = true
  hasTriggeredHaptic.value = false
}

const handleTouchMove = (e: TouchEvent) => {
  if (!isSwiping.value) return
  currentX.value = e.touches[0].clientX - startX.value

  // Trigger haptic feedback when crossing threshold
  const crossedThreshold = Math.abs(currentX.value) >= swipeThreshold
  if (crossedThreshold && !hasTriggeredHaptic.value) {
    medium()
    hasTriggeredHaptic.value = true
  } else if (!crossedThreshold && hasTriggeredHaptic.value) {
    // Reset if user moves back below threshold
    hasTriggeredHaptic.value = false
  }
}

const handleTouchEnd = () => {
  if (!isSwiping.value) return

  if (currentX.value < -swipeThreshold) {
    emit("swipe-left")
  } else if (currentX.value > swipeThreshold) {
    emit("swipe-right")
  }

  currentX.value = 0
  isSwiping.value = false
}

const handleClick = () => {
  if (Math.abs(currentX.value) < 10) {
    light()
    emit("click")
  }
}
</script>

<template>
  <div
    ref="cardRef"
    :class="
      cn(
        'relative overflow-hidden rounded-lg border bg-card p-4 shadow-sm transition-transform touch-manipulation',
        clickable && 'cursor-pointer active:bg-muted/50',
        props.class
      )
    "
    :style="{
      transform: `translateX(${currentX}px)`,
      transition: isSwiping ? 'none' : 'transform 0.2s ease-out',
    }"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handleClick"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="min-w-0 flex-1">
        <slot />
      </div>

      <div v-if="clickable" class="flex shrink-0 items-center">
        <ChevronRight class="h-5 w-5 text-muted-foreground" />
      </div>
    </div>

    <!-- Swipe action indicators -->
    <div
      v-if="currentX < -20"
      class="absolute inset-y-0 right-0 flex items-center bg-destructive/10 px-4"
      :style="{ width: `${Math.abs(currentX)}px` }"
    >
      <slot name="swipe-left-action" />
    </div>

    <div
      v-if="currentX > 20"
      class="absolute inset-y-0 left-0 flex items-center bg-primary/10 px-4"
      :style="{ width: `${currentX}px` }"
    >
      <slot name="swipe-right-action" />
    </div>
  </div>
</template>
