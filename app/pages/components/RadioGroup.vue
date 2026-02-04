<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { RadioGroup, RadioGroupItem } from "@/components/radio-group"
import { Label } from "@/components/label"
import { CodeBlock, ComponentHeading } from "@app/components"

const selected = ref("comfortable")

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupItem, Label } from '@codinglabsau/gooey'

const selected = ref('comfortable')
<\/script>

<template>
  <RadioGroup v-model="selected">
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="default" value="default" />
      <Label for="default">Default</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="comfortable" value="comfortable" />
      <Label for="comfortable">Comfortable</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="compact" value="compact" />
      <Label for="compact">Compact</Label>
    </div>
  </RadioGroup>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 space-y-4">
      <RadioGroup v-model="selected">
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="default" value="default" />

          <Label for="default">Default</Label>
        </div>

        <div class="flex items-center space-x-2">
          <RadioGroupItem id="comfortable" value="comfortable" />

          <Label for="comfortable">Comfortable</Label>
        </div>

        <div class="flex items-center space-x-2">
          <RadioGroupItem id="compact" value="compact" />

          <Label for="compact">Compact</Label>
        </div>
      </RadioGroup>

      <p class="text-sm text-muted-foreground">Selected: {{ selected }}</p>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
