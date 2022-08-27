<template>
  <div class="exercises">
    <h1>Alle oefeningen</h1>
    <div class="exercise-filter">
      <Card>
        <template #content>
          In dit overzicht zijn alle {{ store.state.exercises.length }} oefeningen nog een keer terug te lezen. Heb
          jij ook een idee voor een oefening? Neem dan contact op bij Info in het
          menu.
        </template>
        <template #footer>
          <MultiSelect
            v-model="selectedCategories"
            class="category-select"
            :options="store.state.categories"
            option-label="label"
            placeholder="Filter op Categorie"
            scroll-height="250px"
            display="chip"
            :show-toggle-all="false"
          />
        </template>
      </Card>
    </div>

    <div class="exercises-grid">
      <ExerciseCard
        v-for="exercise in filterdExercises"
        :key="exercise.name"
        class="exercise-card"
        :exercise="exercise"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ExerciseCard from '@/components/ExerciseComponent.vue'
import { Category } from '@/models/Category'
import { Exercise } from '@/models/Exercise'
import Card from 'primevue/card'
import MultiSelect from 'primevue/multiselect'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
let selectedCategories = ref([] as Category[])

let filterdExercises = computed(() => {
  return store.state.exercises.filter((exercise: Exercise) =>
    hasCategory(exercise)
  )
})

function hasCategory (exercise: Exercise) {
  if (selectedCategories.value.length === 0) {
    return true
  }
  return !(selectedCategories.value.find((selected : Category) => !exercise.categories.includes(selected.value)))
}

</script>

<style lang="scss">
.exercises {
  h1 {
    text-align: center;
    color: #fff;
  }

  .exercise-filter {
    display: flex;
    justify-content: center;

    .p-card {
      max-width: 600px;
      margin-bottom: 25px;
    }
  }

  .category-select {
    width: 100%;
    margin-bottom: 20px;
  }

  .exercises-grid {
    display: grid;
    gap: 15px;

    @media screen and (min-width: 676px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1080px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (min-width: 2160px) {
      grid-template-columns: repeat(6, 1fr);
    }
  }
}
</style>
