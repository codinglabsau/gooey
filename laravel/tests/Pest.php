<?php

use Codinglabs\Gooey\Tests\Fixtures\HandleInertiaRequests;
use Codinglabs\Gooey\Tests\TestCase;
use Illuminate\Testing\TestResponse;

uses(TestCase::class)->in(__DIR__);

/** The middleware an app's Inertia routes run through. */
const INERTIA = ['web', HandleInertiaRequests::class];

/** Request a page as an Inertia visit, so the response is the page object. */
function inertiaVisit(string $uri, string $version = HandleInertiaRequests::VERSION): TestResponse
{
    return test()->get($uri, ['X-Inertia' => 'true', 'X-Inertia-Version' => $version]);
}
