import { createRouter, createWebHistory } from "vue-router"

import { Index, DropdownMenu, Notification, ShadcnComponent, Toast } from "@app/pages"

const routes = [
  { path: "/", component: Index },
  {
    path: "/components",
    name: "Components",
    children: [
      { name: "Button", path: "/components/button", component: ShadcnComponent },
      { name: "Dropdown Menu", path: "/components/dropdown-menu", component: DropdownMenu },
      { name: "Notification", path: "/components/notification", component: Notification },
      { name: "Sheet", path: "/components/sheet", component: ShadcnComponent },
      { name: "Switch", path: "/components/switch", component: ShadcnComponent },
      { name: "Toast", path: "/components/toast", component: Toast },
    ],
  },
  {
    path: "/layouts",
    name: "Layouts",
    children: [
      { name: "Two Column", path: "/components/dropdown-menu", component: ShadcnComponent },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "!font-bold",
  routes,
})

export default router
