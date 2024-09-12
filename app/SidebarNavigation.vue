<script setup lang="ts">
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
          <ul role="list" class="-mx-2 space-y-1">
            <li v-for="route in group.children" :key="route.name">
              <RouterLink
                :to="route.path"
                class="group flex gap-x-3 rounded-md px-2 text-sm font-light leading-5 hover:underline"
                @click="$emit('navigated')"
              >
                {{ route.name }}
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
