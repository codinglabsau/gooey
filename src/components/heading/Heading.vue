<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: "h2",
  }
)
</script>

<template>
  <div class="flex items-center justify-between space-y-2">
    <component :is="as" class="text-3xl font-bold tracking-tight">
      <slot />
    </component>

    <div class="flex items-center space-x-2">
      <slot name="actions" />
    </div>
  </div>
</template>
