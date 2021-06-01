<template>
  <div class="home">
    <h1>Maak Training</h1>
    <TrainingGenerator/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TrainingGenerator from '../components/TrainingGenerator.vue'

export default defineComponent({
  name: 'Home',
  components: {
    TrainingGenerator
  }
})
</script>

<style lang="scss">
.home {
  h1 {
    text-align: center;
    color: #fff;
  }
}
</style>
