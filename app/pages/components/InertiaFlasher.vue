<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { InertiaFlasher } from "@/inertia"
import { type FlashAction } from "@/components/flasher"
import { Button } from "@/components/button"
import { CodeBlock, ComponentHeading } from "@app/components"

// Stands in for an Inertia response: the router announces flash data and
// validation errors as these document events.
function respond(type: "flash" | "error", detail: Record<string, unknown>) {
  document.dispatchEvent(new CustomEvent(`inertia:${type}`, { detail }))
}

let responseCount = 0

function flashSuccess() {
  respond("flash", {
    flash: {
      toasts: [{ id: `response-${++responseCount}`, type: "success", description: "Saved" }],
    },
  })
}

function replayFlash() {
  respond("flash", {
    flash: { toasts: [{ id: "replayed", type: "info", description: "Shown once per id" }] },
  })
}

function flashTitled() {
  respond("flash", {
    flash: {
      toasts: [
        {
          id: `titled-${++responseCount}`,
          type: "warning",
          title: "Plan limit",
          description: "You have used 90% of your storage.",
        },
      ],
    },
  })
}

const lastAction = ref<string>()

function flashWithAction() {
  respond("flash", {
    flash: {
      toasts: [
        {
          id: `action-${++responseCount}`,
          type: "success",
          description: "Item removed",
          action: { label: "Undo", url: "/items/1/restore", method: "post" },
        },
      ],
    },
  })
}

function failValidation() {
  respond("error", { errors: { email: "The email field is required." } })
}

const installCode = `npm install @codinglabsau/gooey @inertiajs/vue3@^3
composer require codinglabsau/gooey`

const layoutCode = `<script setup lang="ts">
import { InertiaFlasher } from '@codinglabsau/gooey/inertia'
<\/script>

<template>
  <InertiaFlasher />
  <slot />
</template>`

const middlewareCode = `// app/Http/Middleware/HandleInertiaRequests.php
public function share(Request $request): array
{
    return [
        ...parent::share($request),
        // Remove any info/success/warning/error keys shared for a Flasher:
        // those session flashes now arrive as toasts.
    ];
}`

const keysCode = `// app/Providers/AppServiceProvider.php
use Codinglabs\\Gooey\\Http\\Middleware\\FlashSessionMessagesAsToasts;
use Codinglabs\\Gooey\\ToastType;

public function boot(): void
{
    // Defaults: info, success, warning and error.
    FlashSessionMessagesAsToasts::$keys = [
        'success' => ToastType::Success,
        'notice' => ToastType::Info,
    ];
}`

const serverCode = `use Codinglabs\\Gooey\\Toast;

// Existing flash messages just work
return back()->with('success', 'Saved');

// Or flash a toast from a redirect or an Inertia response
return back()->toast('Saved');
return back()->toast(Toast::warning('You have used 90% of your storage.')->title('Plan limit'));
return back()->toast(Toast::success('Item removed')->action('Undo', route('items.restore', $item), 'post'));
return redirect()->route('dashboard')->toast('Welcome back', 'info');

// Or from anywhere in the request
Toast::success('Invoice sent')->flash();`
</script>

<template>
  <!-- The docs app isn't an Inertia app, so the demo shows the action instead of visiting. -->
  <InertiaFlasher
    @action="(action: FlashAction) => (lastAction = `${action.method} ${action.url}`)"
  />

  <div class="space-y-8">
    <section>
      <ComponentHeading>Description</ComponentHeading>

      <p>
        InertiaFlasher is the Flasher wired to Inertia v3 flash data. Toasts flashed on the server
        show once on the next page and never replay when navigating back, and validation errors show
        as an error toast. It ships as the optional
        <code>@codinglabsau/gooey/inertia</code> entry, with a Laravel companion package.
      </p>
    </section>

    <section>
      <ComponentHeading>Installation</ComponentHeading>

      <CodeBlock lang="bash" :code="installCode" />

      <p class="mt-4">Mount it once in your layout, in place of a Flasher:</p>

      <CodeBlock class="mt-4" lang="vue" :code="layoutCode" />
    </section>

    <section>
      <ComponentHeading>Laravel Setup</ComponentHeading>

      <p>
        The package needs Laravel 12 or 13 and inertia-laravel 3.8 or later. Its service provider is
        auto-discovered and adds its middleware to the <code>web</code> group, after your Inertia
        middleware, so there is nothing to register and no config to publish.
      </p>

      <p class="mt-4">
        If your Inertia middleware shares flash messages as props for a Flasher, remove them. Those
        session flashes now arrive as toasts, and keeping both shows each message twice.
      </p>

      <CodeBlock class="mt-4" lang="php" :code="middlewareCode" />

      <p class="mt-4">To turn other session keys into toasts, set them when the app boots:</p>

      <CodeBlock class="mt-4" lang="php" :code="keysCode" />
    </section>

    <section>
      <ComponentHeading>From Laravel</ComponentHeading>

      <p class="mb-4">
        The companion package turns plain info, success, warning and error session flashes into
        toasts, so existing messaging needs no changes.
      </p>

      <CodeBlock lang="php" :code="serverCode" />
    </section>

    <section>
      <ComponentHeading>Demo</ComponentHeading>

      <p class="mb-4">Each button stands in for an Inertia response.</p>

      <div class="flex flex-wrap gap-2">
        <Button variant="outline" data-cy="flash-success" @click="flashSuccess">
          Flash a toast
        </Button>

        <Button variant="outline" data-cy="flash-replay" @click="replayFlash">
          Flash a toast with a fixed id
        </Button>

        <Button variant="outline" data-cy="flash-titled" @click="flashTitled">
          Flash a titled toast
        </Button>

        <Button variant="outline" data-cy="flash-action" @click="flashWithAction">
          Flash a toast with an action
        </Button>

        <Button variant="outline" data-cy="validation-error" @click="failValidation">
          Fail validation
        </Button>
      </div>

      <p v-if="lastAction" class="mt-2 text-sm text-muted-foreground" data-cy="last-action">
        Action: {{ lastAction }}
      </p>
    </section>
  </div>
</template>
