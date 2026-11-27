<?php

use Codinglabs\Gooey\Toast;
use Codinglabs\Gooey\ToastType;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

beforeEach(function () {
    Route::middleware(INERTIA)->get('/page', fn () => Inertia::render('Page'));
});

it('flashes a toast for the next page', function () {
    Route::middleware(INERTIA)->post('/save', function () {
        Toast::success('Your profile is live')->title('Profile saved')->duration(8000)->flash();

        return back();
    });

    $this->post('/save');

    inertiaVisit('/page')
        ->assertJsonPath('flash.toasts.0.type', 'success')
        ->assertJsonPath('flash.toasts.0.title', 'Profile saved')
        ->assertJsonPath('flash.toasts.0.description', 'Your profile is live')
        ->assertJsonPath('flash.toasts.0.duration', 8000);
});

it('gives every toast its own id', function () {
    Route::middleware(INERTIA)->post('/save', function () {
        Toast::info('First')->flash();
        Toast::info('Second')->flash();

        return back();
    });

    $this->post('/save');

    $toasts = inertiaVisit('/page')->json('flash.toasts');

    expect($toasts)->toHaveCount(2)
        ->and($toasts[0]['id'])->toBeString()->not->toBe($toasts[1]['id']);
});

it('leaves out what was not set', function () {
    expect(Toast::warning('Careful')->toArray())->toHaveKeys(['id', 'type', 'description'])
        ->not->toHaveKeys(['title', 'duration']);
});

it('makes a toast from a type name', function () {
    expect(Toast::make('Saved', 'success')->toArray()['type'])->toBe(ToastType::Success->value);
});

it('rejects an unknown type name', function () {
    Toast::make('Saved', 'danger');
})->throws(ValueError::class);

it('flashes from a redirect', function () {
    Route::middleware(INERTIA)->post('/save', fn () => back()->toast('Saved'));
    Route::middleware(INERTIA)->post('/delete', fn () => back()->toast(Toast::error('Could not delete')));

    $this->post('/save')->assertRedirect();
    $this->post('/delete')->assertRedirect();

    inertiaVisit('/page')
        ->assertJsonPath('flash.toasts.0.type', 'default')
        ->assertJsonPath('flash.toasts.0.description', 'Saved')
        ->assertJsonPath('flash.toasts.1.type', 'error')
        ->assertJsonPath('flash.toasts.1.description', 'Could not delete');
});

it('flashes from an Inertia response, on that same response', function () {
    Route::middleware(INERTIA)->get('/welcome', fn () => Inertia::render('Page')->toast('Welcome back', 'info'));

    inertiaVisit('/welcome')
        ->assertJsonPath('flash.toasts.0.type', 'info')
        ->assertJsonPath('flash.toasts.0.description', 'Welcome back');
});

it('does not repeat an identical toast on one page', function () {
    Route::middleware(INERTIA)->post('/save', function () {
        Toast::success('Saved')->flash();
        Toast::success('Saved')->flash();
        Toast::success('Saved')->title('Profile')->flash();

        return back()->with('success', 'Saved');
    });

    $this->post('/save');

    inertiaVisit('/page')
        ->assertJsonCount(2, 'flash.toasts')
        ->assertJsonPath('flash.toasts.1.title', 'Profile');
});

it('shows a toast once', function () {
    Route::middleware(INERTIA)->post('/save', fn () => back()->toast('Saved'));

    $this->post('/save');

    inertiaVisit('/page')->assertJsonCount(1, 'flash.toasts');
    inertiaVisit('/page')->assertJsonMissingPath('flash.toasts');
});
