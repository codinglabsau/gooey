# Contribution Guide

## Which Branch?
All bug fixes should be sent to the latest version that supports bug fixes (currently `2.x`). Bug fixes should never be sent to the `main` branch unless they fix features that exist only in the upcoming release.

Minor features that are fully backward compatible with the current release may be sent to the latest stable branch (currently `2.x`).

Major new features or features with breaking changes should always be sent to the `main` branch, which contains the upcoming release.

## Local Development
Spin up the vite dev server with:
```bash
vite
```
The local server contains a demo of all the components.

## Publishing Releases
1. Increment the version in `package.json`
2. Run `npm update` to update the lock file
3. Ensure all components are registered in `src/index.ts`
4. Run `npm run build`; this will format, lint, type check and do a vite build
5. Push to GitHub
6. Tag a release on GitHub matching the new version number

## Publishing Docs
The documentation is gitignored, so it must be built locally. To do so, run:

```bash
npm run docs:build
cd docs/.vitepress/dist && herd link ui-docs
```

The docs will now be available at [http://ui-docs.test](http://ui-docs.test).

Anytime changes are made to the package and to the exposed API, the docs must be updated accordingly.

After updating the docs, or pulling in changes to the docs, you'll want to update your local docs using:
```bash
npm run docs:build
```

## Testing
The test suite uses [Cypress](https://docs.cypress.io/guides/component-testing/vue/overview).

Test files are colocated next to components, for example `Badges/DangerBadge.vue` has a corresponding test case in `Badges/SuccessBadge.cy.ts`.

The best DX when testing is by using the Cypress test runner. To do so, run:
```bash
npx cypress open
```

Tests can also be run on the CLI using:
```bash
npm run test
```
