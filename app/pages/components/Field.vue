<script setup lang="ts">
/* eslint-disable no-useless-escape */
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/field"
import { Input } from "@/components/input"
import { Checkbox } from "@/components/checkbox"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from '@codinglabsau/gooey'
<\/script>

<template>
  <FieldGroup>
    <Field>
      <FieldLabel>Email</FieldLabel>
      <FieldContent>
        <Input type="email" placeholder="you@example.com" />
        <FieldDescription>We'll never share your email.</FieldDescription>
      </FieldContent>
    </Field>
  </FieldGroup>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 max-w-md space-y-6">
      <FieldGroup>
        <Field>
          <FieldLabel>Email</FieldLabel>

          <FieldContent>
            <Input type="email" placeholder="you@example.com" />

            <FieldDescription>We'll never share your email.</FieldDescription>
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel>Password</FieldLabel>

          <FieldContent>
            <Input type="password" placeholder="Enter password" />
          </FieldContent>
        </Field>

        <Field orientation="horizontal">
          <Checkbox id="terms" />

          <FieldLabel for="terms">Accept terms and conditions</FieldLabel>
        </Field>
      </FieldGroup>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
