<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/input-otp"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@codinglabsau/gooey'
<\/script>

<template>
  <InputOTP :maxlength="6">
    <InputOTPGroup>
      <InputOTPSlot :index="0" />
      <InputOTPSlot :index="1" />
      <InputOTPSlot :index="2" />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot :index="3" />
      <InputOTPSlot :index="4" />
      <InputOTPSlot :index="5" />
    </InputOTPGroup>
  </InputOTP>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <InputOTP :maxlength="6">
        <InputOTPGroup>
          <InputOTPSlot :index="0" />

          <InputOTPSlot :index="1" />

          <InputOTPSlot :index="2" />
        </InputOTPGroup>

        <InputOTPSeparator />

        <InputOTPGroup>
          <InputOTPSlot :index="3" />

          <InputOTPSlot :index="4" />

          <InputOTPSlot :index="5" />
        </InputOTPGroup>
      </InputOTP>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
