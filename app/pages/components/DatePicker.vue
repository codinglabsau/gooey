<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { DatePicker } from "@/components/date-picker"
import type { DateValue } from "@internationalized/date"
import { CodeBlock, ComponentHeading } from "@app/components"

const value = ref<DateValue>()

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from '@codinglabsau/gooey'
import type { DateValue } from '@internationalized/date'

const value = ref<DateValue>()
<\/script>

<template>
  <DatePicker v-model="value" />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      DatePicker bundles a Popover, a Button trigger and a Calendar into a single component with a
      <code>DateValue</code> v-model — handy for forms that expect a single component entry point.
    </p>

    <div class="mt-4 flex items-center gap-4">
      <DatePicker v-model="value" data-cy="basic" />

      <span v-if="value" class="text-sm text-muted-foreground" data-cy="selected-value">
        Selected: {{ value }}
      </span>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />

    <ComponentHeading class="mt-8">Disabled</ComponentHeading>

    <div class="mt-4">
      <DatePicker placeholder="Pick a date" disabled data-cy="disabled" />
    </div>
  </div>
</template>
