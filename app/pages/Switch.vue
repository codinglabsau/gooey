<script setup lang="ts">
import { ref } from "vue"
import { Switch } from "@/components/switch"

const state = ref(false)
</script>

<template>
  <section>
    <Switch v-model="state" />
  </section>
</template>
