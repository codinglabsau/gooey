<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { Number } from "@/components/number"
import { CodeBlock, ComponentHeading } from "@app/components"

const basic = ref<number>()
const integer = ref<number>()

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

    <ComponentHeading class="mt-8">Disabled</ComponentHeading>

    <div class="mt-4 max-w-xs">
      <Number disabled :default-value="10" />
    </div>
  </div>
</template>
