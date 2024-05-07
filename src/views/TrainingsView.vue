<template>
  <div class="trainings-view">
    <div class="flex-center">
      <h1>Trainings:</h1>
      <div v-for="training in trainings" :key="training.id" class="training">{ training.name }</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { globalStore } from '@/store/GlobalStore'
import { ref } from 'vue'

const store = globalStore()
const trainings = ref(store.trainings)
</script>
@/store/GlobalStore
