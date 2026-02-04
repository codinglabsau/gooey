<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { computed } from "vue"
import { useColorMode } from "@vueuse/core"
import { Toaster as Sonner } from "@/components/sonner"
import { Button } from "@/components/button"
import { toast } from "vue-sonner"
import { CodeBlock, ComponentHeading } from "@app/components"

const mode = useColorMode()
const theme = computed(() => (mode.value === "auto" ? "system" : mode.value))

const code = `<script setup lang="ts">
import { Toaster as Sonner } from '@codinglabsau/gooey'
import { Button } from '@codinglabsau/gooey'
import { toast } from 'vue-sonner'
<\/script>

<template>
  <Button @click="toast('Event has been created')">Default</Button>
  <Button @click="toast.success('Success!')">Success</Button>
  <Button @click="toast.error('Something went wrong')">Error</Button>
  <Sonner />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 space-y-4">
      <div class="flex flex-wrap gap-2">
        <Button @click="toast('Event has been created')"> Default </Button>

        <Button variant="outline" @click="toast.success('Event created successfully')">
          Success
        </Button>

        <Button variant="outline" @click="toast.error('Something went wrong')"> Error </Button>

        <Button variant="outline" @click="toast.warning('Please review your input')">
          Warning
        </Button>

        <Button variant="outline" @click="toast.info('For your information')"> Info </Button>
      </div>

      <Sonner :theme="theme" />
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
