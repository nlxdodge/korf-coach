<template>
  <div class="exercises">
    <h1>Alle oefeningen</h1>
    <p>
      Dit zijn alle oefenningen die momenteel in de app zitten, suggesties
      kunnen worden doorgespeeld naar Gerben Veenhof.
    </p>
    <MultiSelect
      class="category-select"
      v-model="selectedCategories"
      :options="categories"
      optionLabel="label"
      placeholder="Filter op Categorie"
      display="chip"
      :showToggleAll="false"
    />
    <div v-for="exercise in exercises" :key="exercise.name">
      <Card v-if="hasCategory(exercise)" class="exercise">
        <template #title>
          {{ exercise.name }}
        </template>
        <template #subtitle>
          {{ exercise.categories }}
        </template>
        <template #content>
          {{ exercise.description }}
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from 'primevue/card'
import MultiSelect from 'primevue/multiselect'
import { mapState } from 'vuex'
import { Exercise } from '../models/Exersice'
import { Category } from '@/models/Category'

export default defineComponent({
  name: 'Exercises',
  components: {
    Card,
    MultiSelect
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

  .exercise {
    margin-bottom: 25px;

    &:nth-child(even) {
      background-color: red;
    }
  }
}
</style>
