# Upgrading to 2.0 from 1.x

Version 2.0 modernises Gooey with reka-ui migration, Tailwind CSS v4 support, and 23 new components. This guide covers all the breaking changes you'll need to address.

## radix-vue to reka-ui

All components have been migrated from `radix-vue` to `reka-ui`, which is the new upstream dependency for shadcn-vue. This change aligns Gooey with the official shadcn-vue project direction.

No code changes are required in your application — the migration is internal to Gooey.

## Toast component removed

The Toast component has been **removed** in favour of Sonner, following the official shadcn-vue deprecation.

**Before (v1.x):**
```vue
<script setup>
import { Toaster, useToast } from '@codinglabsau/gooey'
const { toast } = useToast()
toast({ title: 'Hello' })
</script>
```

**After (v2.0):**
```vue
<script setup>
import { Toaster } from '@codinglabsau/gooey'
import { toast } from 'vue-sonner'
toast('Hello')
</script>
```

## CSS import required

Apps using Sonner or Flasher must now import the bundled CSS:

```css
@import "@codinglabsau/gooey/style.css";
```

## Dependencies removed

The following are no longer dependencies of Gooey:
- `@inertiajs/vue3` — install separately if needed
- `@radix-icons/vue` — replaced with lucide-vue-next equivalents

## Tailwind CSS v4 support

Gooey now supports both Tailwind CSS v3 and v4 with versioned presets.

**For Tailwind v3:**
```js
// tailwind.config.js
const gooey = require('@codinglabsau/gooey/presets/v3')
module.exports = gooey.preset
```

**For Tailwind v4:**
```css
/* app.css */
@import "tailwindcss";
@import "@codinglabsau/gooey/presets/v4/preset.css";
```

See the [Theme](/theme) page for full configuration details.

## New components

23 new components have been added:

**Form Components:**
- Calendar, Range Calendar
- Radio Group
- Toggle, Toggle Group
- Number Field
- Pin Input
- Tags Input
- Field, Form (vee-validate integration)
- Input Group

**UI Components:**
- Aspect Ratio
- Button Group
- Hover Card
- Kbd (keyboard shortcuts)
- Menubar
- Scroll Area
- Sonner (toast notifications)
- Spinner

**Layout Components:**
- Resizable panels
- Stepper (multi-step processes)
- Chart (unovis integration)
- Collapsible Two Column Layout

## Breaking changes summary

| v1 | v2 |
|---|---|
| `radix-vue` | `reka-ui` |
| `Toast` / `useToast()` | `Sonner` / `toast()` from vue-sonner |
| No CSS import needed | `@import "@codinglabsau/gooey/style.css"` |
| `@inertiajs/vue3` bundled | Install separately |
| `@radix-icons/vue` | `lucide-vue-next` |
| Tailwind v3 only | Tailwind v3 + v4 support |
