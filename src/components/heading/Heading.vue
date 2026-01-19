<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = withDefaults(
  defineProps<{
    as?: string
    class?: HTMLAttributes["class"]
  }>(),
  {
    as: "h2",
  },
)
</script>

<template>
  <div class="flex items-center justify-between space-y-2">
    <component :is="as" :class="cn('text-3xl font-bold tracking-tight', props.class)">
      <slot />
    </component>

    <div class="flex items-center space-x-2">
      <slot name="actions" />
    </div>
  </div>
</template>
