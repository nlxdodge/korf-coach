<template>
  <Card class="training-generator">
    <template #title>
      Training Samenstelling
    </template>
    <template #content>
      <div class="p-d-flex">
        <multi-select
          v-model="selectedCategories"
          :options="categories"
          optionLabel="label"
          placeholder="Select categoriën"
        />
      </div>
    </template>
    <template #footer>
      <Button
        icon="pi pi-play"
        label="Maak training"
        @click="generateTraining()"
      />
    </template>
  </Card>
</template>

<script>
import { defineComponent } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import MultiSelect from 'primevue/multiselect'

export default defineComponent({
  name: 'TrainingGenerator',
  components: {
    Card,
    Button,
    MultiSelect
  },
  data () {
    return {
      selectedCategory: null,
      categories: [
        { label: 'warm-up', value: 'Warming Up' },
        { label: 'shoot', value: 'Schiet Oefening' },
        { label: 'run', value: 'Loop Oefening' },
        { label: 'vs', value: 'VS Oefening' },
        { label: 'vs-all', value: 'Partijtje' }
      ]
    }
  },
  methods: {
    generateTraining () {
      console.log('generating training')
    }
  }
})
</script>

<style lang="scss">
.training-generator {
  margin-top: 25px;
}
</style>
