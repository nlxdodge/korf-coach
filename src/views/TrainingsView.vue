<template>
  <div class="trainings-view">
    <div class="flex-center">
      <Card>
        <template #title>
          <div class="align-center">Alle jouw gemaakte trainingen</div>
        </template>
        <template #content>
          In dit overzicht zijn alle {{ trainings.length > 0 ? trainings.length : '' }} trainingen
          in te zien die je ooit gemaakt hebt.
        </template>
      </Card>
      <div v-for="training in trainings" :key="training.id" class="training">
        <Card>
          <template #title>
            <div class="align-center">{{ training.name }}</div>
          </template>
          <template #content> ALLE OPDRACHTEN </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { globalStore } from '@/store/GlobalStore';
import Card from 'primevue/card';
import { ref } from 'vue';

const store = globalStore()
const trainings = ref(store.trainings)
</script>
