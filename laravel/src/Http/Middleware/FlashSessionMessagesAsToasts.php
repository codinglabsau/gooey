<?php

namespace Codinglabs\Gooey\Http\Middleware;

use Closure;
use Codinglabs\Gooey\Toast;
use Codinglabs\Gooey\ToastType;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Turns plain session flashes — `back()->with('success', 'Saved')` — into toasts,
 * so existing flash messaging shows in the Flasher with no changes.
 */
class FlashSessionMessagesAsToasts
{
    /**
     * The session keys that become toasts, and the type each one shows as.
     *
     * @var array<string, ToastType>
     */
    public static array $keys = [
        'info' => ToastType::Info,
        'success' => ToastType::Success,
        'warning' => ToastType::Warning,
        'error' => ToastType::Error,
    ];

    public function handle(Request $request, Closure $next): Response
    {
        if ($request->hasSession()) {
            foreach (static::$keys as $key => $type) {
                $message = $request->session()->get($key);

                if (is_string($message) && $message !== '') {
                    Toast::make($message, $type)->flash();
                }
            }
        }

        return $next($request);
    }
}
