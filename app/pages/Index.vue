<script setup lang="ts">
import { inject } from "vue"
import { ArrowRight, Blocks, Paintbrush, Zap } from "lucide-vue-next"
import { Button } from "@/components/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/card"
import { Heading } from "@/components/heading"
import Logo from "@app/components/Logo.vue"

const splat = inject<() => void>("splat")
</script>

<template>
  <div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
    <div class="text-center">
      <Logo alt="Gooey" class="mx-auto mb-10 w-[20rem] cursor-pointer" @click="splat?.()" />

      <p class="mt-6 text-lg leading-8 text-muted-foreground">
        Gooey is a collection of Vue components built on Tailwind CSS and shadcn-vue. Designed for
        consistency across projects.
      </p>

      <div class="mt-10 flex items-center justify-center gap-x-4">
        <Button as-child>
          <RouterLink to="/installation">
            Get Started
            <ArrowRight class="ml-2 h-4 w-4" />
          </RouterLink>
        </Button>

        <Button variant="outline" as-child>
          <RouterLink to="/components/button"> Browse Components </RouterLink>
        </Button>
      </div>
    </div>

    <div class="mt-16 grid gap-6 sm:grid-cols-3">
      <Card>
        <CardHeader>
          <Blocks class="h-8 w-8 text-primary" />

          <CardTitle class="mt-4">Shadcn-vue</CardTitle>

          <CardDescription>
            Built on top of shadcn-vue with sensible defaults and customizations.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <Paintbrush class="h-8 w-8 text-primary" />

          <CardTitle class="mt-4">Themeable</CardTitle>

          <CardDescription>
            Tailwind preset included. Customize colors, spacing, and more.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <Zap class="h-8 w-8 text-primary" />

          <CardTitle class="mt-4">TypeScript</CardTitle>

          <CardDescription>
            Full TypeScript support with exported types for all components.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>

    <div class="mt-16">
      <Heading as="h2" class="text-2xl font-bold">Quick Links</Heading>

      <div class="mt-6 grid gap-4 sm:grid-cols-2">
        <RouterLink
          to="/installation"
          class="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
        >
          <div>
            <div class="font-medium">Installation</div>

            <div class="text-sm text-muted-foreground">Get started with Gooey in your project</div>
          </div>

          <ArrowRight
            class="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1"
          />
        </RouterLink>

        <RouterLink
          to="/theme"
          class="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
        >
          <div>
            <div class="font-medium">Theming</div>

            <div class="text-sm text-muted-foreground">Customize the look and feel</div>
          </div>

          <ArrowRight
            class="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1"
          />
        </RouterLink>

        <RouterLink
          to="/components/button"
          class="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
        >
          <div>
            <div class="font-medium">Components</div>

            <div class="text-sm text-muted-foreground">Explore the component library</div>
          </div>

          <ArrowRight
            class="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1"
          />
        </RouterLink>

        <RouterLink
          to="/contribution-guide"
          class="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
        >
          <div>
            <div class="font-medium">Contributing</div>

            <div class="text-sm text-muted-foreground">Learn how to add new components</div>
          </div>

          <ArrowRight
            class="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1"
          />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
