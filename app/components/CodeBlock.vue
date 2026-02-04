<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import { createHighlighterCore, type HighlighterCore } from "shiki/core"
import { createJavaScriptRegexEngine } from "shiki/engine/javascript"

const props = withDefaults(
  defineProps<{
    code: string
    lang?: string
  }>(),
  { lang: "typescript" },
)

const html = ref("")

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

onMounted(highlight)
watch(() => props.code, highlight)
</script>

<template>
  <div class="shiki-wrapper [&_pre]:!rounded-lg [&_pre]:!p-4 [&_pre]:text-sm" v-html="html" />
</template>

<style>
html.dark .shiki-wrapper .shiki,
html.dark .shiki-wrapper .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
}
</style>
