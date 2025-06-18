import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import Aura from '@primeuix/themes/aura';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './fontawesome'
import router from './router'

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(ConfirmationService)
  .use(router)
  .use(PrimeVue, {
    theme: Aura
  })
  .use(createPinia())
  .mount('#app')
