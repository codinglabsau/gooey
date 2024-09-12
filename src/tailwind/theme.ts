import plugin from "tailwindcss/plugin"

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
            ...options?.colors,
          },
        },
      },
    }
  }
)

export default theme
