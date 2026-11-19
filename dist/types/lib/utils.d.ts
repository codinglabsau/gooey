import { Updater } from '@tanstack/vue-table';
import { Ref } from 'vue';
import { ClassValue } from 'clsx';
export declare function cn(...inputs: ClassValue[]): string;
export declare function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref): void;
/** Coerces a numeric model value for NumberField; empty strings and non-numeric values become undefined. */
export declare function toNumberOrUndefined(value: unknown): number | undefined;
