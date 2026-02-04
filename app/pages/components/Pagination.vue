<script setup lang="ts">
/* eslint-disable no-useless-escape */
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/pagination"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import {
  Pagination, PaginationContent, PaginationEllipsis,
  PaginationItem, PaginationNext, PaginationPrevious,
} from '@codinglabsau/gooey'
<\/script>

<template>
  <Pagination v-slot="{ page }" :items-per-page="10" :total="30" :default-page="2">
    <PaginationContent v-slot="{ items }">
      <PaginationPrevious />
      <template v-for="(item, index) in items" :key="index">
        <PaginationItem v-if="item.type === 'page'" :value="item.value" :is-active="item.value === page">
          {{ item.value }}
        </PaginationItem>
      </template>
      <PaginationNext />
    </PaginationContent>
  </Pagination>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Pagination v-slot="{ page }" :items-per-page="10" :total="30" :default-page="2">
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />

          <template v-for="(item, index) in items" :key="index">
            <PaginationItem
              v-if="item.type === 'page'"
              :value="item.value"
              :is-active="item.value === page"
            >
              {{ item.value }}
            </PaginationItem>
          </template>

          <PaginationEllipsis :index="4" />

          <PaginationNext />
        </PaginationContent>
      </Pagination>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
