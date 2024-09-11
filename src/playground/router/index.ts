import { createRouter, createWebHistory } from "vue-router"

import Notification from "@/playground/components/Notification.vue"
import Toast from "@/playground/components/Toast.vue"

const routes = [
  { path: "/" },
  { path: "/notification", component: Notification },
  { path: "/toast", component: Toast },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'bg-gray-800 text-white',
  linkExactActiveClass: 'border-indigo-700',
  routes
})

export default router
