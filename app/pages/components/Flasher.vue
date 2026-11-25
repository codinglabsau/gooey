<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { nextTick, ref } from "vue"
import { useRoute } from "vue-router"
import { Hammer } from "lucide-vue-next"
import { useColorMode } from "@vueuse/core"
import { Flasher, useFlasher, type FlashAction, type FlashToast } from "@/components/flasher"
import { Button } from "@/components/button"
import { CodeBlock, ComponentHeading, ComponentProps, ComposableSection } from "@app/components"
import { type ComponentProp, type ComposableMethod } from "@app/types/globals"

const { info, success, warning, error, flash, track } = useFlasher()

const mode = useColorMode()

// Seed notification props from the URL query so a Flasher can mount with a
// value already present — the server-driven (e.g. Inertia flash) case, and the
// path exercised by the mount-time e2e tests.
const route = useRoute()

const flasherProps = ref<{
  theme: string
  info?: string
  success?: string
  warning?: string
  errors?: Record<string, string>
  objectFormat?: "key" | "value" | "both"
  flashId?: string | number
  toasts?: FlashToast[]
  titles?: Record<string, string>
}>({
  theme: mode.value === "auto" ? "system" : mode.value,
  info: route.query.info as string | undefined,
  success: route.query.success as string | undefined,
  warning: route.query.warning as string | undefined,
  errors: route.query.errors ? { firstname: "firstname is required" } : undefined,
})

// Server-driven demos: each "response" carries a fresh flash id, as a backend would.
let responseCount = 0

function flashWithId(message: string) {
  flasherProps.value.success = message
  flasherProps.value.flashId = ++responseCount
}

// Alternates between two ids, so the third click replays an id that was already shown.
function replayFlashId() {
  flasherProps.value.success = "Replayable flash"
  flasherProps.value.flashId = flasherProps.value.flashId === "flash-a" ? "flash-b" : "flash-a"
}

const lastAction = ref<string>()

function onAction(action: FlashAction) {
  lastAction.value = `${action.method ?? "get"} ${action.url}`
}

function flashToastWithAction() {
  flasherProps.value.toasts = [
    {
      type: "success",
      title: "Item deleted",
      description: "The hammer was removed from your cart.",
      action: { label: "Undo", url: "/cart/restore", method: "post" },
    },
  ]
}

// A new array with the same toast id each time: only the first one shows.
function replayToastId() {
  flasherProps.value.toasts = [{ id: "toast-1", type: "info", description: "Shown once per id" }]
}

async function customTitles() {
  flasherProps.value.titles = { success: "Nice one" }
  await nextTick()
  success("Titles are set once on the Flasher")
}

// Simulates an Inertia visit by calling the callbacks track() returns.
function simulateVisit(outcome: "success" | "error") {
  const visit = track({
    loading: "Saving changes…",
    success: outcome === "success" ? "Changes saved" : undefined,
  })

  visit.onStart()

  setTimeout(() => {
    if (outcome === "success") {
      visit.onSuccess()
    } else {
      visit.onError({ name: "name is required" })
    }

    visit.onFinish()
  }, 800)
}

const composableMethods: ComposableMethod[] = [
  {
    name: "info",
    signature: "(message: string, data?: FlasherOptions)",
    description: "Displays an info notification with the given message.",
  },
  {
    name: "success",
    signature: "(message: string, data?: FlasherOptions)",
    description: "Displays a success notification with the given message.",
  },
  {
    name: "warning",
    signature: "(message: string, data?: FlasherOptions)",
    description: "Displays a warning notification with the given message.",
  },
  {
    name: "error",
    signature: "(errors: ErrorBag | string, objectFormat?: ObjectFormat, data?: FlasherOptions)",
    description: "Displays an error notification from a validation error bag or a plain message.",
  },
  {
    name: "flash",
    signature: "(heading: string, options?: ExternalToast)",
    description: "Displays a generic notification with a custom heading.",
  },
  {
    name: "track",
    signature: "(messages: TrackMessages, visitOptions?: object)",
    description:
      "Returns the visit options with callbacks that show a loading toast, then a success or error toast. Without a success message the loading toast is dismissed, so the server's flash shows instead.",
  },
]

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
    name: "flashId",
    type: "string | number",
    description:
      "Identifies the flash behind info/success/warning. When set, they fire once per new id rather than per changed value, so a repeated message still shows and a seen id never replays. Errors are unaffected.",
  },
  {
    name: "toasts",
    type: "FlashToast[]",
    description:
      "Server-shaped toasts: { id?, type?, title?, description?, duration?, action?: { label, url, method? } }. Each new array fires; a toast with an id shows once per id.",
  },
  {
    name: "titles",
    type: "Partial<FlasherTitles>",
    description:
      "Overrides the default info/success/warning/error titles app-wide (pass translated strings).",
  },
  {
    name: "@action",
    type: "(action: FlashAction, toast: FlashToast) => void",
    description:
      "Handles a toast action, e.g. with router.visit(). Without a handler, GET actions navigate and other methods are ignored.",
  },
  {
    name: "theme",
    type: "string",
    default: "light",
    description: "'light', 'dark' or 'system'",
  },
]

const propsCode = `<script setup lang="ts">
import { ref } from 'vue'
import { Flasher } from '@codinglabsau/gooey'

const flasherProps = ref({ theme: 'system' })
<\/script>

<template>
  <Flasher v-bind="flasherProps" />

  <button @click="flasherProps.info = 'Info!'">Info</button>
  <button @click="flasherProps.success = 'Success!'">Success</button>
</template>`

const serverCode = `<script setup lang="ts">
import { router } from '@inertiajs/vue3'
import { Flasher } from '@codinglabsau/gooey'
<\/script>

<template>
  <!-- Share \`toasts\` and a per-request \`flash_id\` from your Inertia middleware -->
  <Flasher
    :success="$page.props.success"
    :flash-id="$page.props.flash_id"
    :toasts="$page.props.toasts"
    :titles="{ success: __('Success') }"
    @action="(action) => router.visit(action.url, { method: action.method })"
  />
</template>`

const trackCode = `<script setup lang="ts">
import { router } from '@inertiajs/vue3'
import { useFlasher } from '@codinglabsau/gooey'

const { track } = useFlasher()

function save() {
  router.post('/settings', form, track(
    { loading: 'Saving…', success: 'Settings saved' },
    { preserveScroll: true },
  ))
}
<\/script>`

const composableCode = `<script setup lang="ts">
import { Flasher, useFlasher } from '@codinglabsau/gooey'

const { info, success, warning, error } = useFlasher()
<\/script>

<template>
  <Flasher />

  <button @click="info('Info notification')">Info</button>
  <button @click="success('Success!')">Success</button>
  <button @click="error({ email: 'required' })">Errors</button>
</template>`
</script>

<template>
  <Flasher v-bind="flasherProps" @action="onAction" />

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

      <CodeBlock class="mt-4" lang="vue" :code="propsCode" />
    </section>

    <section>
      <ComponentHeading>Via Composable</ComponentHeading>

      <p class="mb-4">
        Use the <code>useFlasher()</code> composable for programmatic notifications.
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

        <Button variant="outline" data-cy="error-string" @click="error('Payment failed')">
          Error (message)
        </Button>

        <Button
          variant="outline"
          data-cy="title-option"
          @click="success('Your profile is live', { title: 'Profile saved' })"
        >
          Custom title
        </Button>

        <Button
          variant="outline"
          data-cy="flash-custom"
          @click="
            () => {
              flash('Custom Flash', {
                icon: Hammer,
                classes: {
                  icon: 'text-muted',
                },
                description: 'This flash uses more of the available sonner api',
                position: 'bottom-center',
                action: {
                  label: 'Confirm',
                  onClick: () => console.log('Confirmed!'),
                },
              })
            }
          "
        >
          Flash (custom)
        </Button>
      </div>

      <CodeBlock class="mt-4" lang="vue" :code="composableCode" />
    </section>

    <section>
      <ComponentHeading>Server-Driven Toasts</ComponentHeading>

      <p class="mb-4">
        Pair messages with a <code>flashId</code>
        so the same message can show twice, send
        <code>toasts</code>

        with actions, and set translated <code>titles</code> once.
      </p>

      <div class="flex flex-wrap gap-2">
        <Button variant="outline" data-cy="flash-id-repeat" @click="flashWithId('Stock updated')">
          Same message, new flash id
        </Button>

        <Button variant="outline" data-cy="flash-id-replay" @click="replayFlashId">
          Replay a seen flash id
        </Button>

        <Button variant="outline" data-cy="toast-action" @click="flashToastWithAction">
          Toast with action
        </Button>

        <Button variant="outline" data-cy="toast-id-replay" @click="replayToastId">
          Toast with id
        </Button>

        <Button variant="outline" data-cy="custom-titles" @click="customTitles">
          Custom titles
        </Button>
      </div>

      <p v-if="lastAction" class="mt-2 text-sm text-muted-foreground" data-cy="last-action">
        Action: {{ lastAction }}
      </p>

      <CodeBlock class="mt-4" lang="vue" :code="serverCode" />
    </section>

    <section>
      <ComponentHeading>Tracking a Visit</ComponentHeading>

      <p class="mb-4">
        <code>track()</code> wraps Inertia visit options with a loading toast that becomes a success
        or error toast.
      </p>

      <div class="flex flex-wrap gap-2">
        <Button variant="outline" data-cy="track-success" @click="simulateVisit('success')">
          Visit succeeds
        </Button>

        <Button variant="outline" data-cy="track-error" @click="simulateVisit('error')">
          Visit fails
        </Button>
      </div>

      <CodeBlock class="mt-4" lang="vue" :code="trackCode" />
    </section>

    <ComposableSection :methods="composableMethods">
      <p class="mb-4">
        The entire
        <a
          href="https://github.com/xiaoluoboding/vue-sonner/blob/4f6e3038981d7c748048913f259470fefa204b7a/src/packages/types.ts#L71"
          target="_blank"
          class="underline"
        >
          Sonner API options
        </a>
        are available through the
        <span class="bg-muted px-1 py-0.5 font-mono">data</span> argument.
      </p>
    </ComposableSection>

    <ComponentProps :props="componentProps" :meta="$route.meta" />
  </div>
</template>
