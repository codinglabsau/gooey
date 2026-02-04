<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Button, ConfirmDialog, useConfirmDialog } from "@"
import { CodeBlock, ComponentHeading } from "@app/components"

const { confirmDialog, close } = useConfirmDialog()

const baseDialog = () => {
  confirmDialog({
    title: "Default Confirm",
    description: "Only requires; title, description and action callback.",
    action: () => {
      alert("You have confirmed!")
      close()
    },
  })
}

const customLabels = () => {
  confirmDialog({
    title: "Custom Labels",
    description:
      "As well as a handler for the action, you can provide a string to replace the action.",
    cancelAction: "Custom Cancel Action Label",
    action: {
      label: "Custom Action Label",
      handler: () => {
        alert("You have confirmed!")
        close()
      },
    },
  })
}

const customDialog = () => {
  confirmDialog({
    title: "Custom Dialog",
    description:
      "You can also provide a full object with label and handler to fully customise the confirm dialog.",
    variant: "destructive",
    cancelAction: {
      label: "Cancel Me!",
      handler: () => {
        alert("Wow a custom cancel!")
        close()
      },
    },
    action: {
      label: "Confirm Me!",
      handler: () => {
        alert("Wow a custom action!")
        close()
      },
    },
  })
}

const code = `<script setup lang="ts">
import {
  Button,
  ConfirmDialog,
  useConfirmDialog,
} from '@codinglabsau/gooey'

const { confirmDialog, close } = useConfirmDialog()

const showDialog = () => {
  confirmDialog({
    title: 'Are you sure?',
    description: 'This action cannot be undone.',
    action: () => {
      // handle confirm
      close()
    },
  })
}
<\/script>

<template>
  <Button @click="showDialog">Confirm</Button>
  <ConfirmDialog />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 flex gap-2">
      <Button data-cy="base" @click="baseDialog"> Base Confirm </Button>

      <Button data-cy="custom-labels" @click="customLabels"> Custom Labels </Button>

      <Button data-cy="custom-handlers" @click="customDialog"> Custom Handlers </Button>

      <ConfirmDialog />
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
