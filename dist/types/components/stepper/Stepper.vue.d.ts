import { StepperRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = StepperRootProps & {
    class?: HTMLAttributes["class"];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            modelValue: number | undefined;
            totalSteps: number;
            isNextDisabled: boolean;
            isPrevDisabled: boolean;
            isFirstStep: boolean;
            isLastStep: boolean;
            goToStep: (step: number) => void;
            nextStep: () => void;
            prevStep: () => void;
            hasNext: () => boolean;
            hasPrev: () => boolean;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (payload: number | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((payload: number | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
