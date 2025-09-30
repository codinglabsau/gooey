<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { type BadgeVariants, badgeVariants } from "."
import { cn } from "@/lib/utils"

const props = defineProps<{
  variant?: BadgeVariants["variant"]
  type?: BadgeVariants["type"]
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div :class="cn(badgeVariants({ variant, type }), props.class)">
    <slot />
  </div>
</template>
