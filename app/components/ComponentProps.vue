<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/table"
import { type ComponentProp, type Meta } from "@app/types/globals"
import { ComponentHeading } from "@app/components"

defineProps<{
  props: ComponentProp[]
  meta: Meta
}>()
</script>

<template>
  <ComponentHeading>Props</ComponentHeading>

  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]"> Prop</TableHead>

        <TableHead>Default</TableHead>

        <TableHead>Type</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow v-for="(prop, index) in props" :key="index">
        <TableCell class="font-medium">
          {{ prop.name }}
        </TableCell>

        <TableCell>
          <span v-if="prop.default" class="bg-muted px-2 py-1 font-mono">{{ prop.default }}</span>

          <span v-else>-</span>
        </TableCell>

        <TableCell>
          <div class="mb-4">
            <span class="bg-muted px-2 py-1 font-mono">
              <template v-if="typeof prop.type === 'string'">
                {{ prop.type }}
              </template>

              <template v-else>
                {{ prop.type.join(" | ") }}
              </template>
            </span>
          </div>

          {{ prop.description }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
