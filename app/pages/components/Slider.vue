<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/slider"
import { Input } from "@/components/input"
import { CodeBlock, ComponentHeading } from "@app/components"

const modelValue = ref([50])

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@codinglabsau/gooey'

const value = ref([50])
<\/script>

<template>
  <Slider v-model="value" :max="100" :step="1" class="max-w-md" />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 flex items-center space-x-2">
      <Slider
        v-model="modelValue"
        :max="100"
        :step="1"
        :class="cn('max-w-md', $attrs.class ?? '')"
      />

      <Input v-model="modelValue" class="w-16" disabled />
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
