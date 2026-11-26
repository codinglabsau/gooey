<?php

use Codinglabs\Gooey\Tests\TestCase;
use Illuminate\Testing\TestResponse;

uses(TestCase::class)->in(__DIR__);

/** Request a page as an Inertia visit, so the response is the page object. */
function inertiaVisit(string $uri): TestResponse
{
    return test()->get($uri, ['X-Inertia' => 'true']);
}
