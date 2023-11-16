import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/main.css";

import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import Notifications from "@kyvg/vue3-notification";

import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(VueQueryPlugin).use(Notifications).mount("#app");
