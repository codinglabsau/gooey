<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { SimpleSelect, type SelectOption } from "@/components/simple-select"
import { CodeBlock, ComponentHeading } from "@app/components"

const selected = ref<string>()
const expiry = ref<number | null>(null)

const countries: SelectOption[] = [
  { value: "au", label: "Australia" },
  { value: "nz", label: "New Zealand" },
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
]

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { SimpleSelect, type SelectOption } from '@codinglabsau/gooey'

const selected = ref<string>()

const countries: SelectOption[] = [
  { value: 'au', label: 'Australia' },
  { value: 'nz', label: 'New Zealand' },
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
]
<\/script>

<template>
  <SimpleSelect
    v-model="selected"
    :options="countries"
    placeholder="Select a country"
    class="w-[200px]"
  />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      SimpleSelect wraps the compound Select components into a single component with an
      <code>options</code> prop, making it compatible with form builders that expect a single
      component entry point.
    </p>

    <div class="mt-4 flex items-center gap-4">
      <SimpleSelect
        v-model="selected"
        :options="countries"
        placeholder="Select a country"
        class="w-[200px]"
        data-cy="basic"
      />

      <span v-if="selected" class="text-sm text-muted-foreground" data-cy="selected-value">
        Selected: {{ selected }}
      </span>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />

    <ComponentHeading class="mt-8">Null Option</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      An option with a <code>null</code> value shows its label when selected, instead of the
      placeholder. Values can also be numbers.
    </p>

    <div class="mt-4 flex items-center gap-4">
      <SimpleSelect
        v-model="expiry"
        :options="[
          { value: null, label: 'Never' },
          { value: 7, label: '1 week' },
          { value: 30, label: '1 month' },
        ]"
        class="w-[200px]"
        data-cy="null-option"
      />

      <span class="text-sm text-muted-foreground" data-cy="null-option-value">
        Selected: {{ JSON.stringify(expiry) }}
      </span>
    </div>

    <ComponentHeading class="mt-8">Disabled Options</ComponentHeading>

    <div class="mt-4">
      <SimpleSelect
        :options="[
          { value: 'active', label: 'Active' },
          { value: 'pending', label: 'Pending', disabled: true },
          { value: 'archived', label: 'Archived' },
        ]"
        placeholder="Select status"
        class="w-[200px]"
        data-cy="disabled-options"
      />
    </div>
  </div>
</template>
