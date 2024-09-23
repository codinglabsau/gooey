# Contribution Guide

## Which Branch?
All bug fixes should be sent to the latest version that supports bug fixes (currently `1.x`). Bug fixes should never be sent to the `main` branch unless they fix features that exist only in the upcoming release.

Minor features that are fully backward compatible with the current release may be sent to the latest stable branch (currently `1.x`).

Major new features or features with breaking changes should always be sent to the `2.x` branch, which contains the upcoming release.

## Local Development
Spin up the vite dev server with:
```bash
vite
```
The local server contains a demo and documentation for all the components.

## Publishing Releases
1. Increment the version in `package.json`
2. Run `npm update` to update the lock file
3. Ensure all components are registered in `src/index.ts`
4. Run `npm run build`; this will format, lint, type check and do a vite build
5. Push to GitHub
6. Tag a release on GitHub matching the new version number

## Testing
The test suite uses [Cypress](https://docs.cypress.io/guides/component-testing/vue/overview).

Test files are colocated next to components, for example `badge/Badge.vue` has a corresponding test case in `badge/badge.spec.ts`.

The best DX when testing is by using the Cypress test runner. To do so, run:
```bash
npx cypress open
```

Tests can also be run on the CLI using:
```bash
npm run test
```
