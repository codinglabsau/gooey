import { type VariantProps } from "class-variance-authority";
export { default as Button } from "./Button.vue";
export declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "outline" | "destructive" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "icon" | "xs" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types.js").ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
