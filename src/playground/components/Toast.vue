<script setup lang="ts">
import { Ghost } from "lucide-vue-next"
import { Toaster, useToast } from "@/components/toast"

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
  <h1 class="mt-6">Toasts</h1>

  <Toaster />

  <div class="mx-4 flex flex-col gap-x-2 pt-8 md:flex-row">
    <button
      @click="
        toast({
          title: 'FYI',
          description: 'You have been toasted',
        })
      "
    >
      Vanilla toast
    </button>

    <button
      @click="
        toast({
          title: 'Boo!',
          description: calculateDaysUntilHalloween() + ' days until halloween ' + new Date().getFullYear() + ' 🎃',
          icon: Ghost,
          iconClasses: 'text-red-400',
        })
      "
    >
      Toast with icon
    </button>

    <button
      @click="
        toast({
          title: 'FYI',
          messages: [
            'That\'s what she said.',
            'Identity theft is not a joke, Jim!',
            'I have a lot of questions. Number one, how dare you?'
          ],
        })
      "
    >
      Toast with messages
    </button>
  </div>
</template>
