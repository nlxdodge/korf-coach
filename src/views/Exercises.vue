<template>
  <div class="exercises">
    <h1>Alle oefeningen</h1>
    <p>
      In dit overzicht zijn alle bedachte oefeningen nog een keer terug te
      lezen. Mocht je een oefening weten die er niet tussen staat? Neem dan
      contact op via het menu bij info.
    </p>
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
    <div v-for="exercise in exercises" :key="exercise.name">
      <ExerciseCard v-if="hasCategory(exercise)" :exercise="exercise"></ExerciseCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MultiSelect from 'primevue/multiselect'
import { mapState } from 'vuex'
import { Exercise } from '@/models/Exercise'
import { Category } from '@/models/Category'
import ExerciseCard from '@/components/ExerciseCard.vue'

export default defineComponent({
  name: 'Exercises',
  components: {
    MultiSelect,
    ExerciseCard
  },
  data () {
    return {
      selectedCategories: [] as Category[]
    }
  },
  computed: mapState({
    exercises: 'exercises',
    categories: 'categories'
  }),
  methods: {
    hasCategory (exercise: Exercise) {
      if (this.selectedCategories.length === 0) {
        return true
      }
      return exercise.categories.find(category => {
        return this.selectedCategories.find(x => {
          return x.value === category
        })
      })
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

  p {
    color: #fff;
  }

  .category-select {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
