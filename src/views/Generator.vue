<template>
  <div class="generator">
    <h1>Maak Training</h1>
    <TrainingGenerator/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TrainingGenerator from '@/components/TrainingGenerator.vue'

export default defineComponent({
  name: 'generator',
  components: {
    TrainingGenerator
  }
})
</script>

<style lang="scss">
.generator {
  h1 {
    text-align: center;
    color: #fff;
  }
}
</style>
