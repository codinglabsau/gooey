import { HTMLAttributes } from 'vue';
/**
 * v-model is a `number` representing the amount in **dollars** (e.g. `19.99`), or `null` when empty.
 * Consumers do not need to convert to/from cents.
 */
type __VLS_Props = {
    currency?: string;
    currencyDisplay?: Intl.NumberFormatOptions["currencyDisplay"];
    locale?: string;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    placeholder?: string;
    class?: HTMLAttributes["class"];
};
type __VLS_PublicProps = {
    modelValue?: number | string | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
}>, {
    min: number;
    step: number;
    locale: string;
    currency: string;
    currencyDisplay: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
