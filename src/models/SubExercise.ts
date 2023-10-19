import { Category } from "./Category"

export class SubExercise {
    id: string
    name: string
    description: string
    maxScore: number
    maxTime: number
    categories: Category[]

    constructor(id: string, name: string, description: string, maxScore: number, maxTime: number, categories: Category[]) {
        this.id = id
        this.name = name
        this.description = description
        this.maxScore = maxScore
        this.maxTime = maxTime
        this.categories = categories
    }
}