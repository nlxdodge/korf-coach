<template>
  <div class="generator">
    <h1>Korf Coach</h1>
    <Generator />
  </div>
</template>

<script setup lang="ts">
  import Generator from '@/components/GeneratorComponent.vue'
</script>

<style scoped lang="scss">
  .generator {
    h1 {
      text-align: center;
      color: $secondary-color;
    }
  }
</style>
