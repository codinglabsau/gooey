<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/stepper"
import { CodeBlock, ComponentHeading } from "@app/components"

const currentStep = ref(2)

const code = `<script setup lang="ts">
import { ref } from 'vue'
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@codinglabsau/gooey'

const currentStep = ref(1)
<\/script>

<template>
  <Stepper v-model="currentStep">
    <StepperItem :step="1">
      <StepperTrigger>
        <StepperIndicator />
        <StepperTitle>Step 1</StepperTitle>
      </StepperTrigger>
      <StepperSeparator />
    </StepperItem>
    <StepperItem :step="2">
      <StepperTrigger>
        <StepperIndicator />
        <StepperTitle>Step 2</StepperTitle>
      </StepperTrigger>
    </StepperItem>
  </Stepper>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Stepper v-model="currentStep" class="w-full max-w-lg">
        <StepperItem :step="1">
          <StepperTrigger>
            <StepperIndicator />

            <div class="flex flex-col">
              <StepperTitle>Step 1</StepperTitle>

              <StepperDescription>Account details</StepperDescription>
            </div>
          </StepperTrigger>

          <StepperSeparator />
        </StepperItem>

        <StepperItem :step="2">
          <StepperTrigger>
            <StepperIndicator />

            <div class="flex flex-col">
              <StepperTitle>Step 2</StepperTitle>

              <StepperDescription>Personal info</StepperDescription>
            </div>
          </StepperTrigger>

          <StepperSeparator />
        </StepperItem>

        <StepperItem :step="3">
          <StepperTrigger>
            <StepperIndicator />

            <div class="flex flex-col">
              <StepperTitle>Step 3</StepperTitle>

              <StepperDescription>Confirmation</StepperDescription>
            </div>
          </StepperTrigger>
        </StepperItem>
      </Stepper>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
