import preset from "./src/presets/preset"


/** @type {import("tailwindcss").Config} */
export default {
  presets: [preset],

  content: [
    "./index.html",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}"
  ],

  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
}
