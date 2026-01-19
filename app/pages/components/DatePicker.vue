<script setup lang="ts">
import type { DateValue } from "@internationalized/date"
import { getLocalTimeZone, today } from "@internationalized/date"
import { ref } from "vue"
import { DatePicker } from "@/components/date-picker"

const date = ref<DateValue>()
const presetDate = ref<DateValue>(today(getLocalTimeZone()))
</script>

<template>
  <div class="space-y-8">
    <div class="space-y-2">
      <h3 class="text-sm font-medium">Default</h3>

      <DatePicker v-model="date" />

      <p class="text-sm text-muted-foreground">Selected: {{ date?.toString() ?? "None" }}</p>
    </div>

    <div class="space-y-2">
      <h3 class="text-sm font-medium">With Initial Value</h3>

      <DatePicker v-model="presetDate" />
    </div>

    <div class="space-y-2">
      <h3 class="text-sm font-medium">Custom Placeholder</h3>

      <DatePicker placeholder="Select your birthday" />
    </div>

    <div class="space-y-2">
      <h3 class="text-sm font-medium">Custom Width</h3>

      <DatePicker class="w-full max-w-sm" />
    </div>

    <div class="space-y-2">
      <h3 class="text-sm font-medium">Disabled</h3>

      <DatePicker disabled />
    </div>
  </div>
</template>
