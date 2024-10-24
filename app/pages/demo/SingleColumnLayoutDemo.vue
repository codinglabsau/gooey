<script setup lang="ts">
import { ref, watch } from "vue"
import { useColorMode } from "@vueuse/core"
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline"

import {
  SingleColumnLayout,
  SingleColumnLayoutMain,
} from "@/components/layout"
import { Header } from "@/components/header"
import { Switch } from "@/components/switch"

const mode = useColorMode()
const colourMode = ref(mode.value === "dark")
watch(colourMode, (value) => (mode.value = value ? "dark" : "light"))
</script>

<template>
  <SingleColumnLayout class="absolute inset-0 z-50">
    <Header>
      <RouterLink to="/" class="block">
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

          <div class="text-xl">Brand</div>
        </div>
      </RouterLink>

      <div class="flex w-full justify-end">
        <div class="group flex cursor-pointer items-center space-x-2">
          <SunIcon class="size-5 text-primary" @click="colourMode = false" />

          <Switch v-model:checked="colourMode" />

          <MoonIcon class="size-5 text-primary" @click="colourMode = true" />
        </div>
      </div>
    </Header>

    <SingleColumnLayoutMain>
        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />

        main<br />
    </SingleColumnLayoutMain>
  </SingleColumnLayout>
</template>
