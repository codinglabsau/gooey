<script setup lang="ts">
import { ref } from "vue"
import { CogIcon, CursorArrowRaysIcon, EnvelopeOpenIcon } from "@heroicons/vue/24/solid"
import { useForm, Link } from "@inertiajs/vue3"
import { useColorMode } from "@vueuse/core"
import { MoonIcon, SunIcon, ComputerDesktopIcon } from "@heroicons/vue/24/outline"

const mode = useColorMode()

// UI
import Notifications from "./components/Notifications.vue"

// Alerts

// Badges

// Buttons

// Form

// ui setup

const notificationsConfig = ref<any>({})

// form setup
</script>

<template>
  <div class="bg-gradient-to-b from-[#222441] via-[#222441] to-[#0a0b21] p-2">
    <div class="flex w-full items-center justify-between">
      <div class="flex space-x-2">
        <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

        <div class="text-xl text-white">GOOEY</div>
      </div>

      <div>
        <!--        <Dropdown>-->
        <!--          <template #text>-->
        <!--            <MoonIcon v-if="mode === 'dark'" class="h-4 w-4" />-->

        <!--            <SunIcon v-if="mode === 'light'" class="h-4 w-4" />-->

        <!--            <ComputerDesktopIcon v-if="mode === 'auto'" class="h-4 w-4" />-->
        <!--          </template>-->

        <!--          <DropdownItem @click="mode = 'dark'">-->
        <!--            <MoonIcon class="h-4 w-4 text-white" />-->
        <!--            Dark mode-->
        <!--          </DropdownItem>-->

        <!--          <DropdownItem @click="mode = 'light'">-->
        <!--            <SunIcon class="h-4 w-4 text-white" />-->
        <!--            Day mode-->
        <!--          </DropdownItem>-->

        <!--          <DropdownItem @click="mode = 'auto'">-->
        <!--            <ComputerDesktopIcon class="h-4 w-4 text-white" />-->
        <!--            System-->
        <!--          </DropdownItem>-->
        <!--        </Dropdown>-->
      </div>
    </div>
  </div>

  <Notifications v-bind="notificationsConfig" />

  <h1 class="mt-6">Notifications</h1>

  <div class="mx-4 flex flex-col gap-x-2 pt-8 md:flex-row">
    <button
      @click="
        notificationsConfig.info = 'This is an info notification (' + new Date().getSeconds() + 's)'
      "
    >
      Info notification
    </button>

    <button
      @click="
        notificationsConfig.success =
          'This is a success notification (' + new Date().getSeconds() + 's)'
      "
    >
      Success notification
    </button>

    <button
      @click="
        notificationsConfig.warning =
          'This is a warning notification (' + new Date().getSeconds() + 's)'
      "
    >
      Warning notification
    </button>

    <button
      @click="
        () => {
          notificationsConfig['show-error-keys'] = false
          notificationsConfig.errors = {
            firstname: 'firstname is required',
            surname: 'surname must be of type: that\'s what she said',
          }
        }
      "
    >
      Errors notification
    </button>
  </div>
</template>
