<template>
  <Card class="exercise-card">
    <template #title>
      {{ props.exercise.name }}
    </template>
    <template #subtitle>
      <div class="categories">
        <div
          v-for="category in getCategories()"
          :key="category.order"
          class="category"
          :style="'color: ' + category.color + ';'"
        >
          <font-awesome-icon :icon="['fas', category.icon]" />
          {{ category.name }}
        </div>
      </div>
    </template>
    <template #content>
      {{ props.exercise.description }}
    </template>
  </Card>
</template>

<script setup lang="ts">
  import Card from 'primevue/card';
import { defineProps } from 'vue';
import { useStore } from 'vuex';
import Category from '../models/Category';

  const store = useStore()

  const props = defineProps({
    exercise: {
      type: Object,
      required: true,
    },
  })

  function getCategories() {
    return props.exercise.categories.map((c: Category) => {
      return store.getters.getCategoryById(c.id)
    })
  }
</script>

<style scoped lang="scss">
  .exercise-card {
    .categories {
      display: flex;
      .category {
        margin-right: 15px;
      }
    }
  }
</style>
