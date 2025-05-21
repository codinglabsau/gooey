<script setup lang="ts">
import { Ghost } from "lucide-vue-next"
import { Toaster, useToast } from "@/components/toast"
import { Button } from "@/components/button"
import { ComponentProps, ComponentEvents, ComponentHeading } from "@app/components"
import { type ComponentProp, type ComponentEvent } from "@app/types/globals"

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

const componentProps: ComponentProp[] = [
  {
    name: "icon",
    type: ["string", "component"],
    description: "Icon component or URL to display in the toast",
  },
  {
    name: "iconClasses",
    type: "string",
    description: "CSS classes to apply to the icon",
  },
  {
    name: "title",
    type: "string",
    description: "Title text of the toast",
  },
  {
    name: "description",
    type: ["string", "object"],
    description: "Description text or object to display in the toast",
  },
  {
    name: "objectFormat",
    default: "value",
    type: "string",
    description: 'Format for object descriptions: "value", "key", or "both"',
  },
]

const componentEvents: ComponentEvent[] = [
  {
    name: "click",
    description:
      "Forwarded click events on individual toasts, with the toast object as the payload",
    payload: "ToasterToast",
  },
]

const onClickEvent = (data: any) => {
  toast({
    title: "You clicked on a toast",
    description: `Toast ID: ${data.id}`,
  })
}
</script>

<template>
  <Toaster @click="onClickEvent" />

  <ul class="space-y-4">
    <li>
      <Button
        variant="outline"
        data-cy="toast"
        @click="
          toast({
            title: 'FYI',
            description: 'You have been toasted (click me)',
          })
        "
      >
        Vanilla toast
      </Button>
    </li>

    <li>
      <Button
        variant="outline"
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
    </li>

    <li>
      <Button
        variant="outline"
        data-cy="toast-image"
        @click="
          toast({
            title: 'Think fast!',
            description:
              'Disco skeleton has challenged you to a dance-off, and you better bring your A-game.',
            icon: 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=120&h=750&dpr=2',
          })
        "
      >
        Toast with image
      </Button>
    </li>

    <li>
      <Button
        variant="outline"
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
    </li>

    <li>
      <Button
        variant="outline"
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
    </li>

    <li>
      <Button
        variant="outline"
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
    </li>
  </ul>

  <h2 class="mb-3 mt-12 text-2xl">Description</h2>

  <p>This component modifies the underlying Toaster component, adding support for:</p>

  <ul class="list-disc pl-4">
    <li>Icon and iconClasses prop</li>

    <li>Object descriptions (value only (default), key only, and key + value)</li>

    <li>Click event with a toast is clicked</li>
  </ul>

  <ComponentProps :props="componentProps" :meta="$route.meta" />

  <ComponentEvents :events="componentEvents" />
</template>
