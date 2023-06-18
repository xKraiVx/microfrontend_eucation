import { createApp, ref } from "vue";
import Dashboard from "./components/Dashboard.vue";
import PrimeVue from "primevue/config";

const mount = (el) => {
  const app = createApp(Dashboard);

  app.use(PrimeVue);

  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_dashboard-dev-root");
  if (el) {
    mount(el);
  }
}

export { mount };
