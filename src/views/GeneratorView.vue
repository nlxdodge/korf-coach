<template>
  <div class="generator">
    <h1>Korfbal Trainer</h1>
    <Generator />
  </div>
</template>

<script setup lang="ts">
  import Generator from '@/components/GeneratorComponent.vue'
</script>

<style lang="scss">
  .generator {
    h1 {
      text-align: center;
      color: #fff;
    }
  }
</style>