<script setup lang="ts">
import { cn } from "@/lib/utils"
import { useCarousel } from "./useCarousel"
import type { WithClassAsProps } from "./interface"

const props = defineProps<WithClassAsProps>()

defineOptions({
  inheritAttrs: false,
})

const { carouselRef, orientation } = useCarousel()
</script>

<template>
  <div ref="carouselRef" class="overflow-hidden">
    <div
      :class="cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', props.class)"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </div>
</template>
