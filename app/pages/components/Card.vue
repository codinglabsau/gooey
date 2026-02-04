<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Button } from "@/components/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from '@codinglabsau/gooey'
<\/script>

<template>
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <!-- form fields -->
    </CardContent>
    <CardFooter class="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>

          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div class="grid w-full items-center gap-4">
              <div class="flex flex-col space-y-1.5">
                <Label for="name">Name</Label>

                <Input id="name" placeholder="Name of your project" />
              </div>

              <div class="flex flex-col space-y-1.5">
                <Label for="framework">Framework</Label>

                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>

                  <SelectContent position="popper">
                    <SelectItem value="nuxt"> Nuxt </SelectItem>

                    <SelectItem value="next"> Next.js </SelectItem>

                    <SelectItem value="sveltekit"> SvelteKit </SelectItem>

                    <SelectItem value="astro"> Astro </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter class="flex justify-between px-6 pb-6">
          <Button variant="outline"> Cancel </Button>

          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
