import { RangeCalendarRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = RangeCalendarRootProps & {
    class?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (date: import('reka-ui').DateRange) => any;
    "update:placeholder": (date: import('reka-ui').DateValue) => any;
    "update:validModelValue": (date: import('reka-ui').DateRange) => any;
    "update:startValue": (date: import('reka-ui').DateValue | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((date: import('reka-ui').DateRange) => any) | undefined;
    "onUpdate:placeholder"?: ((date: import('reka-ui').DateValue) => any) | undefined;
    "onUpdate:validModelValue"?: ((date: import('reka-ui').DateRange) => any) | undefined;
    "onUpdate:startValue"?: ((date: import('reka-ui').DateValue | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
