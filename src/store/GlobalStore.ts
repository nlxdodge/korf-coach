import { defineStore } from 'pinia'
import Category from '@/models/Category'
import Exercise from '@/models/Exercise'
import SubExercise from '@/models/SubExercise'
import data from './data.json'
import type State from '@/models/State'
import type Training from '@/models/Training'

export const globalStore = defineStore('GlobalStore', {
    state: () => {
        return {
            categories: [] as Category[],
            exercises: [] as Exercise[],
            subExercises: [] as SubExercise[],
            trainings: [] as Training[]
        } as State
    },
    getters: {
        getCategoryById: (state) => (id: string): Category | undefined => {
            return state.categories.find((c: Category) => c.id === id)
        },
        getExcerCiseById: (state) => (id: string): Exercise | undefined => {
            return state.exercises.find((e: Exercise) => e.id === id)
        },
        getSubExcerCiseById: (state) => (id: string): SubExercise | undefined => {
            return state.subExercises.find((e: SubExercise) => e.id === id)
        }
    },
    actions: {
        loadData() {
            this.categories = data.categories
            this.exercises = data.exercises.map(x => new Exercise(x.id, x.name, x.description, x.maxScore, x.maxTime,
                this.subExercises.map(subExercise => this.getSubExcerCiseById(subExercise.id)).filter((subExercise): subExercise is SubExercise => subExercise !== undefined),
                this.categories.map(category => this.getCategoryById(category.id)).filter((category): category is Category => category !== undefined)
            ))
            this.subExercises = data.subExercises.map(x => new SubExercise(x.id, x.name, x.description, x.maxScore, x.maxTime,
                this.categories.map(category => this.getCategoryById(category.id)).filter((category): category is Category => category !== undefined)))
        }
    }
})