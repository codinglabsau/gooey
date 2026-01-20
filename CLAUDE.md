# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Gooey is a Vue 3 component library built on Tailwind CSS and shadcn-vue. It contains both shadcn components and custom components, published as `@codinglabsau/gooey` on GitHub Packages.

The library supports both Tailwind CSS v3 and v4. The demo app uses Tailwind v4, while consumers can use either version with the appropriate preset.

## Rules
- The upstream shadcn-vue components should NOT be modified without approval
- It should always be safe and encouraged to overwrite any shadcn-vue sourced component using `npx shadcn-vue@latest add <component-name> --overwrite --yes`

## Commands

```bash
# Development server (runs the documentation app)
npm run dev

# Build the library
npm run build

# Run all Cypress e2e tests (requires dev server running)
npm run test

# Run a single test file
npx cypress run --spec "src/components/button/button.spec.ts"

# Format and lint
npm run format
```

## Architecture

### Two Directories

- **`src/`** - The publishable component library
  - `src/components/` - All components (both shadcn and custom)
  - `src/index.ts` - Library exports (all components must be exported here)
  - `src/lib/utils.ts` - Utility functions including `cn()` for class merging

- **`app/`** - Documentation/showcase app (not published)
  - `app/pages/components/` - Showcase pages for each component
  - `app/pages/index.ts` - Exports all showcase pages
  - `app/router/index.ts` - Routes for the documentation app

### Adding a New shadcn Component

Use the `/add-shadcn-component` command in Claude Code.

### Path Aliases

- `@/` → `src/`
- `@app/` → `app/`

### Testing

Tests are Cypress e2e tests located alongside components as `*.spec.ts` files. For shadcn components, tests are smoke tests that visit the showcase page. Custom components have more detailed functional tests.

### shadcn Configuration

Uses "new-york" style with Lucide icons. Config in `components.json`.

## Skills

Project-specific Claude Code skills are in `.claude/skills/`:

- `/add-shadcn-component <name>` - Adds a shadcn component with all required exports, showcase page, and routing
