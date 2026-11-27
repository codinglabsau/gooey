<?php

namespace Codinglabs\Gooey\Tests\Fixtures;

use Illuminate\Http\Request;
use Inertia\Middleware;

/** An app's Inertia middleware, so its redirect and version-change reflashing is in play. */
class HandleInertiaRequests extends Middleware
{
    public const VERSION = '1';

    public function version(Request $request): ?string
    {
        return self::VERSION;
    }
}
