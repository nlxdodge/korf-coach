<template>
  <div class="generator">
    <h1>Maak Training</h1>
    <Generator />
  </div>
</template>

<script lang="ts">
import Generator from '@/components/GeneratorComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GeneratorView',
  components: {
    Generator
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
