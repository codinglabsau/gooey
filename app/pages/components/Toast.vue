<script setup lang="ts">
import { Ghost } from "lucide-vue-next"
import { Toaster, useToast } from "@/components/toast"
import { Button } from "@/components/button"

const { toast } = useToast()

function calculateDaysUntilHalloween() {
  const today = new Date()
  const currentYear = today.getFullYear()
  const halloweenThisYear = new Date(currentYear, 9, 31) // October is month 9 (0-indexed)

  let targetDate = halloweenThisYear

  if (today > halloweenThisYear) {
    targetDate = new Date(currentYear + 1, 9, 31) // Next year's Halloween
  }

  const timeDiff = targetDate - today

  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
}
</script>

<template>
  <Toaster />

  <div class="mx-4 flex flex-col gap-x-2 md:flex-row">
    <Button
      data-cy="toast"
      @click="
        toast({
          title: 'FYI',
          description: 'You have been toasted',
        })
      "
    >
      Vanilla toast
    </Button>

    <Button
      data-cy="toast-icon"
      @click="
        toast({
          title: 'Boo!',
          description:
            calculateDaysUntilHalloween() +
            ' days until halloween ' +
            new Date().getFullYear() +
            ' 🎃',
          icon: Ghost,
          iconClasses: 'text-red-400',
        })
      "
    >
      Toast with icon
    </Button>

    <Button
      data-cy="toast-object"
      @click="
        toast({
          title: 'Objects',
          description: {
            Michael: 'That\'s what she said.',
            Dwight: 'Identity theft is not a joke, Jim!',
            Kelly: 'I have a lot of questions. Number one, how dare you?',
          },
        })
      "
    >
      Toast with object description (default)
    </Button>

    <Button
      data-cy="toast-object-key"
      @click="
        toast({
          title: 'Objects',
          description: {
            Michael: 'That\'s what she said.',
            Dwight: 'Identity theft is not a joke, Jim!',
            Kelly: 'I have a lot of questions. Number one, how dare you?',
          },
          objectFormat: 'key',
        })
      "
    >
      Toast with object description (key)
    </Button>

    <Button
      data-cy="toast-object-both"
      @click="
        toast({
          title: 'Objects',
          description: {
            Michael: 'That\'s what she said.',
            Dwight: 'Identity theft is not a joke, Jim!',
            Kelly: 'I have a lot of questions. Number one, how dare you?',
          },
          objectFormat: 'both',
        })
      "
    >
      Toast with object description (both)
    </Button>
  </div>

  <h2 class="mb-2 mt-8 text-2xl">Modifications</h2>

  <ul class="list-disc pl-4">
    <li>Support for icon and iconClasses prop</li>

    <li>Support for object descriptions (value only (default), key only, and key + value)</li>
  </ul>
</template>
