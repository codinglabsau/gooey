import { type VariantProps } from "class-variance-authority";
export { default as Badge } from "./Badge.vue";
export declare const badgeVariants: (props?: ({
    variant?: "default" | "outline" | "destructive" | "secondary" | null | undefined;
} & import("class-variance-authority/dist/types.js").ClassProp) | undefined) => string;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
