import plugin from "tailwindcss/plugin"
import colors from "tailwindcss/colors"

type OptionsConfig = {
  colors?: {
    primary?: {
      [key: string]: string
    }
  }
}

const theme = plugin.withOptions(
  function () {
    return function () {
      /* Nothing needs to be done here yet */
    }
  },
  function (options: OptionsConfig = {}) {
    return {
      theme: {
        extend: {
          colors: {
            primary: {
              ...colors.indigo,
              ...options?.colors?.primary,
            },
          },
        },
      },
    }
  }
)

export default theme
