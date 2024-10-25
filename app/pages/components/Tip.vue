<script setup lang="ts">
import { Tip } from "@/components/tooltip"
import { ref } from "vue"
import { Button } from "@"

const openTooltip = ref(false)
</script>

<template>
  <div class="space-y-12">
    <section>
      <Tip tooltip="Basic Tooltip">
        <h2 class="text-2xl">Hover over text to see tooltip</h2>
      </Tip>
    </section>

    <section>
      <Tip indicator tooltip="Hello World">
        <h2 class="text-2xl">Tooltip with indicator</h2>
      </Tip>
    </section>

    <section>
      <Tip class="bg-green-500 text-2xl text-white" tooltip="Hello World">
        <h2 class="text-2xl">Tooltip with custom tooltip class</h2>
      </Tip>
    </section>

    <section>
      <Tip>
        <h2 class="text-2xl">Tooltip with custom tooltip slot</h2>

        <template #tooltip>
          <img src="/logo.svg" alt="Coding Labs UI" class="w-32" />
        </template>
      </Tip>
    </section>

    <section>
      <Tip :open="openTooltip" tooltip="fancy seeing you here">
        <h2 class="text-2xl" @click="openTooltip = !openTooltip">
          Activate from button or on click
        </h2>
      </Tip>

      <div class="mt-4">
        <Button @click="openTooltip = !openTooltip">Toggle Tooltip</Button>
      </div>
    </section>

    <section>
      <Tip :delay-duration="0" side="right" tooltip="Hello World">
        <h2 class="text-2xl">API References</h2>
      </Tip>

      <p class="mt-4">
        You can pass props used in the API Reference section for Provider, Root, Trigger, and
        Content.
      </p>

      <a
        class="text-blue-600 underline"
        href="https://www.radix-vue.com/components/tooltip#api-reference"
      >
        Click here to view.
      </a>
    </section>
  </div>
</template>
