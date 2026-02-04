<script setup lang="ts">
import { ComponentSummary, ComponentHeading } from "@app/components"
</script>

<template>
  <article class="mx-auto max-w-3xl">
    <ComponentSummary :meta="$route.meta" />

    <hr class="my-8" />

    <ComponentHeading class="mt-0">Examples</ComponentHeading>

    <slot />
  </article>
</template>
