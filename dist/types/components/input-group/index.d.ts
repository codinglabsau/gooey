import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";
import type { ButtonVariants } from "@/components/button";
export { default as InputGroup } from "./InputGroup.vue";
export { default as InputGroupAddon } from "./InputGroupAddon.vue";
export { default as InputGroupButton } from "./InputGroupButton.vue";
export { default as InputGroupInput } from "./InputGroupInput.vue";
export { default as InputGroupText } from "./InputGroupText.vue";
export { default as InputGroupTextarea } from "./InputGroupTextarea.vue";
export declare const inputGroupAddonVariants: (props?: ({
    align?: "inline-start" | "inline-end" | "block-start" | "block-end" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type InputGroupVariants = VariantProps<typeof inputGroupAddonVariants>;
export declare const inputGroupButtonVariants: (props?: ({
    size?: "xs" | "sm" | "icon-sm" | "icon-xs" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type InputGroupButtonVariants = VariantProps<typeof inputGroupButtonVariants>;
export interface InputGroupButtonProps {
    variant?: ButtonVariants["variant"];
    size?: InputGroupButtonVariants["size"];
    class?: HTMLAttributes["class"];
}
