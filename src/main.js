import { createApp } from "vue";
import App from "./App.vue";

// Pinia
import { createPinia } from "pinia";
const pinia = createPinia();

// Router
import router from "@/router";

// Styles
import "./assets/tailwind.css";
import "./assets/styles/style.scss";

createApp(App).use(router).use(pinia).mount("#app");
