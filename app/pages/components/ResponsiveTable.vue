<script setup lang="ts">
import { ResponsiveTable, ResponsiveTableCard } from "@/components/responsive-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/table"
import { ComponentHeading } from "@app/components"

const items = [
  { id: 1, name: "Widget A", category: "Electronics", price: "$99.00" },
  { id: 2, name: "Gadget B", category: "Accessories", price: "$49.00" },
  { id: 3, name: "Tool C", category: "Hardware", price: "$29.00" },
]
</script>

<template>
  <div class="space-y-8">
    <div>
      <ComponentHeading>Responsive Table</ComponentHeading>

      <p class="mt-2 text-sm text-muted-foreground">
        Displays a table on desktop and a card-based list on mobile. Resize your browser to see the
        responsive behavior.
      </p>

      <div class="mt-4">
        <ResponsiveTable data-cy="responsive-table">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>

              <TableHead>Category</TableHead>

              <TableHead class="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow v-for="item in items" :key="item.id">
              <TableCell class="font-medium">{{ item.name }}</TableCell>

              <TableCell>{{ item.category }}</TableCell>

              <TableCell class="text-right">{{ item.price }}</TableCell>
            </TableRow>
          </TableBody>

          <template #mobile>
            <ResponsiveTableCard v-for="item in items" :key="item.id">
              <div class="space-y-1">
                <div class="font-medium">{{ item.name }}</div>

                <div class="text-sm text-muted-foreground">{{ item.category }}</div>

                <div class="text-sm font-medium">{{ item.price }}</div>
              </div>
            </ResponsiveTableCard>
          </template>
        </ResponsiveTable>
      </div>
    </div>

    <div>
      <ComponentHeading>Clickable Cards</ComponentHeading>

      <p class="mt-2 text-sm text-muted-foreground">
        Cards can be made clickable with haptic feedback on touch devices.
      </p>

      <div class="mt-4 flex flex-col gap-3">
        <ResponsiveTableCard v-for="item in items" :key="item.id" clickable @click="() => {}">
          <div class="space-y-1">
            <div class="font-medium">{{ item.name }}</div>

            <div class="text-sm text-muted-foreground">{{ item.category }}</div>
          </div>
        </ResponsiveTableCard>
      </div>
    </div>
  </div>
</template>
