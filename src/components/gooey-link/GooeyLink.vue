<script setup lang="ts">
import { inject } from "vue"

const props = withDefaults(
  defineProps<{
    as?: string
    external?: boolean
    to?: string | object
    href?: string
    loading?: boolean
    spinnerClass?: string
    type?: ButtonType
  }>(),
  {
    as: "a",
    href: ""
  }
)

const linkComponent = inject("linkComponent")
</script>

<template>
  <component :is="linkComponent" v-bind="props">
    <slot />
  </component>
</template>
