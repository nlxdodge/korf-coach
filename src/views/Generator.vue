<template>
  <div class="generator">
    <h1>Maak Training</h1>
    <Generator/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Generator from '@/components/Generator.vue'

export default defineComponent({
  name: 'generator',
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
