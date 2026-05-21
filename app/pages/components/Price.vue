<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { Price } from "@/components/price"
import { CodeBlock, ComponentHeading } from "@app/components"

const basic = ref<number>()
const usd = ref<number>(19.99)

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { Price } from '@codinglabsau/gooey'

// v-model is a number in dollars (e.g. 19.99) — no cents conversion needed.
const amount = ref<number>()
<\/script>

<template>
  <Price v-model="amount" currency="AUD" />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      <code>Price</code>

      is a currency-aware numeric input built on <code>NumberField</code>
      . The v-model is a
      <code>number</code>

      in <strong>dollars</strong>

      (e.g. <code>19.99</code>) — consumers never deal with cents. The displayed value is formatted
      via
      <code>Intl.NumberFormat</code>

      using the configured <code>currency</code>
      and
      <code>locale</code>.
    </p>

    <div class="mt-4 max-w-xs space-y-2">
      <Price v-model="basic" placeholder="0.00" data-cy="basic" />

      <p v-if="basic !== undefined" class="text-sm text-muted-foreground" data-cy="model-value">
        v-model: {{ basic }}
      </p>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />

    <ComponentHeading class="mt-8">Custom Currency &amp; Locale</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      Pass <code>currency</code>

      (ISO 4217) and <code>locale</code> to render different formats.
    </p>

    <div class="mt-4 max-w-xs space-y-2">
      <Price v-model="usd" currency="USD" locale="en-US" data-cy="usd" />

      <p class="text-sm text-muted-foreground">v-model: {{ usd }}</p>
    </div>

    <ComponentHeading class="mt-8">Disabled</ComponentHeading>

    <div class="mt-4 max-w-xs">
      <Price disabled :default-value="42" />
    </div>
  </div>
</template>
