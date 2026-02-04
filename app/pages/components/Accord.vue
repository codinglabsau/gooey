<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Accord } from "@/components/accordion"
import { CodeBlock, ComponentHeading } from "@app/components"

const content = {
  first: { title: "First", content: "First content" },
  second: { title: "Second", content: "/logo.svg" },
  third: { title: "Third", content: "Third content" },
}

const basicCode = `<script setup lang="ts">
import { Accord } from '@codinglabsau/gooey'

const content = {
  first: { title: 'First', content: 'First content' },
  second: { title: 'Second', content: 'Second content' },
  third: { title: 'Third', content: 'Third content' },
}
<\/script>

<template>
  <Accord :content="content" />
</template>`

const customCode = `<script setup lang="ts">
import { Accord } from '@codinglabsau/gooey'

const content = {
  first: { title: 'First', content: 'First content' },
  second: { title: 'Second', content: '/logo.svg' },
}
<\/script>

<template>
  <Accord :content="content">
    <template #second.title="{ item }">
      <div class="text-destructive">Custom title for {{ item.title }}</div>
    </template>
    <template #second.content="{ item }">
      <img :src="item.content" alt="Logo" class="mx-auto w-52" />
    </template>
  </Accord>
</template>`
</script>

<template>
  <div class="space-y-12">
    <section>
      <ComponentHeading class="mt-2 text-lg">Basic Accordion</ComponentHeading>

      <Accord data-cy="contentBasic" :content="content" />

      <CodeBlock class="mt-4" lang="vue" :code="basicCode" />
    </section>

    <section>
      <ComponentHeading class="mt-2 text-lg">
        Accordion with Custom Content and Title
      </ComponentHeading>

      <Accord data-cy="contentCustom" :content="content">
        <template #second.title="{ item }">
          <div class="bg-destructive-foreground text-destructive">
            Custom title for {{ item.title }}
          </div>
        </template>

        <template #second.content="{ item }">
          <img :src="item.content" alt="Gooey" class="mx-auto w-52" />
        </template>
      </Accord>

      <CodeBlock class="mt-4" lang="vue" :code="customCode" />
    </section>
  </div>
</template>
