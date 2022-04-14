import { Exercise } from '@/models/Exercise'
import { Category } from './Category'

export interface State {
    categories: Category[]
    exercises: Exercise[]
}
