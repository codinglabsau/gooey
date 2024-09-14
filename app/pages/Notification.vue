<script setup lang="ts">
import { ref } from "vue"
import { Notification, useNotification } from "@/components/notification"
import { Button } from "@/components/button"

const { info, success, warning, error } = useNotification()

const props = ref<any>({})
</script>

<template>
  <Notification v-bind="props" />

  <h2 class="text-3xl">Notifications</h2>

  <div class="mt-4 space-y-8">
    <section>
      <h2 class="text-2xl">Notification via props</h2>

      <div class="mt-2 flex flex-col gap-x-2 md:flex-row">
        <Button @click="props.info = 'This is an info notification'">
          Info
        </Button>

        <Button @click="props.success = 'This is a success notification'">Success</Button>

        <Button @click="props.warning = 'This is a warning notification'">Warning</Button>

        <Button
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
        </Button>

        <Button
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
        </Button>

        <Button
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
        </Button>
      </div>
    </section>

    <section>
      <h2 class="text-2xl">Notification via helper</h2>

      <div class="mt-2 flex flex-col gap-x-2 md:flex-row">
        <Button @click="info('This is an info notification')">Info toast</Button>

        <Button @click="success('This is a success notification')">Success</Button>

        <Button @click="warning('This is a warning notification')">Warning</Button>

        <Button
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
        </Button>

        <Button
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
        </Button>

        <Button
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
        </Button>
      </div>
    </section>
  </div>
</template>
