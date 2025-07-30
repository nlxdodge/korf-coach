<template>
  <div class="info-component">
    <FontAwesomeIcon :icon="['fas', 'question-circle']" @click="show = !show" />
    <Dialog v-model:visible="show" position="bottom" :closable="false">
      <template #header>
        {{ props.title }}
      </template>
      <slot />
      <template #footer>
        <Button label="Sluiten" @click="show = !show" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { ref } from 'vue';

const show = ref(false)
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>
<style scoped lang="scss">
.info-component {
  display: inline-block;

  svg:hover {
    cursor: pointer;
  }
}
</style>
