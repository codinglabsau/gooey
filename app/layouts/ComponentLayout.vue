<script setup lang="ts">
import { ComponentSummary, ComponentHeading } from "@app/components"
</script>

<template>
  <article>
    <ComponentSummary :meta="$route.meta" />

    <hr class="my-8" />

    <ComponentHeading class="mt-0">Examples</ComponentHeading>

    <slot />
  </article>
</template>
