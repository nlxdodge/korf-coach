<template>
  <div class="info-component">
    <FontAwesomeIcon 
      :icon="['fas', 'question-circle']"
      @click="show.value = !show.value"
    />
    <Dialog 
      v-model:visible="show.value"
      position="bottom"
      :closable="false"
    >
      <template #header>
        {{ props.title }}
      </template>
      <slot />
      <template #footer>
        <Button 
          label="Sluiten" 
          @click="show.value = !show.value"
        />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const show = ref(false)
const props = defineProps({
  title : { 
    type: String,
    default: ""
  }
})
</script>
<style scoped lang="scss">
.info-component {
  svg:hover {
    cursor: pointer;
  }
}
</style>