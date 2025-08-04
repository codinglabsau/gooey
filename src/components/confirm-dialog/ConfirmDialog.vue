<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  useConfirmDialog
} from "@"

const { isOpen, close, cancelButton, actionButton, title, description } = useConfirmDialog()
</script>

<template>
  <AlertDialog :open="isOpen">
    <AlertDialogContent
      @close="close"
      @escape-key-down="close"
      @pointer-down-outside="close"
    >
      <AlertDialogHeader>
        <AlertDialogTitle>
          {{ title }}
        </AlertDialogTitle>

        <AlertDialogDescription>
          {{ description }}
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel @click="cancelButton.handler">
          {{ cancelButton.label ?? 'Cancel' }}
        </AlertDialogCancel>

        <AlertDialogAction @click="actionButton.handler">
          {{ actionButton.label ?? 'Confirm' }}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
