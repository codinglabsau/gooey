# Installation

## Prerequisites
As this is a private NPM package, some prerequisite setup is required.

### Setup access token
To install this package, you'll need an npm token environment variable that has read access to the `codinglabsau/gooey` repository.

To setup a token, head to [GitHub Personal Access Tokens](https://github.com/settings/tokens).

Then add in your .bash_profile:
`export NPM_TOKEN=<your-token>`.

### Setup .npmrc file
An .npmrc is required in the root of the app you are installing to so that NPM can discover the package. Add the following to your .npmrc file:
```
@codinglabsau:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

## Install with npm
Now that the prerequisites are out of the way, you are ready to install:

```bash
npm install @codinglabsau/gooey
```

This library supports both **Tailwind CSS v3** and **Tailwind CSS v4**. See the [theme setup](theme) page for version-specific configuration.

## Plugin setup (optional)

Gooey ships a Vue plugin that lets you configure a global link component. This is used by components like [LaravelPaginator](/components/laravel-paginator) to render SPA navigation links instead of full page reloads.

If you don't install the plugin, everything still works — links render as plain `<a>` tags.

### Inertia.js

```ts
import { createApp } from 'vue'
import { gooey } from '@codinglabsau/gooey'
import { Link } from '@inertiajs/vue3'

const app = createApp(...)
app.use(gooey, { link: Link })
```

### Nuxt

```ts
import { gooey } from '@codinglabsau/gooey'
import { NuxtLink } from '#components'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(gooey, { link: NuxtLink })
})
```
