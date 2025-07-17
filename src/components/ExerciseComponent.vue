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
import { globalStore } from '@/store/GlobalStore';
import Card from 'primevue/card';
import Category from '../models/Category';

  const store = globalStore()

  const props = defineProps({
    exercise: {
      type: Object,
      required: true,
    },
  })

  function getCategories(): Category[] {
    return props.exercise.categories.map((c: Category) => {
      return store.getCategoryById(c.id)
    })
  }
</script>

<style scoped lang="scss">
  .exercise-card {
    .categories {
      display: flex;
      flex-wrap: wrap;
      .category {
        text-align: center;
        padding: 5px;
      }
    }
  }
</style>@/store/GlobalStore
