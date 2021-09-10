<template>
  <div class="exercises">
    <h1>Alle oefeningen</h1>
    <Card class="exercise-filter">
      <template #content>
        In dit overzicht zijn alle oefeningen nog een keer terug te lezen. Heb
        jij ook een idee voor een oefening? Neem dan contact op bij Info in het
        menu.
      </template>
      <template #footer>
        <MultiSelect
          class="category-select"
          v-model="selectedCategories"
          :options="categories"
          optionLabel="label"
          placeholder="Filter op Categorie"
          scrollHeight="250px"
          display="chip"
          :showToggleAll="false"
        />
      </template>
    </Card>

    <div class="exercises-grid">
      <ExerciseCard
        class="exercise-card"
        v-for="exercise in filterdExercises"
        :key="exercise.name"
        :exercise="exercise"
      ></ExerciseCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MultiSelect from 'primevue/multiselect'
import Card from 'primevue/card'
import ExerciseCard from '@/components/ExerciseCard.vue'
import { mapState } from 'vuex'
import { Exercise } from '@/models/Exercise'
import { Category } from '@/models/Category'

export default defineComponent({
  name: 'Exercises',
  components: {
    MultiSelect,
    ExerciseCard,
    Card
  },
  data () {
    return {
      selectedCategories: [] as Category[]
    }
  },
  computed: {
    ...mapState({
      categories: 'categories',
      exercises: 'exercises'
    }),
    filterdExercises: function (state) {
      return state.exercises.filter((exercise: Exercise) =>
        this.hasCategory(exercise)
      )
    }
  },
  methods: {
    hasCategory (exercise: Exercise) {
      if (this.selectedCategories.length === 0) {
        return true
      }
      let returnValue = true
      this.selectedCategories.find(selected => {
        if (!exercise.categories.includes(selected.value)) {
          returnValue = false
        }
      })
      return returnValue
    }
  }
})
</script>

<style lang="scss">
.exercises {
  h1 {
    text-align: center;
    color: #fff;
  }

  .exercise-filter {
    margin-bottom: 25px;
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
    @media screen and (min-width: 1440px) {
      grid-template-columns: repeat(6, 1fr);
    }
  }
}
</style>
