import { createApp } from "vue"
import "@/presets/slate.css"
import "@app/style.css"
import { GooeyPlugin } from "@"
import App from "./App.vue"
import { RouterLink } from "vue-router"
import router from "./router"

createApp(App)
  .use(router)
  .use(GooeyPlugin, {
    linkComponent: RouterLink
  })
  .mount("#app")
