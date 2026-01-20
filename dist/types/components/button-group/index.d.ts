import type { VariantProps } from "class-variance-authority";
export { default as ButtonGroup } from "./ButtonGroup.vue";
export { default as ButtonGroupSeparator } from "./ButtonGroupSeparator.vue";
export { default as ButtonGroupText } from "./ButtonGroupText.vue";
export declare const buttonGroupVariants: (props?: ({
    orientation?: "vertical" | "horizontal" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>;
