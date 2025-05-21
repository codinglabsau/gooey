import { type AccordionRootProps } from "radix-vue";
interface Item {
    title: string;
    content: string;
}
interface ExtendedAccordionRootProps extends AccordionRootProps {
    content?: Item[] | Record<string, Item>;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ExtendedAccordionRootProps>, {
    type: string;
    collapsible: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | string[] | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ExtendedAccordionRootProps>, {
    type: string;
    collapsible: boolean;
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | string[] | undefined) => any) | undefined;
}>, {
    collapsible: boolean;
    type: "single" | "multiple";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Partial<Record<string, (_: {
    item: number | (() => string) | (() => string) | Item | ((callbackfn: (value: Item, index: number, array: Item[]) => void, thisArg?: any) => void) | (() => IterableIterator<[number, Item]>) | (() => IterableIterator<number>) | (() => IterableIterator<Item>) | (() => Item | undefined) | ((...items: Item[]) => number) | {
        (...items: ConcatArray<Item>[]): Item[];
        (...items: (Item | ConcatArray<Item>)[]): Item[];
    } | ((separator?: string | undefined) => string) | (() => Item[]) | (() => Item | undefined) | ((start?: number | undefined, end?: number | undefined) => Item[]) | ((compareFn?: ((a: Item, b: Item) => number) | undefined) => Item[]) | {
        (start: number, deleteCount?: number | undefined): Item[];
        (start: number, deleteCount: number, ...items: Item[]): Item[];
    } | ((...items: Item[]) => number) | ((searchElement: Item, fromIndex?: number | undefined) => number) | ((searchElement: Item, fromIndex?: number | undefined) => number) | {
        <S extends Item>(predicate: (value: Item, index: number, array: Item[]) => value is S, thisArg?: any): this is S[];
        (predicate: (value: Item, index: number, array: Item[]) => unknown, thisArg?: any): boolean;
    } | ((predicate: (value: Item, index: number, array: Item[]) => unknown, thisArg?: any) => boolean) | (<U>(callbackfn: (value: Item, index: number, array: Item[]) => U, thisArg?: any) => U[]) | {
        <S_1 extends Item>(predicate: (value: Item, index: number, array: Item[]) => value is S_1, thisArg?: any): S_1[];
        (predicate: (value: Item, index: number, array: Item[]) => unknown, thisArg?: any): Item[];
    } | {
        (callbackfn: (previousValue: Item, currentValue: Item, currentIndex: number, array: Item[]) => Item): Item;
        (callbackfn: (previousValue: Item, currentValue: Item, currentIndex: number, array: Item[]) => Item, initialValue: Item): Item;
        <U_1>(callbackfn: (previousValue: U_1, currentValue: Item, currentIndex: number, array: Item[]) => U_1, initialValue: U_1): U_1;
    } | {
        (callbackfn: (previousValue: Item, currentValue: Item, currentIndex: number, array: Item[]) => Item): Item;
        (callbackfn: (previousValue: Item, currentValue: Item, currentIndex: number, array: Item[]) => Item, initialValue: Item): Item;
        <U_2>(callbackfn: (previousValue: U_2, currentValue: Item, currentIndex: number, array: Item[]) => U_2, initialValue: U_2): U_2;
    } | {
        <S_2 extends Item>(predicate: (this: void, value: Item, index: number, obj: Item[]) => value is S_2, thisArg?: any): S_2 | undefined;
        (predicate: (value: Item, index: number, obj: Item[]) => unknown, thisArg?: any): Item | undefined;
    } | ((predicate: (value: Item, index: number, obj: Item[]) => unknown, thisArg?: any) => number) | ((value: Item, start?: number | undefined, end?: number | undefined) => Item[]) | ((target: number, start: number, end?: number | undefined) => Item[]) | ((searchElement: Item, fromIndex?: number | undefined) => boolean) | (<U_3, This = undefined>(callback: (this: This, value: Item, index: number, array: Item[]) => U_3 | readonly U_3[], thisArg?: This | undefined) => U_3[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | ((index: number) => Item | undefined) | (() => string) | (() => string);
}) => any>> & Partial<Record<string, (_: {
    item: number | (() => string) | (() => string) | Item | ((callbackfn: (value: Item, index: number, array: Item[]) => void, thisArg?: any) => void) | (() => IterableIterator<[number, Item]>) | (() => IterableIterator<number>) | (() => IterableIterator<Item>) | (() => Item | undefined) | ((...items: Item[]) => number) | {
        (...items: ConcatArray<Item>[]): Item[];
        (...items: (Item | ConcatArray<Item>)[]): Item[];
    } | ((separator?: string | undefined) => string) | (() => Item[]) | (() => Item | undefined) | ((start?: number | undefined, end?: number | undefined) => Item[]) | ((compareFn?: ((a: Item, b: Item) => number) | undefined) => Item[]) | {
        (start: number, deleteCount?: number | undefined): Item[];
        (start: number, deleteCount: number, ...items: Item[]): Item[];
    } | ((...items: Item[]) => number) | ((searchElement: Item, fromIndex?: number | undefined) => number) | ((searchElement: Item, fromIndex?: number | undefined) => number) | {
        <S extends Item>(predicate: (value: Item, index: number, array: Item[]) => value is S, thisArg?: any): this is S[];
        (predicate: (value: Item, index: number, array: Item[]) => unknown, thisArg?: any): boolean;
    } | ((predicate: (value: Item, index: number, array: Item[]) => unknown, thisArg?: any) => boolean) | (<U>(callbackfn: (value: Item, index: number, array: Item[]) => U, thisArg?: any) => U[]) | {
        <S_1 extends Item>(predicate: (value: Item, index: number, array: Item[]) => value is S_1, thisArg?: any): S_1[];
        (predicate: (value: Item, index: number, array: Item[]) => unknown, thisArg?: any): Item[];
    } | {
        (callbackfn: (previousValue: Item, currentValue: Item, currentIndex: number, array: Item[]) => Item): Item;
        (callbackfn: (previousValue: Item, currentValue: Item, currentIndex: number, array: Item[]) => Item, initialValue: Item): Item;
        <U_1>(callbackfn: (previousValue: U_1, currentValue: Item, currentIndex: number, array: Item[]) => U_1, initialValue: U_1): U_1;
    } | {
        (callbackfn: (previousValue: Item, currentValue: Item, currentIndex: number, array: Item[]) => Item): Item;
        (callbackfn: (previousValue: Item, currentValue: Item, currentIndex: number, array: Item[]) => Item, initialValue: Item): Item;
        <U_2>(callbackfn: (previousValue: U_2, currentValue: Item, currentIndex: number, array: Item[]) => U_2, initialValue: U_2): U_2;
    } | {
        <S_2 extends Item>(predicate: (this: void, value: Item, index: number, obj: Item[]) => value is S_2, thisArg?: any): S_2 | undefined;
        (predicate: (value: Item, index: number, obj: Item[]) => unknown, thisArg?: any): Item | undefined;
    } | ((predicate: (value: Item, index: number, obj: Item[]) => unknown, thisArg?: any) => number) | ((value: Item, start?: number | undefined, end?: number | undefined) => Item[]) | ((target: number, start: number, end?: number | undefined) => Item[]) | ((searchElement: Item, fromIndex?: number | undefined) => boolean) | (<U_3, This = undefined>(callback: (this: This, value: Item, index: number, array: Item[]) => U_3 | readonly U_3[], thisArg?: This | undefined) => U_3[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | ((index: number) => Item | undefined) | (() => string) | (() => string);
}) => any>>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
