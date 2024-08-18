# Notifications

Toaster notifications to display, info, success, warning and error notifications.

[Shadcn docs](https://www.shadcn-vue.com/docs/components/toast.html)

::: tip
Error notifications are a key+value objects, whereas all other types are simple strings.
:::

## Usage

```vue

<script setup>
import { Notifications } from '@codinglabsau/ui'
</script>

<template>
  <Notifications
    :info="$page.props.info"
    :success="$page.props.success"
    :warning="$page.props.warning"
    :errors="$page.props.errors"
  />
</template>

```

The app Inertia middleware needs to share notifications with the page props:

```php

// App\Http\Middleware\HandlesInertiaRequests

class HandlesInertiaRequests extends \Inertia\Middleware
{
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'info' => fn () => $request->session()->get('info'),
            'success' => fn () => $request->session()->get('success'),
            'warning' => fn () => $request->session()->get('warning'),
        ]);
    }
}

```

::: tip
Error messages are bound to Laravel validation errors and Inertia automatically shares them in the page props using the `error` key.
:::

Success, info and warning notifications are set as follows:

```php

// SomeController

return redirect()
    ->back()
    ->with('success', 'The widget was updated');

```

## Props

| Name            | Type    | Default | Description                                                        |
|-----------------|:--------|:--------|--------------------------------------------------------------------|
| info            | string  |         | Single info notification                                           |
| success         | string  |         | Single success notification                                        |
| warning         | string  |         | Single warning notification                                        |
| errors          | Object  |         | Key / value object containing error key and notification           |
