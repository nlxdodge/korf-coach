<template>
  <div class="trainings-view">
    <div class="flex-center">
      <Card>
        <template #title>
          <div class="align-center">Alle jouw gemaakte trainingen</div>
        </template>
        <template #content>
          In dit overzicht zijn alle
          {{ storeRef.trainings.value.length > 0 ? storeRef.trainings.value.length : '' }}
          trainingen te zien die je ooit gemaakt hebt met Korf Coach.
        </template>
      </Card>
    </div>
    <div v-for="training in storeRef.trainings.value" :key="training.id" class="training-card">
      <Card>
        <template #title>
          <div class="align-center">{{ training.name }}</div>
        </template>
        <template #content>
          <ol class="training-list">
            <li class="exerice-row" v-for="exercise in training.exercises" :key="exercise.id">
              <p>{{ exercise.name }}</p>
              <Button class="p-button-lg">
                <font-awesome-icon :icon="['fab', 'github']" />Bekijk opdracht
              </Button>
            </li>
          </ol>
        </template>
        <template #footer>
          <div class="actions flex-center">
            <Button class="p-button-lg">
              <font-awesome-icon :icon="['fab', 'github']" />Bijwerken
            </Button>
            <Button class="p-button-lg" @click="store.deleteTraining(training.id)">
              <font-awesome-icon :icon="['fa', 'trash']" />Verwijderen
            </Button>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { globalStore } from '../store/GlobalStore'
import Card from 'primevue/card'
import Button from 'primevue/button'
import { storeToRefs } from 'pinia'

const store = globalStore()
const storeRef = storeToRefs(store)
// sort by date
if(store.trainings != undefined) {
  console.log("WOLLA", store.trainings)
  store.saveTrainings(store.trainings.sort((i1, i2) => i1.date <= i2.date ? 1 : -1))
}

</script>

<style lang="scss">
.training-card {
  margin-bottom: 10px;

  .training-list {
    display: flex;
    flex-wrap: wrap;
    gap: 45px;

    .exerice-row {
      flex: 1 1 0px;
    }
  }

  .actions {
    gap: 25px;

    Button {
      flex-grow: 1;
      gap: 10px;
      align-items: center;
      border-radius: $border-radius;
      justify-content: center;
    }
  }
}
</style>
