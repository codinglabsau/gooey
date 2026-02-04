<script setup lang="ts">
/* eslint-disable no-useless-escape */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"
import CarouselWithThumbnailsDemo from "../demo/CarouselWithThumbnailsDemo.vue"
import { CodeBlock, ComponentHeading } from "@app/components"

const images = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
]

const code = `<script setup lang="ts">
import {
  Carousel, CarouselContent, CarouselItem,
  CarouselNext, CarouselPrevious,
} from '@codinglabsau/gooey'

const images = ['https://...', 'https://...']
<\/script>

<template>
  <Carousel class="relative w-full max-w-xs">
    <CarouselContent>
      <CarouselItem v-for="(src, index) in images" :key="index">
        <img :src="src" alt="Slide" class="h-[300px] w-full object-cover" />
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 space-y-12 p-4">
      <CarouselWithThumbnailsDemo :images="images" />

      <Carousel v-slot="{ canScrollNext, canScrollPrev }" class="relative w-full max-w-xs">
        <CarouselContent>
          <CarouselItem v-for="(src, index) in images" :key="index">
            <img :src="src" alt="alt" class="h-[300px] w-full object-cover p-1" />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious v-if="canScrollPrev" />

        <CarouselNext v-if="canScrollNext" />
      </Carousel>

      <Carousel
        class="relative w-full max-w-sm"
        :opts="{
          align: 'start',
        }"
      >
        <CarouselContent class="-ml-1">
          <CarouselItem
            v-for="(src, index) in images"
            :key="index"
            class="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <img :src="src" alt="alt" class="size-full object-cover" />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />

        <CarouselNext />
      </Carousel>

      <Carousel
        orientation="vertical"
        class="relative w-full max-w-xs"
        :opts="{
          align: 'start',
        }"
      >
        <CarouselContent class="-mt-1 h-[400px]">
          <CarouselItem v-for="(src, index) in images" :key="index" class="p-1 md:basis-1/2">
            <img :src="src" alt="alt" class="size-full object-cover p-1" />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />

        <CarouselNext />
      </Carousel>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
