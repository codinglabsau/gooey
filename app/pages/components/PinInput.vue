<script setup lang="ts">
import { ref } from "vue"
import { PinInput, PinInputGroup, PinInputSeparator, PinInputSlot } from "@/components/pin-input"

const value = ref<string[]>([])
</script>

<template>
  <div class="space-y-4">
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
</template>
