<script setup lang="ts">
import { ref } from "vue"
import { useColorMode } from "@vueuse/core"
import { MoonIcon, SunIcon, ComputerDesktopIcon } from "@heroicons/vue/24/outline"

const mode = useColorMode()

// UI
import { Toaster, useToast } from "@/components/toast"
import { Notifications, useNotification } from "./components/notifications"

const { toast } = useToast()
const { info, success, warning, error } = useNotification()

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"

// Alerts

// Badges

// Buttons

// Form

// ui setup

const notificationsConfig = ref<any>({})

// form setup
</script>

<template>
  <div class="p-2">
    <div class="flex w-full items-center justify-between">
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

          <div class="text-xl">GOOEY</div>
        </div>

        <a href="http://gooey-docs.test">Docs</a>
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoonIcon v-if="mode === 'dark'" class="size-6" />

            <SunIcon v-if="mode === 'light'" class="size-6" />

            <ComputerDesktopIcon v-if="mode === 'auto'" class="size-6" />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem @click="mode = 'dark'">
              <MoonIcon class="mr-1.5 h-4 w-4" />
              Dark mode
            </DropdownMenuItem>

            <DropdownMenuItem @click="mode = 'light'">
              <SunIcon class="mr-1.5 h-4 w-4" />
              Day mode
            </DropdownMenuItem>

            <DropdownMenuItem @click="mode = 'auto'">
              <ComputerDesktopIcon class="mr-1.5 h-4 w-4" />
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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

  <h1 class="mt-6">Toasts</h1>

  <Toaster />

  <div class="mx-4 flex flex-col gap-x-2 pt-8 md:flex-row">
    <button
      @click="
        toast({
          title: 'FYI',
          description: 'This is an info notification',
        })
      "
    >
      Vanilla toast
    </button>

    <button @click="info('This is an info notification')">Info toast</button>

    <button @click="success('This is a success notification')">Success notification</button>

    <button @click="warning('This is a warning notification')">Warning notification</button>

    <button
      @click="
        () => {
          notificationsConfig['show-error-keys'] = false
          error({
            firstname: 'firstname is required',
            surname: 'surname must be of type: that\'s what she said',
          })
        }
      "
    >
      Errors notification
    </button>
  </div>
</template>
