<script lang="ts">
import { createContext } from '@/lib/createContext'

export const [injectDraggableRootContext, provideDraggableRootContext] =
    createContext('DraggableRoot')
</script>

<script setup lang="ts">
import { useDraggable } from '.'
import { defineEmits } from 'vue'

const props = defineProps<{
  class?: string
    data: any
}>()

const emit = defineEmits<{
    (e: 'drop', payload: { event: DragEvent; data: any }): void
}>()

const draggable = useDraggable()

provideDraggableRootContext(draggable)

const handleDrop = (event: DragEvent) => emit('drop', event)

const allowDrop = (event: DragEvent) => {
    event.preventDefault()
    draggable.draggedToArea.value = props.data
}

const onDragStart = () => (draggable.draggedFromArea.value = props.data)
</script>

<template>
    <div
        :class="props.class"
        @drop="handleDrop"
        @dragstart="onDragStart"
        @dragover="allowDrop">
        <slot />
    </div>
</template>
