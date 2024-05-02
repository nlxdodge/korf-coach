import Category from "./Category";
import SubExercise from "./SubExercise";

export default class Exercise {
    id: string
    name: string
    description: string
    maxScore: number
    maxTime: number
    subExercises: SubExercise[] = []
    categories: Category[] = []

    constructor(id: string, name: string, description: string, maxScore: number, maxTime: number, subExercises: SubExercise[], categories: Category[]) {
        this.id = id
        this.name = name
        this.description = description
        this.maxScore = maxScore
        this.maxTime = maxTime
        this.subExercises = subExercises
        this.categories = categories
    }
}
