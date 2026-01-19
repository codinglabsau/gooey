import type { Component } from "vue"
import { BookOpen, Blocks, FormInput, Layout, Columns } from "lucide-vue-next"

export interface NavigationItem {
  name: string
  path: string
}

export interface NavigationGroup {
  name: string
  icon?: Component
  children: NavigationItem[]
}

export const navigation: NavigationGroup[] = [
  {
    name: "Getting Started",
    icon: BookOpen,
    children: [
      { name: "Installation", path: "/installation" },
      { name: "Theme", path: "/theme" },
      { name: "Contribution Guide", path: "/contribution-guide" },
    ],
  },
  {
    name: "Components",
    icon: Blocks,
    children: [
      { name: "Accordion", path: "/components/accordion" },
      { name: "Alert", path: "/components/alert" },
      { name: "Aspect Ratio", path: "/components/aspect-ratio" },
      { name: "Avatar", path: "/components/avatar" },
      { name: "Badge", path: "/components/badge" },
      { name: "Breadcrumb", path: "/components/breadcrumb" },
      { name: "Button", path: "/components/button" },
      { name: "Button Group", path: "/components/button-group" },
      { name: "Carousel", path: "/components/carousel" },
      { name: "Collapsible", path: "/components/collapsible" },
      { name: "Combobox", path: "/components/combobox" },
      { name: "Command", path: "/components/command" },
      { name: "Confirm Dialog", path: "/components/confirm-dialog" },
      { name: "Context Menu", path: "/components/context-menu" },
      { name: "Dropdown Menu", path: "/components/dropdown-menu" },
      { name: "Empty", path: "/components/empty" },
      { name: "Flasher", path: "/components/flasher" },
      { name: "Hover Card", path: "/components/hover-card" },
      { name: "Item", path: "/components/item" },
      { name: "Kbd", path: "/components/kbd" },
      { name: "Menubar", path: "/components/menubar" },
      { name: "Popover", path: "/components/popover" },
      { name: "Progress", path: "/components/progress" },
      { name: "Scroll Area", path: "/components/scroll-area" },
      { name: "Separator", path: "/components/separator" },
      { name: "Sidebar", path: "/components/sidebar" },
      { name: "Skeleton", path: "/components/skeleton" },
      { name: "Sonner", path: "/components/sonner" },
      { name: "Spinner", path: "/components/spinner" },
      { name: "Tip", path: "/components/tip" },
    ],
  },
  {
    name: "Forms",
    icon: FormInput,
    children: [
      { name: "Calendar", path: "/components/calendar" },
      { name: "Checkbox", path: "/components/checkbox" },
      { name: "Field", path: "/components/field" },
      { name: "Form", path: "/components/form" },
      { name: "Input", path: "/components/input" },
      { name: "Input Group", path: "/components/input-group" },
      { name: "Input OTP", path: "/components/input-otp" },
      { name: "Label", path: "/components/label" },
      { name: "Number Field", path: "/components/number-field" },
      { name: "Pin Input", path: "/components/pin-input" },
      { name: "Radio Group", path: "/components/radio-group" },
      { name: "Range Calendar", path: "/components/range-calendar" },
      { name: "Select", path: "/components/select" },
      { name: "Slider", path: "/components/slider" },
      { name: "Switch", path: "/components/switch" },
      { name: "Tags Input", path: "/components/tags-input" },
      { name: "Textarea", path: "/components/textarea" },
      { name: "Toggle", path: "/components/toggle" },
      { name: "Toggle Group", path: "/components/toggle-group" },
    ],
  },
  {
    name: "Page Layout",
    icon: Layout,
    children: [
      { name: "Alert Dialog", path: "/components/alert-dialog" },
      { name: "Card", path: "/components/card" },
      { name: "Chart", path: "/components/chart" },
      { name: "Dialog (modal)", path: "/components/dialog" },
      { name: "Drawer", path: "/components/drawer" },
      { name: "Heading", path: "/components/heading" },
      { name: "Pagination", path: "/components/pagination" },
      { name: "Resizable", path: "/components/resizable" },
      { name: "Sheet / Slideover", path: "/components/sheet" },
      { name: "Stepper", path: "/components/stepper" },
      { name: "Table", path: "/components/table" },
      { name: "Tabs", path: "/components/tabs" },
    ],
  },
  {
    name: "App Layouts",
    icon: Columns,
    children: [{ name: "Two Column", path: "/components/two-column-layout" }],
  },
]
