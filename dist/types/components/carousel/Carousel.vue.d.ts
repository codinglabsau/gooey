import { CarouselProps, WithClassAsProps } from './interface';
type __VLS_Props = CarouselProps & WithClassAsProps;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            canScrollNext: boolean;
            canScrollPrev: boolean;
            carouselApi: import('embla-carousel').EmblaCarouselType | undefined;
            carouselRef: HTMLElement | undefined;
            orientation: "vertical" | "horizontal";
            scrollNext: () => void;
            scrollPrev: () => void;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    canScrollNext: import('vue').Ref<boolean, boolean>;
    canScrollPrev: import('vue').Ref<boolean, boolean>;
    carouselApi: import('vue').Ref<import('embla-carousel').EmblaCarouselType | undefined, import('embla-carousel').EmblaCarouselType | undefined>;
    carouselRef: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
    orientation: "vertical" | "horizontal" | undefined;
    scrollNext: () => void;
    scrollPrev: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "init-api": (payload: import('embla-carousel').EmblaCarouselType | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onInit-api"?: ((payload: import('embla-carousel').EmblaCarouselType | undefined) => any) | undefined;
}>, {
    orientation: "horizontal" | "vertical";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
