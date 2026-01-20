import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import eslintConfigPrettier from "eslint-config-prettier"

export default tseslint.config(
  {
    ignores: ["dist/**", "node_modules/**", "vendor/**", "public/**", "docs/**", "**/*.d.ts"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  eslintConfigPrettier,
  {
    rules: {
      "vue/block-order": [
        "error",
        {
          order: ["script", "template", "style"],
        },
      ],
      "vue/multi-word-component-names": "off",
      "vue/component-api-style": ["error", ["script-setup", "composition"]],
      "vue/component-name-in-template-casing": "error",
      "vue/block-lang": [
        "error",
        {
          script: { lang: "ts" },
        },
      ],
      "vue/define-macros-order": [
        "warn",
        {
          order: ["defineProps", "defineEmits"],
        },
      ],
      "vue/define-emits-declaration": ["error", "type-based"],
      "vue/define-props-declaration": ["error", "type-based"],
      "vue/match-component-import-name": "error",
      "vue/no-unused-refs": "error",
      "vue/no-useless-v-bind": "error",
      "vue/padding-line-between-tags": "warn",
      "vue/no-v-html": "off",
      "vue/require-default-prop": "off",
      "vue/valid-v-slot": "off",

      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": ["warn"],
      "no-prototype-builtins": "off",

      // sticking to the team's rules
      "vue/prefer-separate-static-class": "off",
      "vue/no-reserved-component-names": "off",
      "vue/no-setup-props-destructure": "off",
      "vue/prefer-true-attribute-shorthand": "off",
    },
  }
)
