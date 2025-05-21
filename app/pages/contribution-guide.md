# Contribution Guide

## Adding Components
Gooey is built primarily with [Shadcdn-vue](https://www.shadcn-vue.com/) components.

Components can be installed into the project using the `./add <component>` command, which handles the installation and file movement automatically:

```bash
./add <component-name>
```

Alternatively, you can use the standard installation method, eg. `npx shadcn-vue@latest add <component-name>`.

Note that due to an ongoing bug in shadcn-vue and the `components.json` `aliases.ui` value, components will not install directly to `./src/components`. The `./add` script handles this automatically, but if you're using the standard method, you should copy the component up one level manually.

When adding a component, ensure you do these things:

1. Install the component using `./add <component-name>` or from shadcn-vue directly with `npx shadcn-vue@latest add <component-name>`
2. Register the component in `src/index.ts`
3. Create a vue file matching the component name in app/components, and register it in `app/pages/index.ts`
4. Register the documentation route in `app/router/index.ts`
5. Add at least one cypress smoke test next to the component in src/components

## Local Development
Spin up the vite dev server with:
```bash
vite
```
The local server contains a demo and documentation for all the components.

## Publishing Releases
1. Increment the version in `package.json` following semver rules
2. Run `npm update` to update the lock file
3. Ensure all components are registered in `src/index.ts`
4. Run `npm run build`; this will format, lint, type check and do a vite build
5. Push to GitHub
6. Tag a release on GitHub matching the new version number

## Testing
The test suite uses [Cypress](https://docs.cypress.io/guides/component-testing/vue/overview).

Test files are colocated next to components, for example `badge/Badge.vue` has a corresponding test case in `badge/badge.spec.ts`.

First, ensure a vite server is running:
```bash
vite
```

The Cypress test runner provides a handy GUI for running tests. To use it, run:
```bash
npx cypress open
```

Tests can also be run on the CLI:
```bash
npm run test
```
