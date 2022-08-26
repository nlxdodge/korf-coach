import { Category } from '@/models/Category'
import { State } from '@/models/State'
import { createStore } from 'vuex'
import data from './korfbal.json'
import { Exercise } from '../models/Exercise'

const state: State = {
  categories: [],
  exercises: []
}

const mutations = {
  setCategories(_localState: State, payload: Category[]) {
    state.categories = payload
  },
  setExercises(_localState: State, payload: Exercise[]) {
    state.exercises = payload
  }
}

const actions = {
  loadData({ commit }) {
    commit('setCategories', data.categories)
    commit('setExercises', data.exercises)
  }
}

const getters = {
  getCategoryByValue: (_state: State) => (name: string) => {
    return state.categories.find((c: Category) => {
      return c.value === name
    })
  }
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})
