import { createRouter, createWebHistory } from "vue-router"

import { Installation, ContributionGuide, Theme, Index, Button, DropdownMenu, Notification, Sheet, Switch, Toast } from "@app/pages"
import ArticleLayout from "@app/layouts/ArticleLayout.vue"
import ComponentLayout from "@app/layouts/ComponentLayout.vue"

const routes = [
  { path: "", component: Index },
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
        name: "Button",
        path: "/components/button",
        component: Button,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Dropdown Menu",
        path: "/components/dropdown-menu",
        component: DropdownMenu,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Notification",
        path: "/components/notification",
        component: Notification,
        meta: { layout: ComponentLayout },
      },
      {
        name: "Sheet",
        path: "/components/sheet",
        component: Sheet,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Switch",
        path: "/components/switch",
        component: Switch,
        meta: { layout: ComponentLayout, shadcn: true },
      },
      {
        name: "Toast",
        path: "/components/toast",
        component: Toast,
        meta: { layout: ComponentLayout, shadcn: true },
      },
    ],
  },
  {
    path: "/layouts",
    name: "Layouts",
    children: [
      // { name: "Two Column", path: "/components/dropdown-menu", component: TwoColumn },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "!font-bold",
  routes,
})

export default router
