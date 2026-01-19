---
name: add-shadcn-component
description: Add a shadcn component to the custom component library gooey
---

## Input Parameters
You will be provided with the name of the component needed to add ie:

component-name: separator

Which you should run; npx shadcn-vue@latest add {component-name} to add the files

Once added, the files will be added in /src/components.

## Implementation
1. Update the src/index.ts file to include the export for the new component, make sure it is placed alphabetically with the other imports
2. Documentation:
    2a. Create a showcase vue file in app/pages/components (named after the component)
    2b. Using the knowledge of the components added, create a basic implementation example
    2c. Update the app/pages/index.ts file to include the export for this file - place it alphabetically
    2d. Update the app/router/index.ts file to import this showcase file and add a route object - both placed alphabetically

## Git
Finally, create a git branch {user-name}/add-{component} and create a draft pr

## Sign Off

Return a structured summary of what was added, if necessary add a couple points on how this component can be used (for fun).
