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
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
}
