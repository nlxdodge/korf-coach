<template>
  <Card class="training-generator">
    <template #title>
      <div class="align-center">
        Stel een training samen
        <InfoComponent title="Hoe werkt het?">
          De training structuur die wij aanhouden begint met een warming-up met daarna oefeningen en
          als laatste een partijtje. De categoriën kunnen gebruikt worden om een training
          specifieker te maken. De sliders zijn om het aantal minuten van de oefeningen te
          beïnvloeden.
        </InfoComponent>
      </div>
    </template>
    <template #content>
      <div class="p-d-flex">
        <span class="p-float-label">
          <MultiSelect id="category-select" v-model="selectedCategories" name="category-select" class="category-select"
            :options="store.categories" option-label="name" scroll-height="250px" display="chip"
            :show-toggle-all="false">
            <template #option="option">
              <div class="category-select-option" :style="'color: ' + option.option.color + ';'">
                <div class="icon">
                  <font-awesome-icon :icon="['fas', option.option.icon]" />
                </div>
                <p>{{ option.option.name }}</p>
              </div>
            </template>
          </MultiSelect>
          <label for="category-select">Selecteer categoriën</label>
        </span>

        <p>
          Speler aantal: {{ training.people }}
          <InfoComponent title="Work in Progress">
            Momenteel heeft het speler aantal nog geen impact tijdens het maken van een training.
          </InfoComponent>
        </p>
        <Slider v-model="training.people" class="people-display" :step="1" :min="1" :max="30" />

        <p>Lengte training: {{ trainingMinutes }} min</p>
        <Slider v-model="trainingMinutes" :step="1" :min="15" :max="120" />
        <div class="time-display">
          <p>Warming-up: {{ trainingSplits[0] }} min.</p>
          <p>Oefeningen: {{ trainingSplits[1] - trainingSplits[0] }} min.</p>
          <p>Partijtje: {{ trainingMinutes - trainingSplits[1] }} min.</p>
        </div>
        <Slider v-model="trainingSplits" :range="true" :step="1" :max="trainingMinutes" />
        <div class="input-field">
          <FloatLabel>
            <InputText id="training-name" type="text" v-model="training.name" />
            <label for="training-name">Naam van de training</label>
          </FloatLabel>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="actions">
        <Button @click="generateTraining()">
          <font-awesome-icon :icon="['fas', 'cogs']" />Maak Training
        </Button>
      </div>
      <div class="actions">
        <Button severity="Success" @click="saveTraining()">
          <font-awesome-icon :icon="['fas', 'floppy-disk']" />Opslaan voor later
        </Button>
      </div>
    </template>
  </Card>
  <Card class="training">
    <template #title>
      <div class="align-center">Huidige training</div>
    </template>
    <template #content>
      <ExerciseCard v-for="(exercise, index) in training.exercises" :key="exercise.id + '_' + index"
        class="exercise-card" :exercise="exercise" />
      <p v-if="training.exercises.length == 0" class="empty">
        Druk op "Maak Training" om oefeningen willekeurig toe te voegen.
      </p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import ExerciseCard from '../components/ExerciseComponent.vue'
import InfoComponent from '../components/InfoComponent.vue'
import InputText from 'primevue/inputtext'
import Category from '../models/Category'
import Exercise from '../models/Exercise'
import Training from '../models/Training'
import Button from 'primevue/button'
import Card from 'primevue/card'
import MultiSelect from 'primevue/multiselect'
import FloatLabel from 'primevue/floatlabel'
import Slider from 'primevue/slider'
import { ref, watch } from 'vue'
import { globalStore } from '../store/GlobalStore'

const store = globalStore()

const defaultCategories = store.getDefaultCategories()
const defaultNormalExercises = store.exercises.filter((e: Exercise) =>
  e.categories.some((c: Category) =>
    defaultCategories.map((x) => x != undefined && x.id).includes(c.id)
  )
)

const training = ref({
  id: crypto.randomUUID(),
  date: new Date(),
  people: 12,
  exercises: [] as Exercise[]
} as Training)

if (store.training != undefined) {
  Object.assign(training.value, store.training)
}

const selectedCategories = ref([] as Category[])
const trainingMinutes = ref(60)
const trainingSplits = ref([10, 40])

watch(trainingMinutes, (newMinutes: number) => {
  if (trainingSplits.value[1] > newMinutes) {
    trainingSplits.value[1] = newMinutes
    if (trainingSplits.value[0] >= trainingSplits.value[1]) {
      trainingSplits.value[0] = trainingSplits.value[1] - 5
    }
  }
})

function saveTraining() {
  console.log("Saving this", training.value)
  store.saveTraining(training.value)
}

function generateTraining() {
  const exercises = [] as Exercise[]
  const warmUpMinutes = trainingSplits.value[0]
  const exerciseMinutes = trainingSplits.value[1] - trainingSplits.value[0]
  const vsExerciseMinutes = trainingMinutes.value - trainingSplits.value[1]
  exercises.push(generateWarmUp(warmUpMinutes))
  exercises.push(...generateNormalExercise(selectedCategories.value, exerciseMinutes))
  exercises.push(generateVSExercise(vsExerciseMinutes))
  training.value.id = crypto.randomUUID()
  training.value.date = new Date()
  training.value.exercises = exercises
  console.log('saved new stuffs', crypto.randomUUID())
  console.log('saved new stuffs', new Date())
}

function generateWarmUp(minutes: number): Exercise {
  let generatedWarmup = randomExerciseByCategories(['warm-up'])
  generatedWarmup.maxTime = minutes
  return generatedWarmup
}

function generateNormalExercise(categories: Category[], minutes: number): Exercise[] {
  let totalTime = 0
  let exercises = [] as Exercise[]
  while (totalTime <= minutes) {
    const exercise = randomExerciseByCategories(categories.map((category) => category.id))
    exercises.push(exercise)
    totalTime += exercise.maxTime
  }
  return exercises
}

function generateVSExercise(minutes: number): Exercise {
  let vsExercise = randomExerciseByCategories(['vs-all'])
  vsExercise.maxTime = minutes
  return vsExercise
}

function randomExerciseByCategories(categories: string[]): Exercise {
  // filter only by one of the specified categories in the list
  let filteredExercises = store.exercises.filter((exercise: Exercise) =>
    exercise.categories.some((c: Category) => categories.includes(c.id))
  )
  // use default selection when nothing is found
  if (filteredExercises.length == 0) {
    filteredExercises = defaultNormalExercises
  }

  let generatedExercise = filteredExercises[randomRange(0, filteredExercises.length)]
  // keep picking random exercises but take no duplicates
  while (training.value.exercises.includes(generatedExercise)) {
    generatedExercise = filteredExercises[randomRange(0, filteredExercises.length)]
  }
  return generatedExercise
}

function randomRange(min: number, max: number): number {
  return Math.floor(random() * (max - min) + min)
}

function random(): number {
  return window.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32
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

  .input-field {
    margin-top: 35px;

    input {
      width: 100%;
    }
  }

  .actions {
    margin: 0 0 10px 0;
    display: flex;
    gap: 20px;

    button {
      flex-grow: 1;
      border-radius: theme.$border-radius;
      justify-content: center;
    }

    svg {
      margin-right: 10px;
    }
  }
}

.training {
  margin-top: 25px;
  border-radius: theme.$border-radius;
  border: none;

  .empty {
    text-align: center;
    color: #bfbfbf
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
  border-radius: theme.$border-radius;
  border: none;
  margin-top: 10px;
}
</style>
