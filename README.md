# GOOEY

A collection of Vue components based on Tailwind CSS, Shadcn-vue, and others.

## Installation

```bash
npm install @codinglabsau/gooey
```

This library supports both **Tailwind CSS v3** and **Tailwind CSS v4**. Choose the setup instructions for your version.

### Tailwind v4 Setup

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

3. Import the preset in your main CSS file:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "@codinglabsau/gooey/presets/slate.css";

@custom-variant dark (&:is(.dark *));

@source "./node_modules/@codinglabsau/gooey";

@theme {
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));

  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));

  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));

  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));

  --color-success: hsl(var(--success));
  --color-success-foreground: hsl(var(--success-foreground));

  --color-warning: hsl(var(--warning));
  --color-warning-foreground: hsl(var(--warning-foreground));

  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));

  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));

  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));

  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));

  --radius-xl: calc(var(--radius) + 4px);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;
  --animate-collapsible-down: collapsible-down 0.2s ease-in-out;
  --animate-collapsible-up: collapsible-up 0.2s ease-in-out;
}

@keyframes accordion-down {
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
}

@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
}

@keyframes collapsible-down {
  from { height: 0; }
  to { height: var(--radix-collapsible-content-height); }
}

@keyframes collapsible-up {
  from { height: var(--radix-collapsible-content-height); }
  to { height: 0; }
}
```

### Tailwind v3 Setup

1. Install dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
```

2. Add the preset to your `tailwind.config.js`:

```js
import { preset } from '@codinglabsau/gooey/presets/v3'

export default {
  darkMode: ['class'],
  presets: [preset],
  content: [
    './node_modules/@codinglabsau/gooey/**/*.{js,vue}',
    // ... your content paths
  ],
}
```

3. Import the theme CSS in your main stylesheet:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import '@codinglabsau/gooey/dist/presets/slate.css';
```

## Documentation

The documentation is available in the `./app` directory. This serves as documentation, test target, and sandbox for prototyping.

```bash
npm run dev
```

## Testing

Tests are implemented with Cypress, and can be run on CLI using `npm run test`. We are implementing end-to-end tests as most components are tested upstream.

For shadcn components, we do simple smoke tests to ensure they are not generating errors with basic usage.

For custom components, we are testing the functionality in depth.

## Security

If you discover any security related issues, create an issue on GitHub.

## Credits

- [Steve Thomas](https://github.com/stevethomas)
- [All Contributors](../../contributors)

## License

MIT

## About Coding Labs

Coding Labs is a web app development agency based on the Gold Coast, Australia. See our open source projects [on our website](https://codinglabs.com.au/open-source).
