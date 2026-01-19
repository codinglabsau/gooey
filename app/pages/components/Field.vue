<script setup lang="ts">
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
</script>

<template>
  <div class="max-w-md space-y-6">
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
</template>
