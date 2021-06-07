<template>
  <Card class="training-generator">
    <template #title>
      Training Samenstelling
    </template>
    <template #content>
      <div class="p-d-flex">
        <MultiSelect
          class="category-select"
          v-model="selectedCategories"
          :options="categories"
          optionLabel="label"
          placeholder="Aleen Categoriën"
          scrollHeight="250px"
          display="chip"
          :showToggleAll="false"
        />
      </div>
    </template>
    <template #footer>
      <span class="actions p-buttonset">
        <Button @click="generateTraining()">
          <font-awesome-icon :icon="['fas', 'cogs']" />Maak Training
        </Button>
        <Button class="p-button-danger" @click="resetFeatures()">
          <font-awesome-icon :icon="['fas', 'trash']" />Reset
        </Button>
      </span>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
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
      selectedCategories: this.categories
    }
  },
  computed: mapState({
    exercises: 'exercises',
    categories: 'categories'
  }),
  methods: {
    generateTraining () {
      console.log('generating training')
    },
    resetFeatures () {
      console.log('reset features')
    }
  }
})
</script>

<style lang="scss">
.training-generator {
  margin-top: 25px;

  .category-select {
    width: 100%;
  }

  .actions {
    svg {
      margin-right: 10px;
    }
  }
}
</style>
