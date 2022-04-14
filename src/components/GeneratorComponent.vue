<template>
  <Card class="training-generator">
    <template #title>
      Training Samenstelling
      <font-awesome-icon
        class="help"
        @click="displayHelp = true"
        :icon="['fas', 'question-circle']"
      />
    </template>
    <template #content>
      <div class="p-d-flex">
        <span class="p-float-label">
          <MultiSelect
            id="category-select"
            class="category-select"
            v-model="selectedCategories"
            :options="categories"
            optionLabel="label"
            scrollHeight="250px"
            display="chip"
          />
          <label for="category-select">Selecteer categoriën</label>
        </span>

        <p>Lengte training (min): {{ trainingMinutes }}</p>
        <Slider v-model="trainingMinutes" :step="15" :min="15" :max="120" />
        <p>
          Warm-up tot {{ trainingSplits[0] }} min. Oefeningen tot
          {{ trainingSplits[1] }} min.
        </p>
        <Slider v-model="trainingSplits" :range="true" :step="5" :max="trainingMinutes" />
      </div>
    </template>
    <template #footer>
      <span class="actions p-buttonset">
        <Button @click="generateTraining()">
          <font-awesome-icon :icon="['fas', 'cogs']" />Maak Training
        </Button>
        <Button class="p-button-danger" @click="resetFeatures()">
          <font-awesome-icon :icon="['fas', 'trash']" />Reset
        </Button>
      </span>
    </template>
  </Card>
  <Dialog v-model:visible="displayHelp" position="bottom" :closable="false">
    <template #header>Generator uitleg</template>
    De trainings template die wij altijd aanhouden is een warm-up, oefeningen en
    een partijtje. De categoriën kunnen gebruikt worden om een training
    specifieker te maken. De sliders zijn om het aantal minuten van de
    oefeningen te beïnvloeden.
    <template
      #footer
    >
      <Button label="Sluiten" @click="displayHelp = false" />
    </template>
  </Dialog>
</template>

<script lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'
import Dialog from 'primevue/dialog'
import MultiSelect from 'primevue/multiselect'
import Slider from 'primevue/slider'
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import { Exercise } from '../models/Exercise'

export default defineComponent({
  name: 'GeneratorComponent',
  components: {
    Card,
    Button,
    MultiSelect,
    Slider,
    Dialog
  },
  data () {
    return {
      displayHelp: false,
      selectedCategories: [],
      trainingMinutes: 60,
      trainingSplits: [15, 45],
      generatedTraining: []
    }
  },
  computed: mapState({
    exercises: 'exercises',
    categories: 'categories'
  }),
  methods: {
    generateTraining () {
      console.log('generating training')
      const exercises = [] as Exercise[]
      const warmUpMinutes = this.trainingSplits[0]
      const exerciseMinutes = this.trainingSplits[1] - this.trainingSplits[0]
      const vsExerciseMinutes = this.trainingMinutes - this.trainingSplits[1]
      const warmUpExercises = this.generateWarmUp(warmUpMinutes)
      exercises.push(warmUpExercises)
      const exerciseNormal = this.generateNormalExercise(exerciseMinutes)
      exercises.push(exerciseNormal)
      const vsExercise: Exercise = this.generateVSExercise()
      exercises.push(vsExercise)
      console.log('Training', exercises)
    },
    generateWarmUp (minutes: number): Exercise {
      console.log(`generating warmup with ${minutes}`)
      const warmupExercises = this.exercises.filter((ex: Exercise) =>
        ex.categories.includes('warm-up')
      )
      return this.randomExercise(warmupExercises)
    },
    generateNormalExercise (minutes: number): Exercise {
      console.log(`generating normal exercises with ${minutes}`)
      // selectedCategories
      const warmupExercises = this.exercises.filter((ex: Exercise) =>
        ex.categories.includes('warm-up')
      )
      return this.randomExercise(warmupExercises)
    },
    generateVSExercise (): Exercise {
      const vsExercises = this.exercises.filter((ex: Exercise) =>
        ex.categories.includes('vs-all')
      )
      return this.randomExercise(vsExercises)
    },
    randomExercise (array: Array<Exercise>): Exercise {
      return array[this.randomRange(0, array.length)]
    },
    random (): number {
      const int = window.crypto.getRandomValues(new Uint32Array(1))[0]
      return int / 2 ** 32
    },
    randomRange (min: number, max: number): number {
      const range = max - min
      return Math.floor(this.random() * range + min)
    },
    resetFeatures () {
      this.selectedCategories = []
      this.trainingMinutes = 60
      this.trainingSplits = [15, 45]
    }
  }
})
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
