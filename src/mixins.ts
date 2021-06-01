interface Category {
  label: string
  value: string
}

const categories: Array<Category> = [
  { label: 'warm-up', value: 'Warming Up' },
  { label: 'shoot', value: 'Schiet Oefening' },
  { label: 'run', value: 'Loop Oefening' },
  { label: 'vs', value: 'VS Oefening' },
  { label: 'vs-all', value: 'Partijtje' }
]

const warmingUpExercises = [
  'Squads',
  'Planken',
  'Kikker sprongen',
  'Lunges',
  'Shoulder taps',
  'Sit-ups'
]

const mixins = {
  methods: {
    /**
     *
     * @param inputCategories Array<string> of system categories
     * @returns Array<string> of human readable categories
     */
    categoriesToHumanReadAble (inputCategories: Array<string>) {
      return inputCategories.map(inputCategory =>
        categories.find(category => category.label === inputCategory)
      )
    }
  }
}
