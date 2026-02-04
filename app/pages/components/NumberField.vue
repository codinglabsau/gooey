<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/number-field"
import { Label } from "@/components/label"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import {
  NumberField, NumberFieldContent, NumberFieldDecrement,
  NumberFieldIncrement, NumberFieldInput, Label,
} from '@codinglabsau/gooey'
<\/script>

<template>
  <Label>Quantity</Label>
  <NumberField :default-value="3" :min="0" :max="10">
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 max-w-xs space-y-4">
      <div class="space-y-2">
        <Label>Quantity</Label>

        <NumberField :default-value="3" :min="0" :max="10">
          <NumberFieldContent>
            <NumberFieldDecrement />

            <NumberFieldInput />

            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
      </div>

      <div class="space-y-2">
        <Label>Price</Label>

        <NumberField :default-value="9.99" :format-options="{ style: 'currency', currency: 'USD' }">
          <NumberFieldContent>
            <NumberFieldDecrement />

            <NumberFieldInput />

            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
      </div>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
