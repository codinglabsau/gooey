import { VariantProps } from 'class-variance-authority';
export declare const fieldVariants: (props?: ({
    orientation?: "vertical" | "horizontal" | "responsive" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type FieldVariants = VariantProps<typeof fieldVariants>;
export { default as Field } from './Field.vue';
export { default as FieldContent } from './FieldContent.vue';
export { default as FieldDescription } from './FieldDescription.vue';
export { default as FieldError } from './FieldError.vue';
export { default as FieldGroup } from './FieldGroup.vue';
export { default as FieldLabel } from './FieldLabel.vue';
export { default as FieldLegend } from './FieldLegend.vue';
export { default as FieldSeparator } from './FieldSeparator.vue';
export { default as FieldSet } from './FieldSet.vue';
export { default as FieldTitle } from './FieldTitle.vue';
