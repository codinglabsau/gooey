import { createRouter, createWebHistory } from "vue-router"

import Home from "@/playground/Home.vue"
import ShadcnComponent from "@/playground/ShadcnComponent.vue"
import Notification from "@/playground/components/Notification.vue"
import Toast from "@/playground/components/Toast.vue"

const routes = [
  { path: "/", component: Home },
  {
    path: "/components",
    name: "Components",
    children: [
      { name: "Dropdown Menu", path: "dropdown-menu", component: ShadcnComponent },
      { name: "Notification", path: "notification", component: Notification },
      { name: "Sheet", path: "sheet", component: ShadcnComponent },
      { name: "Switch", path: "switch", component: ShadcnComponent },
      { name: "Toast", path: "toast", component: Toast },
    ],
  },
  {
    path: "/layouts",
    name: "Layouts",
    children: [{ name: "Two Column", path: "dropdown-menu", component: ShadcnComponent }],
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "!font-bold",
  routes,
})

export default router
