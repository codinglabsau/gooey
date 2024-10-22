<script setup lang="ts">
import { Accordion } from '@/components/accordion'

const content = {
  first: { title: 'First', content: 'First content' },
  second: { title: 'Second', content: 'Second content' },
  third: { title: 'Third', content: 'Third content' },
}
</script>

<template>
  <div class="space-y-12">
    <section>
      <h2 class="text-2xl">Basic Accordion</h2>
      <Accordion :content="content" />
    </section>
    <section>
      <h2 class="text-2xl">Accordion with Custom Content and Title</h2>
      <Accordion :content="content">
        <template #second.title="{ item }">
          <h3 class="text-2xl"> Custom title for {{ item.title }} </h3>
        </template>
        <template #second.content="{ item }">
          <img src="/logo.svg" alt="Coding Labs UI" class="w-52 mx-auto" />

        </template>
      </Accordion>
    </section>
  </div>

</template>
