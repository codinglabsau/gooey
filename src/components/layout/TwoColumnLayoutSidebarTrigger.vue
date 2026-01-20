<script setup lang="ts">
import { Menu } from "lucide-vue-next"
</script>

<template>
  <button type="button" class="-m-2.5 p-2.5 lg:hidden">
    <span class="sr-only">Open sidebar</span>

    <Menu class="h-6 w-6" aria-hidden="true" />
  </button>
</template>
