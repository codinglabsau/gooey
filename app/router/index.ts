import { createRouter, createWebHistory } from "vue-router"

import Home from "@app/Home.vue"
import ShadcnComponent from "@app/ShadcnComponent.vue"
import Notification from "@app/pages/Notification.vue"
import Toast from "@app/pages/Toast.vue"

const routes = [
  { path: "/", component: Home },
  {
    path: "/components",
    name: "Components",
    children: [
      { name: "Dropdown Menu", path: "/components/dropdown-menu", component: ShadcnComponent },
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
