<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"
import ComponentSummary from "@app/components/ComponentSummary.vue"
import { Heading } from "@/components/heading"

const router = useRouter()
const currentRoute = computed(() => router.currentRoute)
</script>

<template>
  <article class="space-y-6">
    <ComponentSummary :meta="$route.meta" />

    <hr class="my-8" />

    <h2 class="mb-4 text-2xl">Examples</h2>

    <slot />
  </article>
</template>
