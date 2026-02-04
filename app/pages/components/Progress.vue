<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref, watchEffect } from "vue"
import { Progress } from "@/components/progress"
import { CodeBlock, ComponentHeading } from "@app/components"

const progress = ref(13)

watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progress.value = 66), 500)
  cleanupFn(() => clearTimeout(timer))
})

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { Progress } from '@codinglabsau/gooey'

const progress = ref(66)
<\/script>

<template>
  <Progress v-model="progress" class="w-3/5" />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Progress v-model="progress" class="w-3/5" data-cy="progress" />
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
