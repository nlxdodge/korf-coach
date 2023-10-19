import { Exercise } from '@/models/Exercise'
import { Category } from './Category'
import { SubExercise } from './SubExercise'
import { Training } from './Training'

export interface State {
    categories: Category[]
    exercises: Exercise[]
    subExercises: SubExercise[]
    trainings: Training[]
}
