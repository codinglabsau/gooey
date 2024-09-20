# Theme

This package comes with a tailwind plugin that contains a custom theme used by all the ui components.

## Primary Colour
Some ui components use the primary colour classes for the primary button, tab accents, highlights, input focus etc. which can be customised to fit your projects theme.

### Basic Replacement
To simply replace the default primary colour with another colour tailwind offers you can do the following:
```js
// tailwind.config.js

import { theme } from '@codinglabsau/ui'
import colors from 'tailwindcss/colors'

plugins: [
  theme({
    colors: {
      primary: colors.teal
    }
  })
]
```

### Advanced Replacement
To replace specific levels you can simply provide only the levels you would like to replace, for example:
```js
// tailwind.config.js

import { theme } from '@codinglabsau/ui'

plugins: [
  theme({
    colors: {
      primary: {
        '500': 'purple'
      }
    }
  })
]
```
::: info
Note: with the above config it will not replace all the other levels, so `text-primary-400` would still exist as the default colour.
:::

If you want to replace the entire range you must provide a value for each level, for example:
```js
// tailwind.config.js

import { theme } from '@codinglabsau/ui'

plugins: [
  theme({
    colors: {
      primary: {
        // gray
        '50': '#ecfeff',
        '100': '#cffafe',
        '200': '#a5f3fc',
        '300': '#67e8f9',
        '400': '#22d3ee',
        '500': '#06b6d4',
        '600': '#0891b2',
        '700': '#0e7490',
        '800': '#155e75',
        '900': '#164e63',
      }
    }
  })
]
```

## Plugin Options Api

| key            | type   | Description                                                                                                                                |
|----------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------|
| **colors**     | object | Object containing all colours that can be customised                                                                                       |
| colors.primary | object | Object containing a [tailwind colour object](https://tailwindcss.com/docs/customizing-colors#color-object-syntax). This defaults to indigo |

Example of full options config:
```js
  theme({
    colors: {
      primary: {
        // teal
        '50': '#ecfeff',
        '100': '#cffafe',
        '200': '#a5f3fc',
        '300': '#67e8f9',
        '400': '#22d3ee',
        '500': '#06b6d4',
        '600': '#0891b2',
        '700': '#0e7490',
        '800': '#155e75',
        '900': '#164e63',
      }
    }
  })
```
