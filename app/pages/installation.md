# Installation

## Prerequisites
As UI is a private NPM package, some prerequisite setup is required.

### Setup access token
To install this package, you'll need an npm token environment variable that has read access to the `codinglabsau/gooey` repository.

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
$ npm install @codinglabsau/gooey
```
Include the path to the library in your project's `tailwind.config.js` purge configuration:

```js
content: [
  './node_modules/@codinglabsau/gooey/dist/*.js',
  // ...
]
```
