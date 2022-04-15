import { Category } from '@/models/Category'
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
    setCategories(localState, payload) {
      state.categories = payload
    },
    setExercises(localState, payload) {
      state.exercises = payload
    }
  },
  actions: {
    loadData({ commit }) {
      commit('setCategories', data.categories)
      commit('setExercises', data.exercises)
    }
  },
  getters: {
    getCategoryByValue: (state) => (name: string) => {
      return state.categories.find((c: Category) => {
        return c.value === name
      })
    }
  }
})
