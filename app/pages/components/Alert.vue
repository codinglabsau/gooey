<script setup lang="ts">
import { Button } from "@/components/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  useAlert
} from "@"

const { isOpen, confirm, close, secondaryButton, primaryButton, content } = useAlert()

const confirmAction = () => {
  confirm({
    content: {
      title: "Close Environment [Production]",
      description: "Are you sure you want to close this environment? This action is... irreversible!",
    },
    secondaryButton: {
      label: "Please don't!",
    },
    primaryButton: {
      label: "Dew it!",
      action: () => {
        alert("Metaphorical explosions")
        close()
      },
    },
  })
}
</script>

<template>
  <div>
    <Button @click="confirmAction"> Close Environment </Button>

    <AlertDialog :open="isOpen">
      <AlertDialogContent
        @close="close"
        @escape-key-down="close"
        @pointer-down-outside="close"
      >
        <AlertDialogHeader>
          <AlertDialogTitle>
            {{ content.title }}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {{ content.description }}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel @click="secondaryButton.action">
            {{ secondaryButton.label ?? 'Cancel' }}
          </AlertDialogCancel>

          <AlertDialogAction @click="primaryButton.action">
            {{ primaryButton.label ?? 'Confirm' }}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
</template>
