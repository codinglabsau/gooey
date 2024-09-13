import { createApp } from "vue"
import "@/presets/slate.css"
import "@app/style.css"
import App from "./App.vue"
import router from "./router"

createApp(App)
  .use(router)
  .mount("#app")
