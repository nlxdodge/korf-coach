import Category from '../models/Category';
import Exercise from '../models/Exercise';
import SubExercise from '../models/SubExercise';
import Training from '../models/Training';

export default interface State {
    categories: Category[]
    exercises: Exercise[]
    subExercises: SubExercise[]
    trainings: Training[]
}