<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"
import ShadcnComponent from "@app/components/ShadcnComponent.vue"
import { Heading } from "@/components/heading"

const router = useRouter()
const currentRoute = computed(() => router.currentRoute)
</script>

<template>
  <article>
    <Heading as="h1">{{ currentRoute.value.name }}</Heading>

    <ShadcnComponent v-if="$route.meta.shadcn" :modified="$route.meta.modified" class="mt-8" />

    <h2 class="mb-2 mt-8 text-2xl">Examples</h2>

    <slot />
  </article>
</template>
