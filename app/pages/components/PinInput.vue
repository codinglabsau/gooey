<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { PinInput, PinInputGroup, PinInputSeparator, PinInputSlot } from "@/components/pin-input"
import { CodeBlock, ComponentHeading } from "@app/components"

const value = ref<string[]>([])

const code = `<script setup lang="ts">
import { ref } from 'vue'
import {
  PinInput,
  PinInputGroup,
  PinInputSeparator,
  PinInputSlot,
} from '@codinglabsau/gooey'

const value = ref<string[]>([])
<\/script>

<template>
  <PinInput v-model="value" placeholder="0">
    <PinInputGroup>
      <PinInputSlot :index="0" />
      <PinInputSlot :index="1" />
      <PinInputSlot :index="2" />
      <PinInputSeparator />
      <PinInputSlot :index="3" />
      <PinInputSlot :index="4" />
      <PinInputSlot :index="5" />
    </PinInputGroup>
  </PinInput>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 space-y-4">
      <PinInput v-model="value" placeholder="0">
        <PinInputGroup>
          <PinInputSlot :index="0" />

          <PinInputSlot :index="1" />

          <PinInputSlot :index="2" />

          <PinInputSeparator />

          <PinInputSlot :index="3" />

          <PinInputSlot :index="4" />

          <PinInputSlot :index="5" />
        </PinInputGroup>
      </PinInput>

      <p class="text-sm text-muted-foreground">Value: {{ value.join("") || "Empty" }}</p>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
