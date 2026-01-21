<script setup lang="ts">
import { Tip } from "@/components/tooltip"
import { ref } from "vue"
import { Button } from "@"
import { Logo } from "@app/components"

const openTooltip = ref(false)
</script>

<template>
  <div class="space-y-8">
    <section>
      <Tip tooltip="Basic Tooltip">
        <span class="border-b border-dotted border-primary">Hover over text to see tooltip</span>
      </Tip>
    </section>

    <section>
      <Tip indicator tooltip="Hello World">
        <span class="border-b border-dotted border-primary">Tooltip with indicator</span>
      </Tip>
    </section>

    <section>
      <Tip class="bg-green-500 text-2xl text-white" tooltip="Hello World">
        <span class="border-b border-dotted border-primary">Tooltip with custom tooltip class</span>
      </Tip>
    </section>

    <section>
      <Tip>
        <span class="border-b border-dotted border-primary">Tooltip with custom tooltip slot</span>

        <template #tooltip>
          <Logo alt="Gooey" class="w-36" />
        </template>
      </Tip>
    </section>

    <section>
      <Tip :open="openTooltip" tooltip="fancy seeing you here">
        <span class="text-2xl" @click="openTooltip = !openTooltip">
          Activate from button or on click
        </span>
      </Tip>

      <div class="mt-4">
        <Button @click="openTooltip = !openTooltip">Toggle Tooltip</Button>
      </div>
    </section>

    <section>
      <Tip :delay-duration="0" side="right" tooltip="Hello World">
        <span class="border-b border-dotted border-primary">API References</span>
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
