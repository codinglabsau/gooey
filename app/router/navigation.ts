export interface NavigationItem {
  name: string
  path: string
}

export interface NavigationGroup {
  name: string
  children: NavigationItem[]
}

export const navigation: NavigationGroup[] = [
  {
    name: "Getting Started",
    children: [
      { name: "Installation", path: "/installation" },
      { name: "Theme", path: "/theme" },
      { name: "Contribution Guide", path: "/contribution-guide" },
    ],
  },
  {
    name: "Components",
    children: [
      { name: "Accord", path: "/components/accordion" },
      { name: "Alert", path: "/components/alert" },
      { name: "Avatar", path: "/components/avatar" },
      { name: "Badge", path: "/components/badge" },
      { name: "Breadcrumb", path: "/components/breadcrumb" },
      { name: "Button", path: "/components/button" },
      { name: "Carousel", path: "/components/carousel" },
      { name: "Collapsible", path: "/components/collapsible" },
      { name: "Combobox", path: "/components/combobox" },
      { name: "Command", path: "/components/command" },
      { name: "Confirm Dialog", path: "/components/confirm-dialog" },
      { name: "Context Menu", path: "/components/context-menu" },
      { name: "Dropdown Menu", path: "/components/dropdown-menu" },
      { name: "Empty", path: "/components/empty" },
      { name: "Flasher", path: "/components/flasher" },
      { name: "Popover", path: "/components/popover" },
      { name: "Progress", path: "/components/progress" },
      { name: "Responsive Table", path: "/components/responsive-table" },
      { name: "Separator", path: "/components/separator" },
      { name: "Sidebar", path: "/components/sidebar" },
      { name: "Skeleton", path: "/components/skeleton" },
      { name: "Toast", path: "/components/toast" },
      { name: "Tip", path: "/components/tip" },
    ],
  },
  {
    name: "Forms",
    children: [
      { name: "Checkbox", path: "/components/checkbox" },
      { name: "Input", path: "/components/input" },
      { name: "Input OTP", path: "/components/input-otp" },
      { name: "Label", path: "/components/label" },
      { name: "Select", path: "/components/select" },
      { name: "Slider", path: "/components/slider" },
      { name: "Switch", path: "/components/switch" },
      { name: "Textarea", path: "/components/textarea" },
    ],
  },
  {
    name: "Page Layout",
    children: [
      { name: "Alert Dialog", path: "/components/alert-dialog" },
      { name: "Card", path: "/components/card" },
      { name: "Dialog (modal)", path: "/components/dialog" },
      { name: "Heading", path: "/components/heading" },
      { name: "Sheet / Slideover", path: "/components/sheet" },
      { name: "Drawer", path: "/components/drawer" },
      { name: "Pagination", path: "/components/pagination" },
      { name: "Table", path: "/components/table" },
      { name: "Tabs", path: "/components/tabs" },
    ],
  },
  {
    name: "App Layouts",
    children: [{ name: "Two Column", path: "/components/two-column-layout" }],
  },
]
