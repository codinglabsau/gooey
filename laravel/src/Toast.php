<?php

namespace Codinglabs\Gooey;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Str;
use Inertia\Inertia;

/**
 * A toast for the gooey Flasher, delivered through Inertia's flash data so it
 * shows once on the next page and never replays from the browser's history.
 *
 * @implements Arrayable<string, mixed>
 */
class Toast implements Arrayable
{
    /** The Inertia flash key the toasts are sent under. */
    public const FLASH_KEY = 'toasts';

    protected string $id;

    protected ?string $title = null;

    protected ?int $duration = null;

    public function __construct(
        protected string $description,
        protected ToastType $type = ToastType::Default,
    ) {
        // Lets the Flasher show each toast once, however many times it receives it.
        $this->id = (string) Str::uuid();
    }

    public static function make(string $description, ToastType|string $type = ToastType::Default): static
    {
        return new static($description, $type instanceof ToastType ? $type : ToastType::from($type));
    }

    public static function info(string $description): static
    {
        return static::make($description, ToastType::Info);
    }

    public static function success(string $description): static
    {
        return static::make($description, ToastType::Success);
    }

    public static function warning(string $description): static
    {
        return static::make($description, ToastType::Warning);
    }

    public static function error(string $description): static
    {
        return static::make($description, ToastType::Error);
    }

    /** Replace the type's default title (e.g. "Success") for this toast. */
    public function title(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function duration(int $milliseconds): static
    {
        $this->duration = $milliseconds;

        return $this;
    }

    /** Add the toast to the toasts already flashed for the next page. */
    public function flash(): static
    {
        Inertia::flash(static::FLASH_KEY, [...static::flashed(), $this->toArray()]);

        return $this;
    }

    /**
     * The toasts flashed so far.
     *
     * @return list<array<string, mixed>>
     */
    public static function flashed(): array
    {
        $toasts = Inertia::getFlashed()[static::FLASH_KEY] ?? [];

        return is_array($toasts) ? array_values($toasts) : [];
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return array_filter([
            'id' => $this->id,
            'type' => $this->type->value,
            'title' => $this->title,
            'description' => $this->description,
            'duration' => $this->duration,
        ], fn (mixed $value): bool => $value !== null);
    }
}
