<script setup lang="ts">
import { ref } from "vue"
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/number-field"
import { Label } from "@/components/label"
</script>

<template>
  <div class="max-w-xs space-y-4">
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
</template>
