<script setup lang="ts">
import { Button, ConfirmDialog, useConfirmDialog } from "@"

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
    cancelAction: {
      label: "Cancel Me!",
      variant: "ghost",
      handler: () => {
        alert("Wow a custom cancel!")
        close()
      },
    },
    action: {
      label: "Confirm Me!",
      variant: "destructive",
      handler: () => {
        alert("Wow a custom action!")
        close()
      },
    },
  })
}
</script>

<template>
  <div class="flex gap-2">
    <Button data-cy="base" @click="baseDialog"> Base Confirm </Button>

    <Button data-cy="custom-labels" @click="customLabels"> Custom Labels </Button>

    <Button data-cy="custom-handlers" @click="customDialog"> Custom Handlers </Button>

    <ConfirmDialog />
  </div>
</template>
