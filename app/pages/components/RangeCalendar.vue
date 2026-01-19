<script setup lang="ts">
import { ref } from "vue"
import { RangeCalendar } from "@/components/range-calendar"
import { type DateValue, getLocalTimeZone, today } from "@internationalized/date"

const value = ref({
  start: today(getLocalTimeZone()),
  end: today(getLocalTimeZone()).add({ days: 7 }),
})
</script>

<template>
  <div class="space-y-4">
    <RangeCalendar v-model="value" class="rounded-md border" />

    <p class="text-sm text-muted-foreground">Range: {{ value.start }} to {{ value.end }}</p>
  </div>
</template>
