# Usage

Components can be dropped anywhere in Vue templates.

```vue
<script setup>
import { ref } from 'vue'
import { Text, PrimaryButton } from '@codinglabsau/ui'

const name = ref('Harry Highpants')
</script>

<template>
  <Text v-model="name"/>
  <PrimaryButton as="button">Save</PrimaryButton>
</template>
```
