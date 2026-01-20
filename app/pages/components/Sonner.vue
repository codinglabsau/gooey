<script setup lang="ts">
import { computed } from "vue"
import { useColorMode } from "@vueuse/core"
import { Toaster as Sonner } from "@/components/sonner"
import { Button } from "@/components/button"
import { toast } from "vue-sonner"

const mode = useColorMode()
const theme = computed(() => (mode.value === "auto" ? "system" : mode.value))
</script>

<template>
  <div class="space-y-4">
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
</template>
