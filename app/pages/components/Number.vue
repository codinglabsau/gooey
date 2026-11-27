<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { Number } from "@/components/number"
import { CodeBlock, ComponentHeading } from "@app/components"

const basic = ref<number>()
const integer = ref<number>()
const nullable = ref<number | string | null>("")
const numericString = ref<number | string | null>("1234.5")
const blankString = ref<number | string | null>(" ")
const formattedString = ref<number | string | null>("1,234.56")

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { Number } from '@codinglabsau/gooey'

const quantity = ref<number>()
<\/script>

<template>
  <Number v-model="quantity" :min="0" :max="100" :step="1" />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      <code>Number</code>

      wraps <code>NumberField</code>
      with the legacy
      <code>@codinglabsau/ui</code>

      Number API. v-model is a <code>number</code>.
    </p>

    <div class="mt-4 max-w-xs space-y-2">
      <Number v-model="basic" :min="0" :max="100" :step="1" data-cy="basic" />

      <p v-if="basic !== undefined" class="text-sm text-muted-foreground" data-cy="model-value">
        Value: {{ basic }}
      </p>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />

    <ComponentHeading class="mt-8">Integer Mode</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      Pass <code>integer</code> to restrict the value to whole numbers (decimal input is rounded on
      blur).
    </p>

    <div class="mt-4 max-w-xs space-y-2">
      <Number v-model="integer" integer :min="0" data-cy="integer" />

      <p v-if="integer !== undefined" class="text-sm text-muted-foreground" data-cy="integer-value">
        Value: {{ integer }}
      </p>
    </div>

    <ComponentHeading class="mt-8">Empty Values</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      An empty string renders as an empty input. Clearing the input leaves the v-model undefined,
      which JSON.stringify drops from a form submission. Pass <code>:empty-value="null"</code> to
      set it to null instead, so the server can clear the field.
    </p>

    <div class="mt-4 max-w-xs space-y-2">
      <Number v-model="nullable" :empty-value="null" placeholder="Unlimited" data-cy="nullable" />

      <p class="text-sm text-muted-foreground" data-cy="nullable-value">
        Value: {{ JSON.stringify(nullable) }}
      </p>
    </div>

    <ComponentHeading class="mt-8">String Values</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      A plain numeric string, as a backend might send for a decimal column, is read as a number. A
      blank string renders as an empty input. A formatted string such as
      <code>"1,234.56"</code> cannot be read reliably across locales, so it renders as an empty
      input and logs a console warning.
    </p>

    <div class="mt-4 max-w-xs space-y-2">
      <Number v-model="numericString" data-cy="numeric-string" />

      <Number v-model="blankString" data-cy="blank-string" />

      <Number v-model="formattedString" data-cy="formatted-string" />
    </div>

    <ComponentHeading class="mt-8">Disabled</ComponentHeading>

    <div class="mt-4 max-w-xs">
      <Number disabled :default-value="10" />
    </div>
  </div>
</template>
