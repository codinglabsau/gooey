import { createRouter, createWebHistory } from "vue-router"

import {
  Index,

  // getting started
  Installation,
  ContributionGuide,
  Theme,

  // demos
  TwoColumnLayoutDemo,

  // components
  Accord,
  Avatar,
  AlertDialog,
  Badge,
  Button,
  Card,
  Carousel,
  Checkbox,
  Collapsible,
  Combobox,
  Command,
  ConfirmDialog,
  Dialog,
  Drawer,
  DropdownMenu,
  Flasher,
  Heading,
  Input,
  Label,
  Popover,
  Progress,
  Select,
  Sheet,
  Skeleton,
  Slider,
  Switch,
  Table,
  Tabs,
  Textarea,
  Toast,
  Tip,
  TwoColumnLayout,
} from "@app/pages"
import ArticleLayout from "@app/layouts/ArticleLayout.vue"
import ComponentLayout from "@app/layouts/ComponentLayout.vue"

const routes = [
  { path: "", component: Index },
  { path: "/demo/two-column-layout", component: TwoColumnLayoutDemo },
  {
    name: "Getting Started",
    children: [
      {
        name: "Installation",
        path: "/installation",
        component: Installation,
        meta: { layout: ArticleLayout, shadcn: true },
      },
      {
        name: "Theme",
        path: "/theme",
        component: Theme,
        meta: { layout: ArticleLayout, shadcn: true },
      },
      {
        name: "Contribution Guide",
        path: "/contribution-guide",
        component: ContributionGuide,
        meta: { layout: ArticleLayout, shadcn: true },
      },
    ],
  },
  {
    name: "Components",
    children: [
      {
        name: "Accord",
        path: "/components/accordion",
        component: Accord,
        meta: { layout: ComponentLayout },
      },
      {
        name: "Avatar",
        path: "/components/avatar",
        component: Avatar,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Badge",
        path: "/components/badge",
        component: Badge,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Button",
        path: "/components/button",
        component: Button,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Carousel",
        path: "/components/carousel",
        component: Carousel,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Collapsible",
        path: "/components/collapsible",
        component: Collapsible,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Combobox",
        path: "/components/combobox",
        component: Combobox,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Command",
        path: "/components/command",
        component: Command,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Confirm Dialog",
        path: "/components/confirm-dialog",
        component: ConfirmDialog,
        meta: { layout: ComponentLayout, shadcn: false },
      },
      {
        name: "Dropdown Menu",
        path: "/components/dropdown-menu",
        component: DropdownMenu,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Flasher",
        path: "/components/flasher",
        component: Flasher,
        meta: { layout: ComponentLayout },
      },
      {
        name: "Popover",
        path: "/components/popover",
        component: Popover,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Progress",
        path: "/components/progress",
        component: Progress,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Skeleton",
        path: "/components/skeleton",
        component: Skeleton,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Toast",
        path: "/components/toast",
        component: Toast,
        meta: { layout: ComponentLayout, shadcn: true, modified: true },
      },
      {
        name: "Tip",
        path: "/components/tip",
        component: Tip,
        meta: { layout: ComponentLayout },
      },
    ],
  },
  {
    name: "Forms",
    children: [
      {
        name: "Checkbox",
        path: "/components/checkbox",
        component: Checkbox,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Input",
        path: "/components/input",
        component: Input,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Label",
        path: "/components/label",
        component: Label,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Select",
        path: "/components/select",
        component: Select,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Slider",
        path: "/components/slider",
        component: Slider,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Switch",
        path: "/components/switch",
        component: Switch,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Textarea",
        path: "/components/textarea",
        component: Textarea,
        meta: { layout: ComponentLayout, shadcn: true },
      },
    ],
  },
  {
    name: "Page Layout",
    children: [
      {
        name: "Alert Dialog",
        path: "/components/alert-dialog",
        component: AlertDialog,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Card",
        path: "/components/card",
        component: Card,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Dialog (modal)",
        path: "/components/dialog",
        component: Dialog,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Heading",
        path: "/components/heading",
        component: Heading,
        meta: { layout: ComponentLayout },
      },
      {
        name: "Sheet / Slideover",
        path: "/components/sheet",
        component: Sheet,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Drawer",
        path: "/components/drawer",
        component: Drawer,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Table",
        path: "/components/table",
        component: Table,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Tabs",
        path: "/components/tabs",
        component: Tabs,
        meta: { layout: ComponentLayout, shadcn: true },
      },
    ],
  },
  {
    name: "App Layouts",
    children: [
      {
        name: "Two Column",
        path: "/components/two-column-layout",
        component: TwoColumnLayout,
        meta: { layout: ComponentLayout },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "!font-bold",
  routes,
})

export default router
