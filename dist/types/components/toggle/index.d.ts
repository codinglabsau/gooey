import type { VariantProps } from "class-variance-authority";
export { default as Toggle } from "./Toggle.vue";
export declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ToggleVariants = VariantProps<typeof toggleVariants>;
