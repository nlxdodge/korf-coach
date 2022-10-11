export interface Exercise {
    id: string
    categories: string[]
    name: string
    description: string
    peopleNeeded: string
    switchWhen: string
    exerciseFinishedWhen: string
    timeGenerate: string
    repeatTimesGenerate: string
    scoreGenerate: string
    subExercises: Exercise[]

    generatedMinutes: number
}
