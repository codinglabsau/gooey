<?php

use Codinglabs\Gooey\Http\Middleware\FlashSessionMessagesAsToasts;
use Codinglabs\Gooey\ToastType;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

beforeEach(function () {
    Route::middleware('web')->get('/page', fn () => Inertia::render('Page'));
});

it('turns plain session flashes into toasts', function (string $key) {
    Route::middleware('web')->post('/save', fn () => back()->with($key, 'Saved'));

    $this->post('/save');

    inertiaVisit('/page')
        ->assertJsonPath('flash.toasts.0.type', $key)
        ->assertJsonPath('flash.toasts.0.description', 'Saved');
})->with(['info', 'success', 'warning', 'error']);

it('shows a plain session flash once', function () {
    Route::middleware('web')->post('/save', fn () => back()->with('success', 'Saved'));

    $this->post('/save');

    inertiaVisit('/page')->assertJsonCount(1, 'flash.toasts');
    inertiaVisit('/page')->assertJsonMissingPath('flash.toasts');
});

it('keeps a plain session flash through a further redirect', function () {
    Route::middleware('web')->post('/save', fn () => back()->with('success', 'Saved'));
    Route::middleware('web')->get('/old', fn () => redirect('/page'));

    $this->post('/save');
    $this->get('/old')->assertRedirect('/page');

    inertiaVisit('/page')
        ->assertJsonCount(1, 'flash.toasts')
        ->assertJsonPath('flash.toasts.0.description', 'Saved');
});

it('ignores other session keys and values that are not messages', function () {
    $this->withSession(['status' => 'verification-link-sent', 'success' => ['not' => 'a message'], 'info' => ''])
        ->get('/page', ['X-Inertia' => 'true'])
        ->assertJsonMissingPath('flash.toasts');
});

it('lets the app choose which session keys become toasts', function () {
    $keys = FlashSessionMessagesAsToasts::$keys;
    FlashSessionMessagesAsToasts::$keys = ['notice' => ToastType::Info];

    try {
        $this->withSession(['notice' => 'Heads up', 'success' => 'Saved'])
            ->get('/page', ['X-Inertia' => 'true'])
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
