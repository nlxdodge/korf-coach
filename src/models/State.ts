import { Category } from './Category'
import { Exercise } from '@/models/Exercise'

export interface State {
    categories: Category[]
    exercises: Exercise[]
}
