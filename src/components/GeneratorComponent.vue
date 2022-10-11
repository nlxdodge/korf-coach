<template>
  <Card class="training-generator">
    <template #title>
      <div class="align-center">
        Stel een training samen
        <InfoComponent title="Hoe werkt het?">
          De training structuur die wij aanhouden begint met een warming-up met
          daarna oefeningen en als laatste een partijtje. De categoriën kunnen
          gebruikt worden om een training specifieker te maken. De sliders zijn
          om het aantal minuten van de oefeningen te beïnvloeden.
        </InfoComponent>
      </div>
    </template>
    <template #content>
      <div class="p-d-flex">
        <span class="p-float-label">
          <MultiSelect
            id="category-select"
            v-model="selectedCategories"
            name="category-select"
            class="category-select"
            :options="store.state.categories"
            option-label="label"
            scroll-height="250px"
            display="chip"
            :show-toggle-all="false"
          >
            <template #option="option">
              <div
                class="category-select-option"
                :style="'color: ' + option.option.color + ';'"
              >
                <div class="icon">
                  <font-awesome-icon :icon="['fas', option.option.icon]" />
                </div>
                <p>{{ option.option.label }}</p>
              </div>
            </template>
          </MultiSelect>
          <label for="category-select">Selecteer categoriën</label>
        </span>

        <p>
          Speler aantal: {{ training.people }}
          <InfoComponent title="Work in Progress">
            Momenteel is het spelers aantal nog niet werkende voor de training
            genratie
          </InfoComponent>
        </p>
        <Slider
          v-model="training.people"
          class="people-display"
          :step="1"
          :min="1"
          :max="30"
        />

        <p>Lengte training (min): {{ trainingMinutes }}</p>
        <Slider
          v-model="trainingMinutes"
          :step="1"
          :min="15"
          :max="120"
        />
        <div class="time-display">
          <p>Warming-up: {{ trainingSplits[0] }} min.</p>
          <p>Oefeningen: {{ trainingSplits[1] - trainingSplits[0] }} min.</p>
          <p>Partijtje: {{ trainingMinutes - trainingSplits[1] }} min.</p>
        </div>
        <Slider
          v-model="trainingSplits"
          :range="true"
          :step="1"
          :max="trainingMinutes"
        />
      </div>
    </template>
    <template #footer>
      <div class="actions">
        <Button @click="generateTraining()">
          <font-awesome-icon :icon="['fas', 'cogs']" />Maak Training
        </Button>
        <Button
          class="p-button-danger p-button-outlined"
          @click="resetFeatures()"
        >
          <font-awesome-icon :icon="['fas', 'trash']" />Reset
        </Button>
      </div>
    </template>
  </Card>
  <Card class="training">
    <template #title>
      <div class="align-center">Jouw persoonlijke training</div>
    </template>
    <template #content>
      <ExerciseCard
        v-for="(exercise, index) in training.exercises"
        :key="exercise.id + '_' + index"
        class="exercise-card"
        :exercise="exercise"
      />
      <p
        v-if="training.exercises.length == 0"
        class="empty"
      >
        Druk op "Maak Training" om oefeningen willekeurig te kiezen.
      </p>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import ExerciseCard from '@/components/ExerciseComponent.vue'
  import InfoComponent from '@/components/InfoComponent.vue'
  import { Category } from '@/models/Category'
  import { Exercise } from '@/models/Exercise'
  import { Training } from '@/models/Training'
  import Button from 'primevue/button'
  import Card from 'primevue/card'
  import MultiSelect from 'primevue/multiselect'
  import Slider from 'primevue/slider'
  import { ref, watch } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  const defaultCategories = ['shoot', 'run', 'vs', 'fun']
  const defaultNormalExercises = store.state.exercises.filter((ex: Exercise) =>
    ex.categories.some((category) => defaultCategories.includes(category)),
  )

  let training = ref({} as Training)
  training.value.date = new Date()
  training.value.people = 12
  training.value.exercises = [] as Exercise[]

  let selectedCategories = ref([] as Category[])
  let trainingMinutes = ref(60)
  let trainingSplits = ref([15, 45])

  watch(trainingMinutes, (newMinutes: number) => {
    if (trainingSplits.value[1] > newMinutes) {
      trainingSplits.value[1] = newMinutes
      if (trainingSplits.value[0] >= trainingSplits.value[1]) {
        trainingSplits.value[0] = trainingSplits.value[1] - 5
      }
    }
  })

  function generateTraining() {
    const exercises = [] as Exercise[]
    const warmUpMinutes = trainingSplits.value[0]
    const exerciseMinutes = trainingSplits.value[1] - trainingSplits.value[0]
    const vsExerciseMinutes = trainingMinutes.value - trainingSplits.value[1]
    exercises.push(generateWarmUp(warmUpMinutes))
    exercises.push(
      ...generateNormalExercise(selectedCategories.value, exerciseMinutes),
    )
    const test = generateVSExercise(vsExerciseMinutes)
    console.log(test)
    exercises.push(test)
    training.value.exercises = exercises
  }

  function generateWarmUp(minutes: number): Exercise {
    let generatedWarmup = randomExerciseByCategories(['warm-up'])
    generatedWarmup.generatedMinutes = minutes
    return generatedWarmup
  }

  function generateNormalExercise(
    categories: Category[],
    minutes: number,
  ): Exercise[] {
    let totalTime = 0
    let exercises = [] as Exercise[]
    while (totalTime <= minutes) {
      const exercise = randomExerciseByCategories(
        categories.map((category) => category.label),
      )
      exercise.generatedMinutes = getGeneratedMinutes(exercise)
      exercises.push(exercise)
      totalTime += exercise.generatedMinutes
    }
    return exercises
  }

  function generateVSExercise(minutes: number): Exercise {
    let vsExercise = randomExerciseByCategories(['vs-all'])
    vsExercise.generatedMinutes = minutes
    return vsExercise
  }

  function getGeneratedMinutes(exercise: Exercise): number {
    const min = exercise.timeGenerate.split('-')[0] as unknown as number
    const max = exercise.timeGenerate.split('-')[1] as unknown as number
    return randomRange(min, max)
  }

  function randomExerciseByCategories(categories: string[]) {
    let filteredExercises = store.state.exercises.filter((ex: Exercise) =>
      ex.categories.some((category) => categories.includes(category)),
    )
    if (filteredExercises.length == 0) {
      filteredExercises = defaultNormalExercises
    }
    let generatedExercise =
      filteredExercises[randomRange(0, filteredExercises.length)]
    while (generatedExercise in training.value.exercises) {
      generatedExercise =
        filteredExercises[randomRange(0, filteredExercises.length)]
    }
    return generatedExercise
  }

  function randomRange(min: number, max: number): number {
    return Math.floor(random() * (max - min) + min)
  }

  function random(): number {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32
  }

  function resetFeatures() {
    selectedCategories.value = []
    trainingMinutes.value = 60
    trainingSplits.value = [15, 45]
    training.value.exercises = []
  }
</script>

<style scoped lang="scss">
  .training-generator {
    margin-top: 25px;
    color: #1c2221;

    .time-display {
      display: flex;
      justify-content: space-around;

      p {
        flex: 0 0 25%;
      }
    }

    .p-slider-range {
      background: #cc0c0c;
    }

    .help {
      cursor: pointer;
    }

    .category-select {
      width: 100%;
    }

    .actions {
      display: flex;
      gap: 20px;

      button {
        flex-grow: 1;
        border-radius: 5px;
        justify-content: center;
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  .training {
    margin-top: 25px;
    border-radius: 25px;
    border: none;

    .empty {
      text-align: center;
      color: lighten(#000, 75%);
    }
  }

  .category-select-option {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    div {
      flex: 0 0 30px;
    }

    p {
      margin: 0;
    }
  }

  .exercise-card {
    border-radius: 0;
    border: none;
    margin-top: 10px;
  }
</style>
