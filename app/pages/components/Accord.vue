<script setup lang="ts">
import { Accord } from "@/components/accordion"
import { ComponentHeading } from "@app/components"

const content = {
  first: { title: "First", content: "First content" },
  second: { title: "Second", content: "/logo.svg" },
  third: { title: "Third", content: "Third content" },
}
</script>

<template>
  <div class="space-y-12">
    <section>
      <ComponentHeading class="mt-2 text-lg">Basic Accordion</ComponentHeading>

      <Accord data-cy="contentBasic" :content="content" />
    </section>

    <section>
      <ComponentHeading class="mt-2 text-lg">Accordion with Custom Content and Title</ComponentHeading>

      <Accord data-cy="contentCustom" :content="content">
        <template #second.title="{ item }">
          <div class="bg-destructive-foreground text-destructive">Custom title for {{ item.title }}</div>
        </template>

        <template #second.content="{ item }">
          <img :src="item.content" alt="Coding Labs UI" class="mx-auto w-52" />
        </template>
      </Accord>
    </section>
  </div>
</template>
