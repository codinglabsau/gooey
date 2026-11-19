import { HTMLAttributes } from 'vue';
type __VLS_Props = {
    min?: number;
    max?: number;
    step?: number;
    integer?: boolean;
    disabled?: boolean;
    locale?: string;
    formatOptions?: Intl.NumberFormatOptions;
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
    step: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
