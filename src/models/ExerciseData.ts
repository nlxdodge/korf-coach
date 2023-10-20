
export default class ExerciseData {
    id: string
    name: string
    description: string
    maxScore: number
    maxTime: number
    subExercises: string[] = []
    categories: string[] = []

    constructor(id: string, name: string, description: string, maxScore: number, maxTime: number, subExercises: string[], categories: string[]) {
        this.id = id
        this.name = name
        this.description = description
        this.maxScore = maxScore
        this.maxTime = maxTime
        this.subExercises = subExercises
        this.categories = categories
    }
}
