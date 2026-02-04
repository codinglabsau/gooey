<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { Calendar } from "@/components/calendar"
import { type DateValue, getLocalTimeZone, today } from "@internationalized/date"
import { CodeBlock, ComponentHeading } from "@app/components"

const value = ref<DateValue>(today(getLocalTimeZone()))

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@codinglabsau/gooey'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'

const value = ref<DateValue>(today(getLocalTimeZone()))
<\/script>

<template>
  <Calendar v-model="value" class="rounded-md border" />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 space-y-4">
      <Calendar v-model="value" class="rounded-md border" />

      <p class="text-sm text-muted-foreground">Selected: {{ value }}</p>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
