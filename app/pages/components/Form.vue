<script setup lang="ts">
/* eslint-disable no-useless-escape */
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { useForm } from "vee-validate"
import { toTypedSchema } from "@vee-validate/zod"
import * as z from "zod"
import { CodeBlock, ComponentHeading } from "@app/components"

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
  }),
)

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((_values) => {
  // Form submission handled here
})

const code = `<script setup lang="ts">
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@codinglabsau/gooey'
import { Input, Button } from '@codinglabsau/gooey'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({ username: z.string().min(2).max(50) }))
const { handleSubmit } = useForm({ validationSchema: formSchema })
const onSubmit = handleSubmit((values) => { /* handle submit */ })
<\/script>

<template>
  <form @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="username">
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Enter username" v-bind="componentField" />
        </FormControl>
        <FormDescription>This is your public display name.</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">Submit</Button>
  </form>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <form class="max-w-md space-y-6" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>Username</FormLabel>

            <FormControl>
              <Input type="text" placeholder="Enter username" v-bind="componentField" />
            </FormControl>

            <FormDescription>This is your public display name.</FormDescription>

            <FormMessage />
          </FormItem>
        </FormField>

        <Button type="submit">Submit</Button>
      </form>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
