<?php

use Codinglabs\Gooey\Http\Middleware\FlashSessionMessagesAsToasts;
use Codinglabs\Gooey\ToastType;
use Illuminate\Contracts\Http\Kernel;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

beforeEach(function () {
    Route::middleware(INERTIA)->get('/page', fn () => Inertia::render('Page'));
    Route::middleware(INERTIA)->post('/save', fn () => back()->with('success', 'Saved'));
});

it('turns plain session flashes into toasts', function (string $key) {
    Route::middleware(INERTIA)->post('/flash', fn () => back()->with($key, 'Done'));

    $this->post('/flash');

    inertiaVisit('/page')
        ->assertJsonCount(1, 'flash.toasts')
        ->assertJsonPath('flash.toasts.0.type', $key)
        ->assertJsonPath('flash.toasts.0.description', 'Done');
})->with(['info', 'success', 'warning', 'error']);

it('shows a plain session flash once', function () {
    $this->post('/save');

    inertiaVisit('/page')->assertJsonCount(1, 'flash.toasts');
    inertiaVisit('/page')->assertJsonMissingPath('flash.toasts');
});

it('keeps a plain session flash through a further redirect', function () {
    Route::middleware(INERTIA)->get('/old', fn () => redirect('/page'));

    $this->post('/save');
    $this->get('/old')->assertRedirect('/page');

    inertiaVisit('/page')
        ->assertJsonCount(1, 'flash.toasts')
        ->assertJsonPath('flash.toasts.0.description', 'Saved');
});

it('shows a plain session flash once after an asset version change', function () {
    $this->post('/save');

    // A stale client gets a full reload, and Inertia reflashes the session for it.
    inertiaVisit('/page', version: 'stale')->assertStatus(409);

    inertiaVisit('/page')
        ->assertJsonCount(1, 'flash.toasts')
        ->assertJsonPath('flash.toasts.0.description', 'Saved');
});

it('does not carry a message shown on a non-Inertia page to the next page', function () {
    Route::middleware(INERTIA)->get('/blade', fn () => session('success'));

    $this->post('/save');
    $this->get('/blade')->assertSee('Saved');

    inertiaVisit('/page')->assertJsonMissingPath('flash.toasts');
});

it('ignores other session keys and values that are not messages', function () {
    $this->withSession(['status' => 'verification-link-sent', 'success' => ['not' => 'a message'], 'info' => '']);

    inertiaVisit('/page')->assertOk()->assertJsonMissingPath('flash.toasts');
});

it('lets the app choose which session keys become toasts', function () {
    $keys = FlashSessionMessagesAsToasts::$keys;
    FlashSessionMessagesAsToasts::$keys = ['notice' => ToastType::Info];

    try {
        $this->withSession(['notice' => 'Heads up', 'success' => 'Saved']);

        inertiaVisit('/page')
            ->assertJsonCount(1, 'flash.toasts')
            ->assertJsonPath('flash.toasts.0.description', 'Heads up');
    } finally {
        FlashSessionMessagesAsToasts::$keys = $keys;
    }
});

it('runs without a session', function () {
    Route::get('/api/ping', fn () => 'pong')->middleware(FlashSessionMessagesAsToasts::class);

    $this->get('/api/ping')->assertOk()->assertSee('pong');
});

it('is registered on the web group after the app middleware', function () {
    $web = app(Kernel::class)->getMiddlewareGroups()['web'];

    expect(end($web))->toBe(FlashSessionMessagesAsToasts::class)
        ->and(array_search(StartSession::class, $web))
        ->toBeLessThan(array_search(FlashSessionMessagesAsToasts::class, $web));
});
