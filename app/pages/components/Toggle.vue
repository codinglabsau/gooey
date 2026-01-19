<script setup lang="ts">
import { Toggle } from "@/components/toggle"
import { Bold, Italic, Underline } from "lucide-vue-next"
</script>

<template>
  <div class="space-y-4">
    <div class="flex gap-2">
      <Toggle aria-label="Toggle bold">
        <Bold class="size-4" />
      </Toggle>

      <Toggle aria-label="Toggle italic">
        <Italic class="size-4" />
      </Toggle>

      <Toggle aria-label="Toggle underline">
        <Underline class="size-4" />
      </Toggle>
    </div>

    <div class="flex gap-2">
      <Toggle variant="outline" aria-label="Toggle bold">
        <Bold class="size-4" />
      </Toggle>

      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic class="size-4" />
      </Toggle>

      <Toggle variant="outline" aria-label="Toggle underline">
        <Underline class="size-4" />
      </Toggle>
    </div>
  </div>
</template>
