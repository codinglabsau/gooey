import js from "@eslint/js"
import globals from "globals"
import vueParser from "vue-eslint-parser"
import pluginVue from "eslint-plugin-vue"
import tailwind from "eslint-plugin-tailwindcss"
import prettier from "eslint-config-prettier"
import unusedImports from "eslint-plugin-unused-imports"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"

export default [
  {
    ignores: [
      "*.d.ts",
      "dist/**",
      "node_modules/**"
    ]
  },

  // Base configs
  js.configs.recommended,
  prettier,
  ...pluginVue.configs['flat/recommended'],
  ...tailwind.configs["flat/recommended"],

  // Main configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      },
      parser: vueParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "unused-imports": unusedImports
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      // Vue rules
      "vue/component-tags-order": [
        "error",
        {
          order: ["script", "template", "style"]
        }
      ],
      "vue/multi-word-component-names": "off",
      "vue/component-api-style": ["error", ["script-setup", "composition"]],
      "vue/component-name-in-template-casing": "error",
      "vue/block-lang": [
        "error",
        {
          script: { lang: "ts" }
        }
      ],
      "vue/define-macros-order": "error",
      "vue/define-emits-declaration": ["error", "type-based"],
      "vue/define-props-declaration": ["error", "type-based"],
      "vue/match-component-import-name": "error",
      "vue/no-unused-refs": "error",
      "vue/no-useless-v-bind": "error",
      "vue/padding-line-between-tags": "warn",
      "vue/no-v-html": "off",
      "vue/require-default-prop": "off",
      "vue/valid-v-slot": ["error", {
        allowModifiers: true
      }],

      // sticking to the team's rules
      "vue/prefer-separate-static-class": "off",
      "tailwindcss/enforces-shorthand": "off",
      "vue/no-reserved-component-names": "off",
      "vue/no-setup-props-destructure": "off",
      "vue/prefer-true-attribute-shorthand": "off",

      // Tailwind rules
      "tailwindcss/no-custom-classname": "off",

      // General rules
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-console": "error",
      "no-prototype-builtins": "off",

      // Unused imports
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ],

      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": "off" // handled by unused-imports
    }
  },

  // TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    }
  },

  // Vue files with TypeScript
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"]
      }
    }
  }
]
