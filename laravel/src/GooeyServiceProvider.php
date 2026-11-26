<?php

namespace Codinglabs\Gooey;

use Codinglabs\Gooey\Http\Middleware\FlashSessionMessagesAsToasts;
use Illuminate\Contracts\Http\Kernel;
use Illuminate\Foundation\Http\Kernel as HttpKernel;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\ServiceProvider;
use Inertia\Response as InertiaResponse;

class GooeyServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // On the kernel, not the router: the kernel re-syncs its groups onto the router.
        $this->callAfterResolving(Kernel::class, function (Kernel $kernel): void {
            if ($kernel instanceof HttpKernel && array_key_exists('web', $kernel->getMiddlewareGroups())) {
                $kernel->appendMiddlewareToGroup('web', FlashSessionMessagesAsToasts::class);
            }
        });
    }

    public function boot(): void
    {
        $toast = function (Toast|string $toast, ToastType|string $type = ToastType::Default): void {
            ($toast instanceof Toast ? $toast : Toast::make($toast, $type))->flash();
        };

        RedirectResponse::macro('toast', function (Toast|string $message, ToastType|string $type = ToastType::Default) use ($toast): RedirectResponse {
            $toast($message, $type);

            /** @var RedirectResponse $this */
            return $this;
        });

        InertiaResponse::macro('toast', function (Toast|string $message, ToastType|string $type = ToastType::Default) use ($toast): InertiaResponse {
            $toast($message, $type);

            /** @var InertiaResponse $this */
            return $this;
        });
    }
}
