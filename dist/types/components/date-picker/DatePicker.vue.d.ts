import { HTMLAttributes } from 'vue';
import { DateValue } from '@internationalized/date';
type __VLS_Props = {
    placeholder?: string;
    disabled?: boolean;
    locale?: string;
    class?: HTMLAttributes["class"];
};
type __VLS_PublicProps = {
    modelValue?: DateValue;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: DateValue) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: DateValue) => any) | undefined;
}>, {
    placeholder: string;
    locale: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
