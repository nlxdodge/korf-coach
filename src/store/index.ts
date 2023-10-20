import Category from '@/models/Category'
import Exercise from '@/models/Exercise'
import SubExercise from '@/models/SubExercise'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import ExerciseData from '../models/ExerciseData'
import SubExerciseData from '../models/SubExerciseData'
import data from './korfbal.json'
import State from './State'

const state: State = new State()

const mutations = {
  setCategories(_localState: State, payload: Category[]) {
    state.categories = payload.map(
      (payload: Category) => new Category(
        payload.id, 
        payload.order, 
        payload.name, 
        payload.description, 
        payload.icon, 
        payload.color
      )
    )
  },
  setExercises(_localState: State, payload: ExerciseData[]) {
    state.exercises = payload.map(
      (e: ExerciseData) => new Exercise(
        e.id, 
        e.name, 
        e.description, 
        e.maxScore, 
        e.maxTime,
        e.subExercises.map((id: string) => getters.getSubExcerCiseById()(id)),
        e.categories.map((id: string) => getters.getCategoryById()(id))
      )
    )
  },
  setSubExercises(_localState: State, payload: SubExerciseData[]) {
    state.subExercises = payload.map(
      (s: SubExerciseData) => new SubExercise(
        s.id,
        s.name, 
        s.description, 
        s.maxScore, 
        s.maxTime, 
        s.categories.map((id: string) => getters.getCategoryById()(id))
      )
    )
  }
}

const actions = {
  loadData({ commit }: { commit: Function }) {
    commit('setCategories', data.categories)
    commit('setExercises', data.exercises)
    commit('setSubExercises', data.subExercises)
  }
}

const getters = {
  getCategoryById: () => (id: string): Category => {
    const category = state.categories.find((c: Category) => c.id === id)
    return category != null ? category : new Category("null", 999, "null", "null", "null", "null")
  },
  getExcerCiseById: () => (id: string): Exercise => {
    const exercise = state.exercises.find((e: Exercise) => e.id === id)
    return exercise != null ? exercise : new Exercise("null", "null", "null", 0, 0, [], []) 
  },
  getSubExcerCiseById: () => (id: string): SubExercise => {
    const subExercise = state.subExercises.find((e: SubExercise) => e.id === id)
    return subExercise != null ? subExercise : new SubExercise("null", "null", "null", 0, 0, [])
  }
}

export const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
  state,
  mutations,
  actions,
  getters
})

export function useStore () {
  return baseUseStore(key)
}
