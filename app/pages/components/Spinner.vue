<script setup lang="ts">
import { Spinner } from "@/components/spinner"
</script>

<template>
  <div class="flex items-center gap-6">
    <div class="flex flex-col items-center gap-2">
      <Spinner class="size-4" />

      <span class="text-xs text-muted-foreground">Small</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <Spinner class="size-6" />

      <span class="text-xs text-muted-foreground">Default</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <Spinner class="size-8" />

      <span class="text-xs text-muted-foreground">Large</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <Spinner class="size-12" />

      <span class="text-xs text-muted-foreground">Extra Large</span>
    </div>
  </div>
</template>
