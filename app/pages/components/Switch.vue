<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { Switch } from "@/components/switch"
import { CodeBlock, ComponentHeading } from "@app/components"

const state = ref(false)

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@codinglabsau/gooey'

const enabled = ref(false)
<\/script>

<template>
  <Switch v-model="enabled" />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Switch v-model="state" />
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
