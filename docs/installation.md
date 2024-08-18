# Installation

## Prerequisites
As UI is a private NPM package, some prerequisite setup is required.

### Setup access token
To install this package, you'll need an npm token environment variable that has read access to the `codinglabsau/ui` repository.

To setup a token, head to [GitHub Personal Access Tokens](https://github.com/settings/tokens).

Then add in your .bash_profile add:
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
$ npm install @codinglabsau/ui
```
Include the path to the library in your project's `tailwind.config.js` purge configuration:

```js
content: [
  './node_modules/@codinglabsau/ui/src/**/*.{js,vue}',
  // ...
]
```

For the styles to work you will need to also import the theme and add it as a plugin:

```js
import { theme } from '@codinglabsau/ui'

export default {
    // ...
    plugins: [
        theme()
    ],
}
```
