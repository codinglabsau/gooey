<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import { createHighlighterCore, type HighlighterCore } from "shiki/core"
import { createJavaScriptRegexEngine } from "shiki/engine/javascript"
import { Copy, Check } from "lucide-vue-next"

const props = withDefaults(
  defineProps<{
    code: string
    lang?: string
  }>(),
  { lang: "typescript" },
)

const html = ref("")
const copied = ref(false)

let highlighter: HighlighterCore | null = null

const highlight = async () => {
  if (!highlighter) {
    highlighter = await createHighlighterCore({
      themes: [import("shiki/themes/github-light.mjs"), import("shiki/themes/github-dark.mjs")],
      langs: [
        import("shiki/langs/typescript.mjs"),
        import("shiki/langs/vue.mjs"),
        import("shiki/langs/vue-html.mjs"),
        import("shiki/langs/css.mjs"),
        import("shiki/langs/javascript.mjs"),
        import("shiki/langs/bash.mjs"),
      ],
      engine: createJavaScriptRegexEngine(),
    })
  }

  html.value = highlighter.codeToHtml(props.code.trim(), {
    lang: props.lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  })
}

const copy = async () => {
  await navigator.clipboard.writeText(props.code.trim())
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}

onMounted(highlight)
watch(() => props.code, highlight)
</script>

<template>
  <div class="shiki-wrapper group relative rounded-lg border border-border">
    <button
      type="button"
      class="absolute top-2 right-2 rounded-md p-1.5 text-muted-foreground transition hover:bg-accent hover:text-foreground"
      @click="copy"
    >
      <Check v-if="copied" class="size-4 text-success" />

      <Copy v-else class="size-4" />
    </button>

    <div
      class="[&_pre]:!rounded-lg [&_pre]:!border-0 [&_pre]:!p-4 [&_pre]:text-sm [&_pre]:!break-words [&_pre]:!whitespace-pre-wrap"
      v-html="html"
    />
  </div>
</template>

<style>
html.dark .shiki-wrapper .shiki,
html.dark .shiki-wrapper .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
}
</style>
