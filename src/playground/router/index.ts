import { createRouter, createWebHistory } from "vue-router"

import Home from "@/playground/Home.vue"
import ShadcnComponent from "@/playground/ShadcnComponent.vue"
import Notification from "@/playground/components/Notification.vue"
import Toast from "@/playground/components/Toast.vue"

const routes = [
  { path: "/", component: Home },
  {
    path: "/components",
    heading: "Components",
    children: [
      { name: "Notification", path: "notification", component: Notification },
      { name: "Sheet", path: "sheet", component: ShadcnComponent },
      { name: "Toast", path: "toast", component: Toast }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "bg-gray-800 text-white",
  linkExactActiveClass: "border-indigo-700",
  routes
})

export default router
