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

// Common components
import Input from "@/components/base/input/Input.vue";

createApp(App).use(router).use(pinia).component("VInput", Input).mount("#app");
