import { Store } from 'vuex'
import { State } from './models/State'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
