import type { VariantProps } from "class-variance-authority";
export { default as Item } from "./Item.vue";
export { default as ItemActions } from "./ItemActions.vue";
export { default as ItemContent } from "./ItemContent.vue";
export { default as ItemDescription } from "./ItemDescription.vue";
export { default as ItemFooter } from "./ItemFooter.vue";
export { default as ItemGroup } from "./ItemGroup.vue";
export { default as ItemHeader } from "./ItemHeader.vue";
export { default as ItemMedia } from "./ItemMedia.vue";
export { default as ItemSeparator } from "./ItemSeparator.vue";
export { default as ItemTitle } from "./ItemTitle.vue";
export declare const itemVariants: (props?: ({
    variant?: "default" | "outline" | "muted" | null | undefined;
    size?: "default" | "sm" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const itemMediaVariants: (props?: ({
    variant?: "default" | "icon" | "image" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type ItemVariants = VariantProps<typeof itemVariants>;
export type ItemMediaVariants = VariantProps<typeof itemMediaVariants>;
