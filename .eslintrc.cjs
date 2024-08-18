module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:vue/vue3-recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["unused-imports"],
  rules: {
    "vue/component-tags-order": [
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

    "tailwindcss/no-custom-classname": "off",

    "no-undef": "off",
    "no-unused-vars": "off",
    "no-console": ["warn"],
    "no-prototype-builtins": "off",

    // sticking to the team's rules
    "vue/prefer-separate-static-class": "off",
    "tailwindcss/enforces-shorthand": "off",
    "vue/no-reserved-component-names": "off",
    "vue/no-setup-props-destructure": "off",
    "vue/prefer-true-attribute-shorthand": "off",
  },
  ignorePatterns: ["*.d.ts"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
}
