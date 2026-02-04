<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { RangeCalendar } from "@/components/range-calendar"
import { type DateValue, getLocalTimeZone, today } from "@internationalized/date"
import { CodeBlock, ComponentHeading } from "@app/components"

const value = ref({
  start: today(getLocalTimeZone()),
  end: today(getLocalTimeZone()).add({ days: 7 }),
})

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { RangeCalendar } from '@codinglabsau/gooey'
import { getLocalTimeZone, today } from '@internationalized/date'

const value = ref({
  start: today(getLocalTimeZone()),
  end: today(getLocalTimeZone()).add({ days: 7 }),
})
<\/script>

<template>
  <RangeCalendar v-model="value" class="rounded-md border" />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 space-y-4">
      <RangeCalendar v-model="value" class="rounded-md border" />

      <p class="text-sm text-muted-foreground">Range: {{ value.start }} to {{ value.end }}</p>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
