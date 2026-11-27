<?php

namespace Codinglabs\Gooey\Tests;

use Codinglabs\Gooey\GooeyServiceProvider;
use Inertia\ServiceProvider as InertiaServiceProvider;
use Orchestra\Testbench\TestCase as Orchestra;

abstract class TestCase extends Orchestra
{
    protected function getPackageProviders($app): array
    {
        return [
            InertiaServiceProvider::class,
            GooeyServiceProvider::class,
        ];
    }

    protected function defineEnvironment($app): void
    {
        $app['config']->set('app.key', 'base64:'.base64_encode(str_repeat('k', 32)));
        $app['config']->set('inertia.testing.ensure_pages_exist', false);
    }
}
