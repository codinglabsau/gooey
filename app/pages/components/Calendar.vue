<script setup lang="ts">
import { ref } from "vue"
import { Calendar } from "@/components/calendar"
import { type DateValue, getLocalTimeZone, today } from "@internationalized/date"

const value = ref<DateValue>(today(getLocalTimeZone()))
</script>

<template>
  <div class="space-y-4">
    <Calendar v-model="value" class="rounded-md border" />

    <p class="text-sm text-muted-foreground">Selected: {{ value }}</p>
  </div>
</template>
