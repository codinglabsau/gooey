<script setup lang="ts">
import { ref } from "vue"
import { Notification, useNotification } from "@/components/notification"

const { info, success, warning, error } = useNotification()

const props = ref<any>({})
</script>

<template>
  <Notification v-bind="props" />

  <h1 class="mt-6">Notification</h1>

  <div class="mx-4 flex flex-col gap-x-2 pt-8 md:flex-row">
    <button @click="props.info = 'This is an info notification'">Info</button>

    <button @click="props.success = 'This is a success notification'">Success</button>

    <button @click="props.warning = 'This is a warning notification'">Warning</button>

    <button
      @click="
        () => {
          props.errorFormat = 'value'
          props.errors = {
            firstname: 'firstname is required',
            surname: 'surname must be of type: that\'s what she said',
          }
        }
      "
    >
      Errors (default)
    </button>

    <button
      @click="
        () => {
          props.errorFormat = 'key'
          props.errors = {
            firstname: 'firstname is required',
            surname: 'surname must be of type: that\'s what she said',
          }
        }
      "
    >
      Errors (keys only)
    </button>

    <button
      @click="
        () => {
          props.errorFormat = 'both'
          props.errors = {
            firstname: 'firstname is required',
            surname: 'surname must be of type: that\'s what she said',
          }
        }
      "
    >
      Errors (keys and values)
    </button>
  </div>

  <h1 class="mt-6">Helpers</h1>

  <div class="mx-4 flex flex-col gap-x-2 pt-8 md:flex-row">
    <button @click="info('This is an info notification')">Info toast</button>

    <button @click="success('This is a success notification')">Success</button>

    <button @click="warning('This is a warning notification')">Warning</button>

    <button
      @click="
        () => {
          error({
            firstname: 'firstname is required',
            surname: 'surname must be of type: that\'s what she said',
          })
        }
      "
    >
      Errors (default)
    </button>

    <button
      @click="
        () => {
          error(
            {
              firstname: 'firstname is required',
              surname: 'surname must be of type: that\'s what she said',
            },
            'key'
          )
        }
      "
    >
      Errors (keys only)
    </button>

    <button
      @click="
        () => {
          error(
            {
              firstname: 'firstname is required',
              surname: 'surname must be of type: that\'s what she said',
            },
            'both'
          )
        }
      "
    >
      Errors (keys and values)
    </button>
  </div>
</template>
