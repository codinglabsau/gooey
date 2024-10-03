<script setup lang="ts">
import { ref } from "vue"
import { watchOnce } from "@vueuse/core"
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"

defineProps<{
  images: string[]
}>()

const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)

const onSelect = () => {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) {
    return
  }

  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

const onThumbClick = (index: number) => {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return
  emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return

  onSelect()
  emblaMainApi.on("select", onSelect)
  emblaMainApi.on("reInit", onSelect)
})
</script>

<template>
  <div class="w-full sm:w-auto">
    <Carousel class="relative w-full max-w-xs" @init-api="(val) => (emblaMainApi = val)">
      <CarouselContent>
        <CarouselItem v-for="(src, index) in images" :key="index">
          <img :src="src" alt="alt" class="h-[300px] p-1" />
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious />

      <CarouselNext />
    </Carousel>

    <Carousel
      class="relative w-full max-w-xs overflow-hidden"
      @init-api="(val) => (emblaThumbnailApi = val)"
    >
      <CarouselContent class="ml-0 flex gap-1">
        <CarouselItem
          v-for="(src, index) in images"
          :key="index"
          class="basis-1/5 cursor-pointer pl-0"
          @click="onThumbClick(index)"
        >
          <img
            :class="index === selectedIndex ? '' : 'opacity-50'"
            :src="src"
            alt="alt"
            class="size-16 p-1"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>
