<script setup lang="ts">
import { Switch } from "@"
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline"
import { Header } from "@/components/header"
</script>

<template>
  <div class="space-y-12">
    <div class="relative">
      <Header>
        <RouterLink to="#" class="hidden lg:block">
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
    </div>
  </div>
</template>
