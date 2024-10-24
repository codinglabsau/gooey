<script setup lang="ts">
import { Tooltip } from "@/components/tooltip"
import { ref } from "vue"
import { Button } from "@"

const openTooltip = ref(false)
</script>

<template>
  <div class="space-y-12">
    <section>
      <Tooltip tooltip="Basic Tooltip">
        <h2 class="text-2xl">Hover over text to see tooltip</h2>
      </Tooltip>
    </section>

    <section>
      <Tooltip indicator tooltip="Hello World">
        <h2 class="text-2xl">Tooltip with indicator</h2>
      </Tooltip>
    </section>

    <section>
      <Tooltip class="bg-green-500 text-2xl text-white" tooltip="Hello World">
        <h2 class="text-2xl">Tooltip with custom tooltip class</h2>
      </Tooltip>
    </section>

    <section>
      <Tooltip>
        <h2 class="text-2xl">Tooltip with custom tooltip slot</h2>

        <template #tooltip>
          <img src="/logo.svg" alt="Coding Labs UI" class="w-32" />
        </template>
      </Tooltip>
    </section>

    <section>
      <Tooltip :open="openTooltip" tooltip="fancy seeing you here">
        <h2 class="text-2xl" @click="openTooltip = !openTooltip">
          Activate from button or on click
        </h2>
      </Tooltip>

      <div class="mt-4">
        <Button @click="openTooltip = !openTooltip">Toggle Tooltip</Button>
      </div>
    </section>

    <section>
      <Tooltip :delay-duration="0" side="right" tooltip="Hello World">
        <h2 class="text-2xl">API References</h2>
      </Tooltip>

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
