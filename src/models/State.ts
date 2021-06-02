import { Category } from './Category'
import { Exercise } from './Exersice'

export interface State {
    categories: Category[],
    exercises: Exercise[]
}
