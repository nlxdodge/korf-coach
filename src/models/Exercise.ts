export interface Exercise {
    id: string
    categoryIds: string[]
    name: string
    description: string
    peopleNeeded: string
    switchWhen: string
    exerciseFinishedWhen: string
    timeEstimate: string
    repeatTimesGenerate: string
    scoreGenerate: string
    exerciseTypeId: string
    subExercises: Exercise[]
}
