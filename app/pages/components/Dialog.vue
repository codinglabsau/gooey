<script setup lang="ts">
import { CircleAlertIcon } from "lucide-vue-next"
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
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Toaster, useToast } from "@/components/toast"

const { toast } = useToast()

const handleClose = () => {
  toast({
    title: 'Attention!',
    icon: CircleAlertIcon,
    iconClasses: 'text-orange-400 !size-10',
    description: 'When defining the state of a Dialog (via the open prop), you will need to listen to the @close emit on the DialogContent to manually handle the state change.'
  })
}
</script>

<template>
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

  <Toaster />
</template>
