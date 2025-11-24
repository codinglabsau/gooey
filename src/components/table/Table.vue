<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

interface TableProps {
  class?: HTMLAttributes["class"]
  containerClass?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<TableProps>(), {
  containerClass: "relative w-full overflow-auto",
})
</script>

<template>
  <div :class="containerClass">
    <!-- New topbar slot rendered above the table but inside the container -->
    <slot name="topbar" />

    <table :class="cn('w-full caption-bottom text-sm', props.class)">
      <slot />
    </table>
  </div>
</template>
