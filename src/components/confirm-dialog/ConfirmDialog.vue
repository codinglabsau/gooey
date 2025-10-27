<script setup lang="ts">
import { useConfirmDialog } from "."
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/alert-dialog"

const { isOpen, close, cancelButton, actionButton, title, description, variant } =
  useConfirmDialog()
</script>

<template>
  <AlertDialog :open="isOpen">
    <AlertDialogContent @escape-key-down="close" @pointer-down-outside="close">
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
          {{ cancelButton.label ?? "Cancel" }}
        </AlertDialogCancel>

        <AlertDialogAction :variant @click="actionButton.handler">
          {{ actionButton.label ?? "Confirm" }}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
