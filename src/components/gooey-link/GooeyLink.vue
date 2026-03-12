<script setup lang="ts">
import { inject } from "vue"
import { GOOEY_LINK_KEY } from "@/plugin"

defineProps<{ href: string }>()

const LinkComponent = inject(GOOEY_LINK_KEY, "a")
</script>

<template>
  <component :is="LinkComponent" :href="href" v-bind="$attrs">
    <slot />
  </component>
</template>
