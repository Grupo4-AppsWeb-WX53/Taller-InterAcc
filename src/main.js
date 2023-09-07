import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/components/locales/i18n";
import PrimeVue from 'primevue/config';
import Button from "primevue/button";

const app = createApp(App);
app.use(i18n);
app.use(PrimeVue);
app.component('Button', Button);
app.mount('#app')