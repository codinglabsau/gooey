<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/table"
import { ComponentHeading } from "@app/components"
import { type ComposableMethod } from "@app/types/globals"

defineProps<{
  methods: ComposableMethod[]
}>()
</script>

<template>
  <ComponentHeading>Composable Methods</ComponentHeading>

  <slot />

  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">Method</TableHead>

        <TableHead>Signature</TableHead>

        <TableHead>Description</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow v-for="(method, index) in methods" :key="index">
        <TableCell class="font-medium">
          {{ method.name }}
        </TableCell>

        <TableCell>
          <span class="bg-muted px-2 py-1 font-mono">{{ method.signature }}</span>
        </TableCell>

        <TableCell>
          {{ method.description }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
