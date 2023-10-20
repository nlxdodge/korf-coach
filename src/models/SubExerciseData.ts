export default class SubExerciseData {
    id: string
    name: string
    description: string
    maxScore: number
    maxTime: number
    categories: string[] = []

    constructor(id: string, name: string, description: string, maxScore: number, maxTime: number, categories: string[]) {
        this.id = id
        this.name = name
        this.description = description
        this.maxScore = maxScore
        this.maxTime = maxTime
        this.categories = categories
    }
}