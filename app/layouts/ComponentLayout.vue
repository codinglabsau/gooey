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

    <ShadcnComponent v-if="$route.meta.shadcn" :modified="$route.meta.modified" />

    <hr class="my-8" />

    <h2 class="mb-4 text-2xl">Examples</h2>

    <slot />
  </article>
</template>
