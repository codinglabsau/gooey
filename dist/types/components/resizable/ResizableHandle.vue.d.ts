import type { SplitterResizeHandleProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
type __VLS_Props = SplitterResizeHandleProps & {
    class?: HTMLAttributes["class"];
    withHandle?: boolean;
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    dragging: (isDragging: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDragging?: ((isDragging: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
