<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"
import { ComponentSummary, ComponentHeading } from "@app/components"

const router = useRouter()
const currentRoute = computed(() => router.currentRoute)
</script>

<template>
  <article>
    <ComponentSummary :meta="$route.meta" />

    <hr class="my-8" />

    <ComponentHeading class="mt-0">Examples</ComponentHeading>

    <slot />
  </article>
</template>
