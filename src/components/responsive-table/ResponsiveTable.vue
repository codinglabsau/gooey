<script setup lang="ts">
import { useMobileNavigation } from "@/composables/useMobileNavigation"
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "vue"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { isMobile } = useMobileNavigation()
</script>

<template>
  <!-- Desktop: Standard scrollable table -->
  <div v-if="!isMobile" class="relative w-full overflow-auto">
    <table :class="cn('w-full caption-bottom text-sm', props.class)">
      <slot />
    </table>
  </div>

  <!-- Mobile: Card-based list view -->
  <div v-else :class="cn('flex flex-col gap-3', props.class)">
    <slot name="mobile" />
  </div>
</template>
