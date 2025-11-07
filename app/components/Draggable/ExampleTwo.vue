<script setup lang="ts">
import {
  DraggableArea,
  DraggableItem,
  useDraggable,
} from "@/components/draggable"
import { ref } from "vue"

const {
  draggedFromArea,
  draggedToArea,
  draggableItem,
  draggableIndex,
  resetDraggable,
} = useDraggable()

const jobs = ref({
  'backlog': [
    {
      id: 1,
      value: 'Item 1',
    },
    {
      id: 2,
      value: 'Item 2',
    },
  ],
  'in_progress': [
    {
      id: 3,
      value: 'Item 3',
    },
    {
      id: 4,
      value: 'Item 4',
    },
  ],
  'finished': [
    {
      id: 5,
      value: 'Item 5',
    },
    {
      id: 6,
      value: 'Item 6',
    },
  ],
})

const handleDrop = (e: DragEvent) => {
  if (!draggableItem.value || draggableIndex.value == null) return

  // Remove from the original
  jobs.value[draggedFromArea.value] = jobs.value[draggedFromArea.value].filter((m) => m.id !== draggableItem.value.id)

  jobs.value[draggedToArea.value].splice(
    draggableIndex.value,
    0,
    draggableItem.value,
  )

  resetDraggable()
}
</script>

<template>
  <div class="flex gap-4">
    <DraggableArea v-for="(items, job) in jobs" :key="job" :data="job" @drop="handleDrop" class="w-full space-y-2 rounded border-2 border-dashed p-4">
      <span>
        {{ job }}
      </span>

      <DraggableItem
        v-for="(item, idx) in items"
        :key="idx"
        :data="item"
        :index="idx"
        class="cursor-move rounded border bg-white p-2"
      >
        {{ item.value }}
      </DraggableItem>
    </DraggableArea>
  </div>
</template>
