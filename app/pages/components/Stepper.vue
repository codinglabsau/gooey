<script setup lang="ts">
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

const currentStep = ref(2)
</script>

<template>
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
</template>
