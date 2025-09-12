<script setup lang="ts">
import { ref } from "vue"
import { Check, Search, X } from "lucide-vue-next"
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
} from "@/components/combobox"

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

// Single select
const singleValue = ref(frameworks[0])
const singleSearchValue = ref("")

// Multiselect
const multipleValues = ref([])
const multiSearchValue = ref("")
</script>

<template>
  <div class="space-y-8">
    <section>
      <h3>Single select</h3>

      <Combobox v-model="singleValue" by="label">
        <ComboboxAnchor>
          <div class="relative w-full max-w-sm items-center">
            <ComboboxInput
              v-model="singleSearchValue"
              class="pl-9"
              :display-value="(val) => val?.label ?? ''"
              placeholder="Select framework..."
            />

            <span class="absolute inset-y-0 start-0 flex items-center justify-center px-3">
              <Search class="size-4 text-muted-foreground" />
            </span>
          </div>
        </ComboboxAnchor>

        <ComboboxList>
          <ComboboxEmpty> No framework found. </ComboboxEmpty>

          <ComboboxGroup>
            <ComboboxItem v-for="framework in frameworks" :key="framework.value" :value="framework">
              {{ framework.label }}
              <ComboboxItemIndicator>
                <Check class="ml-auto h-4 w-4" />
              </ComboboxItemIndicator>
            </ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
      </Combobox>
    </section>

    <section>
      <h3>Multiselect Example</h3>

      <div class="w-full max-w-[500px]">
        <div class="justify-betwen flex w-full items-center rounded-t border-x border-t p-2">
          <h3 class="w-full font-medium">Target Frameworks</h3>

          <div>
            <Combobox v-model="multipleValues" multiple open-on-focus by="label">
              <ComboboxAnchor>
                <div class="relative w-full max-w-sm items-center">
                  <ComboboxInput
                    v-model="multiSearchValue"
                    class="pr-9"
                    placeholder="Search frameworks..."
                  />

                  <ComboboxCancel
                    v-if="multiSearchValue !== ''"
                    class="absolute inset-y-0 end-0 flex items-center justify-center px-3"
                    @click="multiSearchValue = ''"
                  >
                    <X class="size-4 text-muted-foreground" />
                  </ComboboxCancel>
                </div>
              </ComboboxAnchor>

              <ComboboxList>
                <ComboboxEmpty> No framework found. </ComboboxEmpty>

                <ComboboxGroup>
                  <ComboboxItem
                    v-for="framework in frameworks"
                    :key="framework.value"
                    :value="framework"
                  >
                    {{ framework.label }}
                    <ComboboxItemIndicator>
                      <Check class="ml-auto h-4 w-4" />
                    </ComboboxItemIndicator>
                  </ComboboxItem>
                </ComboboxGroup>
              </ComboboxList>
            </Combobox>
          </div>
        </div>

        <ul class="divide-y rounded-b border">
          <li v-for="framework in multipleValues" :key="framework.value" class="p-2">
            {{ framework.label }}
          </li>

          <li v-if="multipleValues.length === 0" class="p-2 text-center text-muted-foreground">
            No frameworks selected.
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
