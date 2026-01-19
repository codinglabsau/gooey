<script setup lang="ts">
import { ref } from "vue"
import { Textarea } from "@/components/textarea"

const message = ref("")
</script>

<template>
  <div class="space-y-8">
    <div class="space-y-2">
      <h3 class="text-sm font-medium">Default</h3>

      <Textarea v-model="message" placeholder="Type your message here..." />

      <p class="text-sm text-muted-foreground">Value: {{ message || "(empty)" }}</p>
    </div>

    <div class="space-y-2">
      <h3 class="text-sm font-medium">Disabled</h3>

      <Textarea placeholder="Disabled textarea" disabled />
    </div>
  </div>
</template>
