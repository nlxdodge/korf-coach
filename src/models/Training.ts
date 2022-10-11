import { Exercise } from './Exercise'
export interface Training {
    name: string
    date: Date
    people: number
    exercises: Exercise[]
}
