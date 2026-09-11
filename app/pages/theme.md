# Theme

This package requires configuration with Tailwind CSS to render styles. Choose the setup for your Tailwind version.

## Tailwind CSS v4 Setup

1. Install dependencies:

```bash
npm install -D tailwindcss @tailwindcss/vite tw-animate-css
```

2. Add the Tailwind plugin to your `vite.config.js`:

```js
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

3. Import styles in your main CSS file:

```css
@import "@codinglabsau/gooey/presets/v4";
@import "@codinglabsau/gooey/presets/slate.css";
@import "@codinglabsau/gooey/style.css";

@source "./node_modules/@codinglabsau/gooey";
```

The v4 preset brings in Tailwind itself, the `dark` variant, every color and
radius token, and the component keyframes. Import it rather than copying the
tokens into your own `@theme` block: the preset declares colors with
`@theme inline`, so each utility emits `hsl(var(--token))` and resolves against
the element it lands on. A hand-copied `@theme` block resolves once at `:root`
instead, and a `.dark` class anywhere below the root then flips the raw triples
but not the colors, leaving light cards and dark-on-dark text on a dark page.

## Tailwind CSS v3 Setup

1. Install dependencies:

```bash
npm install -D tailwindcss@3 postcss autoprefixer tailwindcss-animate
```

2. Add the preset to your `tailwind.config.js`:

```js
import { preset } from '@codinglabsau/gooey/presets/v3'

export default {
  darkMode: ['class'],
  presets: [preset],
  content: [
    './node_modules/@codinglabsau/gooey/{src,dist}/**/*.{js,vue}',
    // ... your content paths
  ],
}
```

3. Import the theme CSS in your main stylesheet:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import '@codinglabsau/gooey/presets/slate.css';
@import '@codinglabsau/gooey/style.css';
```

## Customising the theme

The `slate.css` file defines the default colour scheme:
- Primary (black)
- Secondary (slate)
- Destructive (red)
- Success (green)
- Warning (amber)

To customise these, override the CSS variables in your stylesheet:

```css
:root {
  --primary: 243 75% 59%; /* indigo-600 */
  --primary-foreground: 210 40% 98%;
}

.dark {
  --primary: 243 75% 59%;
  --primary-foreground: 210 40% 98%;
}
```

Colours use HSL values without the `hsl()` wrapper (see [Tailwind CSS variables](https://tailwindcss.com/docs/customizing-colors#using-css-variables)).
