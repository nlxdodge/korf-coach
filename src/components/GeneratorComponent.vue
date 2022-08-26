<template>
  <Card class="training-generator">
    <template #title>
      Training Samenstelling
      <font-awesome-icon
        :icon="['fas', 'question-circle']"
        class="help"
        @click="displayHelp = true"
      />
    </template>
    <template #content>
      <div class="p-d-flex">
        <span class="p-float-label">
          <MultiSelect
            id="category-select"
            v-model="selectedCategories"
            class="category-select"
            :options="store.state.categories"
            option-label="label"
            scroll-height="250px"
            display="chip"
          />
          <label for="category-select">Selecteer categoriën</label>
        </span>

        <p>Lengte training (min): {{ trainingMinutes }}</p>
        <Slider
          v-model="trainingMinutes"
          :step="1"
          :min="15"
          :max="120"
        />
        <p>
          Warm-up tot {{ trainingSplits[0] }} min. Oefeningen tot
          {{ trainingSplits[1] }} min.
        </p>
        <Slider
          v-model="trainingSplits"
          :range="true"
          :step="1"
          :max="trainingMinutes"
        />
      </div>
    </template>
    <template #footer>
      <span class="actions p-buttonset">
        <Button @click="generateTraining()">
          <font-awesome-icon :icon="['fas', 'cogs']" />Maak Training
        </Button>
        <Button
          class="p-button-danger"
          @click="resetFeatures()"
        >
          <font-awesome-icon :icon="['fas', 'trash']" />Reset
        </Button>
      </span>
    </template>
  </Card>
  <Card>
    <template #title>
      Training
    </template>
    <template #content>
      <ExerciseCard
        v-for="exercise in generatedTraining"
        :key="exercise.name"
        class="exercise-card"
        :exercise="exercise"
      />
    </template>
  </Card>
  <InfoComponent
    title="Hoe werkt het?"
  >
    De training structuur die wij aanhouden begint met een warming-up met daarna oefeningen en
    als laatste een partijtje. De categoriën kunnen gebruikt worden om een training
    specifieker te maken. De sliders zijn om het aantal minuten van de
    oefeningen te beïnvloeden.
  </InfoComponent>
</template>

<script setup lang="ts">
import ExerciseCard from '@/components/ExerciseComponent.vue'
import InfoComponent from '@/components/InfoComponent.vue'
import { Category } from '@/models/Category'
import { Exercise } from '@/models/Exercise'
import Button from 'primevue/button'
import Card from 'primevue/card'
import MultiSelect from 'primevue/multiselect'
import Slider from 'primevue/slider'
import { ref, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

let selectedCategories = ref([] as Category[])
let trainingMinutes = ref(60)
let trainingSplits = ref([15, 45])
let generatedTraining = ref([] as Exercise[])

watch(trainingMinutes, (newMinutes: number) => {
  if(trainingSplits.value[1] > newMinutes) {
    trainingSplits.value[1] = newMinutes
    if(trainingSplits.value[0] >= trainingSplits.value[1]) {
      trainingSplits.value[0] = trainingSplits.value[1] - 5
    }
  }
})

function generateTraining() {
  console.log('generating training')
  const exercises = [] as Exercise[]
  const warmUpMinutes = trainingSplits.value[0]
  const exerciseMinutes = trainingSplits.value[1] - trainingSplits.value[0]
  const vsExerciseMinutes = trainingMinutes.value - trainingSplits.value[1]
  const warmUpExercises = generateWarmUp(warmUpMinutes)
  exercises.push(warmUpExercises)
  const exerciseNormal = generateNormalExercise(exerciseMinutes)
  exercises.push(exerciseNormal)
  const vsExercise: Exercise = generateVSExercise(vsExerciseMinutes)
  exercises.push(vsExercise)
  console.log('Training', exercises)
}

function generateWarmUp(minutes: number): Exercise {
  console.log(`generating warmup with ${minutes}`)
  const warmupExercises = store.state.exercises.filter((ex: Exercise) =>
    ex.categories.includes('warm-up')
  )
  return randomExercise(warmupExercises)
}
function generateNormalExercise(minutes: number): Exercise {
  console.log(`generating normal exercises with ${minutes}`)
  // selectedCategories
  const warmupExercises = store.state.exercises.filter((ex: Exercise) =>
    ex.categories.includes('warm-up')
  )
  return randomExercise(warmupExercises)
} 

function generateVSExercise(minutes: number): Exercise {
  console.log(`generating VS exercises with ${minutes}`)
  const vsExercises = store.state.exercises.filter((ex: Exercise) =>
    ex.categories.includes('vs-all')
  )
  return randomExercise(vsExercises)
}

function randomExercise(array: Array<Exercise>): Exercise {
  return array[randomRange(0, array.length)]
}
function random(): number {
  const int = window.crypto.getRandomValues(new Uint32Array(1))[0]
  return int / 2 ** 32
}
function randomRange(min: number, max: number): number {
  const range = max - min
  return Math.floor(random() * range + min)
}
function resetFeatures() {
  selectedCategories.value = []
  trainingMinutes.value = 60
  trainingSplits.value = [15, 45]
}

</script>

<style lang="scss">
.training-generator {
  margin-top: 25px;

  .help {
    cursor: pointer;
  }

  .category-select {
    width: 100%;
  }

  .actions {
    svg {
      margin-right: 10px;
    }
  }
}
</style>
