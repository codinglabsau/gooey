import { type VariantProps } from "class-variance-authority";
export { default as Button } from "./Button.vue";
export declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
