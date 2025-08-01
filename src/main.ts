import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import ConfirmationService from 'primevue/confirmationservice'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './fontawesome'
import router from './router'

const atlantis = definePreset(Aura, {
    semantic: {
        primary: {
            0: '#cc0c0c',
            50: '{red.50}',
            100: '{red.100}',
            200: '{red.200}',
            300: '{red.300}',
            400: '{red.400}',
            500: '{red.500}',
            600: '{red.600}',
            700: '{red.700}',
            800: '{red.800}',
            900: '{red.900}',
            950: '{red.950}'
        }
    }
});

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(ConfirmationService)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: atlantis,
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false,
      }
    }
  })
  .use(createPinia())
  .mount('#app')
