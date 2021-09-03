<template>
  <Card class="exercise-card">
    <template #title>
      {{ exercise.name }}
    </template>
    <template #subtitle>
      <div class="categories">
        <div
          class="category"
          v-for="category in getCategories()"
          :key="category.order"
        >
          <font-awesome-icon :icon="['fas', category.icon]" />
          {{ category.label }}
        </div>
      </div>
    </template>
    <template #content>
      {{ exercise.description }}
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from 'primevue/card'

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
    getCategories () {
      return this.exercise.categories.map((category: string) => {
        return this.$store.getters.getCategoryByValue(category)
      })
    }
  }
})
</script>

<style lang="scss">
.exercise-card {
  margin-bottom: 25px;

  .categories {
    display: flex;

    .category {
      margin-right: 15px;
    }
  }
}
</style>
