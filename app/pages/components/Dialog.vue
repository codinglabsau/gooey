<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { toast } from "vue-sonner"
import { Button } from "@/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog"
import { Toaster as Sonner } from "@/components/sonner"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { CodeBlock, ComponentHeading } from "@app/components"

const handleClose = () => {
  toast.info(
    "When defining the state of a Dialog (via the open prop), you will need to listen to the @close emit on the DialogContent to manually handle the state change.",
  )
}

const code = `<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from '@codinglabsau/gooey'
<\/script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">Edit Profile</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>Make changes to your profile here.</DialogDescription>
      </DialogHeader>
      <!-- form fields -->
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline"> Edit Profile </Button>
        </DialogTrigger>

        <DialogContent class="sm:max-w-[425px]" @close="handleClose">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>

            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right"> Name </Label>

              <Input id="name" value="Pedro Duarte" class="col-span-3" />
            </div>

            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right"> Username </Label>

              <Input id="username" value="@peduarte" class="col-span-3" />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit"> Save changes </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Sonner />
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
