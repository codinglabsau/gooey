<script setup lang="ts">
import { computed, ref } from "vue"
import { useColorMode } from "@vueuse/core"
import { Flasher, useFlasher } from "@/components/flasher"
import { Button } from "@/components/button"
import { ComponentHeading, ComponentProps } from "@app/components"
import { type ComponentProp } from "@app/types/globals"

const { info, success, warning, error } = useFlasher()

const mode = useColorMode()

const flasherProps = ref({
  theme: mode.value === "auto" ? "system" : mode.value,
})

const componentProps: ComponentProp[] = [
  {
    name: "info",
    type: "string",
    description: "Info message to display",
  },
  {
    name: "success",
    type: "string",
    description: "Success message to display",
  },
  {
    name: "warning",
    type: "string",
    description: "Warning message to display",
  },
  {
    name: "errors",
    type: "ErrorBag",
    description: "Object containing error messages (Record<string, string>)",
  },
  {
    name: "objectFormat",
    type: "string",
    default: "value",
    description: 'How to format error objects: "value" (default), "key", or "both"',
  },
  {
    name: "theme",
    type: "string",
    default: "light",
    description: "'light', 'dark' or 'system'",
  },
]
</script>

<template>
  <Flasher v-bind="flasherProps" />

  <div class="space-y-8">
    <section>
      <ComponentHeading>Description</ComponentHeading>

      <p>
        Flasher is a standalone notification component built on top of
        <strong>vue-sonner</strong>. It provides a simple API for displaying info, success, warning,
        and error notifications without modifying the underlying Sonner or Toast components.
      </p>

      <p class="mt-2">Use Flasher when you need:</p>

      <ul class="mt-2 list-disc pl-6">
        <li>Pre-styled info/success/warning/error notification types</li>

        <li>Error bag support for form validation errors</li>

        <li>Both prop-based and composable-based APIs</li>
      </ul>
    </section>

    <section>
      <ComponentHeading>Via Props</ComponentHeading>

      <p class="mb-4">
        Pass notification props directly to the Flasher component. Useful for server-driven
        notifications (e.g., Inertia flash messages).
      </p>

      <div class="flex flex-wrap gap-2">
        <Button
          variant="outline"
          data-cy="prop-info"
          @click="flasherProps.info = 'This is an info notification'"
        >
          Info
        </Button>

        <Button
          variant="outline"
          data-cy="prop-success"
          @click="flasherProps.success = 'This is a success notification'"
        >
          Success
        </Button>

        <Button
          variant="outline"
          data-cy="prop-warning"
          @click="flasherProps.warning = 'This is a warning notification'"
        >
          Warning
        </Button>

        <Button
          variant="outline"
          data-cy="prop-errors"
          @click="
            () => {
              flasherProps.objectFormat = 'value'
              flasherProps.errors = {
                firstname: 'firstname is required',
                surname: 'surname is required',
              }
            }
          "
        >
          Errors
        </Button>

        <Button
          variant="outline"
          data-cy="prop-errors-key"
          @click="
            () => {
              flasherProps.objectFormat = 'key'
              flasherProps.errors = {
                firstname: 'firstname is required',
                surname: 'surname is required',
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
              flasherProps.objectFormat = 'both'
              flasherProps.errors = {
                firstname: 'firstname is required',
                surname: 'surname is required',
              }
            }
          "
        >
          Errors (keys + values)
        </Button>
      </div>
    </section>

    <section>
      <ComponentHeading>Via Composable</ComponentHeading>

      <p class="mb-4">
        Use the <code>useFlasher()</code>
        composable for programmatic notifications. The entire
        <a href="https://vue-sonner.vercel.app/" target="_blank" class="underline">
          Sonner API options
        </a>
        are available through the second argument.
      </p>

      <div class="flex flex-wrap gap-2">
        <Button variant="outline" data-cy="info" @click="info('This is an info notification')">
          Info
        </Button>

        <Button
          variant="outline"
          data-cy="success"
          @click="success('This is a success notification')"
        >
          Success
        </Button>

        <Button
          variant="outline"
          data-cy="warning"
          @click="warning('This is a warning notification')"
        >
          Warning
        </Button>

        <Button
          variant="outline"
          data-cy="errors"
          @click="
            () => {
              error({
                firstname: 'firstname is required',
                surname: 'surname is required',
              })
            }
          "
        >
          Errors
        </Button>

        <Button
          variant="outline"
          data-cy="errors-key"
          @click="
            () => {
              error(
                {
                  firstname: 'firstname is required',
                  surname: 'surname is required',
                },
                'key',
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
                  surname: 'surname is required',
                },
                'both',
              )
            }
          "
        >
          Errors (keys + values)
        </Button>
      </div>
    </section>

    <ComponentProps :props="componentProps" :meta="$route.meta" />
  </div>
</template>
