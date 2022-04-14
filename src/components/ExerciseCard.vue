<template>
  <Card class="exercise-card">
    <template #title>{{ exercise.name }}</template>
    <template #subtitle>
      <div class="categories">
        <div class="category" v-for="category in getCategories()" :key="category.order">
          <font-awesome-icon :icon="['fas', category.icon]" />
          {{ category.label }}
        </div>
      </div>
    </template>
    <template #content>{{ exercise.description }}</template>
  </Card>
</template>

<script lang="ts">
import { Category } from '@/models/Category'
import Card from 'primevue/card'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExerciseCard',
  components: {
    Card
  },
  props: {
    exercise: {
      type: Object,
      required: true
    }
  },
  methods: {
    getCategories (): Category[] {
      return this.exercise.categories.map((category: string) => {
        return this.$store.getters.getCategoryByValue(category)
      })
    }
  }
})
</script>

<style scoped lang="scss">
.exercise-card {
  .categories {
    display: flex;
    @media screen and (min-width: 676px) {
      display: block;
    }
    .category {
      margin-right: 15px;
    }
  }
}
</style>
