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

<script>
import { defineComponent } from 'vue'
import Card from 'primevue/card'
import mixins from '../mixins'

export default defineComponent({
  name: 'Exercises',
  mixins: [mixins],
  components: {
    Card
  },
  data () {
    return {
      exercises: [
        {
          id: 'qwop',
          categories: ['loop-oefening', 'warming-up'],
          name: 'Qwop',
          description:
            'Het hele team loopt op goed tempo om het veld. Als de trainer 1 roept doen alle spelers een spring, 2 een kikkerspring, 3 is omdraaien en 4 is een klein sprintje trekken',
          people_needed: 'Hele team',
          switch_when: '',
          exercise_finished_when: '',
          time_estimate: '3-5',
          repeat_times_generate: '',
          score_generate: ''
        },
        {
          id: 'ratten_raven',
          categories: ['loop-oefening', 'warming-up', 'vs-oefening'],
          name: 'Ratten en raven',
          description:
            'Begin met de spelers tegenover elkaar in het midden van het veld. Elke kant krijgt iets toegewezen (ratten of raven) De trainer roept ratten of raven, die persoon moet dan achter dan andere persoon aan rennen. De andere persoon moet dan achter de veilige lijn komen.',
          people_needed: '2',
          switch_when: '',
          exercise_finished_when: '',
          time_estimate: '3-7',
          repeat_times_generate: '5-8',
          score_generate: ''
        },
        {
          id: 'doorloopbal_normaal',
          categories: ['loop-oefening', 'warming-up', 'vs-oefening'],
          name: 'Reguliere doorloopballen',
          description:
            'Een reguliere doorloopbal nemen, voor repetitie en warming-up oefening',
          people_needed: '2-3',
          switch_when: 'Wissel per beurt achter elkaar door',
          exercise_finished_when: '{score} scoren',
          time_estimate: '3-7',
          repeat_times_generate: '1',
          score_generate: '10-30'
        }
      ]
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

  .exercise {
    margin-bottom: 25px;

    &:nth-child(even) {
      background-color: red;
    }
  }
}
</style>
