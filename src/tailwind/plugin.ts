import plugin from "tailwindcss/plugin"

const gooeyTailwindPlugin = plugin(function({ addUtilities, theme }) {
  // const newUtilities = {
  //   ".bg-custom": {
  //     backgroundColor: theme("colors.blue.500")
  //   },
  //   ".text-custom": {
  //     color: theme("colors.red.500")
  //   }
  // }
  //
  // addUtilities(newUtilities, ["responsive", "hover"])
})

export default gooeyTailwindPlugin
