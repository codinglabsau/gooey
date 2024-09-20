<script setup lang="ts">
import { GooeyLink } from "@/components/gooey-link"

defineProps<{
  items: {
    type: Array
    required: true
  }
}>()

defineEmits<{
  navigated: void
}>()
</script>

<template>
  <nav class="space-y-4 p-4 px-6">
    <div v-for="group in items" :key="group.name">
      <h3 class="text-md font-bold leading-6">{{ group.name }}</h3>

      <ul role="list" class="mt-2 flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-2">
            <li v-for="route in group.children" :key="route.name">
              <GooeyLink
                :to="route.path"
                class="group flex gap-x-3 rounded-md px-2 text-sm font-light leading-5 hover:underline"
                @click="$emit('navigated')"
              >
                {{ route.name }}
              </GooeyLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
