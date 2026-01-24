import { CalendarRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = CalendarRootProps & {
    class?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (date: import('reka-ui').DateValue | undefined) => any;
    "update:placeholder": (date: import('reka-ui').DateValue) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((date: import('reka-ui').DateValue | undefined) => any) | undefined;
    "onUpdate:placeholder"?: ((date: import('reka-ui').DateValue) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
