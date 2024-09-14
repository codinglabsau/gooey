<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"
import ShadcnComponent from "@app/components/ShadcnComponent.vue"

const router = useRouter()
const currentRoute = computed(() => router.currentRoute)
</script>

<template>
  <article>
    <h1 class="mb-4 text-3xl">{{ currentRoute.value.name }}</h1>

    <ShadcnComponent v-if="$route.meta.shadcn" />

    <h2 class="mb-2 text-2xl">Example</h2>

    <slot />
  </article>
</template>
