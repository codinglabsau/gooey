<script setup lang="ts">
import { ref } from "vue"
import { Flasher, useFlasher } from "@/components/flasher"
import { Button } from "@/components/button"

const { info, success, warning, error } = useFlasher()

const props = ref<any>({})
</script>

<template>
  <Flasher v-bind="props" />

  <div class="space-y-12">
    <section>
      <h2 class="text-2xl">Flasher via props</h2>

      <div class="mt-2 flex flex-col gap-x-2 md:flex-row">
        <Button variant="outline" data-cy="prop-info" @click="props.info = 'This is an info notification'">
          Info
        </Button>

        <Button variant="outline" data-cy="prop-success" @click="props.success = 'This is a success notification'">
          Success
        </Button>

        <Button variant="outline" data-cy="prop-warning" @click="props.warning = 'This is a warning notification'">
          Warning
        </Button>

        <Button
          variant="outline"
          data-cy="prop-errors"
          @click="
            () => {
              props.objectFormat = 'value'
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
          variant="outline"
          data-cy="prop-errors-key"
          @click="
            () => {
              props.objectFormat = 'key'
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
          variant="outline"
          data-cy="prop-errors-both"
          @click="
            () => {
              props.objectFormat = 'both'
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
      <h2 class="text-2xl">Flasher via helper</h2>

      <div class="mt-2 flex flex-col gap-x-2 md:flex-row">
        <Button variant="outline" data-cy="info" @click="info('This is an info notification')">Info toast</Button>

        <Button variant="outline" data-cy="success" @click="success('This is a success notification')"
        >Success
        </Button
        >

        <Button variant="outline" data-cy="warning" @click="warning('This is a warning notification')"
        >Warning
        </Button
        >

        <Button
          variant="outline"
          data-cy="errors"
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
          variant="outline"
          data-cy="errors-key"
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
          variant="outline"
          data-cy="errors-both"
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
