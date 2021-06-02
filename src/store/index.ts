import { State } from '@/models/State'
import { createStore } from 'vuex'
import data from './korfbal.json'

const state: State = {
  categories: [],
  exercises: []
}

export default createStore({
  state,
  mutations: {
    setCategories (localState, payload) {
      localState.categories = payload
    },
    setExercises (localState, payload) {
      state.exercises = payload
    }
  },
  actions: {
    loadData ({ commit }) {
      commit('setCategories', data.categories)
      commit('setExercises', data.exercises)
    }
  }
})
