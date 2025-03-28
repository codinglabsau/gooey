<script setup lang="ts">
import { Checkbox } from "@/components/checkbox"
import { Label } from "@/components/label"
</script>

<template>
  <div>
    <div class="flex items-center space-x-2">
      <Checkbox id="terms" />

      <Label for="terms">Accept terms and conditions</Label>
    </div>
  </div>
</template>
