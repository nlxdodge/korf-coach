<template>
  <Card class="exercise-card">
    <template #title>
      {{ exercise.name }}
    </template>
    <template #subtitle>
      {{ mapToCategoryNames(exercise.categories) }}
    </template>
    <template #content>
      {{ exercise.description }}
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from 'primevue/card'
import { Category } from '@/models/Category'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'ExerciseCard',
  components: {
    Card
  },
  computed: mapState({
    categories: 'categories'
  }),
  props: {
    exercise: Object
  },
  methods: {
    mapToCategoryNames (parseCategories: string[]) {
      const foundCategories: string[] = []
      parseCategories.forEach(category => {
        const foundCategory: Category = this.categories.find((x: Category) => {
          return x.value === category
        })
        if (foundCategory != null) {
          foundCategories.push(foundCategory.label)
        } else {
          console.log('Non existing category:', category)
        }
      })
      return foundCategories.join(' | ')
    }
  }
})
</script>

<style lang="scss">
.exercise-card {
  margin-bottom: 25px;
}
</style>
