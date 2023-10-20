import Exercise from './Exercise';
export default class Training {
    id: string
    name: string
    date: Date
    people: number
    exercises: Exercise[]

    constructor(id: string, name: string, date: Date, people: number, exercises: Exercise[]) {
        this.id = id
        this.name = name
        this.date = date
        this.people = people
        this.exercises = exercises
    }
}
