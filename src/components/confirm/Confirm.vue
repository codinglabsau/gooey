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
} from '@/components/alert-dialog'
import { useConfirm } from './use-confirm'

const { isOpen, close, cancel, finish, confirmContext} = useConfirm()
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
          {{ confirmContext.content.title }}
        </AlertDialogTitle>

        <AlertDialogDescription>
          {{ confirmContext.content.description }}
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel @click="cancel">
          {{ confirmContext.actionText?.cancel ?? 'Cancel' }}
        </AlertDialogCancel>

        <AlertDialogAction @click="finish">
          {{ confirmContext.actionText?.finish ?? 'Finish' }}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
