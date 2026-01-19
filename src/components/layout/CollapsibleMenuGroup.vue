<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "@/lib/utils"
import { useCollapsibleSidebar } from "./collapsible-utils"

const props = defineProps<{
  label?: string
  class?: HTMLAttributes["class"]
}>()

const { state, isMobile, collapsible } = useCollapsibleSidebar()

const isCollapsed = computed(
  () => collapsible === "icon" && state.value === "collapsed" && !isMobile.value,
)
</script>

<template>
  <div :class="cn('space-y-1', props.class)">
    <span
      v-if="label && !isCollapsed"
      class="mb-2 block px-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase"
    >
      {{ label }}
    </span>

    <slot />
  </div>
</template>
