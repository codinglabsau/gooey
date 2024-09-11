<script setup lang="ts">
import { useRouter } from "vue-router"
import { computed } from "vue"

const router = useRouter()
const currentRoute = computed(() => router.currentRoute)
</script>

<template>
  <h1>{{ currentRoute.value.name }}</h1>

  <p>{{ currentRoute.value.name }} is exporting directly from without modification.</p>

  <a :href="`https://www.shadcn-vue.com/docs${currentRoute.value.path}.html`" target="__blank">
    See the Shadcn {{ currentRoute.value.name }} docs
  </a>
</template>
