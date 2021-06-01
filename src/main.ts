import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'primevue/resources/themes/nova/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import './mixins'
import './fontawesome'

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .mount('#app')
