import { HTMLAttributes } from 'vue';
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
type __VLS_Props = {
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    class?: HTMLAttributes["class"];
};
type __VLS_PublicProps = {
    modelValue?: string;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    placeholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
