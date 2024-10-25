<script setup lang="ts">
import { Accord } from "@/components/accordion"

const content = {
  first: { title: "First", content: "First content" },
  second: { title: "Second", content: "/logo.svg" },
  third: { title: "Third", content: "Third content" },
}
</script>

<template>
  <div class="space-y-12">
    <section>
      <h2 class="text-2xl">Basic Accordion</h2>

      <Accord data-cy="contentBasic" :content="content" />
    </section>

    <section>
      <h2 class="text-2xl">Accordion with Custom Content and Title</h2>

      <Accord data-cy="contentCustom" :content="content">
        <template #second.title="{ item }">
          <h3 class="text-2xl">Custom title for {{ item.title }}</h3>
        </template>

        <template #second.content="{ item }">
          <img :src="item.content" alt="Coding Labs UI" class="mx-auto w-52" />
        </template>
      </Accord>
    </section>
  </div>
</template>
