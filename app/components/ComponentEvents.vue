<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/table"
import { type ComponentEvent } from "@app/types/globals"
import { ComponentHeading } from "@app/components"

defineProps<{
  events: ComponentEvent[]
}>()
</script>

<template>
  <ComponentHeading>Events</ComponentHeading>

  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]"> Event</TableHead>

        <TableHead>Description</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow v-for="(event, index) in events" :key="index">
        <TableCell class="font-medium">
          {{ event.name }}
        </TableCell>

        <TableCell>
          <div class="mb-4">
            <span class="bg-muted px-2 py-1 font-mono">
              {{ event.payload }}
            </span>
          </div>

          {{ event.description }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
