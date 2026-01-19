<script setup lang="ts">
import { AspectRatio } from "@/components/aspect-ratio"
</script>

<template>
  <div class="space-y-4">
    <div class="w-[300px]">
      <AspectRatio :ratio="16 / 9" class="overflow-hidden rounded-md bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo"
          class="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>

    <div class="w-[200px]">
      <AspectRatio :ratio="1" class="flex items-center justify-center rounded-md bg-muted">
        <span class="text-muted-foreground">1:1 Ratio</span>
      </AspectRatio>
    </div>
  </div>
</template>
