<template>
  <div class="exercises">
    <h1>Alle oefeningen</h1>
    <p>
      Dit zijn alle oefenningen die momenteel in de app zitten, suggesties
      kunnen worden doorgespeeld naar Gerben Veenhof.
    </p>
    <div v-for="exercise in exercises" :key="exercise.name">
      <Card class="exercise">
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
import { mapState } from 'vuex'

export default defineComponent({
  name: 'Exercises',
  components: {
    Card
  },
  computed: mapState({
    exercises: 'exercises'
  })
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

  .exercise {
    margin-bottom: 25px;

    &:nth-child(even) {
      background-color: red;
    }
  }
}
</style>
