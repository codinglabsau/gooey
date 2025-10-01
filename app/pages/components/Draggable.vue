<script setup lang="ts">
import ExampleOne from "@app/components/Draggable/ExampleOne.vue"
import ExampleTwo from "@app/components/Draggable/ExampleTwo.vue"
</script>

<template>
  <div class="space-y-4">
    <div>
      <h2>
        Example One
      </h2>

      <h3>
        Single Draggable Area
      </h3>

      <ExampleOne />
    </div>

    <div>
      <h2>
        Example Two
      </h2>

      <h3>
        Multiple Draggable Areas
      </h3>

      <ExampleTwo />
    </div>
  </div>
</template>
