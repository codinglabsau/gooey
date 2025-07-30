<script setup lang="ts">
import { Button } from "@/components/button"
import { Confirm, useConfirm } from "@/components/confirm"

const { show, close } = useConfirm()

const confirmAction = () => {
  show({
    content: {
      title: "Close Environment [Production]",
      description: "Are you sure you want to close this environment? This action is... irreversible!",
    },
    actionText: {
      cancel: "Please don't!",
      finish: "Dew it!",
    },
    finish: () => {
      alert("Metaphorical explosions")
      close()
    },
  })
}
</script>

<template>
  <div>
    <Button @click="confirmAction"> Close Environment </Button>

    <Confirm />
  </div>
</template>
