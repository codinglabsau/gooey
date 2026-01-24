import { SplitterResizeHandleProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = SplitterResizeHandleProps & {
    class?: HTMLAttributes["class"];
    withHandle?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    dragging: (isDragging: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDragging?: ((isDragging: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
