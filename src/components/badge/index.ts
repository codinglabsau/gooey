import { type VariantProps, cva } from "class-variance-authority"

export { default as Badge } from "./Badge.vue"

export const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        success: "border-transparent bg-success text-success-foreground shadow hover:bg-success/80",
        warning: "border-transparent bg-warning text-warning-foreground shadow hover:bg-warning/80",
        //outline: "text-foreground",
      },
      type: {
        outline: 'border',
        fill: 'border-transparent',
      }
    },
    compoundVariants: [
      { type: 'outline', variant: 'default', class: 'border-primary text-primary hover:bg-primary/10' },
      {
        type: 'outline',
        variant: 'secondary',
        class: 'border-secondary bg-secondary/10 text-secondary',
      },
      {
        type: 'outline',
        variant: 'destructive',
        class: 'border-destructive bg-destructive/20 text-destructive',
      },
      { type: 'outline', variant: 'warning', class: 'border-warning bg-warning/20 text-warning' },
    ],
    defaultVariants: {
      variant: "default",
      type: "fill",
    },
  }
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
