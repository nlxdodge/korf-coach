import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/nova/theme.css'
import { createApp } from 'vue'
import App from './App.vue'
import './fontawesome'
import router from './router'
import store from './store'

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .mount('#app')
