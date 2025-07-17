import { defineStore } from 'pinia'
import Category from '../models/Category'
import Exercise from '../models/Exercise'
import SubExercise from '../models/SubExercise'
import data from './data.json'
import type State from '../models/State'
import type Training from '../models/Training'

export const globalStore = defineStore('GlobalStore', {
    state: () => {
        return {
            categories: [] as Category[],
            exercises: [] as Exercise[],
            subExercises: [] as SubExercise[],
            training: {
                id: crypto.randomUUID(),
                name: "Nieuwe Training",
                date: new Date(),
                people: 12,
                exercises: [] as Exercise[]
            } as Training,
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
        },
        getDefaultCategories: (state) => (): Category[] => {
            return state.categories.filter((c: Category) => ['shoot', 'run', 'vs', 'fun'].includes(c.id))
        }
    },
    actions: {
        loadData() {
            this.categories = data.categories
            this.subExercises = data.subExercises.map(x => new SubExercise(x.id ?? "", x.name ?? "", x.description ?? "", x.maxScore ?? 0, x.maxTime ?? 0,
                (x.categories ?? []).map(category => this.getCategoryById(category)).filter((category): category is Category => category !== undefined)))
            this.exercises = data.exercises.map(x => new Exercise(x.id, x.name, x.description, Number(x.maxScore) ?? 0, Number(x.maxTime) ?? 0,
                x.subExercises.map(subExercise => this.getSubExcerCiseById(subExercise)).filter((subExercise): subExercise is SubExercise => subExercise !== undefined),
                x.categories.map(category => this.getCategoryById(category)).filter((category): category is Category => category !== undefined)
            ))

            const training = localStorage.getItem("training")
            const trainings = localStorage.getItem("trainings")
            if (training != undefined) {
                this.training = JSON.parse(training)
            }
            if (trainings != undefined) {
                this.trainings = JSON.parse(trainings)
            }
        },
        saveTraining(training: Training) {
            this.training = training
            this.trainings.push(training)
            this.saveData()
        },
        deleteTraining(trainingId: String) {
            this.trainings = this.trainings.filter(tr => tr.id !== trainingId)
            this.saveData()
        },
        saveTrainings(trainings: Training[]) {
            this.trainings = trainings
            this.saveData()
        },
        saveData() {
            localStorage.setItem('training', JSON.stringify(this.training))
            localStorage.setItem('trainings', JSON.stringify(this.trainings))
        }
    }
})