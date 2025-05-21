<script setup lang="ts">
import { ref } from "vue"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/slider"
import { Input } from "@/components/input"

const modelValue = ref([50])
</script>

<template>
  <div class="flex items-center space-x-2">
    <Slider v-model="modelValue" :max="100" :step="1" :class="cn('max-w-md', $attrs.class ?? '')" />

    <Input v-model="modelValue" class="w-16" disabled />
  </div>
</template>
