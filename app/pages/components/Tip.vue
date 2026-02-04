<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Tip } from "@/components/tooltip"
import { ref } from "vue"
import { Button } from "@"
import { CodeBlock, ComponentHeading, Logo } from "@app/components"

const openTooltip = ref(false)

const basicCode = `<script setup lang="ts">
import { Tip } from '@codinglabsau/gooey'
<\/script>

<template>
  <Tip tooltip="Basic Tooltip">
    <span>Hover to see tooltip</span>
  </Tip>
</template>`

const indicatorCode = `<template>
  <Tip indicator tooltip="Hello World">
    <span>Tooltip with indicator</span>
  </Tip>
</template>`

const controlledCode = `<script setup lang="ts">
import { ref } from 'vue'
import { Tip, Button } from '@codinglabsau/gooey'

const open = ref(false)
<\/script>

<template>
  <Tip :open="open" tooltip="Controlled tooltip">
    <span @click="open = !open">Click to toggle</span>
  </Tip>
  <Button @click="open = !open">Toggle Tooltip</Button>
</template>`
</script>

<template>
  <div class="space-y-8">
    <section>
      <ComponentHeading>Basic</ComponentHeading>

      <div class="mt-4">
        <Tip tooltip="Basic Tooltip">
          <span class="border-b border-dotted border-primary">Hover over text to see tooltip</span>
        </Tip>
      </div>

      <CodeBlock class="mt-4" lang="vue" :code="basicCode" />
    </section>

    <section>
      <ComponentHeading>With Indicator</ComponentHeading>

      <div class="mt-4">
        <Tip indicator tooltip="Hello World">
          <span class="border-b border-dotted border-primary">Tooltip with indicator</span>
        </Tip>
      </div>

      <CodeBlock class="mt-4" lang="vue" :code="indicatorCode" />
    </section>

    <section>
      <ComponentHeading>Custom Class</ComponentHeading>

      <div class="mt-4">
        <Tip class="bg-green-500 text-2xl text-white" tooltip="Hello World">
          <span class="border-b border-dotted border-primary"
            >Tooltip with custom tooltip class</span
          >
        </Tip>
      </div>
    </section>

    <section>
      <ComponentHeading>Custom Slot</ComponentHeading>

      <div class="mt-4">
        <Tip>
          <span class="border-b border-dotted border-primary"
            >Tooltip with custom tooltip slot</span
          >

          <template #tooltip>
            <Logo alt="Gooey" class="w-36" />
          </template>
        </Tip>
      </div>
    </section>

    <section>
      <ComponentHeading>Controlled</ComponentHeading>

      <div class="mt-4">
        <Tip :open="openTooltip" tooltip="fancy seeing you here">
          <span class="text-2xl" @click="openTooltip = !openTooltip">
            Activate from button or on click
          </span>
        </Tip>

        <div class="mt-4">
          <Button @click="openTooltip = !openTooltip">Toggle Tooltip</Button>
        </div>
      </div>

      <CodeBlock class="mt-4" lang="vue" :code="controlledCode" />
    </section>

    <section>
      <ComponentHeading>API References</ComponentHeading>

      <div class="mt-4">
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
      </div>
    </section>
  </div>
</template>
