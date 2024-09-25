# Theme
This package requires configuration with tailwind to render styles, you can reference [Using CSS variables](https://tailwindcss.com/docs/customizing-colors#using-css-variables)
from the documentation:

### Import variables
This package comes with a `preset` file which will define all the required tailwind variables for the package. 
Add the following to your `tailwind.config.js`:
```js
import { preset } from '@codinglabsau/gooey'

module.exports = {
  presets: [preset],
  // ... the rest of your tailwind configuration
}
```

### Import styles
Import the `slate.css` file, which contains styles for these variables into your main CSS file 
(`app.css` or similar file depending on your project):
```css
@import '@codinglabsau/gooey/dist/presets/slate.css';
```

### Customising the styles
Most projects using this package will have a different colour requirement. The files in the previous
steps define:
- Primary (black)
- Secondary (slate)
- Destructive (red)

Foreground colours for each of these are a lighter/muted variant within the same hue family (see [tailwind colours](https://tailwindcss.com/docs/customizing-colors))

To customise these, you can define them like so in the same `css` file you used in the previous step:
```css
:root {
  --primary: 243 75% 59%; /* indigo-600 */
  --primary-foreground: 210 40% 98%; /* indigo-300 */
}

/* Define dark mode specific styles */
.dark {
  --primary: 243 75% 59%;
  --primary-foreground: 210 40% 98%;
}
```